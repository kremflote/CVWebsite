import type { FC } from "react";
import type { IProviderProps } from "../../interfaces/components/IProviderProps";

export const WideLayout: FC<IProviderProps> = ({ children }) => {
  return (
    <section className="">
      {/* Setter padding, maksbredde og automargin:

      |---- auto m ----| [ ---- sideinnhold ---- ] |---- auto m ----|
      
      */}
      <div className="max-w-[1600px] mx-auto px-6">{children}</div>
    </section>
  );
};
