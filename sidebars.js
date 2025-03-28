// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  biostar: [
    {
      type: 'category',
      label: 'BioStar 2',
      collapsed: false,
      collapsible: false,
      className: 'p-title',
      items: [
        {
          type: 'category',
          label: 'BioStar 2 신규 기능 소개',
          link: {
            type: 'doc',
            id: 'index',
          },
          items: [
            '298','297-1','297-2','295-1','295-6',
          ]
        }
      ]
    }
  ]
};

export default sidebars;
