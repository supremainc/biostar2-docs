"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["7929"], {
2272: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_update_295_advanced_search_mdx_8b9_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-update-295-advanced-search-mdx-8b9.json
var site_docs_update_295_advanced_search_mdx_8b9_namespaceObject = JSON.parse('{"id":"update/295/advanced-search","title":"고급 검색으로 사용자 검색하기","description":"기존 사용자 메뉴의 검색 기능은 이름과 이메일로만 사용자를 검색할 수 있었으나 새롭게 추가된 고급 검색 기능에서는 검색어의 범위를 줄이고 관련 없는 정보를 제외하여 원하는 정보를 정확하게 검색할 수 있습니다.","source":"@site/docs/update/295/advanced-search.mdx","sourceDirName":"update/295","slug":"/update/295/advanced-search","permalink":"/biostar2-docs/update/295/advanced-search","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"advanced-search","title":"고급 검색으로 사용자 검색하기","description":"기존 사용자 메뉴의 검색 기능은 이름과 이메일로만 사용자를 검색할 수 있었으나 새롭게 추가된 고급 검색 기능에서는 검색어의 범위를 줄이고 관련 없는 정보를 제외하여 원하는 정보를 정확하게 검색할 수 있습니다.","keywords":["고급 검색"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"시간 제한 안티패스백 설정하기","permalink":"/biostar2-docs/update/295/timed-apb"},"next":{"title":"웹캠으로 프로필 사진 & 비주얼 페이스 등록하기","permalink":"/biostar2-docs/update/295/user-photo-enroll-using-webcam"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/update/295/advanced-search.mdx


const frontMatter = {
	id: 'advanced-search',
	title: '고급 검색으로 사용자 검색하기',
	description: '기존 사용자 메뉴의 검색 기능은 이름과 이메일로만 사용자를 검색할 수 있었으나 새롭게 추가된 고급 검색 기능에서는 검색어의 범위를 줄이고 관련 없는 정보를 제외하여 원하는 정보를 정확하게 검색할 수 있습니다.',
	keywords: [
		'고급 검색'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "고급 검색 사용하기",
  "id": "고급-검색-사용하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["기존 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.gnb.user"
      }), " 메뉴의 검색 기능은 이름과 이메일로만 사용자를 검색할 수 있었으나 새롭게 추가된 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.advancedSearch"
      }), " 기능에서는 검색어의 범위를 줄이고 관련 없는 정보를 제외하여 원하는 정보를 정확하게 검색할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "고급-검색-사용하기",
      children: "고급 검색 사용하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.advancedSearch"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-user-menu.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-user-adv-search.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)("div", {
          className: "overflow-x",
          children: (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "항목"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "설명"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.id"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "사용자의 ID에 포함된 키워드로 검색할 수 있습니다."
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.name"
                  })
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["사용자의 이름에 포함된 키워드로 검색할 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.name"
                  }), " 검색은 대소문자를 구분하지 않습니다."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.email"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "사용자의 이메일에 포함된 키워드로 검색할 수 있습니다."
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.department"
                  })
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["사용자가 소속된 부서명이 포함된 키워드로 검색할 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "setting.sever.secure.comm.encrypt.db"
                  }), "가 활성화되어 있는 경우에는 전문 검색만 가능합니다."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.title"
                  })
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["사용자의 직함이 포함된 키워드로 검색할 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "setting.sever.secure.comm.encrypt.db"
                  }), "가 활성화되어 있는 경우에는 전문 검색만 가능합니다."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.telephone"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "사용자의 전화번호가 포함된 키워드로 검색할 수 있습니다."
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.group"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "선택한 그룹에 속한 사용자를 검색할 수 있습니다."
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.accessGroup"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "선택한 출입 그룹에 속한 사용자를 검색할 수 있습니다."
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.status"
                  })
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user.status.active"
                  }), "/", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "user.status.inactive"
                  }), " 상태에 해당하는 사용자를 검색할 수 있습니다."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "user.bioStarOperator"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "선택한 권한 등급에 해당하는 사용자를 검색할 수 있습니다."
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.card"
                  })
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["카드에 포함된 키워드로 검색할 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), "- CSN 카드, Wiegand 카드만 해당합니다."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "setting.server.custom_field.title"
                  })
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "setting.server.custom_field.title"
                  }), "에 포함된 키워드로 검색할 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "setting.server.custom_field.title"
                  }), " 검색은 대소문자를 구분합니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "setting.sever.secure.comm.encrypt.db"
                  }), "가 활성화되어 있는 경우에는 전문 검색만 가능합니다."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.advancedSearch.clearAll"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "모든 필드에 입력된 값을 삭제하거나 기본값 또는 빈칸으로 재설정할 수 있습니다."
                })]
              })]
            })]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "복수의 필드를 이용하여 검색한 경우에는 검색 조건이 모두 일치하는 사용자만 검색됩니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["검색을 원하는 필드에 검색할 키워드를 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.advancedSearch.search"
          }), "을 클릭하세요. 검색 조건이 일치하는 사용자가 검색됩니다."]
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