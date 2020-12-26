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
        title: 'Mark Attendance',
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
        title: 'Add Department',
        link: '/department/add',
      },
      {
        title: 'View Departments',
        link: '/department/view',
      },
    ],
  },
  {
    title: 'Manage Customer',
    icon: {
      icon: 'users',
      pack: 'font-awesome',
    },
    children: [
      {
        title: 'Add Customer',
        link: '/customer/add',
      },
      {
        title: 'View Customers',
        link: '/customer/view',
      },
    ],
  },
  {
    title: 'Manage Orders',
    icon: {
      icon: 'chart-line',
      pack: 'font-awesome',
    },
    children: [
      {
        title: 'Add Order',
        link: '/orders/add',
      },
      {
        title: 'View Orders',
        link: '/orders/view',
      },
    ],
  },
  {
    title: 'Manage Deliveries',
    icon: {
      icon: 'box',
      pack: 'font-awesome',
    },
    children: [
      {
        title: 'Deliveries',
        link: '/delivery/view',
      },
      {
        title: 'Providers',
        link: '/provider/view',
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
  {
    title: 'Manage Documents',
    icon: {
      icon: 'file-alt',
      pack: 'font-awesome',
    },
    children: [
      {
        title: 'Add Document',
        link: '/documents/add',
      },
      {
        title: 'View Documents',
        link: '/documents/view',
      },
    ],
  },
];
