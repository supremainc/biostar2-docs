"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["9548"], {
2243: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_2912_bs_2_remote_access_mdx_ba0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-2912-bs-2-remote-access-mdx-ba0.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_2912_bs_2_remote_access_mdx_ba0_namespaceObject = JSON.parse('{"id":"update/2912/bs2-remote-access","title":"Setting Remote Access","description":"Learn how to configure Remote Access. This feature allows to securely access internal networks from external networks using the ngrok service.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/2912/bs2-remote-access.mdx","sourceDirName":"update/2912","slug":"/update/2912/bs2-remote-access","permalink":"/biostar2-docs/en/update/2912/bs2-remote-access","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"bs2-remote-access","title":"Setting Remote Access","description":"Learn how to configure Remote Access. This feature allows to securely access internal networks from external networks using the ngrok service.","keywords":["Remote Access","ngrok"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"Updates in BioStar 2 v2.9.12","permalink":"/biostar2-docs/en/update/biostar2-2912"},"next":{"title":"Updates in BioStar 2 v2.9.11","permalink":"/biostar2-docs/en/update/biostar2-2911"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/2912/bs2-remote-access.mdx


const frontMatter = {
	id: 'bs2-remote-access',
	title: 'Setting Remote Access',
	description: 'Learn how to configure Remote Access. This feature allows to securely access internal networks from external networks using the ngrok service.',
	keywords: [
		'Remote Access',
		'ngrok'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "When to use this?",
  "id": "when-to-use-this",
  "level": 2
}, {
  "value": "Remote access setup",
  "id": "remote-access-setup",
  "level": 2
}, {
  "value": "Activate remote access license",
  "id": "activate-remote-access-license",
  "level": 3
}, {
  "value": "Activate remote access",
  "id": "activate-remote-access",
  "level": 3
}, {
  "value": "Enter ngrok setup information",
  "id": "enter-ngrok-setup-information",
  "level": 3
}, {
  "value": "Access endpoint URL",
  "id": "access-endpoint-url",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Remote access is a new feature that replaces the existing BioStar 2 CLOUD feature. This feature allows to securely access internal networks from external networks using the ngrok service. This feature enables access to the BioStar 2 server remotely without firewall settings or port forwarding."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The Remote Access feature is requires a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 Remote Access"
            }), " license."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When purchasing the remote access license, Suprema generates a bot account, endpoint, and license document for remote access use on the ngrok Suprema site."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Remote Access is provided through ngrok’s third‑party tunneling service. Remote Access is provided through ngrok’s third‑party tunneling service. Before using this feature, please review ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.supremainc.com/legal/eula#remote-access-agreement",
              children: "Remote Access Feature Agreement"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStar 2 simply supports the connection by calling the ngrok API, but the security, safety, and continuity of internet connectivity entirely depend on the ngrok service. Therefore, Suprema assumes no responsibility for any security incidents, data loss, or system breaches that may occur during the use of this feature."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-to-use-this",
      children: "When to use this?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the remote access feature in the following situations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When you need to connect to the BioStar 2 server from an external network"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When it's challenging to connect directly due to firewalls or NAT environments"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When you want to quickly set up remote access without complex network setups"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When you need to temporarily provide outside access rights"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "remote-access-setup",
      children: "Remote access setup"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "activate-remote-access-license",
          children: "Activate remote access license"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Log in with your BioStar 2 admin ID."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.setting"
              }), " on the top of screen."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.license"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter the admin name and remote access license key that received by Suprema on ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.remoteAccess.root"
              }), " of the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.license.biostar2"
              }), " section."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.license.button.activate",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "activate-remote-access",
          children: "Activate remote access"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Log in with your BioStar 2 admin ID."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.setting"
              }), " on the top of screen."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.remoteAccess.root"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Change the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.remoteAccess.root"
              }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use"
              }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.section.title"
              }), " section."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/bs2-settings-remote-access.png"
        }), (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Remote Access Permissions based on Unified Gateway Settings"
            })
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The services accessible via ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.remoteAccess.root"
            }), " vary depending on whether the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), " is enabled. You can configure the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), " in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.systemSecurity"
            }), "."]
          }), (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Unified Gateway"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Accessible Services"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Active"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "All services"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Inactive"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Access Control service"
                })]
              })]
            })]
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enter-ngrok-setup-information",
          children: "Enter ngrok setup information"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter the ngrok setup information provided by Suprema."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.tunnelToken"
              }), ": Enter your authentication token(Authtoken)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.hostURL"
              }), ": Enter the endpoint URL. The URL is in the format ", (0,jsx_runtime.jsx)(_components.code, {
                children: "your-name.bs.ngrok.app"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After entering all the information, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), ". If a warning message window appears, check the content and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.remoteAccess.button.agree"
          }), " button."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "access-endpoint-url",
      children: "Access endpoint URL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After completing the setup, verify whether you can access the BioStar 2 server from an external network using the endpoint URL you entered in ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.remoteAccess.field.hostURL"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "If you cannot access via endpoint URL from an external network, contact the sales point or distributor that issued your license."
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