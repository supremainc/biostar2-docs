"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["9201"], {
5042: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (MDXContent),
  d$: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Details} = _components;
  if (!Details) _missingMdxReference("Details", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Details, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Notice on FaceStation F2 v1.x.x Firmware Support Discontinuation"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Starting with BioStar 2 v2.9.7, we have enhanced synchronization performance by modifying the process to transmit templates exclusively when synchronizing a user's visual face to the device."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Given the differences in visual face algorithms, FaceStation F2 v1.x.x won't sync well with the new BioStar 2. Therefore, we've decided to end support for FaceStation F2 v1.x.x from BioStar 2 v2.9.7 onward."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you are currently using FaceStation F2 v1.x.x firmware, kindly upgrade your FaceStation F2 to the latest firmware to utilize BioStar 2 v2.9.7."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The latest firmware can be downloaded from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://download.supremainc.com",
        children: "Suprema Download Center"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
9655: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_297_visual_face_with_template_mdx_d40_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-297-visual-face-with-template-mdx-d40.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_297_visual_face_with_template_mdx_d40_namespaceObject = JSON.parse('{"id":"update/297/visual-face-with-template","title":"Synchronizing Visual Face as Template Only","description":"Starting with BioStar 2 v2.9.7, the synchronization protocol has been improved to only transmit templates, excluding the actual images during user synchronization. Additionally, an option to prevent storing the actual images in the visual face can be used to prevent privacy-related issues.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/297/visual-face-with-template.mdx","sourceDirName":"update/297","slug":"/update/297/visual-face-with-template","permalink":"/biostar2-docs/en/update/297/visual-face-with-template","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"visual-face-with-template","title":"Synchronizing Visual Face as Template Only","description":"Starting with BioStar 2 v2.9.7, the synchronization protocol has been improved to only transmit templates, excluding the actual images during user synchronization. Additionally, an option to prevent storing the actual images in the visual face can be used to prevent privacy-related issues.","keywords":["Visual Face","Migration"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"Logging in Biostar 2 with Multi-Factor Authentication","permalink":"/biostar2-docs/en/update/297/multi-factor-auth-for-login"},"next":{"title":"Updates in BioStar 2 v2.9.5","permalink":"/biostar2-docs/en/update/biostar2-295"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_fsf2-firmware-support-discontinuation.mdx
var _fsf2_firmware_support_discontinuation = __webpack_require__(5042);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/297/visual-face-with-template.mdx


const frontMatter = {
	id: 'visual-face-with-template',
	title: 'Synchronizing Visual Face as Template Only',
	description: 'Starting with BioStar 2 v2.9.7, the synchronization protocol has been improved to only transmit templates, excluding the actual images during user synchronization. Additionally, an option to prevent storing the actual images in the visual face can be used to prevent privacy-related issues.',
	keywords: [
		'Visual Face',
		'Migration'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Before Start",
  "id": "before-start",
  "level": 2
}, ..._fsf2_firmware_support_discontinuation/* toc */.d$, {
  "value": "Notes on Visual Face Template Types",
  "id": "notes-on-visual-face-template-types",
  "level": 3
}, {
  "value": "Notes on Using Facestation F2 or Biostation 3 in Biostar 2 v2.9.7",
  "id": "notes-on-using-facestation-f2-or-biostation-3-in-biostar-2-v297",
  "level": 3
}, {
  "value": "How to Visual Face Migration",
  "id": "visual-face-migration",
  "level": 2
}, {
  "value": "Feature to Not Store the User&#39;s Actual Image",
  "id": "feature-to-not-store-the-users-actual-image",
  "level": 2
}, {
  "value": "Store Visual Face Image",
  "id": "store-visual-face-image",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "In BioStar 2 v2.9.6 and earlier versions, synchronizing users including visual faces, involved syncing actual images, which resulted in longer synchronization times. Additionally, the actual facial images stored on the server or device could cause privacy-related issues."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starting with BioStar 2 v2.9.7, the synchronization protocol has been improved to only transmit templates, excluding the actual images during user synchronization. Additionally, an option to prevent storing the actual images in the visual face can be used to prevent privacy-related issues."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "List of devices that can synchronize visual face using templates only"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation F2 firmware v2.2.0 or later"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 firmware v1.3.1 or later"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 firmware v1.0.0 or later"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To synchronize visual faces as templates only during user synchronization, ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#visual-face-migration",
          children: "Visual Face Migration"
        }), " must be completed."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Before Start"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_fsf2_firmware_support_discontinuation/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notes-on-visual-face-template-types",
      children: "Notes on Visual Face Template Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Differences in Visual Face Template Types for FaceStation F2, BioStation 3, and BioEntry W3."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NPU Type"
          }), ": BioStation 3, BioEntry W3"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GPU Type"
          }), ": FaceStation F2"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Synchronization Time Between Devices with Different Visual Face Template Types"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Before performing ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.list.visualFaceMigration.title"
            }), ", if BioStation 3 or BioEntry W3 is added to an environment using only FaceStation F2, synchronization will require extracting NPU-type templates from actual images due to differing template types. This process may take a significant amount of time, depending on the number of visual faces enrolled on the server."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommended to Enroll Visual Faces through Biostar 2"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When enrolling visual faces without using the option to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.storeVisualFaceImage"
            }), " on the device, only the template is synchronized with BioStar 2. As a result, it cannot be synchronized to devices with different visual face template types. Therefore, it is recommended to enroll visual faces through BioStar 2."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notes-on-using-facestation-f2-or-biostation-3-in-biostar-2-v297",
      children: "Notes on Using Facestation F2 or Biostation 3 in Biostar 2 v2.9.7"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "When using FaceStation F2 or BioStation 3 with BioStar 2 v2.9.7, it is recommended to upgrade to the latest firmware version."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The latest firmware can be downloaded from the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com",
          children: "Suprema Download Center"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The user data file exported from BioStar 2 v2.9.7 contains only visual face templates and no actual images. Therefore, if using existing firmware on FaceStation F2 and BioStation 3, the user data file cannot be imported."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "menu.dataExport"
      }), " from FaceStation F2 and BioStation 3, the data files can only be exported using firmware versions above the following:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FaceStation F2 firmware v2.2.0 or later"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStation 3 firmware v1.3.1 or later"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-data-file-export.png",
      className: "none",
      caption: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-face-migration",
      children: "How to Visual Face Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["What is ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.list.visualFaceMigration.title"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Visual Face Migration is a feature that generates two types of Visual Face templates from actual images of users already stored on the BioStar 2 server."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To synchronize Visual Face data as templates only, it is mandatory to perform ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.list.visualFaceMigration.title"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "user.list.visualFaceMigration.title"
        }), " can only be performed from an administrator account."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-user-option.png",
            ico: true,
            alone: true
          }), " on the right and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFaceMigration.title"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-297-visual-face-migration-1.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After checking the warning pop-up message, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.continue"
          }), ". The ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFaceMigration.title"
          }), " will proceed."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "The larger the size of the registered visual face images for each user, the longer it may take to generate the templates."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "For approximately 1,000 visual faces, the process takes about 18 minutes, although this may vary depending on server performance."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Do not navigate away from the current page while the migration is in progress."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFaceMigration.title"
          }), " is complete, a result pop-up will appear. It will show the total number of visual faces enrolled in BioStar 2, as well as the number of visual faces that were successfully migrated and those that failed."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-297-visual-face-migration-2.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If the migration fails, you can download a list of users whose migration failed as a CSV file. Additionally, you can click ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Delete"
          }), " to remove all visual faces that failed to migrate at once."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-to-not-store-the-users-actual-image",
      children: "Feature to Not Store the User's Actual Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "store-visual-face-image",
      children: "Store Visual Face Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set whether to store both the actual image and the template in the visual face or to store only the template without storing the actual image."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.server"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.title"
          }), " and activate ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.enableOptionLabel"
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-297-expert-setting-1.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If there are any changes made in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.server"
            }), " menu, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply"
            }), " to save the changes before activating ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.expertSettings.enableOptionLabel"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-expert-setting.png",
            ico: true
          }), " to enter ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.title"
          }), " and set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.storeVisualFaceImageOptionLabel"
          }), " as desired."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-297-expert-setting-2.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use"
              }), ": This is the default setting. Visual face stores both the actual image and the template."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.notUse"
              }), ": Only the template is stored without saving the actual image for visual face. If disabling this by setting it to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.notUse"
              }), ", carefully read the warning pop-up before proceeding."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Caution When Disabling Store Visual Face Image Option"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Disabling this feature will delete all stored visual face images, and future enrolled visual faces will only store the template without the image."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["If the enrolled visual faces do not have both types of templates, this feature cannot be disabled. Please proceed with ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#visual-face-migration",
                  children: "Visual Face Migration"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["If this feature is disabled and ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "menu.dataImport"
                }), " is performed, the data file cannot be imported if it contains invalid visual face templates. To resolve this issue, temporarily enable this feature before importing the data file."]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


}),

}]);