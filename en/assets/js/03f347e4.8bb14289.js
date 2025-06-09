"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["9622"], {
5593: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_299_how_to_use_di_24_mdx_03f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-299-how-to-use-di-24-mdx-03f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_299_how_to_use_di_24_mdx_03f_namespaceObject = JSON.parse('{"id":"update/299/how-to-use-di24","title":"Setting Facility Code Authentication for Offline Mode in Door Interface","description":"This document describes how to configure the Door Interface in offline mode in BioStar 2.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/299/how-to-use-di24.mdx","sourceDirName":"update/299","slug":"/update/299/how-to-use-di24","permalink":"/biostar2-docs/en/update/299/how-to-use-di24","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"how-to-use-di24","title":"Setting Facility Code Authentication for Offline Mode in Door Interface","description":"This document describes how to configure the Door Interface in offline mode in BioStar 2.","keywords":["Door Interface","DI-24","Offline Mode"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"CoreStation 20 Setup and Door Creation","permalink":"/biostar2-docs/en/update/299/how-to-use-cs20"},"next":{"title":"Directory Integration Settings","permalink":"/biostar2-docs/en/update/299/settings-diretory-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/299/how-to-use-di24.mdx


const frontMatter = {
	id: 'how-to-use-di24',
	title: 'Setting Facility Code Authentication for Offline Mode in Door Interface',
	description: 'This document describes how to configure the Door Interface in offline mode in BioStar 2.',
	keywords: [
		'Door Interface',
		'DI-24',
		'Offline Mode'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Setting <Cmd></Cmd>",
  "id": "setting-",
  "level": 2
}, {
  "value": "Deleting <Cmd></Cmd>",
  "id": "deleting-",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Door Interface is a device that securely and flexibly connects two doors and four readers.", (0,jsx_runtime.jsx)("br", {}), "Authentication is possible even in offline environments using ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.facilityCode"
      }), ", and the device supports security-focused features such as AC failure, tamper, and fire alarm.", (0,jsx_runtime.jsx)("br", {}), "By integrating with CoreStation (CS-40) or CoreStation 20 (CS-20, CS-20P) controllers, a robust access control architecture is provided that flexibly supports a wide range of system environments from small to large enterprises."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides instructions for setting ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.facilityCode"
      }), " for the Door Interface in BioStar 2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Most device settings for the Door Interface are the same as those for CoreStation 20.", (0,jsx_runtime.jsx)("br", {}), "For detailed device settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "how-to-use-cs20#cs20detailsetting",
          children: "following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "setting-",
      children: ["Setting ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.facilityCode"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.facilityCode"
      }), " allows the door to operate using facility code authentication even when the Door Interface is offline and disconnected from the master controller."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.device"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the Door Interface (DI-24) to configure from the device list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.authentication"
          }), " tab, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus"
          }), " under ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.facilityCode"
          }), " and enter the facility code."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Only numbers from 0 to 4294967295 can be entered for ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.info.facilityCode"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Up to 16 facility codes can be saved for ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.info.facilityCode"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/DI24-offlinemode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After adding the facility code, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the device is offline and disconnected from the master, authenticating with a card that matches a saved facility code will operate the configured door."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "In offline mode, only alarm events are stored and sent to the server when the device reconnects to the master."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "deleting-",
      children: ["Deleting ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.facilityCode"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.device"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the Door Interface (DI-24) to configure from the device list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.authentication"
          }), " tab, check the facility code to delete under ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.facilityCode"
          }), " and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.delete"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/DI24-offlinemode-del.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " to save."]
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