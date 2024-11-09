import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '74d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '971'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '9da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '020'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e65'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '615'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e5a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f03'),
    routes: [
      {
        path: '/docs/CopyrightNotice',
        component: ComponentCreator('/docs/CopyrightNotice', 'efb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/help',
        component: ComponentCreator('/docs/help', '781'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mc',
        component: ComponentCreator('/docs/mc', '34a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/talk',
        component: ComponentCreator('/docs/talk', 'ff6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1cc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
