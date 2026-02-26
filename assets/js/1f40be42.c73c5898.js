"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["2968"], {
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
5104: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_revision_2912_mdx_1f4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-2912-mdx-1f4.json
var site_docs_revision_2912_mdx_1f4_namespaceObject = JSON.parse('{"id":"revision/2912","title":"버전 2.9.12 (빌드 번호 2.9.12.29)","description":"릴리즈2026-02-27","source":"@site/docs/revision/2912.mdx","sourceDirName":"revision","slug":"/revision/2912","permalink":"/biostar2-docs/revision/2912","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"2912","title":"버전 2.9.12 (빌드 번호 2.9.12.29)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"BioStar 2 업그레이드 시 주의사항","permalink":"/biostar2-docs/revision/"},"next":{"title":"버전 2.9.11 (빌드 번호 2.9.11.6)","permalink":"/biostar2-docs/revision/2911"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
// EXTERNAL MODULE: ./docs/common/_fsf2-firmware-support-discontinuation.mdx
var _fsf2_firmware_support_discontinuation = __webpack_require__(106);
;// CONCATENATED MODULE: ./docs/revision/2912.mdx


const frontMatter = {
	id: 2912,
	title: '버전 2.9.12 (빌드 번호 2.9.12.29)',
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
    code: "code",
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
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
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2026-02-27"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_fsf2_firmware_support_discontinuation/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 장치 연결 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 3 Max"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass Q2"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2에서 장치의 이벤트 로그를 삭제할 수 있는 기능 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar X 지원 펌웨어가 설치된 장치를 BioStar 2에서 사용할 때, 신규 이벤트 로그가 정상적으로 출력되도록 업데이트"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.remoteAccess.root"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 관리 보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "PDF 내보내기 시 발생하는 URL 노출 및 비인가 접근 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Minimist 라이브러리 보안 취약점에 따른 버전 업데이트"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "스크립트 파일 내 하드코딩된 테스트 계정 정보 제거"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "DB 비밀번호 암호화 방식 강화"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Open JDK 버전 업데이트"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시스템 보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "웹 서버 보안 헤더(HTTP Security Headers) 적용"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "데이터베이스 접속 비밀번호의 암호화 저장 방식 강화"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Java 서버 보안 취약점 관련 내부 라이브러리 업데이트"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "디렉토리 연동 페이지의 비밀번호 보안 강화"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 목록 페이지의 접근 권한 관련 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SQL Injection 보안 취약점 개선"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "보안 강화를 위해 2.9.8 이상 버전으로 업그레이드 시, 불필요한 Redis가 설치되어 있을 경우 삭제를 권고하는 팝업 메시지 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2.9.8 이하의 버전에서 업그레이드 시, 기존 사용자의 데이터를 보호하기 위해 첫 동기화 과정에서 연동 제외 설정을 자동으로 적용하도록 개선"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입 인증 로그가 동기화되지 않아 근태 보고서가 정상적으로 출력되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["관리자 권한이 없는 사용자가 API를 통해 타인의 리포트 필터를 조회할 수 있는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["개인 정보 DB 암호화 설정 변경 시, 마이그레이션이 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["동일한 장치가 소집 구역과 글로벌 하드 안티패스백이 동시에 구성된 경우, 안티패스백 기능이 정상적으로 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["비주얼 페이스 마이그레이션 시, 대상 데이터가 존재함에도 결과가 0건으로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "비주얼 페이스 마이그레이션 대상이 없는 경우, 불필요한 진행을 막고 알림 메시지를 표시하도록 개선"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 이름에 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<<<"
            }), " 또는 ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">>>"
            }), " 기호가 포함된 경우 상세 페이지에서 장치 제목 부분이 비정상적으로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.11"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장기 미출입 사용자가 모바일 카드 등 특정 크리덴셜로 인증에 성공하더라도 장기 미출입 목록에서 제외되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 비주얼 페이스를 동기화할 때 서버가 종료되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStation 2a에서 USB로 내보낸 이벤트 로그 파일을 가져올 때 오류가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "button.transferToDevice"
            }), " 기능을 통해 대량의 사용자 데이터를 전송할 때, 서버 메모리 사용량이 증가한 후 감소하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.7"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["감사 로그 데이터가 과도하게 누적된 경우, 데이터 검증 과정에서 메모리 부족으로 인해 서버가 정상적으로 시작되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.7"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.mask.useMask"
            }), " 설정을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.mask.checkModeDenyMask"
            }), "으로 변경할 때, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.maskOnlyMode"
            }), "이 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.authAfterMode"
            }), "으로 자동 전환되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["서버 재시작 후 메모리 부족 등의 사유로 인해 비주얼 페이스 추출에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.gnb.monitoring"
            }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "monitoring.elevator.tree.title"
            }), " 메뉴에서 특정 층이 검색 필터 목록에 나타나지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CoreStation 장치 상세 페이지에서 탬퍼 및 AC Fail 입력 설정을 변경해도 저장이 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문 그룹 명에 언더스코어(", (0,jsx_runtime.jsx)(_components.code, {
              children: "_"
            }), ")가 포함된 그룹을 삭제할 때, 이름이 유사한 다른 그룹까지 함께 삭제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Microsoft Entra ID 연동 시 특정 사용자 그룹만 선택하여 동기화하더라도, 그룹에 속하지 않은 전체 사용자가 함께 동기화되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Microsoft Entra ID 연동 시 사용자 그룹 매핑을 '없음(None)'으로 설정하고 특정 그룹만 선택하여 동기화할 경우, 사용자가 정상적으로 추가되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["음수 ID를 가진 위겐드 리더의 상세 페이지에서 설정을 저장할 때 서버 에러가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.11"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Active Directory 연동 시 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.activeDirectory.DomainNode"
            }), "의 키값(OU, DC)을 소문자로 입력하면 동기화가 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Active Directory 동기화 시, 사용자의 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sAMAccountName"
            }), "에 특수 문자 등 특정 규격에 맞지 않는 문자가 포함되어 있으면 사용자 등록이 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Microsoft Entra ID에 등록된 사용자 그룹이 100개를 초과할 경우, 그룹 목록을 불러오지 못하거나 동기화가 정상적으로 진행되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 운영체제 환경에서 USB Device Agent 설치 시, DE-620 드라이버가 정상적으로 설치되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.sever.secure.comm.encrypt.db"
            }), " 설정 변경 후, 특정 사용자의 프로필 사진 복호화에 실패하여 리포트 등에서 사용자 조회가 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.12"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입 통제 리포트 출력 시, 사용자별로 등록된 비주얼 페이스 수량이 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.3"
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