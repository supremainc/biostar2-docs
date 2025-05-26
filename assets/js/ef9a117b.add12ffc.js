"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["1530"], {
"5103": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_update_299_how_to_use_di_24_mdx_ef9_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-update-299-how-to-use-di-24-mdx-ef9.json
var site_docs_update_299_how_to_use_di_24_mdx_ef9_namespaceObject = JSON.parse('{"id":"update/299/how-to-use-di24","title":"Door Interface 오프라인 모드 전용 시설 코드 인증 설정하기","description":"BioStar 2에서 Door Interface의 오프라인 모드의 설정 방법을 설명합니다.","source":"@site/docs/update/299/how-to-use-di24.mdx","sourceDirName":"update/299","slug":"/update/299/how-to-use-di24","permalink":"/biostar2-docs/update/299/how-to-use-di24","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"how-to-use-di24","title":"Door Interface 오프라인 모드 전용 시설 코드 인증 설정하기","description":"BioStar 2에서 Door Interface의 오프라인 모드의 설정 방법을 설명합니다.","keywords":["Door Interface","DI-24","Offline Mode"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"CoreStation 20 설정 및 출입문 생성하기","permalink":"/biostar2-docs/update/299/how-to-use-cs20"},"next":{"title":"디렉토리 연동 설정하기","permalink":"/biostar2-docs/update/299/settings-diretory-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/update/299/how-to-use-di24.mdx


const frontMatter = {
	id: 'how-to-use-di24',
	title: 'Door Interface 오프라인 모드 전용 시설 코드 인증 설정하기',
	description: 'BioStar 2에서 Door Interface의 오프라인 모드의 설정 방법을 설명합니다.',
	keywords: [
		'Door Interface',
		'DI-24',
		'Offline Mode'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "<Cmd></Cmd> 설정하기",
  "id": "-설정하기",
  "level": 2
}, {
  "value": "<Cmd></Cmd> 삭제하기",
  "id": "-삭제하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Door Interface는 2개의 출입문과 4개의 리더를 안전하고 유연하게 연결할 수 있는 장치입니다. 오프라인 환경에서도 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.facilityCode"
      }), "를 이용하여 인증할 수 있으며, 전원 장애, 탬퍼, 화재 경보 등 보안에 특화된 기능을 지원합니다. CoreStation(CS-40) 또는 CoreStation 20(CS-20, CS-20P) 컨트롤러와 연동하여, 소규모부터 대규모 엔터프라이즈까지 다양한 시스템 환경에 유연하게 대응할 수 있는 완성도 높은 출입 통제 아키텍처를 제공합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이 문서에서는 BioStar 2에서 Door Interface의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.facilityCode"
      }), "를 설정하는 방법을 안내합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Door Interface의 장치 설정은 대부분 CoreStation 20과 동일합니다. 세부 장치 설정에 대한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "how-to-use-cs20#cs20detailsetting",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-설정하기",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.facilityCode"
      }), " 설정하기"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.facilityCode"
      }), "는 Door Interface가 마스터 컨트롤러와 연결이 끊어져 오프라인 상태가 되었을 때에도 시설 코드를 이용한 인증으로 출입문을 동작시킬 수 있는 기능입니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.device"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록에서 설정하려는 Door Interface(DI-24)를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.authentication"
          }), " 탭의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.facilityCode"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus"
          }), "를 클릭하고, 시설 코드를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.info.facilityCode"
                }), "는 0에서 4294967295까지의 숫자만 입력할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.info.facilityCode"
                }), "는 최대 16개까지 저장할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/DI24-offlinemode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["시설 코드를 추가한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이제 마스터와 연결이 끊어져 오프라인 상태가 되었을 때, 저장된 시설 코드와 일치하는 카드로 인증하면 장치에 구성된 출입문이 동작합니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "오프라인 모드에서는 알람 이벤트만 저장해뒀다가 마스터와 연결되면 알람 이벤트를 서버로 전송합니다."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-삭제하기",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.facilityCode"
      }), " 삭제하기"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.device"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록에서 설정하려는 Door Interface(DI-24)를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.authentication"
          }), " 탭의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.facilityCode"
          }), "에서 삭제하려는 시설 코드를 체크한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.delete"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/DI24-offlinemode-del.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
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