"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["911"], {
"9677": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_298_mdx_f6d_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-298-mdx-f6d.json
var site_docs_298_mdx_f6d_namespaceObject = JSON.parse('{"id":"298","title":"BioStar 2 v2.9.8 업데이트 안내","description":"This is description","source":"@site/docs/298.mdx","sourceDirName":".","slug":"/298","permalink":"/help/docs/298","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"298","title":"BioStar 2 v2.9.8 업데이트 안내","description":"This is description","keywords":["2.9.8","keyword 2"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"BioStar 2 신규 기능 소개","permalink":"/help/docs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/298.mdx


const frontMatter = {
	id: 298,
	title: 'BioStar 2 v2.9.8 업데이트 안내',
	description: 'This is description',
	keywords: [
		'2.9.8',
		'keyword 2'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "마스크를 착용한 경우 인증을 거부하도록 설정하기",
  "id": "마스크를-착용한-경우-인증을-거부하도록-설정하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "이 문서에서는 BioStar 2.9.8 버전에서 업데이트된 기능들을 소개하고 사용하기 쉽도록 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "마스크를-착용한-경우-인증을-거부하도록-설정하기",
      children: "마스크를 착용한 경우 인증을 거부하도록 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자가 마스크를 착용하고 있는 경우 얼굴 인증을 거부하도록 설정하여 얼굴 인증의 정확도를 높일 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.device"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록에서 설정하려는 장치를 클릭하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "마스크 착용 시 인증 거부"
        }), " 옵션은 BioStation 3 펌웨어 1.3.1버전 이상에서만 사용할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "마스크"
        }), " 설정에서 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "마스크 검출"
        }), " 기능을 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "사용"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "마스크 착용 시 인증 거부"
        }), ")로 설정하세요."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/ko/device_mask.png",
      alt: "마스크"
    }), "\n", (0,jsx_runtime.jsx)("center", {
      children: "위 이미지는 예시 화면입니다. 실제 화면과 다를 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "마스크 검출"
        }), " 기능을 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "사용"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "마스크 착용 시 인증 거부"
        }), ")로 설정한 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "마스크 확인 방식"
        }), "이 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "인증 전 확인"
        }), "으로 고정되며 변경할 수 없습니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "확인"
        }), "을 클릭하세요."]
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