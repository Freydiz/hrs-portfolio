import { createClient } from "@/prismicio";

import { NavBar } from "./nav-bar/nav-bar";

export const Header: React.FC = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="border-primary bg-primary/80 sticky top-0 z-50 w-full border-b">
      <NavBar settings={settings} />
    </header>
  );
};
