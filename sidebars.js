// @ts-check

  
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'hello',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'authentication',
        'errors',
      ],
    },
    allDocsSidebar: [
      'sample1',
      'sample2',
    ],
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'users',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
