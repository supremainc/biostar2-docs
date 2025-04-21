"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["2104"], {
"4442": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Details} = _components;
  if (!Details) _missingMdxReference("Details", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Details, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "관리자 가이드 변경점 안내"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["BioStar 2.9.5 버전부터는 신기능이나 개선된 기능의 사용 방법에 대해 주제 단위로 분리하여 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "기능 가이드"
      }), "를 제공합니다."]
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
"8217": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_296_mdx_d7e_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-296-mdx-d7e.json
var site_docs_revision_296_mdx_d7e_namespaceObject = JSON.parse('{"id":"revision/296","title":"버전 2.9.6 (빌드 번호 2.9.6.40)","description":"릴리즈2024-06-12","source":"@site/docs/revision/296.mdx","sourceDirName":"revision","slug":"/revision/296","permalink":"/biostar2-docs/revision/296","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"296","title":"버전 2.9.6 (빌드 번호 2.9.6.40)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"버전 2.9.7 (빌드 번호 2.9.7.41)","permalink":"/biostar2-docs/revision/297"},"next":{"title":"버전 2.9.5 (빌드 번호 2.9.5.29)","permalink":"/biostar2-docs/revision/295"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
// EXTERNAL MODULE: ./docs/common/_improved-administrator-guide.mdx
var _improved_administrator_guide = __webpack_require__("4442");
;// CONCATENATED MODULE: ./docs/revision/296.mdx


const frontMatter = {
	id: 296,
	title: '버전 2.9.6 (빌드 번호 2.9.6.40)',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._improved_administrator_guide/* toc */.d$, {
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
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2024-06-12"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_improved_administrator_guide/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 장치 연결 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "XPass 2 (XP2-MAPB)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "인텔리전트 슬레이브"
          }), "를 사용할 경우 타사 컨트롤러의 인증 성공/실패 결과를 장치 화면에 표시하는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "컨트롤러 결과 표시"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 타사 컨트롤러와 Wiegand로 연결했을 때 컨트롤러로부터 반복적으로 입력되는 인증에 대한 신호를 무시하는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "반복 신호 무시 시간"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IP 인터폰"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RTSP"
          }), " 사용 시 장치에서 송출되는 영상의 해상도를 선택할 수 있는 기능 지원"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "IP 인터폰 비디오 해상도"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "RTSP 비디오 해상도"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치의 인증 결과 화면에서 사용자 ID, 이름이 표시되는 방법을 선택할 수 있는 인증 결과 표시 옵션 기능 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "사용자 ID 표시"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "사용자 이름 표시"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IP 인터폰"
          }), "의 SIP 서버 설정 시 SIP 전송 방법을 선택할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SIP 서버 전송"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "일괄 편집"
          }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "인증 모드"
          }), " 편집 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["FaceStation F2(펌웨어 v2.1.4 이상) - 장치가 설치된 조도 환경에 따른 깜빡임 발생 방지를 위한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "주파수"
          }), " 조정 옵션 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "커스텀 스마트 카드 레이아웃"
          }), " 설정에서 FeliCa 설정 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["X-Station 2 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "얼굴 검출"
          }), " 기능 지원 중단"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XSS 보안 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "웹 소켓 관련 보안 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "CSRF 보안 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "7zip 버전 업그레이드"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SSL/TLS Diffie-Hellman Modulus의 보안 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Spring Framework 버전 업그레이드"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HTTP Content-Security-Policy 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "모든 입력창에서 자동완성 기능 삭제"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SQL Injection 보안 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar 2 인증서 보안 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "액티브 디렉토리"
              }), " 계정 설정 보안 취약점 개선"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 관리 보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Access-Control-Allow-Origin 보안 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "근태 관리 API 문서에 X-Frame-Options 추가"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "근태 관리"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "근무 스케줄"
          }), " 메뉴의 사용자 조회 화면 성능 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "근태 관리"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "근태 기록"
          }), " 메뉴의 근태 기록 상세보기 화면(캘린더, 목록)에 새로고침 버튼 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일광 절약 시간(DST)을 사용하지 않는 국가에서 근태 기록의 시간 표시 방법 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "오래된 근태기록 데이터가 많을 경우 최신 데이터의 동기화 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "경보 목록"
          }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자"
          }), " 열에 사용자 이름과 사용자 ID가 모두 표시되도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "경보 목록"
          }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "날짜"
          }), " 열에 시간이 초 단위까지 표시되도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 자동 동기화"
          }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "특정 장치(해당하는 출입 그룹에 속한 장치만 동기화)"
          }), " 모드 사용 시 성능 개선"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "구역"
              }), " 추가, 수정, 삭제 시 속도 개선"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "출입 등급"
              }), " 변경 시 속도 개선"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "근태 관리"
          }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 그룹"
          }), " 및 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "장치 그룹"
          }), " 동기화 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 ID 종류"
          }), "가 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "숫자"
          }), "로 설정된 상태에서 파일명이 0으로 시작하는 비주얼페이스 파일 업로드 시 표시되는 오류 팝업 메시지 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 ID 종류"
          }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "영숫자"
          }), "로 사용할 때 중복 사용자 ID에 대한 체크 로직 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "C에서 Java로 내부 API를 호출할 때 고정 IP를 사용하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 장치의 인증모드 최대 갯수 증가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL 서버 데이터베이스를 사용하는 환경을 위한 신규 인덱스 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CSN 모바일 카드 발급 시 카드 아이디에 입력 가능한 최대 글자 수 조정"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "암호화 키 저장 경로를 사용자가 직접 설정할 때 경로에 특수 문자가 있는 경우 팝업 메시지를 출력하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "작업 조건 및 동작"
          }), " 설정 화면의 장치 목록에 Wiegand 리더가 나타나도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 서버를 시작하기 전에 서버 시작 가능 여부를 체크하여 문제가 있는 경우 팝업 메시지를 출력하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이벤트 로그를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV 내보내기"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "출력"
          }), "했을 때 사용자 관련 이벤트 로그가 장치 또는 서버 중 어디에서 발생했는지 구분하여 표시하도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "비밀번호 최대 실패 허용 횟수"
          }), " 초과 발생 시 이벤트 로그, 실시간 로그 및 경보에 기록되도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "최대 100명의 사용자 정보를 수정할 수 있는 API 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "비밀번호 최대 실패 허용 횟수"
          }), " 제한 옵션이 기본값으로 적용되도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입 그룹 생성 시 필요한 조건 완화 및 설정되지 않은 항목에 대한 알림 팝업 메시지 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로그인 API 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 카드 ID 검사 로직 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 Setting 화면 UI 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 Setting에서 서비스들의 포트를 사용 중일 때 상태창에 표시되도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "스페인어 리소스 업데이트"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 SMTP 환경에서 이메일 발송이 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 장치에서 Global APB와 이중 인증모드를 사용할 경우 첫번째 사용자의 인증이 되지않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "화재 경보"
            }), " 구역 목록에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "활성/비활성"
            }), " 열이 오름차순, 내림차순으로 제대로 정렬되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["방문자 라이선스가 없는 상태에서 사용자의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "권한 등급"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "방문자 관리자"
            }), "가 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.7"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 항목의 아랍어 표시 오류 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["연결이 해제된 장치에 비주얼페이스 템플릿을 사용하여 스마트카드를 발급할 경우 카드가 발급되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 환경에서 런처 서비스(biostar-server.exe)가 종료되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "출입 통제"
            }), " 메뉴의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "상태"
            }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "엘리베이터 권한 상태 - 층별"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "엘리베이터 권한 상태 - 사용자별"
            }), " 목록을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSV 내보내기"
            }), " 했을 때 사용자 ID와 이름이 암호화되어 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2 서비스 재시작 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "서버 매칭"
            }), "의 얼굴 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "보안 레벨"
            }), "과 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "이미지 로그"
            }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "이미지 로그 없는 경우 사용자 프로필 이미지 표시"
            }), " 설정이 초기화되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 장치를 잠금 상태로 변경한 후 소리가 출력되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 그룹이나 등급에 속한 장치가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "전체 권한"
            }), " 설정이 가능한 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 그룹에 포함된 장치를 전체 선택하고 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "데이터 삭제 후 장치 동기화"
            }), "를 진행하면 모든 장치가 동기화 되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "일괄 편집"
            }), "으로 장치의 설정 변경 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "카드를 QR로 인증하기"
            }), " 기능이 활성화되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 메뉴 권한이 없는 커스텀 권한을 가진 계정으로 로그인 및 로그아웃한 후 전체 관리자 계정으로 로그인하여 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자"
            }), " 메뉴 진입 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "새 사용자 추가"
            }), " 화면이 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 자동 동기화"
            }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "특정 장치(해당하는 출입 그룹에 속한 장치만 동기화)"
            }), " 모드 사용 시 방문자의 크리덴셜을 수정하면 장치와 동기화되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["모바일 출입 카드에 등록된 장치가 삭제되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.7"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문 목록을 인쇄했을 때 출입문의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "상태"
            }), "가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "정상"
            }), "으로만 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["크리덴셜 등록 시 선택했던 장치가 삭제된 후에도 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "크리덴셜"
            }), " 창의 장치 목록에 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["인증용으로 사용할 수 없는 이미지가 정상적으로 등록되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["서력을 사용하지 않는 운영체제에서 이벤트 로그 삭제 시 오류가 발생하던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 구역의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "열 설정"
            }), " 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "열 목록"
            }), "이 비정상적으로 표시되던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.5.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 ID가 일정 글자 수를 넘을 때 장치 그룹이 비정상적으로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.6.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "재실 인원 제한"
            }), "을 지원하는 장치가 경비 상태일 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "데이터 삭제 후 장치 동기화"
            }), "를 진행하면 동기화에 성공하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.11"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["로그인 중인 사용자의 이름 변경 시 우측 상단의 사용자 이름이 갱신되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자가 없는 사용자 그룹에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "비주얼 페이스 모바일 등록 링크 전송"
            }), " 실행 시 오류 팝업 메시지가 출력되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 그룹"
            }), "이 8단계로 구성되어 있는 CSV 파일을 불러올 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 그룹"
            }), "이 정상적으로 추가되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CSV 불러오기"
            }), " 시 사용자 유효기간이 범위를 벗어나는 경우 나타나는 오류 메시지 수정 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "스케줄 잠금"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "스케줄 개방"
            }), " 구역 설정 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "출입문"
            }), " 항목에 선택된 출입문과 RS-485 네트워크가 다른 출입문이 검색되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["로그인 후 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "설정"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "작업 조건 및 동작"
            }), " 설정 화면에 진입 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "동작"
            }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "신호 출력"
            }), " 부분의 목록이 나타나지않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["모든 장치가 서버에 연결되어있지 않은 상태에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 ID 종류"
            }), " 변경이 가능한 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 그룹"
            }), "을 기준으로 열을 정렬했을 때 PDF가 제대로 출력되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.8"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["암호화 사용 환경에서 사용자 ID에 16자 이상을 입력하고 복호화한 경우 사용자 ID 정렬에 오류가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStation 2a(BS2A-ODPB) 모델의 장치 상세 페이지에서 지원하지 않는 메뉴가 나타나는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "소집 구역"
            }), "에 설정된 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "출입 그룹"
            }), "의 사용자 정보가 변경된 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "소집 구역"
            }), "의 사용자 정보에 동기화 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 사용자 그룹의 사용자를 전체 선택한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "비주얼 페이스 모바일 등록 링크 전송"
            }), "을 시도할 경우 그룹에 포함되어 있지 않은 모든 사용자에게도 이메일이 전송되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["등록된 장치에 API를 사용하여 장치 타입을 변경할 수 있는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.5.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["User API를 사용하여 사용자를 생성 또는 수정할 때 일부 크리덴셜의 값이 없는 상태에서 API를 호출할 경우 로그아웃되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 로그"
            }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "데이터 파일 가져오기"
            }), " 시 간헐적으로 로그아웃 되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "데이터 파일 가져오기"
            }), " 시 특정 조건에서 오류 팝업이 발생하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["상태가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "알 수 없음"
            }), "인 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "이 장치와 동기화되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드"
            }), "가 설정된 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "없음"
            }), "으로 변경하면 장치와 기본값으로 동기화되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 장치 그룹에만 권한이 있는 사용자가 카드 등록 시 권한이 없는 장치들도 목록에 나타나는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "출입 통제"
            }), " 메뉴 진입 시 간헐적으로 로그아웃되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "근무 스케줄"
            }), "에서 사용자가 등록되지 않은 스케줄의 +, -버튼 클릭 시 오류 팝업 메시지가 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MS SQL 서버 데이터베이스를 사용하는 경우 특정 버전(2.8.10 ~ 2.8.12)에서 BioStar 2를 업그레이드하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 관리"
            }), " 메뉴에 접속되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "일일 근무 규칙"
            }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 인증 출근 & 마지막 인증 퇴근"
            }), " 옵션을 사용하고 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "휴식 시간"
            }), "을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "고정"
            }), "으로 사용할 때 근태 기록 시간이 올바르게 표기 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PDF 내보내기 시 특정 언어가 비정상적으로 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["근태 관리 API문서 페이지 보강 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.2.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "다른 프로토콜 사용 시에도 접속 가능한 문제"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["임시 스케줄이 많은 경우 스케줄 열람이 느려지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 관리"
            }), " 메뉴에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "수정/보기"
            }), " 권한이 있는 사용자로 로그인 시 일부 근태 관리 메뉴가 나타나지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Report API 호출 시 지정한 항목으로 데이터가 반환되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.11"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 관리"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "설정"
            }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태기록 저장 기간"
            }), "을 수정한 후 특정 다른 옵션을 변경하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "적용"
            }), " 버튼을 누르지 않았는데도 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태기록 저장 기간"
            }), "이 적용되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.17"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["근태 관리 API 문서에서 Schedule Create API 호출 시 무한로딩되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 관리자"
            }), " 권한을 가진 사용자가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 사용자 필드"
            }), "에 대한 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 기록"
            }), " 생성 시 오류가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 장치의 근태 기록 이벤트가 동기화 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 언어로 변경한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "리포트"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "새 대시보드"
            }), " 메뉴가 비정상적으로 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.5"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["커스텀 권한 관리자로 로그인 후 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 리포트"
            }), " 생성 시 오류가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "시스템 백업"
            }), " 기능을 사용하여 반복적으로 백업을 진행했을 때 백업 파일 저장 경로에 이미 저장되어 있던 폴더 및 파일이 삭제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "시스템 자동 백업"
            }), "이 설정된 상태에서 월이 변경되었을 때 이벤트 로그가 정상적으로 저장되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["필터 조건이 설정된 상태에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 리포트"
            }), "를 생성하는 경우 올바른 데이터가 생성되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "모니터링"
            }), "과 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "리포트"
            }), "의 이벤트에 시간이 다르게 기록되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 Restore"
            }), "를 사용하여 현재 BioStar 2 버전과 동일한 버전에서 백업된 데이터를 복원하는 경우 복원 중 오류가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "시스템 자동 백업"
            }), "을 사용 중일 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 Setting"
            }), "에서 Core Web Server 서비스를 재시작할 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "시스템 자동 백업"
            }), "이 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용하지 않음"
            }), " 상태로 초기화되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.5"
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