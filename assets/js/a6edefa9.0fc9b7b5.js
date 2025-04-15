"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["5945"], {
"7570": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_2710_mdx_a6e_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-2710-mdx-a6e.json
var site_docs_revision_2710_mdx_a6e_namespaceObject = JSON.parse('{"id":"revision/2710","title":"버전 2.7.10 (빌드 번호 2.7.10.21)","description":"릴리즈2019-09-19","source":"@site/docs/revision/2710.mdx","sourceDirName":"revision","slug":"/revision/2710","permalink":"/biostar2-docs/revision/2710","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"2710","title":"버전 2.7.10 (빌드 번호 2.7.10.21)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"버전 2.7.11 (빌드 번호 2.7.11.65)","permalink":"/biostar2-docs/revision/2711"},"next":{"title":"버전 2.7.8 (빌드 번호 2.7.8.42)","permalink":"/biostar2-docs/revision/278"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/revision/2710.mdx


const frontMatter = {
	id: 2710,
	title: '버전 2.7.10 (빌드 번호 2.7.10.21)',
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
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2019-09-19"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 장치 연결 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2(XP2-MDPB, XP2-GDPB, XP2-GKDPB)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "방문자 메뉴에 USB 지문 스캐너 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "지원 장치: BioMini, BioMini Plus, BioMini Plus 2"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 Swagger API 기능 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Admin 권한을 가지지 않은 일반 사용자가 접근 권한이 없는 경로에 접근을 시도할 때 접근 권한을 제어하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태관리 커스텀 권한 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["권한과 무관하게 시간 규칙, 일일 근무 규칙, 주간 근무 규칙, 기타 근무 규칙, 스케줄을 공유하고, 메뉴 권한에 따라 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "수정"
            }), " 및 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "보기"
            }), " 가능"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Setting.conf 파일 자동 백업 기능 추가"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Setting.conf 파일 자동 백업"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Setting.conf 파일이 깨질 경우 원인 파악을 위한 로그 생성 지원"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "정규 버전에서 지원하는 리소스 외의 별도 언어 리소스 파일을 생성하여 사용할 경우, BioStar 2 버전 업그레이드 시 해당 리소스 파일이 삭제되지 않도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["액티브 디렉토리의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 필드 매핑"
          }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 ID"
          }), " 항목도 사용자가 수정할 수 있도록 변경"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일본어, 아랍어, 스페인어 리소스 파일 업데이트"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "서버"
          }), " 메뉴에서 생성한 커스텀 사용자 필드를 근태관리 보고서에서도 사용할 수 있도록 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 기록의 전체 데이터에 대한 정렬 기능 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 기록의 개인별 보고서 검색 조건에 모든 기록 또는 출퇴근 기록을 선택할 수 있는 옵션 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Java 버전 변경"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "기존: 1.8.0_212"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "변경: 1.8.0_221"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "주요-버그-수정",
      children: "주요 버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 ID 종류를 영숫자로 설정한 경우 AoC (Access on Card)로 인증할 때 카드 ID가 출력되지 않고 인증에 실패하는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "임시 근무 스케줄의 시작/종료일을 휴일로 설정하거나 종료일을 휴일 전날로 설정할 경우 해당 스케줄 생성이 불가능한 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일일 근무 규칙이 적용되어 있지 않은 날짜에 임시 근무 스케줄을 생성할 수 있는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모니터링 권한이 없는 사용자가 웹 소켓을 통해 장치의 실시간 로그를 확인할 수 있는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입문을 생성할 때 출입문 센서 설정값이 설정과 다르게 적용되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태관리 장치 연결 해제 시 서버를 재시작한 뒤 해당 장치를 다시 연결하지 않을 경우 아래의 문제 발생"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "근태관리 장치 목록에 해당 장치가 출력되지 않는 문제"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "해당 장치에서 USB 내보내기 및 가져오기로 근태 보고서를 확인할 수 없는 문제"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 설정 페이지에서 사용자 그룹 또는 출입 그룹을 변경할 경우, 해당 사용자가 자동 동기화를 통해 장치에 전송될 때 사용자의 출입 그룹이 삭제되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 카드로 발급한 AoC(Access on Card)로 인증할 때 인증에 실패하는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태관리 메뉴의 스케줄 페이지에서 사용자에게 스케줄을 할당한 뒤 적용할 때 근태관리 서버의 과부하로 인해 로드가 완료되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일반 사용자가 클라우드를 통해 로그인하면 접근 제어 기능으로 인해 정상적으로 로그인이 되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 관리 라이선스에 대한 오프라인 활성 요청 시 오류가 발생하는 문제"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "언어를 영어 이외의 언어로 설정했을 때 사용자, 장치, 출입문, 엘리베이터 메뉴의 목록 제목이 영어로 출력되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["한국어 또는 영어 이외의 언어를 설정했을 때, 문자열이 긴 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "장치의 사용자 관리"
          }), " 화면의 옵션 배열이 틀어져 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 사용자"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "정보가 다른 사용자"
          }), " 옵션이 보이지 않는 문제"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "지문 검색 기능이 약관 동의 방문 신청 건에 대해 정상적으로 동작하지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태관리 메뉴에서 스케줄 목록을 1,000개까지만 출력하여 1,000번째 이후 항목에 대해서는 확인이 불가능한 문제"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "20,000개까지 출력하도록 수정"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 및 슈프리마 2세대 장치가 Wiegand 카드 포맷을 256 bit까지 지원하나, 카드 데이터 값을 수동으로 입력 시 최대 32자리까지만 지원하는 문제"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "카드 데이터 입력 시 최대 78자리까지 지원하도록 수정"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "도메인 이름으로 BioStar 2 접속 시 근태관리 메뉴에 접근할 수 없는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "버전 업그레이드 시 출입통제, 근태관리, 비디오 데이터베이스의 system config 항목에 업그레이드한 버전이 반영되지 않는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 이름에 제한된 특수 문자 입력이 가능한 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이미 방문 신청 페이지에서 방문 약관에 동의한 방문자에 대해 방문자 메뉴에서 체크인 시 다시 동의를 받도록 동작하는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "언어를 신규 지원 언어(스페인어, 아랍어)로 설정한 경우, 이벤트 로그 CSV 내보내기를 실행하면 이벤트 이름이 영어로 출력되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이미지 로그 설정 시 이벤트를 최대 32개까지만 추가할 수 있도록 수정"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "버전 업그레이드 시 BioStar 2 서비스 파일이 교체되지 않을 경우 정상적으로 BioStar 2가 설치되지 않는 문제"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar 2 설치를 완료한 뒤 운영 체제를 재시작하면 해당 서비스 파일이 자동으로 교체되도록 수정"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar 2 설치 완료 후 운영 체제 재시작 유도 팝업을 출력"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입통제 라이선스를 활성화하지 않아도 로컬 API의 등록 및 사용이 가능한 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 API에서 [GET] doors로 출입문 정보를 확인할 때 Wiegand Reader의 ID가 실제 ID와 다르게 조회되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["날짜 형식을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "dd/mm/yyyy"
          }), "로 설정한 경우 방문자 상세 페이지에서 기간을 정상적으로 설정해도 기간 항목에 대한 오류 팝업이 출력되는 문제"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 1.x to BioStar 2.x Migration Tool에서 마이그레이션을 진행할 때 일부 사용자 그룹이 누락되는 문제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 로그인 시 출력되는 펌웨어 업그레이드 유도 팝업에서 XPass 2(XP2-GKDPB)를 업그레이드할 경우 업그레이드에 실패하는 문제"
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