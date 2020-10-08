import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: {
      icon: 'home',
      pack: 'font-awesome',
    },
    link: '/home',
    home: true,
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Manage Employee',
    icon: {
      icon: 'user',
      pack: 'font-awesome',
    },
    children: [
      {
        title: 'Add Employee',
        link: '/employee/add',
      },
      {
        title: 'View Employees',
        link: '/employee/view',
      },
    ],
  },
  {
    title: 'Manage Department',
    icon: {
      icon: 'building',
      pack: 'font-awesome',
    },
    children: [
      {
        title: 'Add Employee',
        link: '/employee/add',
      },
      {
        title: 'View Employees',
        link: '/employee/view',
      },
    ],
  },
];
