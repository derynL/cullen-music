import { DarkThemeToggle, Navbar } from 'flowbite-react';
import { FC } from 'react';
// import { useSidebarContext } from '../context/SidebarContext';

const HeaderCM: FC<Record<string, never>> = function () {
  return (
    <header className='top-3 mx-3 my-4'>
      <Navbar fluid>
        <Navbar.Collapse>
          <Navbar.Link href='/' active>
            Home
          </Navbar.Link>
          <Navbar.Link href='/'>About</Navbar.Link>
          <Navbar.Link href='/'>Listen</Navbar.Link>
          <Navbar.Link href='/'>Contact</Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
      </Navbar>
    </header>
  );
};

export default HeaderCM;
