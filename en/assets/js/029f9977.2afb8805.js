"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["6823"], {
"1075": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _299_MDXContent),
  frontMatter: () => (/* binding */ _299_frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_299_mdx_029_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ _299_toc),
  contentTitle: () => (/* binding */ _299_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-299-mdx-029.json
var site_docs_revision_299_mdx_029_namespaceObject = JSON.parse('{"id":"revision/299","title":"버전 2.9.9 (빌드 번호 2.9.9.XX)","description":"릴리즈2025-05-30","source":"@site/docs/revision/299.mdx","sourceDirName":"revision","slug":"/revision/299","permalink":"/biostar2-docs/en/revision/299","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"299","title":"버전 2.9.9 (빌드 번호 2.9.9.XX)","isTranslationMissing":true},"sidebar":"biostar","previous":{"title":"Precautions when upgrading BioStar 2","permalink":"/biostar2-docs/en/revision/"},"next":{"title":"Version 2.9.8 (Build No. 2.9.8.30)","permalink":"/biostar2-docs/en/revision/298"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/common/_fsf2-firmware-support-discontinuation.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.admonition, {
    type: "note",
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FaceStation F2 v1.x.x 펌웨어 지원 중단 안내"
      })
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar 2 v2.9.7부터 사용자의 비주얼 페이스를 장치에 동기화할 때 템플릿만 전송하도록 변경하여 동기화 성능을 최적화했습니다."
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "따라서 BioStar 2 v2.9.7부터는 장치에서만 템플릿을 추출할 수 있는 FaceStation F2 v1.x.x 펌웨어의 지원이 중단됩니다."
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "현재 FaceStation F2의 1.x.x 버전 펌웨어를 사용 중인 경우 BioStar 2 v2.9.7을 사용하기 위해서는 FaceStation F2를 최신 펌웨어로 업그레이드하여 사용하세요."
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["최신 펌웨어는 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://download.supremainc.com",
        children: "슈프리마 다운로드 센터"
      }), "에서 다운로드할 수 있습니다."]
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


;// CONCATENATED MODULE: ./docs/revision/299.mdx


const _299_frontMatter = {
	id: 299,
	title: '버전 2.9.9 (빌드 번호 2.9.9.XX)',
	isTranslationMissing: true
};
const _299_contentTitle = undefined;

const assets = {

};




const _299_toc = [...toc, {
  "value": "신규 기능 및 개선",
  "id": "신규-기능-및-개선",
  "level": 2
}, {
  "value": "버그 수정",
  "id": "버그-수정",
  "level": 2
}];
function _299_createMdxContent(props) {
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
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "http://bss-jira.suprema.co.kr:8880/browse/BVE-3128",
        children: "BVE-3128"
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
        children: "SW5-162"
      }), " [BDP-926] Mobile App Renewal"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 Mobile 애플리케이션 업데이트"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Updated BioStar 2 Mobile application."
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
              children: "새 대시보드"
            }), "의 일부 위젯에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DST"
            }), "(", (0,jsx_runtime.jsx)(_components.strong, {
              children: "일광 절약 시간"
            }), ") 설정이 제대로 반영되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "리포트"
            }), " 생성 시 제목의 날짜 및 기간이 BioStar 2 시간 설정을 따르지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 특수 문자가 포함된 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 사용자 필드 콤보 박스"
            }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "고급 검색"
            }), "에서 검색했을 때 검색되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["안드로이드 모바일 환경에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "비주얼 페이스 모바일 등록 링크"
            }), "를 통해 비주얼 페이스를 등록하고자 할 때 얼굴 사진을 직접 찍는 옵션이 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Maria DB 비밀번호에 특수문자가 포함되어있을 때 시스템 백업에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 그룹을 선택하고 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "고급 검색"
            }), "을 수행한 다음 인쇄를 했을 때 사용자 목록이 검색된 결과대로 인쇄되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.5"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["간헐적으로 사용자의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "출입 그룹"
            }), "이 비정상적으로 보여지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.5"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["크롬(Chrome)의 자동 완성 기능을 통해 ID 및 비밀번호가 저장된 상태에서 사용자 추가 시 특정 필드에 자동으로 값이 입력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 정보에 등록된 이메일로 로그인이 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드"
            }), " 레이아웃 수정 시 간헐적으로 레이아웃이 없다는 오류 팝업 메시지가 나타나는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["크롬(Chrome)의 Keyboard focusable scrollers 기능으로 인해 특정 옵션에서 드롭다운 목록을 제대로 선택할 수 없던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에서 사용자 정보를 수정한 후 서버에 동기화된 경우 사용자 정보에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "출입 그룹"
            }), "이 사라지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 메뉴에서 검색을 수행한 후 선택이 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.7"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "출입 그룹"
            }), "의 이름을 검색한 후 선택하면 검색 목록이 초기화되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "개인 정보 DB 암호화"
            }), " 기능이 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용 안 함"
            }), "으로 설정된 복호화 환경에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근무 스케줄"
            }), " 수정 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "추가된 사용자"
            }), " 항목에서 사용자 검색이 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["외부에서 서버에 접속한 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 관리"
            }), " 메뉴에 접근하면 로그아웃되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 상황에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "업그레이드 필요 (장치 데이터베이스 손상)"
            }), " 이벤트가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2 로그인 시 간헐적으로 로그인이 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["start_datetime 열이 비어있는 CSV 파일을 가져온 후 사용자 메뉴에 진입하면 사용자가 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.7"
            })]
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function _299_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_299_createMdxContent, {
      ...props
    })
  }) : _299_createMdxContent(props);
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