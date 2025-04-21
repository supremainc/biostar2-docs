"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["8375"], {
"2038": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_update_298_update_timed_apb_mdx_968_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-update-298-update-timed-apb-mdx-968.json
var site_docs_update_298_update_timed_apb_mdx_968_namespaceObject = JSON.parse('{"id":"update/298/update-timed-apb","title":"시간 제한 안티패스백 업데이트","description":"시간 제한 안티패스백 업데이트","source":"@site/docs/update/298/update-timed-apb.mdx","sourceDirName":"update/298","slug":"/update/298/update-timed-apb","permalink":"/biostar2-docs/update/298/update-timed-apb","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"update-timed-apb","title":"시간 제한 안티패스백 업데이트","description":"시간 제한 안티패스백 업데이트","keywords":["시간 제한 안티패스백","초기화 시간","항시 통과 그룹"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"장치에 사용자 개인 메시지 표시하기","permalink":"/biostar2-docs/update/298/device-display-message"},"next":{"title":"CSN 모바일 카드 삭제 시 관리 지침","permalink":"/biostar2-docs/update/298/csn-mobile-card"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/update/298/update-timed-apb.mdx


const frontMatter = {
	id: 'update-timed-apb',
	title: '시간 제한 안티패스백 업데이트',
	description: '시간 제한 안티패스백 업데이트',
	keywords: [
		'시간 제한 안티패스백',
		'초기화 시간',
		'항시 통과 그룹'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시간 제한 안티패스백을 장치별로 설정하기",
  "id": "시간-제한-안티패스백을-장치별로-설정하기",
  "level": 2
}, {
  "value": "시간 제한 안티패스백의 항시 통과 그룹 설정하기",
  "id": "시간-제한-안티패스백의-항시-통과-그룹-설정하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "시간-제한-안티패스백을-장치별로-설정하기",
      children: "시간 제한 안티패스백을 장치별로 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "기존에는 출입문에만 시간 제한 안티패스백을 설정할 수 있었지만 입실 장치, 퇴실 장치 또는 모든 장치 중 원하는 장치를 선택하여 시간 제한 안티패스백을 설정할 수 있도록 업데이트되었습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.door"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addDoor"
          }), "를 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.information"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.configuration"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.option"
          }), " 등을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), "을 사용할 장치를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime"
          }), "을 원하는 대로 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.resetTime"
            }), ": 입력 단위는 분(min.)이며 기본값은 10분이고 입력 가능한 시간의 범위는 0 ~ 60분입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-298-timed-apb-drop.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시간-제한-안티패스백의-항시-통과-그룹-설정하기",
      children: "시간 제한 안티패스백의 항시 통과 그룹 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "시간 제한 안티패스백에 제한받지 않고 항상 통과할 수 있는 출입 그룹을 지정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.door"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addDoor"
          }), "를 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.information"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.configuration"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.option"
          }), " 등을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), "을 사용할 장치를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime"
          }), "을 원하는 대로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), "에 제한받지 않도록 설정할 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apb.bypassGroup"
          }), "을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-298-timed-apb-bypass.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
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