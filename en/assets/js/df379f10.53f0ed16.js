"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["8498"], {
4209: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_revision_293_mdx_df3_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-revision-293-mdx-df3.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_revision_293_mdx_df3_namespaceObject = JSON.parse('{"id":"revision/293","title":"Version 2.9.3 (Build No. 2.9.3.26)","description":"Release2023-06-26","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/revision/293.mdx","sourceDirName":"revision","slug":"/revision/293","permalink":"/biostar2-docs/en/revision/293","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"293","title":"Version 2.9.3 (Build No. 2.9.3.26)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"Version 2.9.4 (Build No. 2.9.4.29)","permalink":"/biostar2-docs/en/revision/294"},"next":{"title":"Version 2.9.2 (Build No. 2.9.2.4)","permalink":"/biostar2-docs/en/revision/292"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/revision/293.mdx


const frontMatter = {
	id: 293,
	title: 'Version 2.9.3 (Build No. 2.9.3.26)',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
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
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2023-06-26"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-features-and-improvements",
      children: "New Features and Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "REPORT"
          }), " feature."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CARD PRINTER"
          }), " feature."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supports card printing directly from BioStar 2 using the cardPresso."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SYSTEM BACKUP"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RESTORE"
          }), " feature."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Provides ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar Restore"
            }), " program that can restore the system using backup files (included in BioStar 2 installer)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports QR code authentication in BioStation 3."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Firmware v1.1.0 or higher."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports Xpass D2 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Keypad Backlight"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "XPass D2 (XPD2-GKDB) hardware V02M, firmware v1.7.1 or higher."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved security vulnerabilities."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Update Moment.js library version."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Updated Lodash library version."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved enckey file creation logic."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved update speed on ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV Import"
          }), " when using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Encrypt Personal Data on Database"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved to properly recognize characters using UTF-16 in CSV files when ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV Import"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved Time & Attendance security vulnerabilities."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Swagger UI Version upgrade."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Added X-Frame-Options."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improvement of iframe vulnerability by providing Unified Gateway feature."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved pop-up messages that appear when adding users to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TIME ATTENDANCE"
          }), " menu when exceeding the maximum number of users set by license type."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved performance when ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Automatic User Synchronization"
          }), " is set to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Specific Devices(Only devices belonging to the access group)"
          }), " option."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved device setup performance."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved processing performance on zone activation/inactivation."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved synchronization performance when moving user groups."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved inefficient DB check logics when executing queries on the server."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved performance by adding missing indexes to temporary tables."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Optimized subquery when updating or deleting temporary tables using the User API."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Door Status"
          }), " inquiry performance of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "MONITORING"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to check whether unsupported characters are used in user names when enrolling mobile access card."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports entering symbols (+, -, @, .) in configuration of the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Intercom"
          }), " menu."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SIP Username"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorization ID"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extension Number"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added event code related to QR code authentication."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added a guide message to the existing license menu location (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SERVER"
          }), ") to prevent location confusion due to the new ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "LICENSE"
          }), " menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improvement of error message that appears when enrolling mobile access card when an ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Email"
          }), " is not entered in the user information."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved visibility of icons for each device in the device list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Updated login page."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enroll"
            }), " button is intermittently disabled on the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enroll Mobile Access Card"
            }), " screen. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The server crashes when the server fails to retrieve tracking data using getTrackingInfo. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Select All"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete From Device"
            }), " are performed on users searched with specific conditions, unselected users get deleted. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Device added as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enrollment Device"
            }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SERVER"
            }), " menu does not get deleted properly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When adding a device to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enrollment Device"
            }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SERVER"
            }), " menu, the device is not searched. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the server is restarted while the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Timeout"
            }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SERVER"
            }), " menu is set, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Timeout"
            }), " operates as the default value (60 minutes). ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Incorrectly displaying the values of items that exceed the maximum in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Usage"
            }), " on the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dashboard"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Authentication succeeded with a blacklisted ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access On Card"
            }), " containing a specific alphabet or symbol in the card ID. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["User data not syncing to the device after completing ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data File Import"
            }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "USER"
            }), " menu. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leave"
            }), " is set in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule"
            }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TIME ATTENDANCE"
            }), " menu and the user who is the approver is deleted, the T&A reports are not searched. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Some 1", ":N", " authentication succeeded events missing from Time & Attendance. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An error occurs when adding a device in the TA setting after upgrading version from 2.8.8 or earlier to 2.8.9 or later. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.9"
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