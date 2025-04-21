"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["2455"], {
"4900": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
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
"5388": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_revision_298_mdx_c34_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-revision-298-mdx-c34.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_revision_298_mdx_c34_namespaceObject = JSON.parse('{"id":"revision/298","title":"Version 2.9.8 (Build No. 2.9.8.30)","description":"Release2024-12-06","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/revision/298.mdx","sourceDirName":"revision","slug":"/revision/298","permalink":"/biostar2-docs/en/revision/298","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"298","title":"Version 2.9.8 (Build No. 2.9.8.30)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"버전 2.9.9 (빌드 번호 2.9.9.XX)","permalink":"/biostar2-docs/en/revision/299"},"next":{"title":"Version 2.9.7 (Build No. 2.9.7.41)","permalink":"/biostar2-docs/en/revision/297"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_fsf2-firmware-support-discontinuation.mdx
var _fsf2_firmware_support_discontinuation = __webpack_require__("4900");
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/revision/298.mdx


const frontMatter = {
	id: 298,
	title: 'Version 2.9.8 (Build No. 2.9.8.30)',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._fsf2_firmware_support_discontinuation/* toc */.d$, {
  "value": "New Features and Improvements",
  "id": "new-features-and-improvements",
  "level": 2
}, {
  "value": "Bug Fixes",
  "id": "bug-fixes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2024-12-06"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_fsf2_firmware_support_discontinuation/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-features-and-improvements",
      children: "New Features and Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Discontinuation of support for the BioStar 2 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "VIDEO"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom User Field"
          }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "File Upload"
          }), " option that allows files to be uploaded to user information."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Device Display Message"
          }), " UI to enter a private message to be displayed on the device screen during user authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added an option to set face authentication to deny authentication if a mask is worn."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added a separate management page for ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deleted CSN Mobile Card"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Updated ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Timed Anti PassBack"
          }), " feature."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Improved UI to allow setting ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Timed Anti Passback"
              }), " for each device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Added a ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Bypass Group"
              }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Timed Anti Passback"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Firmware Version"
          }), " to device list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "DOOR"
          }), " menu UI."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Improved door ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Open Time"
              }), " setting UI."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Improved UI in the alarm settings to differentiate between ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Anti PassBack"
              }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Timed Anti PassBack"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "REPORT"
          }), " performance."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Merged report service into AC service."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Changed filter condition from AND to OR when creating ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Custom Report"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "DASHBOARD"
          }), " performance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added new predefined Wiegand card formats."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "MIFARE CSN 32bit"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "MIFARE CSN 34bit (Parity)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "DESFire 56bit"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "DESFire 58bit (Parity)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced Search"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved user list printing feature."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Improved to allow selecting all after ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Advanced Search"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Elevator"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Zone"
          }), " columns to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Column List"
          }), " of the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Event Log"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Upgraded Bootstrap library (3.4.1)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved USB Agent security vulnerabilities."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved performance of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Schedule"
          }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TIME ATTENDANCE"
          }), " menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved performance of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Report"
          }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TIME ATTENDANCE"
          }), " menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Upgraded Node.js version."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to ensure that calling the TA API retrieves correct result values according to the set user permissions."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved security vulnerabilities."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved HTTPS protocol security vulnerabilities."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved SQL Injection security vulnerabilities."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved the recognition rate of BioStar 2 QR."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Optimized performance when updating users on the C server."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Modified the message displayed if validation fails when creating a CSN card using API."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved performance when enrolling cards."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Daylight Saving Time"
            }), " settings are not properly applied in some widgets of the New Dashboard. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When generating a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Report"
            }), ", the date and period in the title do not follow the BioStar 2 time settings. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced Search"
            }), " does not return results when searching for a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom User Field Combo Box"
            }), " that contains specific special characters. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the Android mobile environment, when attempting to enroll a visual face through the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Visual Face Mobile Enrollment Link"
            }), ", the option to take a face photo directly does not function. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["System backup fails when the Maria DB password contains special characters. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When selecting a user group and performing an ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced Search"
            }), ", and then printing, the user list does not print according to the search results. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.5"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Intermittently, the user's ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Group"
            }), " is displayed incorrectly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.5"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the account ID and password are saved in Chrome's Passwords and autofill, certain fields are automatically filled when adding a user. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Unable to log in with the email address registered in user information. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Intermittently, an error popup message appears stating that there is no layout when modifying the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card"
            }), " layout. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Due to Chrome's Keyboard focusable scrollers feature, the dropdown list cannot be properly selected for certain options. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After modifying user information on the device and syncing it to the server, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Group"
            }), " disappears from the user information. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In some menus, search results cannot be selected. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.7"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Search list resets after searching and selecting an ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Group"
            }), " by group name. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In a decryption environment where the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encrypt Personal Data on Database"
            }), " is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not Use"
            }), ", users cannot be searched in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Added users"
            }), " section when modifying a TA Schedule. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When accessing the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TIME ATTENDANCE"
            }), " menu from an external connection to the server, the user is logged out. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Upgrade required (Device database corrupted)"
            }), " event occurs in certain situations. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Intermittent login issues occur during BioStar 2 login. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After importing a CSV file with an empty start_datetime column, users are not displayed when entering the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "USER"
            }), " menu. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.7"
            })]
          }), "\n"]
        }), "\n"]
      })
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
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
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