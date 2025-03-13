import { createClient } from "@/prismicio";

import { NavBar } from "./nav-bar/nav-bar";

export const Header: React.FC = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="absolute top-0 z-50 mx-auto w-[100%] max-w-7xl md:sticky">
      <NavBar settings={settings} />
    </header>
  );
};
