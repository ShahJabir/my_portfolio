import { FaHome } from 'react-icons/fa';

import Hero from './../components/Hero';
import { FloatingNav } from './../components/ui/FloatingNav';

export default function Home() {
  return (
    <>
      <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
        <FloatingNav
          navItems={[{ name: 'Home', link: '/', icon: <FaHome /> }]}
        />
        <Hero />
      </main>
    </>
  );
}
