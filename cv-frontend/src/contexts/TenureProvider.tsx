import { createContext, useEffect, useRef, useState, type FC } from "react";
import type { IProviderProps } from "../interfaces/components/IProviderProps";
import type { ITenure } from "../interfaces/ITenure";
import type { ITenureContext } from "../interfaces/contexts/ITenureContext";
import { getTenures } from "../services/CvService";
import type { ITenureResponseList } from "../interfaces/IServiceResponses";

export const TenureContext = createContext<ITenureContext | null>(null);

export const TenureProvider: FC<IProviderProps> = ({ children }) => {
  const [tenures, setTenures] = useState<ITenure[]>([]);
  const [tenureIsLoading, setTenureIsLoading] = useState<boolean>(false);

  const initError = useRef<string | null>(null);
  const hasInitialized = useRef(false);

  const initializeTenures = async () => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    setTenureIsLoading(true);

    const response: ITenureResponseList = await getTenures();

    if (!response.success) {
      initError.current = response.error ?? "Failed to load tenures";
      setTenureIsLoading(false);
      return;
    }

    setTenures(response.data);
    setTenureIsLoading(false);
  };

  useEffect(() => {
    initializeTenures();
  }, []);

  return (
    <TenureContext.Provider
      value={{
        tenures,
        tenureIsLoading,
        initError: initError.current,
      }}
    >
      {children}
    </TenureContext.Provider>
  );
};
