"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["2491"], {
"523": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_update_295_quick_action_mdx_61e_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-update-295-quick-action-mdx-61e.json
var site_docs_update_295_quick_action_mdx_61e_namespaceObject = JSON.parse('{"id":"update/295/quick-action","title":"퀵 액션 사용하기","description":"작업 조건 및 동작 메뉴에 새롭게 추가된 퀵 액션은 긴급 상황에서 출입문의 동작을 빠르게 제어할 수 있도록 해줍니다.","source":"@site/docs/update/295/quick-action.mdx","sourceDirName":"update/295","slug":"/update/295/quick-action","permalink":"/biostar2-docs/update/295/quick-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"quick-action","title":"퀵 액션 사용하기","description":"작업 조건 및 동작 메뉴에 새롭게 추가된 퀵 액션은 긴급 상황에서 출입문의 동작을 빠르게 제어할 수 있도록 해줍니다.","keywords":["퀵 액션"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"새 대시보드 사용하기","permalink":"/biostar2-docs/update/295/new-dashboard"},"next":{"title":"시간 제한 안티패스백 설정하기","permalink":"/biostar2-docs/update/295/timed-apb"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/update/295/quick-action.mdx


const frontMatter = {
	id: 'quick-action',
	title: '퀵 액션 사용하기',
	description: '작업 조건 및 동작 메뉴에 새롭게 추가된 퀵 액션은 긴급 상황에서 출입문의 동작을 빠르게 제어할 수 있도록 해줍니다.',
	keywords: [
		'퀵 액션'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "퀵 액션으로 사용할 작업 조건 및 동작 추가하기",
  "id": "퀵-액션으로-사용할-작업-조건-및-동작-추가하기",
  "level": 2
}, {
  "value": "메인화면에 퀵 액션 버튼 추가하기",
  "id": "메인화면에-퀵-액션-버튼-추가하기",
  "level": 2
}, {
  "value": "퀵 액션 버튼 수정하기",
  "id": "퀵-액션-버튼-수정하기",
  "level": 2
}, {
  "value": "퀵 액션 버튼 삭제하기",
  "id": "퀵-액션-버튼-삭제하기",
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
        sid: "common.triggerAndAction"
      }), " 메뉴에 새롭게 추가된 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.quickAction"
      }), "은 긴급 상황에서 출입문의 동작을 빠르게 제어할 수 있도록 해줍니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.customInterface"
      }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.quickAction"
      }), " 버튼을 추가하면 BioStar 2 메인화면에서 간편하게 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.quickAction"
      }), " 버튼을 클릭하여 다수의 출입문을 한 번에 제어할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "퀵-액션으로-사용할-작업-조건-및-동작-추가하기",
      children: "퀵 액션으로 사용할 작업 조건 및 동작 추가하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.triggerAndAction"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addTriggerAndAction"
          }), "를 클릭한 다음 각 항목을 설정하여 원하는 동작을 추가하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-trigger-action.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.schedule"
          }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Always"
          }), "로 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.quickAction"
          }), "를 체크한 다음 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하여 설정을 저장하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.quickAction"
            }), "은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.schedule"
            }), "이 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Always"
            }), "로 설정된 경우에만 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.quickAction"
            }), "를 체크하면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.triggerAction.event"
            }), "를 선택하지 않아도 동작을 생성할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "메인화면에-퀵-액션-버튼-추가하기",
      children: "메인화면에 퀵 액션 버튼 추가하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickActionLayout"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd"
          }), "를 클릭하여 각 항목을 입력 및 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-add-new-quick-action.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.operatorLevel"
              }), ": 추가하려는 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.quickAction"
              }), "을 실행할 수 있는 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.operatorLevel"
              }), "을 선택하세요. 복수로 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.triggerAction"
              }), ": 실행되게 할 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.triggerAction"
              }), "을 선택하세요. 복수로 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.confirmBeforeRun"
              }), ": 이 옵션을 활성화하면 메인화면에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.quickAction"
              }), " 버튼을 눌렀을 때 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.quickAction"
              }), "의 실행 여부를 묻는 확인 팝업창이 나타납니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요. 확인 팝업창을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "예"
          }), "를 클릭하면 BioStar 2 상단 바에 추가한 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickAction"
          }), " 버튼이 생성됩니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-quick-action-top-bar.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.quickAction"
                }), " 버튼은 메인화면의 상단 바에 최대 4개까지 추가할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["사용자에게 설정된 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.bioStarOperator"
                }), "에 따라 나타나는 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.quickAction"
                }), " 버튼이 다를 수 있습니다."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["상단 바에 생성된 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickAction"
          }), " 버튼을 클릭하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.triggerAndAction"
          }), "에서 설정한대로 동작합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "퀵-액션-버튼-수정하기",
      children: "퀵 액션 버튼 수정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["수정하고자 하는 퀵 액션 버튼 우측 열의 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-quick-action-button-edit.png",
            ico: true,
            alone: true
          }), " 아이콘을 클릭한 다음 원하는 부분을 수정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-custom-interface.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요. 팝업창을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "예"
          }), "를 클릭하면 수정한 사항이 반영됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "퀵-액션-버튼-삭제하기",
      children: "퀵 액션 버튼 삭제하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["삭제하고자 하는 퀵 액션 버튼 우측 열의 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-quick-action-button-del.png",
            ico: true,
            alone: true
          }), " 아이콘을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-quick action-del.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["삭제 확인 팝업창을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요. 팝업창을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "예"
          }), "를 클릭하면 삭제한 사항이 반영됩니다."]
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