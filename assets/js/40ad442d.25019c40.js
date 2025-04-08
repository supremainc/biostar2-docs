"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["934"], {
"1812": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_unified_gateway_mdx_40a_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-unified-gateway-mdx-40a.json
var site_docs_unified_gateway_mdx_40a_namespaceObject = JSON.parse('{"id":"unified-gateway","title":"BioStar 2 통합 게이트웨이 사용하기","description":"이 문서에서는 BioStar 2의 통합 게이트웨이에 대한 간단한 설명과 사용 방법을 설명합니다.","source":"@site/docs/unified-gateway.mdx","sourceDirName":".","slug":"/unified-gateway","permalink":"/biostar2-docs/unified-gateway","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"unified-gateway","title":"BioStar 2 통합 게이트웨이 사용하기","description":"이 문서에서는 BioStar 2의 통합 게이트웨이에 대한 간단한 설명과 사용 방법을 설명합니다.","keywords":["2.9.5","통합 게이트웨이"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"무선 도어락 사용하기","permalink":"/biostar2-docs/wireless-door-lock"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/unified-gateway.mdx


const frontMatter = {
	id: 'unified-gateway',
	title: 'BioStar 2 통합 게이트웨이 사용하기',
	description: '이 문서에서는 BioStar 2의 통합 게이트웨이에 대한 간단한 설명과 사용 방법을 설명합니다.',
	keywords: [
		'2.9.5',
		'통합 게이트웨이'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "통합 게이트웨이",
  "id": "통합-게이트웨이",
  "level": 2
}, {
  "value": "BioStar 2 구조 (기본)",
  "id": "biostar-2-구조-기본",
  "level": 3
}, {
  "value": "BioStar 2 구조 (통합 게이트웨이)",
  "id": "biostar-2-구조-통합-게이트웨이",
  "level": 3
}, {
  "value": "BioStar Setting에서 통합 게이트웨이 설정하기",
  "id": "biostar-setting에서-통합-게이트웨이-설정하기",
  "level": 3
}, {
  "value": "BioStar 2에 접속하여 통합 게이트웨이 설정하기",
  "id": "biostar-2에-접속하여-통합-게이트웨이-설정하기",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "이 문서에서는 BioStar 2의 통합 게이트웨이에 대한 간단한 설명과 사용 방법을 설명합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "통합-게이트웨이",
      children: "통합 게이트웨이"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar 2는 서로 다른 구조를 가진 AC와 TA 웹페이지가 하나의 서버에 접속하는 구조를 가지고 있는데, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.enabled"
      }), "를 설정하면 BioStar 2의 실행 포트를 하나의 통합 게이트웨이로 변경할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.enabled"
      }), "는 리버스 프록시 방식을 통하여 BioStar 2 서버에 대한 요청을 효율적으로 처리할 수 있게 해주며 iframe의 보안 취약점을 개선하고 SSL 인증서 오류를 최소화합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), "는 BioStar 2 v2.9.3부터 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2 설치 및 업그레이드 시 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), "는 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "비활성"
            }), " 상태이며, 포트 초기값은 다음과 같습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "port.gatewayHttps"
                }), ": 5002"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "port.gatewayHttp"
                }), ": 5000"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), "를 사용하는 환경에서 SSL 인증서를 적용할 경우 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), "를 재시작해야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.biostar"
            }), " ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.cloud"
            }), "를 사용하는 환경에서는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), "를 사용할 수 없습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-2-구조-기본",
      children: "BioStar 2 구조 (기본)"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostar-current-structure.svg",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-2-구조-통합-게이트웨이",
      children: "BioStar 2 구조 (통합 게이트웨이)"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostar-ug-structure.svg",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-setting에서-통합-게이트웨이-설정하기",
      children: "BioStar Setting에서 통합 게이트웨이 설정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Start, {}), " > ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.biostar"
          }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Setting"
          }), "을 실행하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unified Gateway"
          }), " 부분의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Start"
          }), " 버튼을 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enabled"
          }), "가 활성화됩니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.enabled"
                }), "를 활성화하면 서버가 재시작됩니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "사용중인 포트일 경우 팝업 메시지가 나타납니다. 다른 포트 번호를 입력하고 다시 활성화하세요."
              }), "\n"]
            }), "\n"]
          })
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostar-setting.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["HTTPS 접속 상태일 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTPS Port"
          }), " 필드가 5002로 변경되고 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unified Gateway"
          }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Port"
          }), " 필드는 443으로 변경됩니다.", (0,jsx_runtime.jsx)("br", {}), "포트를 변경하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Stop"
          }), "을 클릭하여 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unified Gateway"
          }), "를 정지한 다음 변경하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostar-setting-unified-gateway.png",
          caption: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-2에-접속하여-통합-게이트웨이-설정하기",
      children: "BioStar 2에 접속하여 통합 게이트웨이 설정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.biostar"
          }), "에 접속하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " > ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.systemSecurity"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.systemSecurity.sessionGateway"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enabled"
          }), "를 활성화하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-setting-security-unified-gateway.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), "를 활성화하면 서버가 재시작되며 자동으로 로그인 페이지로 이동합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용중인 포트일 경우 팝업 메시지가 나타납니다. 다른 포트 번호를 입력하고 다시 활성화하세요."
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