"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["3809"], {
"8564": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_262_mdx_413_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-262-mdx-413.json
var site_docs_revision_262_mdx_413_namespaceObject = JSON.parse('{"id":"revision/262","title":"버전 2.6.2 (빌드 번호 2.6.2.64)","description":"릴리즈2018-06-25","source":"@site/docs/revision/262.mdx","sourceDirName":"revision","slug":"/revision/262","permalink":"/biostar2-docs/revision/262","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"262","title":"버전 2.6.2 (빌드 번호 2.6.2.64)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"버전 2.6.3 (빌드 번호 2.6.3.73)","permalink":"/biostar2-docs/revision/263"},"next":{"title":"버전 2.6.1 (빌드 번호 2.6.1.10)","permalink":"/biostar2-docs/revision/261"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/revision/262.mdx


const frontMatter = {
	id: 262,
	title: '버전 2.6.2 (빌드 번호 2.6.2.64)',
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
  }, {Separator} = _components;
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2018-06-25"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 및 로그 USB 불러오기, 내보내기 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "XPass D2(XPD2-GKDB)의 PIN 입력을 카드 ID와 동일하게 처리하는 옵션 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "실시간 비디오 보기 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용성 및 문구 표현 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이벤트 로그 조회 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 장치 연결 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "FaceStation 2(FS2-DS), BioLite N2(BLN2-PAB), XPass D2(XPD2-GDB, XPD2-GKDB)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "설정한 일광 절약 시간 종료 이후에도 BioStar 2 로그가 일광 절약 시간으로 표시되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비디오 라이선스를 오프라인으로 활성화할 경우, 비디오 서버가 구동되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "전체 관리자 권한을 가진 사용자가 모바일에서 로그인할 경우 설정 옵션을 변경할 수 없는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.4.1 이하 버전을 사용할 때 HTTPS 기본 포트를 사용하는 상태에서 버전을 업그레이드하면 데이터베이스가 Migration 되지 않고, 로그인 페이지도 출력되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서버가 데이터베이스 접속에 실패한 뒤 재시도하지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "얼굴 템플릿을 삭제했을 때 장치에 자동 동기화되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 로그인ID, 암호, PIN을 설정했음에도 장치 보안 통신 상태가 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "사용 안 함"
          }), "으로 변경 가능한 문제"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OM-120, DM-20 연결 해제된 상태에서 장치 상세 페이지에 진입해도 페이지가 출력되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 서버에서 일광 절약 시간을 설정한 뒤 FaceStation 2 장치에 일광 절약 시간 스케줄을 할당할 경우 적용되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "펌웨어 업그레이드 항목에서 XPass D2, BioLite N2의 모델명이 올바르게 표시되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.6.0 버전을 신규로 설치하면 FaceStation 2 장치에 일광 절약 시간 설정이 불가능한 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일별 스케줄의 시작 날짜 및 휴일 날짜 선택 시 31일이 없는 달에는 한 달이 더해져 출력되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시스템 로그 저장 기간이 120일로 설정 불가능한 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.5.0 버전에서 업그레이드한 뒤 사용자 계정 컨트롤이 기본값일 때 USB Agent 자동 시작이 불가능한 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서버 주소에 문자열을 입력하면 잘못된 IP 주소 알림 팝업이 발생하는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "데이터베이스 포트를 변경하면 비디오 서버가 종료되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 상세 정보에서 우측 상단의 방향 키로 이동할 때, NVR 상세 화면이 출력되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["네트워크 설정을 제외한 초기화를 하면 BioStar 2 이벤트 로그에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "17677"
          }), "로 출력되는 문제"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치를 추가할 때 발생하는 데이터 암호화 관련 팝업 문구 변경"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기존에 구성되어 있는 스케줄 개방 구역을 편집할 때, 같은 RS-485 네트워크로 연결된 장치가 아닌 다른 장치까지 설정이 가능한 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioLite Net, Xpass S2를 추가한 뒤 사용자 ID 종류를 영문자로 변경하면 오류 팝업이 출력되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일광 절약 시간을 설정했음에도 모니터링 메뉴의 층 상태와 구역 상태에는 적용되지 않은 시간이 출력되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "하나 이상의 글로벌 구역의 상태를 변경할 때 한 구역의 상태를 정상으로 변경하면 이후 다른 구역의 상태가 변경되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.6.2 버전으로 업그레이드한 뒤 비디오 라이선스 입력창이 활성화되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입 등급에 속한 출입문을 삭제하면 마스터 장치가 동기화 오류 상태로 전환되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자의 지문을 2개 이상 등록한 뒤 스마트 카드를 등록하면 지문 이미지가 정상적으로 출력되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "네트워크 설정을 제외한 초기화를 실행한 뒤 해당 장치에서 탬퍼가 발생한 경우, 탬퍼 켜짐 알람 팝업에 장치 이름이 출력되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 이름이 존재하는 이미지 로그를 큰 화면으로 출력하면 UI가 정상적으로 출력되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입문을 일괄 편집할 때 설정을 변경하지 않고 확인 버튼을 클릭할 경우 올바르지 않은 알림 팝업이 출력되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "설정의 카드 메뉴에서 열 설정을 변경한 뒤 카드 메뉴에 다시 진입하면 열이 기본값으로 변경되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모니터링 메뉴의 장치 상태와 경보 이력에서 장치 이름으로 필터링할 경우 NVR이 출력되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 네트워크 연결을 해제해도 스케줄 잠금/개방 구역 상태에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "알 수 없음"
          }), "으로 출력되지 않는 문제"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비디오 관리자 권한으로 로그인하면 NVR/카메라 추가, 삭제, 수정 기능이 미동작하는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "스케줄이 비디오 메뉴에 업데이트 되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 관리 메뉴 사용 중 비디오 메뉴에 접근하면 세션 만료 시간 알림이 발생하는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일별 및 휴일 스케줄에 대한 카메라 녹화 이벤트가 정상적으로 동작하지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 메뉴에 구성된 출입문의 설정을 변경해도 변경점이 업데이트되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NVR 설정 정보 업데이트를 실패한 뒤 카메라를 추가할 경우 검색에 실패하는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라에 설정된 스케줄을 삭제한 뒤 비디오 메뉴에서 NVR을 선택할 경우 다음 단계로 넘어가지 않는 문제"
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