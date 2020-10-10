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
    title: 'Manage Attendance',
    icon: {
      icon: 'user-check',
      pack: 'font-awesome',
    },
    children: [
      {
        title: 'Add Attendance',
        link: '/attendance/add',
      },
      {
        title: 'View Attendance',
        link: '/attendance/view',
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
  {
    title: 'Manage Payroll',
    icon: {
      icon: 'cash-register',
      pack: 'font-awesome',
    },
    children: [
      {
        title: 'Manage Salary',
        icon: {
          icon: 'wallet',
          pack: 'font-awesome',
        },
        children: [
          {
            title: 'Add Salary',
            link: '/salary/addsal',
          },
          {
            title: 'View Salary',
            link: '/salary/viewsal',
          },
        ],
      },
      {
        title: 'Manage Adjustments',
        icon: {
          icon: 'money-bill',
          pack: 'font-awesome',
        },
        children: [
          {
            title: 'Add Adjustments',
            link: '/salary/addadj',
          },
          {
            title: 'View Adjustments',
            link: '/salary/viewadj',
          },
        ],
      },
    ],
  },
];
