"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["7351"], {
8884: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_297_multi_factor_auth_for_login_mdx_052_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-297-multi-factor-auth-for-login-mdx-052.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_297_multi_factor_auth_for_login_mdx_052_namespaceObject = JSON.parse('{"id":"update/297/multi-factor-auth-for-login","title":"Logging in Biostar 2 with Multi-Factor Authentication","description":"If users feel that using only an ID and password to log in to BioStar 2 is not secure enough or want to enhance their account security, they can use the Multi-Factor Auth for Login feature to improve their account security.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/297/multi-factor-auth-for-login.mdx","sourceDirName":"update/297","slug":"/update/297/multi-factor-auth-for-login","permalink":"/biostar2-docs/en/update/297/multi-factor-auth-for-login","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"multi-factor-auth-for-login","title":"Logging in Biostar 2 with Multi-Factor Authentication","description":"If users feel that using only an ID and password to log in to BioStar 2 is not secure enough or want to enhance their account security, they can use the Multi-Factor Auth for Login feature to improve their account security.","keywords":["Multi-Factor Auth for Login"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"Updates in BioStar 2 v2.9.7","permalink":"/biostar2-docs/en/update/biostar2-297"},"next":{"title":"Synchronizing Visual Face as Template Only","permalink":"/biostar2-docs/en/update/297/visual-face-with-template"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/297/multi-factor-auth-for-login.mdx


const frontMatter = {
	id: 'multi-factor-auth-for-login',
	title: 'Logging in Biostar 2 with Multi-Factor Authentication',
	description: 'If users feel that using only an ID and password to log in to BioStar 2 is not secure enough or want to enhance their account security, they can use the Multi-Factor Auth for Login feature to improve their account security.',
	keywords: [
		'Multi-Factor Auth for Login'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Before Using",
  "id": "before-using",
  "level": 2
}, {
  "value": "How to Use Multi-Factor Authentication Login",
  "id": "how-to-use-multi-factor-authentication-login",
  "level": 2
}, {
  "value": "How to Set Up for Multiple Users at Once",
  "id": "how-to-set-up-for-multiple-users-at-once",
  "level": 3
}, {
  "value": "Logging in with Multi-Factor Authentication",
  "id": "logging-in-with-multi-factor-authentication",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["If users feel that using only an ID and password to log in to BioStar 2 is not secure enough or want to enhance their account security, they can use the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.fingerprintLogin"
      }), " feature to improve their account security."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.fingerprintLogin"
      }), " enhances user account security by adding a fingerprint authentication step using a fingerprint scanner to the existing ID and password login method."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-297-login-full.png",
      className: "none",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["To use the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.fingerprintLogin"
        }), " feature, a fingerprint scanner that supports multi-factor authentication login must be connected to the BioStar 2 client."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The supported fingerprint scanners are as follows:"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioMini"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioMini Plus 2"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-using",
      children: "Before Using"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["When using ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.fingerprintLogin"
        }), " with the main Administrator (ID 1) account, if fingerprint authentication becomes unavailable, the main Administrator account may be permanently unable to log in. Please be cautious."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["If login becomes impossible due to fingerprint issues, please contact ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://support.supremainc.com",
            children: "Suprema Technical Support"
          }), "."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When a user with ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), " enabled accesses BioStar 2 through the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "cloud.title"
            }), ", fingerprint authentication for login is not supported, so ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), " cannot be used."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), " cannot be used if the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "biostar.login"
            }), " option is enabled for an Active Directory server account."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Users with ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), " enabled cannot be registered for BioStar 2 services other than BioStar 2 AC."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-use-multi-factor-authentication-login",
      children: "How to Use Multi-Factor Authentication Login"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click on the user who needs to use ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.fingerprintLogin"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.fingerprintLogin"
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.fingerprintLogin.active"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["Before using the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), " feature, the following conditions must be met:"]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "The user who intends to use this feature must have an enrolled fingerprint for authentication."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.bioStarOperator"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.loginId"
                }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.password"
                }), " must be set."]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-multi-factor-auth-1.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-set-up-for-multiple-users-at-once",
      children: "How to Set Up for Multiple Users at Once"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In batch editing, multiple users can be selected and set up at once."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the user list, ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-checkbox.png",
            ico: true,
            alone: true
          }), " check and select the users to configure, then click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-batch-edit.png",
            ico: true
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-batch-edit-activate-button.png",
            ico: true,
            alone: true
          }), " for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.fingerprintLogin"
          }), " to change to edit mode, then set it to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.fingerprintLogin.active"
          }), " and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.ok"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-multi-factor-auth-2.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If any of the selected users do not meet the conditions required to set ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), " to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.fingerprintLogin.active"
            }), ", a pop-up message will display '", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.batchedit.popup.notavailableuser"
            }), "'. Please check the conditions required for the settings and try again."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["Before using the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), " feature, the following conditions must be met:"]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "The user who intends to use this feature must have an enrolled fingerprint for authentication."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.bioStarOperator"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.loginId"
                }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.password"
                }), " must be set."]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "logging-in-with-multi-factor-authentication",
      children: "Logging in with Multi-Factor Authentication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter the user ID and password on the BioStar 2 login screen and login."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-297-login.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The fingerprint input screen will appear. Place the enrolled finger on the fingerprint scanner to scan your fingerprint."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-297-multi-factor-auth-3.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "The scan time limit is fixed at 18 seconds and cannot be changed."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Fingerprint scanning can be attempted up to three times consecutively. If the fingerprint is not accurately scanned within these three attempts, authentication will fail."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["In the case of authentication failure, click the ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/ico-retry.png",
                  ico: true
                }), " to attempt fingerprint authentication again. Up to two retry attempts are allowed."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "If authentication fails after two retry attempts, the process will revert to the ID and Password login step."
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostar-297-multi-factor-auth-fail.png",
            caption: true
          })]
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