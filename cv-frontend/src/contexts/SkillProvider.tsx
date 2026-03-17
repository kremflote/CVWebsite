import { createContext, useEffect, useRef, useState, type FC } from "react";
import type { IProviderProps } from "../interfaces/components/IProviderProps";
import type { ISkill } from "../interfaces/ISkill";
import type { ISkillContext } from "../interfaces/contexts/ISkillContext";
import { getSkills } from "../services/CvService";
import type { ISkillResponseList } from "../interfaces/IServiceResponses";

export const SkillContext = createContext<ISkillContext | null>(null);

export const SkillProvider: FC<IProviderProps> = ({ children }) => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [skillIsLoading, setSkillIsLoading] = useState<boolean>(false);

  const initError = useRef<string | null>(null);
  const hasInitialized = useRef(false);

  const initializeSkills = async () => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    setSkillIsLoading(true);

    const response: ISkillResponseList = await getSkills();

    if (!response.success) {
      initError.current = response.error ?? "Failed to load skills";
      setSkillIsLoading(false);
      return;
    }

    setSkills(response.data);
    setSkillIsLoading(false);
  };

  useEffect(() => {
    initializeSkills();
  }, []);

  return (
    <SkillContext.Provider
      value={{
        skills,
        skillIsLoading,
        initError: initError.current,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};
