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
              label: '2.9.8 버전',
              link: {
                type: 'doc',
                id: 'update/biostar2-298'
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
              label: '2.9.7 버전',
              link: {
                type: 'doc',
                id: 'update/biostar2-297'
              },
              items: [
                'update/297/multi-factor-auth-for-login',
                'update/297/visual-face-with-template',
              ]
            },
            {
              type: 'category',
              label: '2.9.5 버전',
              link: {
                type: 'doc',
                id: 'update/biostar2-295'
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
        },
        {
          type: 'html',
          value: '<hr/>'
        },
        {
          type: 'category',
          label: '리비전 노트',
          link: {
            type: 'doc',
            id: 'revision/index',
          },
          items: [
            'revision/298',
            'revision/297',
            'revision/296',
            'revision/295',
            'revision/294',
            'revision/293',
            'revision/292',
            'revision/291',
            'revision/290',
            'revision/2817',
            'revision/2816',
            'revision/2815',
            'revision/2814',
            'revision/2813',
            'revision/2812',
            'revision/2811',
            'revision/2810',
            'revision/289',
            'revision/288',
            'revision/286',
            'revision/285',
            'revision/284',
            'revision/283',
            'revision/282',
            'revision/281',
            'revision/280',
            'revision/2714',
            'revision/2712',
            'revision/2711',
            'revision/2710',
            'revision/278',
            'revision/277',
            'revision/276',
            'revision/275',
            'revision/274',
            'revision/273',
            'revision/272',
            'revision/271',
            'revision/270',
            'revision/264',
            'revision/263',
            'revision/262',
            'revision/261',
            'revision/260',
          ]
        }
      ]
    }
  ]
};

export default sidebars;
