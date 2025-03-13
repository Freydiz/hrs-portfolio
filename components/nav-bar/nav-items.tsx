import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

interface Props {
  navItems: Content.SettingsDocument["data"]["nav_item"];
  isMobile?: boolean;
}

export const NavItems: React.FC<Props> = (props) => {
  const { navItems, isMobile = false } = props;

  return (
    <ul
      className={`flex ${isMobile ? "flex-col space-y-2" : "items-center space-x-4 md:space-x-6"}`}
    >
      {navItems.map(({ link, label }, index) => (
        <li key={index}>
          <PrismicNextLink
            field={link}
            className={`${isMobile ? "block" : ""} text-slate-700 hover:text-slate-900`}
          >
            {label}
          </PrismicNextLink>
        </li>
      ))}
    </ul>
  );
};
