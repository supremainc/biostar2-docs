"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["2905"], {
7027: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_298_file_upload_user_information_mdx_d00_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-298-file-upload-user-information-mdx-d00.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_298_file_upload_user_information_mdx_d00_namespaceObject = JSON.parse('{"id":"update/298/file-upload-user-information","title":"Uploading Files to User Information","description":"Files can be uploaded and saved to the user\'s information using the Custom User Field.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/298/file-upload-user-information.mdx","sourceDirName":"update/298","slug":"/update/298/file-upload-user-information","permalink":"/biostar2-docs/en/update/298/file-upload-user-information","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"file-upload-user-information","title":"Uploading Files to User Information","description":"Files can be uploaded and saved to the user\'s information using the Custom User Field.","keywords":["Custom User Field","File Upload"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"Setting Denial of Authentication When Wearing a Mask","permalink":"/biostar2-docs/en/update/298/deny-access-when-wearing-mask"},"next":{"title":"Displaying User Private Messages on Devices","permalink":"/biostar2-docs/en/update/298/device-display-message"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/298/file-upload-user-information.mdx


const frontMatter = {
	id: 'file-upload-user-information',
	title: 'Uploading Files to User Information',
	description: 'Files can be uploaded and saved to the user\'s information using the Custom User Field.',
	keywords: [
		'Custom User Field',
		'File Upload'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
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
      children: "Files can be uploaded and saved to the user's information using the Custom User Field."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Navigate to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.server"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.userDeviceManagement"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-add.png",
            ico: true
          }), " under ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.title"
          }), " to add a new field, enter the desired name, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.fileupload"
          }), " as the type, and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " to save."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-custom-user-field-file-upload.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "A maximum of two file upload fields can be added."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user"
          }), " menu, then select the desired user from the user list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the added ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.fileupload"
          }), " custom user field, click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-browse.png",
            ico: true
          }), " to upload the desired file."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-custom-user-field-file-upload-1.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Upload File Restrictions"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "There are no restrictions on file types."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "The maximum supported file size is 1MB."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["File names can include alphanumeric characters and special symbols ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "-"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "_"
                }), ", with a maximum length of 120 characters."]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the uploaded file, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), ". To delete it, click the ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-upload-delete.png",
            ico: true,
            alone: true
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["After saving, the file can be downloaded by clicking the ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/ico-download.png",
              ico: true,
              alone: true
            }), " or deleted by clicking the ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/ico-delete.png",
              ico: true,
              alone: true
            }), " from the user information page."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostar-298-custom-user-field-file-upload-2.png",
          caption: true,
          alone: true
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