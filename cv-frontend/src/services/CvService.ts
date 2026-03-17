import axios, { type AxiosResponse } from "axios";
import type { ITenure } from "../interfaces/ITenure.ts";
import type { ISkill } from "../interfaces/ISkill";
import type { IShowcase } from "../interfaces/IShowcase";
import type {
  ITenureResponseList,
  ITenureResponseSingle,
  ISkillResponseList,
  ISkillResponseSingle,
  IShowcaseResponseList,
  IShowcaseResponseSingle,
} from "../interfaces/IServiceResponses.ts";

const tenureEndpoint = "http://localhost:5110/api/tenure";
const skillEndpoint = "http://localhost:5110/api/skill";
const showcaseEndpoint = "http://localhost:5110/api/showcase";

// --- TENURE ---

const getTenures = async (): Promise<ITenureResponseList> => {
  try {
    const response = await axios.get<ITenure[]>(tenureEndpoint);
    const validation = validateResponseList(response);

    if (!validation.isValid) {
      return { success: false, data: [], error: validation.error };
    }

    return { success: true, data: response.data };
  } catch (error) {
    console.error("getTenures: Failed to fetch tenures:", error);
    return { success: false, data: [], error: "Error connecting to database" };
  }
};

const getTenureById = async (id: number): Promise<ITenureResponseSingle> => {
  try {
    const response = await axios.get<ITenure>(`${tenureEndpoint}/${id}`);
    const validation = validateResponseSingle(response);

    if (!validation.isValid) {
      return { success: false, data: null, error: validation.error };
    }

    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return {
        success: true,
        data: null,
        error: "No tenure found with that ID.",
      };
    }
    console.error("getTenureById: Failed to fetch tenure:", error);
    return {
      success: false,
      data: null,
      error: "Error connecting to database",
    };
  }
};

// --- SKILL ---

const getSkills = async (): Promise<ISkillResponseList> => {
  try {
    const response = await axios.get<ISkill[]>(skillEndpoint);
    const validation = validateResponseList(response);

    if (!validation.isValid) {
      return { success: false, data: [], error: validation.error };
    }

    return { success: true, data: response.data };
  } catch (error) {
    console.error("getSkills: Failed to fetch skills:", error);
    return { success: false, data: [], error: "Error connecting to database" };
  }
};

const getSkillById = async (id: number): Promise<ISkillResponseSingle> => {
  try {
    const response = await axios.get<ISkill>(`${skillEndpoint}/${id}`);
    const validation = validateResponseSingle(response);

    if (!validation.isValid) {
      return { success: false, data: null, error: validation.error };
    }

    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return {
        success: true,
        data: null,
        error: "No skill found with that ID.",
      };
    }
    console.error("getSkillById: Failed to fetch skill:", error);
    return {
      success: false,
      data: null,
      error: "Error connecting to database",
    };
  }
};

// --- SHOWCASE ---

const getShowcases = async (): Promise<IShowcaseResponseList> => {
  try {
    const response = await axios.get<IShowcase[]>(showcaseEndpoint);
    const validation = validateResponseList(response);

    if (!validation.isValid) {
      return { success: false, data: [], error: validation.error };
    }

    return { success: true, data: response.data };
  } catch (error) {
    console.error("getShowcases: Failed to fetch showcases:", error);
    return { success: false, data: [], error: "Error connecting to database" };
  }
};

const getShowcaseById = async (
  id: number,
): Promise<IShowcaseResponseSingle> => {
  try {
    const response = await axios.get<IShowcase>(`${showcaseEndpoint}/${id}`);
    const validation = validateResponseSingle(response);

    if (!validation.isValid) {
      return { success: false, data: null, error: validation.error };
    }

    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return {
        success: true,
        data: null,
        error: "No showcase found with that ID.",
      };
    }
    console.error("getShowcaseById: Failed to fetch showcase:", error);
    return {
      success: false,
      data: null,
      error: "Error connecting to database",
    };
  }
};

// --- VALIDATION HELPERS ---

const validateResponseList = (
  response: AxiosResponse,
): { isValid: boolean; error?: string } => {
  if (response.status !== 200) {
    return { isValid: false, error: "Failed to fetch from server." };
  }
  if (!response.data || !Array.isArray(response.data)) {
    return {
      isValid: false,
      error: "Invalid data format received from server.",
    };
  }
  if (response.data.length === 0) {
    return { isValid: true, error: "No data available in the server." };
  }
  return { isValid: true };
};

const validateResponseSingle = (
  response: AxiosResponse,
): { isValid: boolean; error?: string } => {
  if (response.status !== 200) {
    return { isValid: false, error: "Failed to fetch from server." };
  }
  if (!response.data) {
    return { isValid: false, error: "No data available in the server." };
  }
  return { isValid: true };
};

export {
  getTenures,
  getTenureById,
  getSkills,
  getSkillById,
  getShowcases,
  getShowcaseById,
};
