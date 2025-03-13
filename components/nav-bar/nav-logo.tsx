import { Content } from "@prismicio/client";
import Link from "next/link";

interface Props {
  name: Content.SettingsDocument["data"]["name"];
}

export const NavLogo: React.FC<Props> = (props) => {
  const { name } = props;

  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter hover:text-[var(--primary)]"
    >
      {name}
    </Link>
  );
};
