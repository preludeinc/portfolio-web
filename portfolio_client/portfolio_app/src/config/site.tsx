import {
    IconHome2,
    IconDeviceDesktopCode,
    IconDeviceGamepad2,
    IconCpu, 
  } from '@tabler/icons-react';

export const siteConfig = {
    name: "JG's Portfolio",
    WEB_CATEGORY: 1,
    GAME_CATEGORY: 2,
    ENG_CATEGORY: 3,
    PORT: 8000,

    navItems: [
        {
            label: "Home",
            href: "/",
            icon: IconHome2,
        },
        {
            label: "Websites",
            href: "/websites",
            icon: IconDeviceDesktopCode,
        },
        {
            label: "Games",
            href: "/games",
            icon: IconDeviceGamepad2
        },
        {
            label: "Engineering",
            href: "/engineering",
            icon: IconCpu
        }
    ]
}
