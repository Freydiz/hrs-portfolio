import { createClient } from '@/prismicio';

import { NavBar } from './nav-bar';

const Header: React.FC = async () => {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return (
    <header className='bg-background/75 sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl'>
      <NavBar siteName={settings.data.name ?? undefined} />
    </header>
  );
};

export default Header;
