"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["2273"], {
"5953": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_281_mdx_3d5_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-281-mdx-3d5.json
var site_docs_revision_281_mdx_3d5_namespaceObject = JSON.parse('{"id":"revision/281","title":"버전 2.8.1 (v2.8.1.35)","description":"버전 2.8.1 (v2.8.1.35)","source":"@site/docs/revision/281.mdx","sourceDirName":"revision","slug":"/revision/281","permalink":"/biostar2-docs/en/revision/281","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"281","title":"버전 2.8.1 (v2.8.1.35)","description":"버전 2.8.1 (v2.8.1.35)","isTranslationMissing":true},"sidebar":"biostar","previous":{"title":"버전 2.8.2 (v2.8.2.3)","permalink":"/biostar2-docs/en/revision/282"},"next":{"title":"버전 2.8.0 (v2.8.0.106)","permalink":"/biostar2-docs/en/revision/280"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/revision/281.mdx


const frontMatter = {
	id: 281,
	title: '버전 2.8.1 (v2.8.1.35)',
	description: '버전 2.8.1 (v2.8.1.35)',
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
  "value": "주요 버그 수정",
  "id": "주요-버그-수정",
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
      children: "2020-06-10"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL Server 2019 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 인터페이스상에 표시되는 BioStar 2 저작권 연도 표기를 2020년으로 업데이트"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["개인별 보고서의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "출퇴근 이력"
          }), " 및 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 이력"
          }), " 옵션의 위치를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "근태 기록 종류"
          }), " 항목으로 이동"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "주요-버그-수정",
      children: "주요 버그 수정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 및 사용자에 대한 보기 권한을 가진 관리자로 접속했을 때 장치 ID 및 사용자 ID를 모두 포함한 이벤트 로그만 보여지는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "언어를 일부 다국어로 설정했을 때 근태관리 메뉴의 일부 기능이 정상적으로 동작하지 않는 문제"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "근태관리 메뉴에 대한 보기 권한을 가진 관리자로 접속해도 해당 메뉴의 일부 화면만 보여지는 문제"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "일별 보고서에 대한 PDF 내보내기가 정상적으로 동작하지 않는 문제"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "모든 이력"
              }), " 옵션을 선택해 업데이트한 개인별 보고서에 대한 PDF 내보내기가 정상적으로 동작하지 않는 문제"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "기타 근무 규칙 설정 페이지의 일부 선택 항목이 출력되지 않는 문제"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일부 근태 보고서를 PDF로 내보낼 때 인쇄 미리보기 화면에서 세로 출력 형태로만 표시되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL Server 데이터베이스를 사용하는 환경에서 사용자 ID 종류를 숫자로 설정했을 때 사용자 가져오기 실행 후 사용자 목록이 정상적으로 출력되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 크리덴셜 열이 없는 CSV 파일을 가져올 경우 결과 팝업 메시지가 출력되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 1.x to BioStar 2.x Migration Tool을 이용해 마이그레이션을 실행할 때 BioStar 2의 기존 사용자 및 사용자 그룹이 삭제되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL Server 데이터베이스를 사용하는 환경에서 경고 근무 시간 보고서의 이메일 자동 발신을 주 2회 이상으로 설정해도 주 1회만 전송되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "개인별 보고서가 저장된 필터 조건의 열 설정대로 동작하지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일부 장치, 사용자, 출입문, 엘리베이터에 대해서만 모니터링 권한을 가진 관리자로 접속했을 때 권한이 없는 대상에 대한 실시간 로그 및 경보가 보여지는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "캐시 메모리에 동시에 접근할 수 없도록 수정"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "개인 정보 DB 암호화를 사용할 때 서버 매칭을 설정하면 카드 인증에 실패하는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "간헐적으로 사용자가 근태관리 메뉴에 동기화되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL Windows 인증으로 BioStar 2가 설치되었을 때 버전을 업그레이드할 수 없는 문제"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 ID 종류를 숫자로 설정해도 API 및 장치를 통해 사용자 등록 시 영숫자 ID가 등록되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "생성된 사용자 그룹이 1,000개 이상일 경우 1,000번째 이전의 사용자 그룹을 1,000번째 이후 사용자 그룹의 하위로 이동하면 근태 보고서에 대한 CSV 내보내기가 정상적으로 동작하지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "데이터 파일 가져오기로 사용자 목록을 가져올 때 사용자 ID 종류가 일치하지 않아 가져오기에 실패한 사용자에 대하여 실패 팝업 메시지가 출력되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "setting.conf의 ngrok 관련 경로와 실제 ngrok의 설치 경로가 다를 경우 클라우드가 정상적으로 동작하지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 1.x to BioStar 2.x Migration Tool을 이용해 마이그레이션을 실행할 때 BioStar v1.x에 등록된 카드와 중복되는 카드는 BioStar 2에서 사용자에게 할당할 수 없는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 1.x to BioStar 2.x Migration Tool을 이용해 마이그레이션을 실행할 때 CSN 종류를 LSB로 설정하면 커스텀 ID 마이그레이션에 실패하는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "방문자 관리자 권한으로 접속하면 방문자 설정 화면에 커스텀 방문자 필드가 보여지지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태관리 메뉴의 근무 스케줄에서 부재를 설정할 때 설정 일수가 잘못 계산되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["언어를 한국어로 설정했을 때 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 이력"
          }), " 옵션을 선택해 업데이트한 개인별 보고서를 CSV 또는 PDF로 내보내면 일부 열 이름이 Client와 다르게 출력되는 문제"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["개인별 보고서의 열 설정 항목을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "출퇴근 이력"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 이력"
          }), " 옵션에 따라 다르게 제공하도록 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "개인별 보고서에 대한 PDF 내보내기가 정상적으로 동작하지 않는 문제"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "첫 번째 페이지에 날짜가 출력되지 않는 문제"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "불필요한 페이지가 출력되는 문제"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["언어를 영어 이외의 언어로 설정했을 때 GNB에서 사용자 메뉴를 클릭하여 진입하면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "All Users"
          }), "가 설정한 언어와 상관없이 영어로 표시되는 문제"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일일 근무 규칙을 고정 또는 유동 근무로 설정했을 때 하루 시작 시간과 시간 슬롯의 종료 시간을 동일하게 설정할 수 있는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일일 또는 개인별 보고서의 부재 열이 클릭 가능한 형태로 표시되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1번 전체 관리자 외의 전체 관리자 권한을 가진 사용자 계정으로 접속하였을 때 클라우드를 활성화할 수 없는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서버 설정 내의 불필요한 장치 보안 통신 코드 제거"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 버전 2.7.14에서 CSV 불러오기로 사용자를 추가할 때 CSN 값이 추가되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "동일한 사용자에게 같은 기간에 2개 이상의 스케줄을 설정할 수 있는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 이력"
          }), " 옵션을 선택해 업데이트한 개인별 보고서를 PDF로 내보냈을 때 날짜별 타이틀 정보가 출력되지 않는 문제"]
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