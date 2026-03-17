import type { ITenure } from "../ITenure";

export interface ITenureContext {
  tenures: ITenure[];
  tenureIsLoading: boolean;
  initError: string | null;
}
