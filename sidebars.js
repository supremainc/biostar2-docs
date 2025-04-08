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
          label: '신규 기능 소개',
          link: {
            type: 'doc',
            id: 'index',
          },
          items: [
            {
              type: 'category',
              label: 'BioStar 2.9.8',
              link: {
                type: 'doc',
                id: 'biostar_298'
              },
              items: [
                '298-deny-access-when-wearing-mask',
                '298-file-upload-user-information',
                '298-device-display-message',
                '298-update-timed-apb',
                '298-csn-mobile-card',
                '298-other-update',
              ]
            },
            {
              type: 'category',
              label: 'BioStar 2.9.7',
              link: {
                type: 'doc',
                id: 'biostar_297'
              },
              items: [
                'multi-factor-auth-for-login',
                'visual-face-with-template',
              ]
            },
            {
              type: 'category',
              label: 'BioStar 2.9.5',
              link: {
                type: 'doc',
                id: 'biostar_295'
              },
              items: [
                'new-dashboard',
                'quick-action',
                'timed-apb',
                'advanced-search',
                'user-photo-enroll-using-webcam',
                'wireless-door-lock',
                'unified-gateway',
              ]
            },
          ]
        }
      ]
    }
  ]
};

export default sidebars;
