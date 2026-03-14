import type { FC } from "react";
import type { IProviderProps } from "../../interfaces/components/IProviderProps";

export const WideLayout: FC<IProviderProps> = ({ children }) => {
  return (
    <section className="max-w-[1600px] mx-auto flex flex-col min-h-screen">
      {/* Setter padding, maksbredde og automargin:

      |---- auto m ----| [ ---- sideinnhold ---- ] |---- auto m ----|
      
      */}
      {children}
    </section>
  );
};
