"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["9208"], {
3982: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_revision_2817_mdx_011_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-2817-mdx-011.json
var site_docs_revision_2817_mdx_011_namespaceObject = JSON.parse('{"id":"revision/2817","title":"버전 2.8.17 (빌드 번호 2.8.17.62)","description":"릴리즈2022-08-25","source":"@site/docs/revision/2817.mdx","sourceDirName":"revision","slug":"/revision/2817","permalink":"/biostar2-docs/revision/2817","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"2817","title":"버전 2.8.17 (빌드 번호 2.8.17.62)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"버전 2.9.0 (빌드 번호 2.9.0.80)","permalink":"/biostar2-docs/revision/290"},"next":{"title":"버전 2.8.16 (빌드 번호 2.8.16.56)","permalink":"/biostar2-docs/revision/2816"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/revision/2817.mdx


const frontMatter = {
	id: 2817,
	title: '버전 2.8.17 (빌드 번호 2.8.17.62)',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
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
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2022-08-25"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 관리 보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "서버 설정 시 지원하지 않는 Cipher suite 사용을 제한"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "DB 드라이버 최신 버전 적용"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "jQuery 최신 버전 적용"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "웹 소켓을 통한 근태 관리 API 사용 시 보안 확인 절차 추가"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일정 기간이 지난 근태 기록 삭제 기능 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시간 기록을 생성하는 API에 장치 이름(devnm)을 사용자 정의로 지정할 수 있도록 개선"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일일 근무 규칙을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "유동 근무"
            }), "로 선택했을 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "출근 시간 인정 범위"
            }), "를 00시부터로 설정할 수 없는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일일 근무 규칙을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "유동 근무"
            }), "로 선택했을 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "시작 시간"
            }), "을 00시부터 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "하루 시작 시간"
            }), " 사이로 설정할 수 없는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["서버 프로토콜을 HTTPS에서 HTTP로 변경할 경우 웹에서 근태 관리 메뉴에 접속할 수 없는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MS SQL Server 데이터베이스를 사용하는 환경에서 사용자의 이름이 특정 언어로 설정된 경우 이름 검색이 안 되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일일 근무 규칙에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 인증 출근 & 마지막 인증 퇴근"
            }), " 옵션과 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "식사 공제"
            }), "의 옵션을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "고정"
            }), "으로 동시에 설정할 경우 근태 기록의 시간이 올바르게 표기되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["근태 관리 설정에서 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 모드"
            }), "가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "수동 변경"
            }), "일 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 등록 필요"
            }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "예"
            }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "아니오"
            }), "로 변경할 수 없는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자를 다른 사용자 그룹으로 이동하고 기존 사용자 그룹을 삭제할 경우 근태 관리 메뉴의 사용자가 삭제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["동시 접속 환경에서 근태 기록 보고서 검색 시 조회되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["근태 기록 검색 조건 설정 시 열 설정에서 사용자 정의로 생성한 열을 적용해도 한 번에 적용되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["근태 기록 검색 조건에서 사용자 그룹을 검색하고, 검색 결과를 삭제한 뒤 다시 검색할 경우 일부 사용자 그룹만 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에서 삭제된 사용자 삭제된 사용자가 근태 관리 메뉴에 계속 남아 있는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["T&A 서비스 시작 후 장치 설정 변경 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "로그인 필요"
            }), " 알림 팝업이 지속적으로 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.9"
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