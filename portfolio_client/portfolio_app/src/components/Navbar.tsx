import { siteConfig } from "../config/site";
import { useState } from 'react';
import { Stack, Tooltip, UnstyledButton } from '@mantine/core';
import {
    IconHome2 
  } from '@tabler/icons-react';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  href: string;
  onClick?: () => void;
}

const NavbarLink = ({ icon: Icon, label, active, href, onClick }: NavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} 
      className="link" 
      component="a"
      href={href} 
      data-active={active || undefined}>
        <Icon size={22} stroke={1.75} />
      </UnstyledButton>
    </Tooltip>
  );
}

export const Navbar = (page: any) => {
    let activePage = page.page;
    const [active, setActive] = useState(activePage);

    const links = siteConfig.navItems.map((link, index) => (
        <NavbarLink
          {...link}
          href={link.href}
          key={link.label}
          active={index === active}
          onClick={() => setActive(index)}
        />
    ));

    return (
        <>
         <nav className="navbar">
            <div className="navbarMain">
                <Stack justify="center" gap={'sm'}>
                {links}
                </Stack>
            </div>
        </nav>
      </>
    );
}
