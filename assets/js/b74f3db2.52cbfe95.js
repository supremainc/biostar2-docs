"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["6826"], {
"2869": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_289_mdx_b74_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-289-mdx-b74.json
var site_docs_revision_289_mdx_b74_namespaceObject = JSON.parse('{"id":"revision/289","title":"버전 2.8.9 (빌드 번호 2.8.9.53)","description":"릴리즈2020-12-29","source":"@site/docs/revision/289.mdx","sourceDirName":"revision","slug":"/revision/289","permalink":"/biostar2-docs/revision/289","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"289","title":"버전 2.8.9 (빌드 번호 2.8.9.53)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"버전 2.8.10 (빌드 번호 2.8.10.37)","permalink":"/biostar2-docs/revision/2810"},"next":{"title":"버전 2.8.8 (빌드 번호 2.8.8.10)","permalink":"/biostar2-docs/revision/288"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/revision/289.mdx


const frontMatter = {
	id: 289,
	title: '버전 2.8.9 (빌드 번호 2.8.9.53)',
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
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2020-12-29"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 출입카드 기능 안정화"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "다이나믹 사이트 지원"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "모바일 출입카드에 사용자 정보(사진, 부서, 직함, 기간) 표시 지원"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "모바일 출입카드 재발급 UI 개선"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비주얼 페이스 모바일 등록 시 가이드 화면 제공"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이메일 설정 메뉴 이름 변경"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "기존: 이메일 콘텐츠"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "변경: 이메일 설정"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "스케줄 개방 구역 관련 일부 이벤트 이름 변경"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일부 언어 리소스 업데이트"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "db-converter 로그 파일 이름 변경"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치와 연결된 상태에서만 해당 장치의 근태 설정을 편집할 수 있도록 변경"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "주요-버그-수정",
      children: "주요 버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["다수의 FaceStation F2가 동시에 연결될 때 간헐적으로 확장 인증 모드 설정이 삭제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.8"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "모든 이력"
            }), " 옵션을 선택해 업데이트한 개인별 보고서에 시간 기록 종류 값이 Null인 시간 기록이 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "모든 이력"
            }), " 옵션을 선택해 업데이트한 개인별 보고서에 출입 기록이 정상적으로 기록되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.10"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["사용자가 근태관리 장치에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "퇴근"
              }), "을 선택해도 근태 보고서에는 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "출근"
              }), " 로그만 기록"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MS SQL Windows 인증으로 BioStar 2를 설치하였을 때 기본 포트 이외의 포트를 사용할 경우 TA 데이터베이스에 연결할 수 없는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.7.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 기본 해시 키 전송 오류로 인해 PIN 인증에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["얼굴을 등록한 사용자와 비주얼 페이스를 등록한 사용자를 FaceStation 2와 FaceStation F2에 동시에 전송할 경우 FaceStation F2에서는 얼굴 인증에 실패하는 문제\n", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "근태관리 장치 동기화 문제"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "장치 메뉴에 등록된 장치가 근태관리 메뉴에 동기화되지 않는 문제"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["장치 메뉴에 등록된 FaceLite가 근태관리 장치 목록에 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
                  children: "발생 버전: v2.7.10"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["동기화 문제로 인해 장치 그룹 ID가 Null 값으로 처리되어 장치 메뉴에 등록된 장치가 근태관리 장치 목록에 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
                  children: "발생 버전: v2.7.5"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["T&A 서비스를 시작하면 BioStar 2에서 자동 로그아웃되고 로그인이 불가능한 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.4"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["BioStar 2 로그인되었을 때 T&A 서비스에 접근할 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Unknown error. Check the log file for detailed information"
              }), " 오류 메시지 출력"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["모바일 출입카드 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용"
            }), " 설정 후 서버 메뉴에서 확인을 클릭하면 모바일 출입카드 설정이 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용 안 함"
            }), "으로 변경되는 문제"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이메일 자동 발신을 위한 SMTP를 정상적으로 설정하였음에도 경고 근무 시간 보고서가 발송되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.6, v2.8.8"
            })]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["개인 정보 DB 암호화를 켜거나 끈 상태에서 사용자 동기화를 실행한 뒤 근무 기록을 생성하면 오류가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["개인 정보 DB 암호화 및 복호화 시 Swap 과정에서 테이블 이름이 잘못 체크되어 마이그레이션 오류가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Wiegand 형식 설정 시 패리티 비트 계산 범위가 다른 패리티 비트의 계산 범위와 중첩될 경우 계산할 수 없는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 1.x에서는 온도 열을 지원하지 않아 로그 마이그레이션 이후 이벤트 로그에서 BioStar 1.x의 로그가 조회되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MS SQL Server 데이터베이스를 사용하는 환경에서 다수의 사용자 그룹에 대한 권한을 가진 커스텀 권한 관리자로 로그인할 경우 BioStar 2가 메모리를 과도하게 점유하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.7"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["언어를 영어로 설정했을 때 모바일 카드 발급 시 표시되는 팝업 메시지에 장치 모델명이 잘못 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["FaceStation F2의 온도 관련 이벤트 로그를 업로드할 때 시간이 오래 걸리고, 온도 값이 0인 데이터와 같이 불필요한 로그까지 업로드하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.6"
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