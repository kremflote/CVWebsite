import type { ITenure } from "./ITenure";
import type { ISkill } from "./ISkill";
import type { IShowcase } from "./IShowcase";

// Tenure
export interface ITenureResponseList {
  success: boolean;
  data: ITenure[];
  error?: string;
}

export interface ITenureResponseSingle {
  success: boolean;
  data: ITenure | null;
  error?: string;
}

// Skill
export interface ISkillResponseList {
  success: boolean;
  data: ISkill[];
  error?: string;
}

export interface ISkillResponseSingle {
  success: boolean;
  data: ISkill | null;
  error?: string;
}

// Showcase
export interface IShowcaseResponseList {
  success: boolean;
  data: IShowcase[];
  error?: string;
}

export interface IShowcaseResponseSingle {
  success: boolean;
  data: IShowcase | null;
  error?: string;
}
