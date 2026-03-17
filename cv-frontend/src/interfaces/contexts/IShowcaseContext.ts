import type { IShowcase } from "../IShowcase";

export interface IShowcaseContext {
  showcases: IShowcase[];
  showcaseIsLoading: boolean;
  initError: string | null;
}
