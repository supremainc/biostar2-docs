"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["4850"], {
5782: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_298_update_timed_apb_mdx_4b3_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-298-update-timed-apb-mdx-4b3.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_298_update_timed_apb_mdx_4b3_namespaceObject = JSON.parse('{"id":"update/298/update-timed-apb","title":"Updated Timed Anti PassBack","description":"Updated Timed Anti PassBack","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/298/update-timed-apb.mdx","sourceDirName":"update/298","slug":"/update/298/update-timed-apb","permalink":"/biostar2-docs/en/update/298/update-timed-apb","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"update-timed-apb","title":"Updated Timed Anti PassBack","description":"Updated Timed Anti PassBack","keywords":["Timed Anti Passback","Reset Time","Bypass Group"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"Displaying User Private Messages on Devices","permalink":"/biostar2-docs/en/update/298/device-display-message"},"next":{"title":"CSN Mobile Card Deletion Management Guidelines","permalink":"/biostar2-docs/en/update/298/csn-mobile-card"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/298/update-timed-apb.mdx


const frontMatter = {
	id: 'update-timed-apb',
	title: 'Updated Timed Anti PassBack',
	description: 'Updated Timed Anti PassBack',
	keywords: [
		'Timed Anti Passback',
		'Reset Time',
		'Bypass Group'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Setting Timed Anti Passback by Device",
  "id": "setting-timed-anti-passback-by-device",
  "level": 2
}, {
  "value": "Setting the Bypass Group for Timed Anti PassBack",
  "id": "setting-the-bypass-group-for-timed-anti-passback",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-timed-anti-passback-by-device",
      children: "Setting Timed Anti Passback by Device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Previously, Timed Anti Passback could only be configured for doors. However, with the update, it is now possible to select and configure Timed Anti Passback for entry devices, exit devices, or all devices as desired."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.door"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addDoor"
          }), " and set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.information"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.configuration"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.option"
          }), ", etc."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the device to use ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), " and set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime"
          }), " as desired."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.resetTime"
            }), ": The input unit is in minutes (min.), with a default setting of 10 minutes. Users can input a time within the range of 0 to 60 minutes."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-298-timed-apb-drop.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-the-bypass-group-for-timed-anti-passback",
      children: "Setting the Bypass Group for Timed Anti PassBack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A specific access group can be designated to bypass Timed Anti-Passback restrictions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.door"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addDoor"
          }), " and set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.information"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.configuration"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.option"
          }), ", etc."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the device to use ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), " and set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime"
          }), " as desired."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apb.bypassGroup"
          }), " that will not be restricted by ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-298-timed-apb-bypass.png",
          caption: true
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