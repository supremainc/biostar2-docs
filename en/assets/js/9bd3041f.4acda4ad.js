"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["2123"], {
"9401": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_295_unified_gateway_mdx_9bd_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-295-unified-gateway-mdx-9bd.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_295_unified_gateway_mdx_9bd_namespaceObject = JSON.parse('{"id":"update/295/unified-gateway","title":"How to Use the Unified Gateway","description":"This document provides an overview of the BioStar 2 Unified Gateway and offers guidance on its usage.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/295/unified-gateway.mdx","sourceDirName":"update/295","slug":"/update/295/unified-gateway","permalink":"/biostar2-docs/en/update/295/unified-gateway","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"unified-gateway","title":"How to Use the Unified Gateway","description":"This document provides an overview of the BioStar 2 Unified Gateway and offers guidance on its usage.","keywords":["Unified Gateway"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"How to Use a Wireless Door Lock","permalink":"/biostar2-docs/en/update/295/wireless-door-lock"},"next":{"title":"Precautions when upgrading BioStar 2","permalink":"/biostar2-docs/en/revision/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/295/unified-gateway.mdx


const frontMatter = {
	id: 'unified-gateway',
	title: 'How to Use the Unified Gateway',
	description: 'This document provides an overview of the BioStar 2 Unified Gateway and offers guidance on its usage.',
	keywords: [
		'Unified Gateway'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Unified Gateway",
  "id": "unified-gateway",
  "level": 2
}, {
  "value": "BioStar 2 Structure (Basic)",
  "id": "biostar-2-structure-basic",
  "level": 3
}, {
  "value": "BioStar 2 Structure (Unified Gateway)",
  "id": "biostar-2-structure-unified-gateway",
  "level": 3
}, {
  "value": "Setting up a Unified Gateway in the BioStar Setting",
  "id": "setting-up-a-unified-gateway-in-the-biostar-setting",
  "level": 3
}, {
  "value": "Setting up a Unified Gateway in BioStar 2",
  "id": "setting-up-a-unified-gateway-in-biostar-2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides an overview of the BioStar 2 Unified Gateway and offers guidance on its usage."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "unified-gateway",
      children: "Unified Gateway"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar 2 has a structure where AC and TA web pages with different structures access one server, and by setting up a ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.enabled"
      }), ", you can change the execution port of BioStar 2 to one Unified Gateway."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.enabled"
      }), " allows efficient processing of requests to the BioStar 2 server through a reverse proxy method, improves security vulnerabilities in iframes, and minimizes SSL certificate errors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), " is available from BioStar 2 v2.9.3."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When installing or upgrading BioStar 2, the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), " is ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Inactive"
            }), ", and the default port values are as follows:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "port.gatewayHttps"
                }), ": 5002"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "port.gatewayHttp"
                }), ": 5000"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When applying an SSL certificate in an environment using ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), ", restart ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), " is not available in environments using ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "cloud.title"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-2-structure-basic",
      children: "BioStar 2 Structure (Basic)"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostar-current-structure.svg",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-2-structure-unified-gateway",
      children: "BioStar 2 Structure (Unified Gateway)"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostar-ug-structure.svg",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setting-up-a-unified-gateway-in-the-biostar-setting",
      children: "Setting up a Unified Gateway in the BioStar Setting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Run ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.biostar"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Setting"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Start"
          }), " button in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unified Gateway"
          }), " section. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enabled"
          }), " becomes active."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Activating ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.enabled"
                }), " will restart the server."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "If the port is in use, a pop-up message will appear. Enter a different port number and activate it again."
              }), "\n"]
            }), "\n"]
          })
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostar-setting.png",
          className: "none",
          caption: true,
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If the HTTPS connection, the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTPS Port"
          }), " field changes to 5002, and the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unified Gateway"
          }), "’s ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Port"
          }), " field changes to 443.", (0,jsx_runtime.jsx)("br", {}), "To change the port, click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Stop"
          }), " to stop ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unified Gateway"
          }), ", and then change it."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostar-setting-unified-gateway.png",
          caption: true,
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setting-up-a-unified-gateway-in-biostar-2",
      children: "Setting up a Unified Gateway in BioStar 2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Access to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.biostar"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.systemSecurity"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Activate the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enabled"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.systemSecurity.sessionGateway"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-setting-security-unified-gateway.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When you activate ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), ", the server restarts and is automatically directed to the login page."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If the port is in use, a pop-up message will appear. Enter a different port number and activate it again."
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