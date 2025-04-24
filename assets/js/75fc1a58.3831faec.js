"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["7353"], {
"4789": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_293_mdx_75f_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-293-mdx-75f.json
var site_docs_revision_293_mdx_75f_namespaceObject = JSON.parse('{"id":"revision/293","title":"버전 2.9.3 (빌드 번호 2.9.3.26)","description":"릴리즈2023-06-26","source":"@site/docs/revision/293.mdx","sourceDirName":"revision","slug":"/revision/293","permalink":"/biostar2-docs/revision/293","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"293","title":"버전 2.9.3 (빌드 번호 2.9.3.26)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"버전 2.9.4 (빌드 번호 2.9.4.29)","permalink":"/biostar2-docs/revision/294"},"next":{"title":"버전 2.9.2 (빌드 번호 2.9.2.4)","permalink":"/biostar2-docs/revision/292"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/revision/293.mdx


const frontMatter = {
	id: 293,
	title: '버전 2.9.3 (빌드 번호 2.9.3.26)',
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
    code: "code",
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
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2023-06-26"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "리포트"
          }), " 생성 기능 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "카드 프린터"
          }), " 기능 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "cardPresso 프로그램을 사용하여 BioStar 2에서 직접 카드를 프린트할 수 있도록 지원"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "시스템 백업"
          }), " 및 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "복원"
          }), " 기능 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["백업된 파일을 사용하여 시스템을 복원 할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar Restore"
            }), " 프로그램 제공(BioStar 2 설치 프로그램에 포함)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStation 3 QR 코드 인증 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "펌웨어 v1.1.0 이상"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "키패드 백라이트"
          }), " 설정 기능 지원"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "XPass D2 (XPD2-GKDB) 하드웨어 V02M, 펌웨어 v1.7.1 이상"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Moment.js 라이브러리 버전 업데이트"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Lodash 라이브러리 버전 업데이트"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "enckey 파일 생성 로직 개선"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "개인 정보 DB 암호화"
          }), "를 사용할 때 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV 불러오기"
          }), " 시 업데이트 속도 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV 불러오기"
          }), " 시 CSV 파일 내에 UTF-16 유니코드를 사용하는 문자도 정상적으로 인식하도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 관리 보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Swagger UI 버전 업그레이드"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "X-Frame-Options 추가"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "iframe 취약점 개선(Unified Gateway)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "근태 관리"
          }), " 메뉴에 사용자 추가 시 라이선스 종류에 따라 정해져 있는 최대 사용자 수가 초과된 경우 표시되는 팝업 메시지 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 자동 동기화"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "특정 장치(해당하는 출입 그룹에 속한 장치만 동기화)"
          }), " 모드 사용 시 성능 개선"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "장치 설정 속도 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "구역 활성/비활성 시 처리 속도 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 그룹 이동 시 동기화 속도 개선"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "C서버에 쿼리 실행 시 불필요한 데이터베이스 체크 로직 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "임시 테이블에 누락된 인덱스를 추가하여 성능 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "User API을 사용하여 임시 테이블 업데이트 또는 삭제 시 서브쿼리 동작 최적화"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "모니터링"
          }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "출입문 상태"
          }), " 조회 속도 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 출입카드 등록 시 사용자 이름에 미지원 문자 사용 여부를 체크하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IP 인터폰"
          }), " 설정 메뉴의 특정 항목에 일부 기호 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "."
          }), " 입력 지원"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자명"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "인증ID"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "내선 번호"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "QR코드 인증 관련 이벤트 코드 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "라이선스"
          }), " 메뉴 신설로 인한 위치 혼동을 방지하기 위해 기존 라이선스 메뉴 위치(", (0,jsx_runtime.jsx)(_components.strong, {
            children: "설정"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "서버"
          }), ")에 안내 메시지 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 정보에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "이메일"
          }), " 항목이 입력되지 않은 상태에서 모바일 출입카드 등록 시 나타나는 오류 팝업 메시지 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록의 장치별 아이콘 시인성 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로그인 페이지 변경"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "모바일 출입카드 등록"
            }), " 시 간헐적으로 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "등록"
            }), " 버튼이 비활성화 되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["C서버에서 getTrackingInfo로 추적 데이터를 조회하지 못한 경우 서버가 충돌하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 조건으로 검색된 사용자를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "모두 선택"
            }), " 후 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "장치에서 삭제"
            }), " 진행 시 선택하지 않았던 사용자들까지 모두 삭제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "서버"
            }), " 메뉴의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "등록용 장치 설정"
            }), "에 추가된 장치를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "장치"
            }), " 메뉴에서 삭제하여도 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "등록용 장치 설정"
            }), " 목록에서 삭제되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "서버"
            }), " 메뉴의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "등록용 장치 설정"
            }), "에 장치를 추가할 때 장치가 검색되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "서버"
            }), " 메뉴의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "세션 만료 시간"
            }), "이 설정된 상태에서 서버를 재시작하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "세션 만료 시간"
            }), "이 기본값(60분)으로 동작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "대시보드"
            }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용 현황"
            }), "에 최대값을 초과한 항목의 값이 잘못 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ID에 특정 알파벳 또는 기호가 포함되어 있는 사용자에게 발급된 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "액세스 온 카드"
            }), "가 사용 정지 처리된 이후에도 인증에 성공하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "데이터 파일 가져오기"
            }), " 완료 후 장치에 동기화되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 관리"
            }), " 메뉴의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근무 스케줄"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "부재"
            }), "가 설정되어 있을 때 승인자인 사용자가 삭제되면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 기록"
            }), "이 조회되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 1", ":N", " 인증 성공 이벤트가 근태에서 누락되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["버전을 2.8.8 이하에서 2.8.9 이상으로 업그레이드한 후 TA 설정에서 장치 추가 시 오류가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.9"
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