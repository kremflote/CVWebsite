import { createContext, useEffect, useRef, useState, type FC } from "react";
import type { IProviderProps } from "../interfaces/components/IProviderProps";
import type { IShowcase } from "../interfaces/IShowcase";
import type { IShowcaseContext } from "../interfaces/contexts/IShowcaseContext";
import { getShowcases } from "../services/CvService";
import type { IShowcaseResponseList } from "../interfaces/IServiceResponses";

export const ShowcaseContext = createContext<IShowcaseContext | null>(null);

export const ShowcaseProvider: FC<IProviderProps> = ({ children }) => {
  const [showcases, setShowcases] = useState<IShowcase[]>([]);
  const [showcaseIsLoading, setShowcaseIsLoading] = useState<boolean>(false);

  const initError = useRef<string | null>(null);
  const hasInitialized = useRef(false);

  const initializeShowcases = async () => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    setShowcaseIsLoading(true);

    const response: IShowcaseResponseList = await getShowcases();

    if (!response.success) {
      initError.current = response.error ?? "Failed to load showcases";
      setShowcaseIsLoading(false);
      return;
    }

    setShowcases(response.data);
    setShowcaseIsLoading(false);
  };

  useEffect(() => {
    initializeShowcases();
  }, []);

  return (
    <ShowcaseContext.Provider
      value={{
        showcases,
        showcaseIsLoading,
        initError: initError.current,
      }}
    >
      {children}
    </ShowcaseContext.Provider>
  );
};
