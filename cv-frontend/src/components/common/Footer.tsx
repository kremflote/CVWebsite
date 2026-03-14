import type { FC } from "react";
import { footer, primaryColor, footerSigature } from "../../styles/styles";

const Footer: FC = () => {
  return (
    <footer className={`${footer} ${primaryColor}`}>
      <div className={footerSigature}>2026 mariuskristensen.no.</div>
    </footer>
  );
};

export default Footer;
