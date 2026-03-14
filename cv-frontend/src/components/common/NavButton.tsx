import { Link } from "react-router-dom";
import { useContext, type FC } from "react";
import type { INavButtonProps } from "../../interfaces/components/INavButtonProps";

const NavButton: FC<INavButtonProps> = ({ destination }) => {
  // Tekst for knapp-tittel basert på destination
  let displayTitle;
  switch (destination) {
    case "/":
      displayTitle = "FRONTPAGE";
      break;
    case "/admin":
      displayTitle = "MANAGE FIGHTERS";
      break;
    case "/finances":
      displayTitle = "SIGN FIGHTERS";
      break;
    case "/venues":
      displayTitle = "SEE VENUES";
      break;
    case "/register":
      displayTitle = "REGISTER NEW FIGHTER";
      break;
  }

  // Styling variabler
  const navClasses = "hidden lg:flex justify-center";
  const linkClasses =
    "bg-[#4C0000] text-white lg:text-xl xl:text-2xl font-bold hover:bg-[#870000] px-4 py-2 rounded w-full lg:max-w-md xl:max-w-xl text-center hover:shadow-md hover:shadow-black/40 hover:scale-[1.05]";

  return (
    <nav className={navClasses}>
      <Link to={destination} className={linkClasses}>
        {displayTitle}
      </Link>
    </nav>
  );
};

export default NavButton;
