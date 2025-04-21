"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["6823"], {
"2518": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
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
"1629": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_299_mdx_029_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-299-mdx-029.json
var site_docs_revision_299_mdx_029_namespaceObject = JSON.parse('{"id":"revision/299","title":"버전 2.9.9 (빌드 번호 2.9.9.XX)","description":"릴리즈2025-05-30","source":"@site/docs/revision/299.mdx","sourceDirName":"revision","slug":"/revision/299","permalink":"/biostar2-docs/revision/299","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"299","title":"버전 2.9.9 (빌드 번호 2.9.9.XX)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"BioStar 2 업그레이드 시 주의사항","permalink":"/biostar2-docs/revision/"},"next":{"title":"버전 2.9.8 (빌드 번호 2.9.8.30)","permalink":"/biostar2-docs/revision/298"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
// EXTERNAL MODULE: ./docs/common/_fsf2-firmware-support-discontinuation.mdx
var _fsf2_firmware_support_discontinuation = __webpack_require__("2518");
;// CONCATENATED MODULE: ./docs/revision/299.mdx


const frontMatter = {
	id: 299,
	title: '버전 2.9.9 (빌드 번호 2.9.9.XX)',
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
    a: "a",
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2025-05-30"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_fsf2_firmware_support_discontinuation/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BVE-3128",
        children: "[BVE-3128]"
      }), " MariaDB 11.4.4 업그레이드"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MariaDB 버전 업그레이드 (11.4.4)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Upgraded MariaDB version (11.4.4)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-162",
        children: "[SW5-162]"
      }), " [BDP-926] Mobile App Renewal"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 Mobile 애플리케이션 업데이트"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Updated BioStar 2 Mobile application."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3613",
        children: "[BE-3613]"
      }), " 기존 Active Directory 동기화 개선"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "액티브 디렉토리"
        }), " 동기화 성능 개선"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3615",
        children: "[BE-3615]"
      }), " Microsoft Entra ID(Azure Active Directory) 연동"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Microsoft Entra ID(Azure Active Directory) 연동하여 BioStar 2에 로그인할 수 있도록 지원"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3671",
        children: "[BE-3671]"
      }), " BioStar 에 연결되는 BioMini 제품 종류에 따른 아이콘 표시 지원"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3678",
        children: "[BE-3678]"
      }), " BS3, XS2 장치에서 PIN 입력용 숫자 키패드 옵션 설정"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3705",
        children: "[BE-3705]"
      }), " CS-20 지원 2차 및 DI-24 지원"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3731",
        children: "[BE-3731]"
      }), " [보안] 모의 해킹 결과 4.4.1 우회 페이로드 입력 가능 관련"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3732",
        children: "[BE-3732]"
      }), " [보안] 모의 해킹 결과 4.4.2 악성 코드 파일 업로드 관련"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3733",
        children: "[BE-3733]"
      }), " [보안] 모의 해킹 결과 4.4.3 Stored-XSS 취약점 처리"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3743",
        children: "[BE-3743]"
      }), " XP2-MHPB 장치 지원"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3744",
        children: "[BE-3744]"
      }), " XS2-Q 모델에서 Camera QR 지원"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3745",
        children: "[BE-3745]"
      }), " CS-40 이름 수정 건"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BE-3768",
        children: "[BE-3768]"
      }), " 컨트롤러 Custom Smart Card 미지원, 슬레이브가 지원일 때, 설정을 지원하는 방안"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-217",
        children: "[BF-217]"
      }), " 암복호화 마이그레션시 Java 서버 TA DB 연결 끊어져서 에러 나는 버그"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1162",
        children: "[BF-1162]"
      }), " db convertor validation check 에 대한 System log 기록 및 back table 삭제 기능 추가 2.8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1320",
        children: "[BF-1320]"
      }), " OLE DB + MSSQL 2022 지원"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1351",
        children: "[BF-1351]"
      }), " 장치 동기화 시 BS_ERR_INVALID_SLOT_NO = -702 응답을 받았지만 사용자 재 동기화 하는 문제 2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1596",
        children: "[BF-1596]"
      }), " 커스텀 계정이 사용자 그룹 1100개 권한을 가진 경우 로그인시 사용자 조회 안됨. 2.9.5"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1798",
        children: "[BF-1798]"
      }), " C서버 error log callstack 추가"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1815",
        children: "[BF-1815]"
      }), " Visual Face Migration 대상 개수 표기 오류 2.9.7"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1860",
        children: "[BF-1860]"
      }), " ToM 을 지원하지만, ToM 등록을 미지원하는 장치의 상세 페이지에 ToM Enrollment 메뉴가 보이는 문제. 2.9.4"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1865",
        children: "[BF-1865]"
      }), " [성능 개선] 출입그룹에 속한 사용자 조회 View 쿼리 성능 개선 2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1876",
        children: "[BF-1876]"
      }), " 네트워크 트래픽 제한 설정 버그 수정 2.9.1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1881",
        children: "[BF-1881]"
      }), " TA 레지스터된 환경에서 바이오스타 로그아웃시 캐시 초기화 안되는 문제"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1885",
        children: "[BF-1885]"
      }), " FaceStation F2(ToM 지원 Version) 의 Device Detail 에 ToM Enrollment 의 Info Message 가 잘못 표기되는 문제 2.9.4"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1890",
        children: "[BF-1890]"
      }), " C 서버 기동 시 서버 정보 로그 추가"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1895",
        children: "[BF-1895]"
      }), " AC사용자 그룹 변경에 따른 LSTMOD 추가"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1898",
        children: "[BF-1898]"
      }), " mssql 스마트카드 mifare_primary_key 빈값으로 넣는경우 쿼리 에러"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BF-1919",
        children: "[BF-1919]"
      }), " FSF2, BS3 T_DEVCAPS MX_SYNC_CNT DB 누락 2.9.8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BJ-600",
        children: "[BJ-600]"
      }), " BioStar2 2.7.1에서 2.8.11 이상 버전으로 업그레이드 후 BioStar 2 QR 발급 정보가 Audit Trail에 기록 되지 않는 문제 2.8.11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BJ-626",
        children: "[BJ-626]"
      }), " 특정 사용자 그룹의 사용자를 Select All로 선택하여 Batch Edit 수정 시, Audit Trail에 '모든 사용자'로 출력되는 문제 2.7.1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BJ-682",
        children: "[BJ-682]"
      }), " 사용자에 크리덴셜 추가를 위해 TCP/IP로 추가된 Slave 장치로 Scan 시 팝업 문구 개선 2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BJ-693",
        children: "[BJ-693]"
      }), " User ID와 동일한 ID를 가진 Card 인증 실패 시 로그에 카드 ID(사용자 이름)로 출력 되는 현상 2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BJ-1786",
        children: "[BJ-1786]"
      }), " 오프라인 라이선스 활성화 오류 발생 시 에러 팝업이 발생하지 않음 2.7.14"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BJ-1909",
        children: "[BJ-1909]"
      }), " MSSQL 설치 시 Server IP에 Host Name 입력을 통해 설치할 수 있도록 개선 2.6.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BJ-1936",
        children: "[BJ-1936]"
      }), " 비디오 개선 작업 2.9.9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BVE-3159",
        children: "[BVE-3159]"
      }), " Spring Cloud Gateway 적용"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BVE-3199",
        children: "[BVE-3199]"
      }), " 사용자/장치/도어 그룹 트리 구조 UI 개선"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-371",
        children: "[TA-371]"
      }), " External service interaction (HTTP) 취약점 이슈 2.2.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-374",
        children: "[TA-374]"
      }), " MSSQL 연결시 TLS 1.2 지원 2.2.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-408",
        children: "[TA-408]"
      }), " System Login 로직 수정 2.8.9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-513",
        children: "[TA-513]"
      }), " \"/punch_logs/modified\" api 호출시 user_id를 넣지 않아도 되며, 넣지 않으면 전체 사용자에 대한 검색이 된다. 2.8.11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-525",
        children: "[TA-525]"
      }), " 세션 만료된 상태에서 메뉴 선택시 로그아웃이 되지 않는다. 2.2.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-547",
        children: "[TA-547]"
      }), " MSSQL 윈도우윈증시에 DB와 연결끊기면 다시 연결이 되지 않음 2.7.14"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-581",
        children: "[TA-581]"
      }), " MSSQL ODBC 지원 with MSSQL 2022 2.7.14"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-627",
        children: "[TA-627]"
      }), " Individual 타입 리포트 생성 혹은 api 호출시 응답이 오래 걸리는 경우에 대한 수정 2.8.5"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-636",
        children: "[TA-636]"
      }), " Shift에서 Meal Duduction을 특정시간에 대해서 하나만 선택할 경우 나오는 경고팝업 버그 수정 2.9.6"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-640",
        children: "[TA-640]"
      }), " 사용자 동기화시 LSTMOD 값 외에 새로운 값을 이용하여 동기화를 진행한다. 2.8.9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-649",
        children: "[TA-649]"
      }), " Schedule에서 Leave 가 설정되어 있는 추가된 사용자를 제거할때 발생하는 버그 수정 2.9.6"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/TA-663",
        children: "[TA-663]"
      }), " AC 서버가 가동하지 않는 경우 동기화를 진행하지 않는다. 2.8.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-798",
        children: "[SW5-798]"
      }), " slave 에서 secure tamper on 표시."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-789",
        children: "[SW5-789]"
      }), " slave장치에서 tamper 안나오는 기능 수정."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-768",
        children: "[SW5-768]"
      }), " [Document Storage] Refactor Directive File Upload"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-767",
        children: "[SW5-767]"
      }), " [Document Storage] Refactor staging 2.9.9 e2e"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-766",
        children: "[SW5-766]"
      }), " [Dashboard] Refactor staging 2.9.9 e2e timing issue"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-759",
        children: "[SW5-759]"
      }), " [Report] Refactor E2E Test Code Staging 2.9.9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-708",
        children: "[SW5-708]"
      }), " 30. Support for XP2-MAPB-H on BioStar 2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-702",
        children: "[SW5-702]"
      }), " 31. Remove tab in MSSQL GO Statement"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-660",
        children: "[SW5-660]"
      }), " [BDP-1228] xp2 키 패드 백라이트 지원 및 기능 확인."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-639",
        children: "[SW5-639]"
      }), " 29. DST configuration not applied when generate report with two DST configurations activated"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-638",
        children: "[SW5-638]"
      }), " 28. DST configuration don't apply on dashboard when two DST configurations activated"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-622",
        children: "[SW5-622]"
      }), " 27. [Report] Custom Report with dynamic time filter returns empty result if using from 0 days back at 00:00 to 0 days back at 23:59"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-480",
        children: "[SW5-480]"
      }), " 25. Configure Mifare Plus Setting."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-479",
        children: "[SW5-479]"
      }), " 24. [BDP-1055] Removing some of the input restrictions for the SIP Username, Authorization ID fields"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-470",
        children: "[SW5-470]"
      }), " 20. [cloud] cloud 설정을 off 하는 경우 에러 나는 문제."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-463",
        children: "[SW5-463]"
      }), " 19. Create test code based on 2.9.8 projects (416 items)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-461",
        children: "[SW5-461]"
      }), " 18. [cloud] port 외부망 접근 문제 로 인한 cloud 설정 후 Register 시 발생 메시지 개선"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-460",
        children: "[SW5-460]"
      }), " 17. [cloud] [BDP-391] email activation 을 BioStar2 에서 메일을 재발 송 할 수 있도록 기능 제공."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-446",
        children: "[SW5-446]"
      }), " 9. [Backup and Restore] Biostar 2 web-app shows sysbackup.conf not found error when fresh install Biostar 2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-441",
        children: "[SW5-441]"
      }), " 8. Create Quick Action fetch API Available Trigger&Action Twice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-435",
        children: "[SW5-435]"
      }), " [Backup and Restore]: Floating Frequency dropdown when zoom in the screen"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-424",
        children: "[SW5-424]"
      }), " 6. Display error when printing device without any device data if there is a change in user data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-419",
        children: "[SW5-419]"
      }), " 5. Logging/error handling when backup fails."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-417",
        children: "[SW5-417]"
      }), " 4. [FISS-4193] User Camera Integration return incorrect UI when access with HTTP and IP address"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-411",
        children: "[SW5-411]"
      }), " 3. [Custom Field][Print] Custom Field value in SVG and PDF switch with other Custom Field after edit the Custom Field order from Setting Server"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/SW5-290",
        children: "[SW5-290]"
      }), " 2. Update the card type that uses the - sign on report all cards"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3192",
        children: "[FISS-3192]"
      }), " [Suprema LATAM][Sautech ltda.][Fiduciaria Central] BioStar 2.8.15에서 4월, 5월 근태 리포트 결과가 Absence 2.8.13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3234",
        children: "[FISS-3234]"
      }), " [슈프리마]5월에서 6월 넘어가면서 이벤트 로그에는 있으나 근태가 결근으로 처리되고 있는 증상(모든 임직원) 2.8.13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3245",
        children: "[FISS-3245]"
      }), " [Control A] BioStar 2 offline license를 적용하였으나 적용되지 않음 2.8.12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3272",
        children: "[FISS-3272]"
      }), " [Suprema LATAM][Colombia][Books and books 0001] BioStar 2 TA Report Absence 이슈 2.8.13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3316",
        children: "[FISS-3316]"
      }), " [Daniel Raines Communications] BioStar 2에서 db-converter.exe를 여러 번 호출 할 때plain-text로 값이 전달되며, DB비밀번호가 포함 됩니다.,"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3380",
        children: "[FISS-3380]"
      }), " [Johnson Controls] BEW2 Error 1013 Issue 2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3406",
        children: "[FISS-3406]"
      }), " [ScreenCheck] Individual report에 IN/OUT 결과가 표시되지 않음 2.8.13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3470",
        children: "[FISS-3470]"
      }), " BioStar2 2022년 12월 ~ 2023년 1월 근태데이터 누락증상 2.8.13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3484",
        children: "[FISS-3484]"
      }), " [Besense] BioStar 2 업그레이드 후 DB 암호화를 활성화했던 현장에서 복호화가 되지 않음 2.8.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3496",
        children: "[FISS-3496]"
      }), " [Kimaldi] Cloud 활성화 계정 적용 불가 \"there is no data to process\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3503",
        children: "[FISS-3503]"
      }), " [산호인터네셔널] BioStar2(앱) 서버 접속 불가"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3564",
        children: "[FISS-3564]"
      }), " [슈프리마] 바이오스타 모바일 로그인 불가"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3569",
        children: "[FISS-3569]"
      }), " [Brikom EntryPass] BioStar 2 Cloud subdomain 생성 후, PC에서는 접속이 가능하나 Mobile app에서는 접속이 불가능한 현상이 확인됨"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3624",
        children: "[FISS-3624]"
      }), " [Suprema US] 웹상에서는 Cloud 도메인으로 접속이 가능하나 BioStar Mobile App으로는 접속 불가 현상"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3632",
        children: "[FISS-3632]"
      }), " [Suprema EMEA] BioStar 2 Mobile APP 사용 불가 - 로그인 정보가 만료되었습니다 or ACE Error Code 101"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3634",
        children: "[FISS-3634]"
      }), " [Entripas][GO-WORK] log 파일 사이즈 급증, 메모리 활용률 문제 이슈"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3935",
        children: "[FISS-3935]"
      }), " [Hanman] OpenJDK is affected by multiple vulnerabilities. 2.3.0(처음부터)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-3939",
        children: "[FISS-3939]"
      }), " [키말디] 특정 사용자에 대한 T&A Report를 생성하고자 할 때, 사용자 검색창에 어떠한 사용자도 나타나지 않는 문제가 발생 2.8.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4038",
        children: "[FISS-4038]"
      }), " [Suprema ME - ELM] 바이오스타의 이벤트 로그가 Database에 실시간 반영되지 않는 현상이 발생 - 긴급 처리 요청 건"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4073",
        children: "[FISS-4073]"
      }), " [Suprema JP - 세큐아, enduser: LineYahoo] 다음의 2가지 문제가 발생 (이슈1. \"1:1 인증 카드 인증 실패 시 userID(user name) 가 로그에 기록되는 현상 / 이슈2. -702 에러가 발생\" 2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4091",
        children: "[FISS-4091]"
      }), " [Suprema India] BioStar 2 V 2.9.4 TA 기록이 되지 않는 현상 2.8.13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4104",
        children: "[FISS-4104]"
      }), " [SUPREMA UK][TESCO] BioStar 2.9.5 - BioStar 2 TA 서비스가 시작 중일 때, TA 메뉴 클릭하면 자동 로그아웃, Unified Gateway 실행 중일 때도 자동 로그아웃 증상 2.7.14"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4133",
        children: "[FISS-4133]"
      }), " [Suprema India] TA Report 생성 불가 이슈 2.8.13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4172",
        children: "[FISS-4172]"
      }), " [긴급][Meyer] BioStar 2 2.9.6 License (오프라인) 활성화 시도 했으나, [Activated 반영 성공] 또는 [실패 메시지]가 나타나지 않는 증상 2.8.12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4193",
        children: "[FISS-4193]"
      }), " [Suprema UK] BioStar 2의 사용자 이미지 추가 UI/UX 표기 이상 현상 2.9.5"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4288",
        children: "[FISS-4288]"
      }), " [Nedo Corporation] /tna/report.json 호출 시, 너무 오래 걸리고 데이터가 돌아오지 않을 때도 있음 2.8.5"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4294",
        children: "[FISS-4294]"
      }), " [Suprema ME][Centena Saudi Arabia] 8월부터 ta 리포트가 생성되지 않고, ta db 에 archivedpunchlog 도 없음.  2.8.13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4297",
        children: "[FISS-4297]"
      }), " [STC (Saudi Telecommunication Company)] User>Visual Face Migration 선택 (대쉬보드의 Visual Face유저와 다름) 2.9.7"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4309",
        children: "[FISS-4309]"
      }), " [긴급][Suprema ME][Petrojet Time and attendance system] AC와 TA 사용자 수가 다른 문제 2.8.9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4325",
        children: "[FISS-4325]"
      }), " [Suprema JP - 세큐아] custom 계정을 사용하는 현장에서 특정 시나리오를 따를 때, edit/read 권한이 없는 Access group에 대해서도 read/edit가 가능한 문제가 발생함"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4338",
        children: "[FISS-4338]"
      }), " [Suprema India -Nedo Corporation] TA 스케쥴에서 사용자를 삭제했을 때, 삭제 후의 사용자수가 정상적으로 카운트되지 않는 현상이 발생 2.9.6"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4347",
        children: "[FISS-4347]"
      }), " [Suprema ME][stcpay] Active Directory에서 User Group Filter 활성화되어 있다가 비활성화 되어 있는 문제 2.7.8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4368",
        children: "[FISS-4368]"
      }), " [Suprema LATAM][Datasys Group S.A] 특정 달에 ta 리포트에 펀치 로그가 안 보임 2.8.13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://jira.suprema.co.kr/browse/FISS-4402",
        children: "[FISS-4402]"
      }), " [Suprema ME][Avensys] 모든 사용자의 ta report 를 불러올때 특정 알파벳의 사용자들은 안 나옴 2.9.8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(BugLists, {
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "http://bss-jira.suprema.co.kr:8880/browse/TA-265",
          children: "[TA-265]"
        }), " Archived 테이블이 올바르게 생성 되지 않았는데 계속 해서 새로 만들려고 시도하는 경우 2.8.13"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["새로운 월이 시작된 후 근태 기록 조회 시 해당 월의 근태 기록이 조회되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.13"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The TA Report for the current month is not displayed when looked up after the start of a new month. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.13"
            })]
          }), "\n"]
        }), "\n"]
      })]
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