"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["6679"], {
106: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (MDXContent),
  d$: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Details} = _components;
  if (!Details) _missingMdxReference("Details", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Details, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "FaceStation F2 v1.x.x 펌웨어 지원 중단 안내"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "BioStar 2 v2.9.7부터 사용자의 비주얼 페이스를 장치에 동기화할 때 템플릿만 전송하도록 변경하여 동기화 성능을 최적화했습니다."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "따라서 BioStar 2 v2.9.7부터는 장치에서만 템플릿을 추출할 수 있는 FaceStation F2 v1.x.x 펌웨어의 지원이 중단됩니다."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "현재 FaceStation F2의 1.x.x 버전 펌웨어를 사용 중인 경우 BioStar 2 v2.9.7을 사용하기 위해서는 FaceStation F2를 최신 펌웨어로 업그레이드하여 사용하세요."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["최신 펌웨어는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://download.supremainc.com",
        children: "슈프리마 다운로드 센터"
      }), "에서 다운로드할 수 있습니다."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
7521: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_revision_2911_mdx_fe6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-2911-mdx-fe6.json
var site_docs_revision_2911_mdx_fe6_namespaceObject = JSON.parse('{"id":"revision/2911","title":"버전 2.9.11 (빌드 번호 2.9.11.6)","description":"릴리즈2025-09-01","source":"@site/docs/revision/2911.mdx","sourceDirName":"revision","slug":"/revision/2911","permalink":"/biostar2-docs/revision/2911","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"2911","title":"버전 2.9.11 (빌드 번호 2.9.11.6)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"BioStar 2 업그레이드 시 주의사항","permalink":"/biostar2-docs/revision/"},"next":{"title":"버전 2.9.10 (빌드 번호 2.9.10.1)","permalink":"/biostar2-docs/revision/2910"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
// EXTERNAL MODULE: ./docs/common/_fsf2-firmware-support-discontinuation.mdx
var _fsf2_firmware_support_discontinuation = __webpack_require__(106);
;// CONCATENATED MODULE: ./docs/revision/2911.mdx


const frontMatter = {
	id: 2911,
	title: '버전 2.9.11 (빌드 번호 2.9.11.6)',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._fsf2_firmware_support_discontinuation/* toc */.d$, {
  "value": "신규 기능 및 개선",
  "id": "신규-기능-및-개선",
  "level": 2
}, {
  "value": "버그 수정",
  "id": "버그-수정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Badge, BugLists, Cmd, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2025-09-01"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_fsf2_firmware_support_discontinuation/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치의 보안을 향상시키고 무단 접근 및 설정 변경을 방지하기 위한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "마스터 관리자"
          }), " 기능 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MIFARE Plus EV1 카드의 보안 수준 호환성을 위해 SL1, SL3, SL1/SL3 혼용 모드 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SL1: MIFARE Classic 호환 모드"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SL3: AES 기반 고급 보안 모드"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Open JDK 버전 업데이트"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.alert"
          }), " 메뉴에 CoreStation 20, Door Interface 24 장치 관련 이벤트 추가"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 계정에 커스텀 필드 설정이 되어 있을 때 카드 프린트를 할 수 없던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 커스텀 스마트 카드 레이아웃을 적용한 후 장치 상세 페이지 진입 시 에러가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "레귤러"
            }), " 사이트 환경에서 모바일 카드가 발급된 사용자를 CSV로 내보낸 후, 해당 사용자를 삭제하고 다시 가져왔을 때 사용자 상세 페이지에 진입할 수 없는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateOnMobile"
            }), " 기능은 지원하지만, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateOnMobile"
            }), "의 등록은 지원하지 않는 장치의 상세 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateOnMobile"
            }), " 설정이 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.9"
            })]
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