import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/api-reference-sample/api-reference-intro',
    component: ComponentCreator('/api-reference-sample/api-reference-intro', 'e1f'),
    exact: true
  },
  {
    path: '/api-reference-sample/blog',
    component: ComponentCreator('/api-reference-sample/blog', 'ac1'),
    exact: true
  },
  {
    path: '/api-reference-sample/blog/archive',
    component: ComponentCreator('/api-reference-sample/blog/archive', '070'),
    exact: true
  },
  {
    path: '/api-reference-sample/blog/authors',
    component: ComponentCreator('/api-reference-sample/blog/authors', '57a'),
    exact: true
  },
  {
    path: '/api-reference-sample/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/api-reference-sample/blog/authors/all-sebastien-lorber-articles', '4a8'),
    exact: true
  },
  {
    path: '/api-reference-sample/blog/authors/yangshun',
    component: ComponentCreator('/api-reference-sample/blog/authors/yangshun', 'c2b'),
    exact: true
  },
  {
    path: '/api-reference-sample/blog/Greetings',
    component: ComponentCreator('/api-reference-sample/blog/Greetings', '261'),
    exact: true
  },
  {
    path: '/api-reference-sample/markdown-page',
    component: ComponentCreator('/api-reference-sample/markdown-page', '704'),
    exact: true
  },
  {
    path: '/api-reference-sample/all-docs',
    component: ComponentCreator('/api-reference-sample/all-docs', 'cb8'),
    routes: [
      {
        path: '/api-reference-sample/all-docs',
        component: ComponentCreator('/api-reference-sample/all-docs', '2b3'),
        routes: [
          {
            path: '/api-reference-sample/all-docs',
            component: ComponentCreator('/api-reference-sample/all-docs', '37e'),
            routes: [
              {
                path: '/api-reference-sample/all-docs/',
                component: ComponentCreator('/api-reference-sample/all-docs/', '7c7'),
                exact: true
              },
              {
                path: '/api-reference-sample/all-docs/sample2',
                component: ComponentCreator('/api-reference-sample/all-docs/sample2', '1ef'),
                exact: true
              },
              {
                path: '/api-reference-sample/all-docs/style-guide',
                component: ComponentCreator('/api-reference-sample/all-docs/style-guide', 'd7f'),
                exact: true,
                sidebar: "sidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/api-reference-sample/docs',
    component: ComponentCreator('/api-reference-sample/docs', 'aaf'),
    routes: [
      {
        path: '/api-reference-sample/docs',
        component: ComponentCreator('/api-reference-sample/docs', 'd37'),
        routes: [
          {
            path: '/api-reference-sample/docs',
            component: ComponentCreator('/api-reference-sample/docs', '8f2'),
            routes: [
              {
                path: '/api-reference-sample/docs/authentication',
                component: ComponentCreator('/api-reference-sample/docs/authentication', 'd7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api-reference-sample/docs/errors',
                component: ComponentCreator('/api-reference-sample/docs/errors', '933'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api-reference-sample/docs/getting-started-guide',
                component: ComponentCreator('/api-reference-sample/docs/getting-started-guide', 'ca9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api-reference-sample/docs/hello',
                component: ComponentCreator('/api-reference-sample/docs/hello', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api-reference-sample/docs/intro',
                component: ComponentCreator('/api-reference-sample/docs/intro', 'fcd'),
                exact: true
              },
              {
                path: '/api-reference-sample/docs/users',
                component: ComponentCreator('/api-reference-sample/docs/users', '113'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/api-reference-sample/',
    component: ComponentCreator('/api-reference-sample/', '5b2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
