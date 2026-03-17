import type { ISkill } from "../ISkill";

export interface ISkillContext {
  skills: ISkill[];
  skillIsLoading: boolean;
  initError: string | null;
}
