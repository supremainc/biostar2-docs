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
            id: 'update/index',
          },
          items: [
            {
              type: 'category',
              label: 'BioStar 2.9.8',
              link: {
                type: 'doc',
                id: 'update/biostar_298'
              },
              items: [
                'update/298/deny-access-when-wearing-mask',
                'update/298/file-upload-user-information',
                'update/298/device-display-message',
                'update/298/update-timed-apb',
                'update/298/csn-mobile-card',
                'update/298/other-update',
              ]
            },
            {
              type: 'category',
              label: 'BioStar 2.9.7',
              link: {
                type: 'doc',
                id: 'update/biostar_297'
              },
              items: [
                'update/297/multi-factor-auth-for-login',
                'update/297/visual-face-with-template',
              ]
            },
            {
              type: 'category',
              label: 'BioStar 2.9.5',
              link: {
                type: 'doc',
                id: 'update/biostar_295'
              },
              items: [
                'update/295/new-dashboard',
                'update/295/quick-action',
                'update/295/timed-apb',
                'update/295/advanced-search',
                'update/295/user-photo-enroll-using-webcam',
                'update/295/wireless-door-lock',
                'update/295/unified-gateway',
              ]
            },
          ]
        }
      ]
    }
  ]
};

export default sidebars;
