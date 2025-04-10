"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["4820"], {
"823": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_297_mdx_f70_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-297-mdx-f70.json
var site_docs_revision_297_mdx_f70_namespaceObject = JSON.parse('{"id":"revision/297","title":"버전 2.9.7 (v2.9.7.41)","description":"버전 2.9.7 (v2.9.7.41)","source":"@site/docs/revision/297.mdx","sourceDirName":"revision","slug":"/revision/297","permalink":"/biostar2-docs/en/revision/297","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"297","title":"버전 2.9.7 (v2.9.7.41)","description":"버전 2.9.7 (v2.9.7.41)","isTranslationMissing":true},"sidebar":"biostar","previous":{"title":"버전 2.9.8 (v2.9.8.30)","permalink":"/biostar2-docs/en/revision/298"},"next":{"title":"버전 2.9.6 (v2.9.6.40)","permalink":"/biostar2-docs/en/revision/296"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/revision/297.mdx


const frontMatter = {
	id: 297,
	title: '버전 2.9.7 (v2.9.7.41)',
	description: '버전 2.9.7 (v2.9.7.41)',
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "릴리즈",
  "id": "릴리즈",
  "level": 3
}, {
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
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h3, {
      id: "릴리즈",
      children: "릴리즈"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2024-08-30"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 장치 연결 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BioEntry W3"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기존의 ID + 비밀번호 조합에 지문 스캐너를 이용한 지문 인증 단계를 추가하여 사용자 계정의 보안을 향상시킬 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다중 인증 로그인"
          }), " 기능 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "지원되는 지문 스캐너"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioMini"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioMini Plus 2"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 동기화 시 비주얼 페이스에서 실제 이미지를 제외한 템플릿만 전송하여 동기화 소요 시간이 단축되도록 동기화 프로토콜 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "전문가 설정"
          }), " 메뉴 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "비주얼 페이스 이미지 저장하기"
              }), " 기능 추가"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "비주얼 페이스에 실제 이미지와 템플릿을 모두 저장하도록 하거나 실제 이미지는 저장하지 않고 템플릿만 저장하도록 설정할 수 있는 기능 지원"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "웹 서버 cipher suite 관련 보안 취약점 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "커스텀 사용자 필드"
          }), "에 대한 XSS 보안 취약점 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "장치 라이선스"
          }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "미지원"
          }), " 장치에 대한 안내 툴팁 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다국어 리소스 업데이트"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "프랑스어, 이탈리아어, 일본어, 루마니아어"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "데이터베이스에 올바르지 않은 문자열이 존재하는 경우 서버가 종료되는 문제 (발생 버전: v2.5.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "특정 장치 사용자 자동 동기화"
          }), " 모드에서 동기화에 실패한 사용자를 연결이 끊어진 장치에 재시도하는 문제 (발생 버전: v2.8.15)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "글로벌 프로토콜 사용 시 global check violation invalid packet에 대한 오류 수정 (발생 버전: v2.8.11)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "지문 LFD"
          }), " 기능을 지원하는 특정 장치의 상세 페이지에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "지문 LFD"
          }), " 기능 UI가 보이지않는 문제 (발생 버전: v2.9.0)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["FaceStation F2와 FaceStation 2를 함께 사용하는 환경에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 자동 동기화"
          }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 장치(장치 사용자 변경 포함)"
          }), " 모드를 사용 중일 때 BioStar 2 서버에 얼굴이 등록되어 있는 사용자에게 FaceStation F2에서 비주얼 페이스를 추가하는 경우 BioStar 2 서버에 비주얼 페이스가 추가되지 않는 문제 (발생 버전: v2.8.6)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["연결 해제된 장치에 비주얼 페이스 템플릿을 사용하여 스마트 카드를 발급할 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "미할당 카드"
          }), " 및 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "사용 정지된 카드"
          }), "에 추가되는 문제 (발생 버전: v2.9.6)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치의 이름을 다른 장치에서 이미 사용 중인 중복된 이름으로 변경했을 때 간헐적으로 오류 팝업 메시지가 나타나지 않는 문제 (발생 버전: v2.0.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "웹캠을 사용하여 프로필 사진 등록 시 GPU 사용량이 비정상적으로 상승한 후 감소하지 않는 문제 (발생 버전: v2.9.5)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자"
          }), " 메뉴에서 목록에 사용자가 표시되지 않는 문제 (발생 버전: v2.9.5)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "커스텀 리포트"
          }), " 생성 시 리포트 결과의 이벤트가 상당 수 이상일 경우 전체 데이터가 생성되지 않는 문제 (발생 버전: v2.9.3)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL Server 데이터베이스를 사용하는 환경에서 시스템 백업 및 복원에 실패하는 문제 (발생 버전: v2.9.3)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["크롬(Chrome)의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Keyboard focusable scrollers"
          }), " 기능이 활성화되어 있는 경우, 스크롤이 있는 드롭다운 목록에서 원하는 옵션을 제대로 선택할 수 없는 문제 (발생 버전: v2.0.0)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL Windows 인증으로 BioStar 2를 설치한 환경에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2 Restore"
          }), "를 통한 데이터베이스 복원이 실패하는 문제 (발생 버전: v2.9.3)"]
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