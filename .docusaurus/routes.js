import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c8f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '2fe'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f5c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '64b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '906'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '4fa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ffb'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8a4'),
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
    component: ComponentCreator('/', '298'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
