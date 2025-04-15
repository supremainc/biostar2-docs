"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["647"], {
"2972": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_update_295_timed_apb_mdx_439_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-update-295-timed-apb-mdx-439.json
var site_docs_update_295_timed_apb_mdx_439_namespaceObject = JSON.parse('{"id":"update/295/timed-apb","title":"시간 제한 안티패스백 설정하기","description":"시간 제한 안티패스백은 사용자가 출입 인증 후 동일한 장치에 다시 인증하고자 할 때 발생하는 안티패스백이 재인증을 할 수 있을 때까지 걸리는 초기화 시간을 설정하여 빈번한 입실을 제한할 수 있습니다.","source":"@site/docs/update/295/timed-apb.mdx","sourceDirName":"update/295","slug":"/update/295/timed-apb","permalink":"/biostar2-docs/update/295/timed-apb","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"timed-apb","title":"시간 제한 안티패스백 설정하기","description":"시간 제한 안티패스백은 사용자가 출입 인증 후 동일한 장치에 다시 인증하고자 할 때 발생하는 안티패스백이 재인증을 할 수 있을 때까지 걸리는 초기화 시간을 설정하여 빈번한 입실을 제한할 수 있습니다.","keywords":["시간 제한 안티패스백"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"퀵 액션 사용하기","permalink":"/biostar2-docs/update/295/quick-action"},"next":{"title":"고급 검색으로 사용자 검색하기","permalink":"/biostar2-docs/update/295/advanced-search"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/update/295/timed-apb.mdx


const frontMatter = {
	id: 'timed-apb',
	title: '시간 제한 안티패스백 설정하기',
	description: '시간 제한 안티패스백은 사용자가 출입 인증 후 동일한 장치에 다시 인증하고자 할 때 발생하는 안티패스백이 재인증을 할 수 있을 때까지 걸리는 초기화 시간을 설정하여 빈번한 입실을 제한할 수 있습니다.',
	keywords: [
		'시간 제한 안티패스백'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "출입문에 시간 제한 안티패스백 설정하기",
  "id": "출입문에-시간-제한-안티패스백-설정하기",
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
        sid: "timedAPB.field"
      }), "은 사용자가 출입 인증 후 동일한 장치에 다시 인증하고자 할 때 발생하는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.antiPassBack"
      }), "이 재인증을 할 수 있을 때까지 걸리는 초기화 시간을 설정하여 빈번한 입실을 제한할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "timedAPB.field"
        }), "은 별도의 BioStar 2 라이선스 없이 사용할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "출입문에-시간-제한-안티패스백-설정하기",
      children: "출입문에 시간 제한 안티패스백 설정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.door"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addDoor"
          }), "를 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.information"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.configuration"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.option"
          }), " 등을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-295-add-door.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["무선 도어락으로 출입문을 설정한 경우 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.field"
                }), "을 사용할 수 없습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.field"
                }), "은 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.entryDevice"
                }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.exitDevice"
                }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.doorRelay"
                }), "가 선택된 상태에서만 설정할 수 있습니다."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["출입문의 보안을 강화하기 위해 사용하는 기능이므로 ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "door.entryDevice"
                    }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "door.exitDevice"
                    }), " 중 하나만 선택된 상태에서도 설정할 수 있습니다."]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.field"
                }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.apbUseDoorSensor"
                }), " 기능은 동시에 사용할 수 없습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.field"
                }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.antiPassBack"
                }), "은 동시에 사용할 수 없습니다."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.field"
          }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "사용"
          }), "으로 활성화하고 원하는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime"
          }), "을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-295-timed-apb.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.resetTime"
            }), ": 입력 단위는 분(min.)이며 기본값은 10분이고 입력 가능한 시간의 범위는 0 ~ 60분입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.resetTime"
            }), "을 0분으로 설정하면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.field"
            }), "이 동작하지 않습니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요.", (0,jsx_runtime.jsx)("br", {}), "설정 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.field"
          }), "이 발생하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.monitoring"
          }), " 메뉴에서 이벤트 및 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "이미지 로그"
          }), "를 확인할 수 있습니다."]
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