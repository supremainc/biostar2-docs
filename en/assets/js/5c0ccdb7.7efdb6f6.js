"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["77"], {
359: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_295_quick_action_mdx_5c0_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-295-quick-action-mdx-5c0.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_295_quick_action_mdx_5c0_namespaceObject = JSON.parse('{"id":"update/295/quick-action","title":"How to Use the Quick Action","description":"A new addition to the TRIGGER & ACTION menu, Quick Action allows you to quickly control the operation of the door in an emergency situation.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/295/quick-action.mdx","sourceDirName":"update/295","slug":"/update/295/quick-action","permalink":"/biostar2-docs/en/update/295/quick-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"quick-action","title":"How to Use the Quick Action","description":"A new addition to the TRIGGER & ACTION menu, Quick Action allows you to quickly control the operation of the door in an emergency situation.","keywords":["Quick Action"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"How to Use the New Dashboard","permalink":"/biostar2-docs/en/update/295/new-dashboard"},"next":{"title":"How to Set Up the Timed Anti Passback","permalink":"/biostar2-docs/en/update/295/timed-apb"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/295/quick-action.mdx


const frontMatter = {
	id: 'quick-action',
	title: 'How to Use the Quick Action',
	description: 'A new addition to the TRIGGER & ACTION menu, Quick Action allows you to quickly control the operation of the door in an emergency situation.',
	keywords: [
		'Quick Action'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Adding the Trigger &amp; Action to Use as Quick Action",
  "id": "adding-the-trigger--action-to-use-as-quick-action",
  "level": 2
}, {
  "value": "Adding the Quick Action Button to the Biostar 2 Main Screen",
  "id": "adding-the-quick-action-button-to-the-biostar-2-main-screen",
  "level": 2
}, {
  "value": "Editing the Quick Action Buttons",
  "id": "editing-the-quick-action-buttons",
  "level": 2
}, {
  "value": "Deleting the Quick Action Button",
  "id": "deleting-the-quick-action-button",
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
      children: ["A new addition to the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.triggerAndAction"
      }), " menu, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.quickAction"
      }), " allows you to quickly control the operation of the door in an emergency situation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By adding the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.quickAction"
      }), " button in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.customInterface"
      }), " menu, you gain the ability to conveniently control multiple doors simultaneously. Simply click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.quickAction"
      }), " button on the BioStar 2 main screen to initiate the command."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-the-trigger--action-to-use-as-quick-action",
      children: "Adding the Trigger & Action to Use as Quick Action"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.triggerAndAction"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addTriggerAndAction"
          }), ", and then set each item to add the desired action."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-trigger-action.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.schedule"
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Always"
          }), ", check ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.quickAction"
          }), ", and then click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " to save settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.quickAction"
            }), " is only available when the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.schedule"
            }), " is ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Always"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["By selecting ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.quickAction"
            }), ", you can create an action without the need to specify an ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.triggerAction.event"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-the-quick-action-button-to-the-biostar-2-main-screen",
      children: "Adding the Quick Action Button to the Biostar 2 Main Screen"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickActionLayout"
          }), ", click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd"
          }), " to enter and select each item."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-add-new-quick-action.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.operatorLevel"
              }), ": Select the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.operatorLevel"
              }), " that can run the added ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.quickAction"
              }), ". You can select multiple options."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.triggerAction"
              }), ": Select the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.triggerAction"
              }), " to run. You can select multiple options."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.confirmBeforeRun"
              }), ": Enabling this option prompts a confirmation pop-up when pressing the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.quickAction"
              }), " button on the main screen, asking whether to proceed with running the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.quickAction"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " to save the settings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), " screen. Check the confirmation pop-up and click ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Yes"
          }), ". The ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickAction"
          }), " button added to the top bar of BioStar 2 will be created."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-quick-action-top-bar.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Up to 4 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.quickAction"
                }), " buttons can be added to the top bar of the main screen."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.quickAction"
                }), " button that appears may vary depending on the ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.bioStarOperator"
                }), " set for the user."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Clicking the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickAction"
          }), " button, created on the top bar of the main screen, will execute the predefined actions set in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.triggerAndAction"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editing-the-quick-action-buttons",
      children: "Editing the Quick Action Buttons"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-quick-action-button-edit.png",
            ico: true,
            alone: true
          }), " icon in the right column of the Quick Action button to edit, then edit the desired part and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-custom-interface.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), " screen. Check the pop-up and click ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Yes"
          }), " to apply the modifications."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleting-the-quick-action-button",
      children: "Deleting the Quick Action Button"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-quick-action-button-del.png",
            ico: true,
            alone: true
          }), " icon in the right column of the Quick Action button to delete."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-quick action-del.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the deletion confirmation pop-up and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), " screen. Check the pop-up and click ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Yes"
          }), " to apply the deletion."]
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