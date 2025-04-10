"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["9448"], {
"4237": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_295_mdx_8f9_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-295-mdx-8f9.json
var site_docs_revision_295_mdx_8f9_namespaceObject = JSON.parse('{"id":"revision/295","title":"버전 2.9.5 (v2.9.5.29)","description":"버전 2.9.5 (v2.9.5.29)","source":"@site/docs/revision/295.mdx","sourceDirName":"revision","slug":"/revision/295","permalink":"/biostar2-docs/en/revision/295","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"295","title":"버전 2.9.5 (v2.9.5.29)","description":"버전 2.9.5 (v2.9.5.29)","isTranslationMissing":true},"sidebar":"biostar","previous":{"title":"버전 2.9.6 (v2.9.6.40)","permalink":"/biostar2-docs/en/revision/296"},"next":{"title":"버전 2.9.4 (v2.9.4.29)","permalink":"/biostar2-docs/en/revision/294"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/revision/295.mdx


const frontMatter = {
	id: 295,
	title: '버전 2.9.5 (v2.9.5.29)',
	description: '버전 2.9.5 (v2.9.5.29)',
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
      children: "2024-03-18"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "새 대시보드"
          }), " 기능 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "퀵 액션"
          }), " 기능 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "출입문"
          }), " 메뉴에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "시간 제한 안티패스백"
          }), " 기능 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "웹캠을 이용한 사용자 프로필 사진 및 비주얼 페이스 등록 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자"
          }), " 메뉴 개선"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "사용자"
              }), " 메뉴 화면에서 나타낼 수 있는 열 종류 추가 기간 (", (0,jsx_runtime.jsx)(_components.strong, {
                children: "시작 날짜"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "끝 날짜"
              }), "), ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "권한 등급"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "로그인 ID"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "사용자 IP"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "PIN"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "QR/바코드"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "모바일 카드"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "고급 검색"
              }), " 기능 추가 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ID"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "이름"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "이메일"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "부서"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "직함"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "전화번호"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "그룹"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "출입 그룹"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "상태"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "권한 등급"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "카드"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "커스텀 사용자 필드"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "작업 조건 및 동작"
          }), " 메뉴 개선"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "모니터링"
              }), "에 표시되는 이벤트 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "출입문 릴레이 동작 설정 지원"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "동작에 따른 알림 이메일 발송 기능 추가"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["여러 동작을 하나로 설정할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "동작 목록"
              }), " 추가"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "일괄 편집"
          }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "슈프리마 스마트 카드"
          }), "에 대한 설정이 가능하도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV 불러오기"
          }), "로 덮어쓰기 시 이미 발급된 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "템플릿 온 모바일"
          }), "이 삭제되는 것을 방지할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV 필드"
          }), " 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ToM AoC, ToM SCC"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CoreStation의 무선 안테나 모듈 및 무선 도어락 연결 사양 변경"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "CoreStation 한대에 연결할 수 있는 무선 안테나 모듈: 1대 > 2대"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "무선 안테나 모듈 한대에 연결할 수 있는 무선 도어락: 8대 > 6대"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "연결 가능한 최대 무선 도어락: 8대 > 12대"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "구글 크롬 및 마이크로소프트 엣지 브라우저 업데이트로 인한 인증서 관련 오류 개선"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["별도의 도메인과 사설 인증서를 사용할 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "리포트"
          }), " 메뉴를 사용할 수 없는 문제 (발생 버전: v2.9.3)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Azure 데이터베이스로 설치했을 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "리포트"
          }), " 메뉴를 사용할 수 없는 문제 (발생 버전: v2.9.3)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "카드 프린터"
          }), "를 사용하여 카드에 유니코드 문자를 출력 했을 때 문자가 깨져서 출력되는 문제 (발생 버전: v2.9.3)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "통합 게이트웨이"
          }), " 사용 시 1분 이상 소요되는 작업이 실패하는 문제 (발생 버전: v2.9.3)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["마스터 장치에 OM-120을 두 대 이상 연결하여 사용하는 환경에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "특정 장치 사용자 자동 동기화"
          }), " 모드로 장치를 동기화한 후 인증했을 때 릴레이가 오동작하는 문제 (발생 버전: v2.7.14)"]
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