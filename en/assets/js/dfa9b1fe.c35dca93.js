"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["939"], {
5503: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_295_timed_apb_mdx_dfa_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-295-timed-apb-mdx-dfa.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_295_timed_apb_mdx_dfa_namespaceObject = JSON.parse('{"id":"update/295/timed-apb","title":"How to Set Up the Timed Anti Passback","description":"Timed Anti PassBack restricts frequent entries by setting an initialization time for anti-passback. This feature prevents users from re-authenticating with the same device immediately after access authentication, ensuring a defined period must elapse before re-authentication is possible.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/295/timed-apb.mdx","sourceDirName":"update/295","slug":"/update/295/timed-apb","permalink":"/biostar2-docs/en/update/295/timed-apb","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"timed-apb","title":"How to Set Up the Timed Anti Passback","description":"Timed Anti PassBack restricts frequent entries by setting an initialization time for anti-passback. This feature prevents users from re-authenticating with the same device immediately after access authentication, ensuring a defined period must elapse before re-authentication is possible.","keywords":["Timed Anti PassBack"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"How to Use the Quick Action","permalink":"/biostar2-docs/en/update/295/quick-action"},"next":{"title":"How to Search for Users With Advanced Search","permalink":"/biostar2-docs/en/update/295/advanced-search"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/295/timed-apb.mdx


const frontMatter = {
	id: 'timed-apb',
	title: 'How to Set Up the Timed Anti Passback',
	description: 'Timed Anti PassBack restricts frequent entries by setting an initialization time for anti-passback. This feature prevents users from re-authenticating with the same device immediately after access authentication, ensuring a defined period must elapse before re-authentication is possible.',
	keywords: [
		'Timed Anti PassBack'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Setting Timed Anti PassBack on the Door",
  "id": "setting-timed-anti-passback-on-the-door",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "timedAPB.title"
      }), " restricts frequent entries by setting an initialization time for anti-passback. This feature prevents users from re-authenticating with the same device immediately after access authentication, ensuring a defined period must elapse before re-authentication is possible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "timedAPB.title"
        }), " can be used without a separate BioStar 2 license."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-timed-anti-passback-on-the-door",
      children: "Setting Timed Anti PassBack on the Door"
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
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-add-door.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["If the door is set up with a wireless door lock, ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.title"
                }), " cannot be used."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.title"
                }), " can only be set when ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.entryDevice"
                }), " or ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.exitDevice"
                }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.doorRelay"
                }), " are selected."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Since this feature is used to enhance door security, it can be set even when one of the ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "door.entryDevice"
                    }), " or ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "door.exitDevice"
                    }), " is selected."]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.title"
                }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.apbUseDoorSensor"
                }), " features cannot be used at the same time."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.title"
                }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.antiPassBack"
                }), " features cannot be used at the same time."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Use"
          }), " and enter the desired reset time."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-timed-apb.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.resetTime"
            }), ": The input unit is in minutes (min.), with a default setting of 10 minutes. Users can input a time within the range of 0 to 60 minutes."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.resetTime"
            }), " is set to 0 minutes, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title"
            }), " will not operate."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " to save the settings.", (0,jsx_runtime.jsx)("br", {}), "If ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), " occurs after setup, you can check the event and ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Image Log"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.monitoring"
          }), " menu."]
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