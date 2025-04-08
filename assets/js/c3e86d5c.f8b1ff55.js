"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["224"], {
"2943": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_298_csn_mobile_card_mdx_c3e_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-298-csn-mobile-card-mdx-c3e.json
var site_docs_298_csn_mobile_card_mdx_c3e_namespaceObject = JSON.parse('{"id":"298-csn-mobile-card","title":"CSN 모바일 카드 삭제 시 관리 지침","description":"CSN 모바일 카드 삭제 시 관리 지침","source":"@site/docs/298-csn-mobile-card.mdx","sourceDirName":".","slug":"/298-csn-mobile-card","permalink":"/biostar2-docs/298-csn-mobile-card","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":298,"frontMatter":{"id":"298-csn-mobile-card","title":"CSN 모바일 카드 삭제 시 관리 지침","description":"CSN 모바일 카드 삭제 시 관리 지침","keywords":["CSN 모바일 카드","삭제된 CSN 모바일 카드"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"시간 제한 안티패스백 업데이트","permalink":"/biostar2-docs/298-update-timed-apb"},"next":{"title":"그 외 업데이트 및 개선 사항","permalink":"/biostar2-docs/298-other-update"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/298-csn-mobile-card.mdx


const frontMatter = {
	id: '298-csn-mobile-card',
	title: 'CSN 모바일 카드 삭제 시 관리 지침',
	description: 'CSN 모바일 카드 삭제 시 관리 지침',
	keywords: [
		'CSN 모바일 카드',
		'삭제된 CSN 모바일 카드'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "CSN 모바일 카드 삭제 시 관리 지침",
  "id": "csn-모바일-카드-삭제-시-관리-지침",
  "level": 2
}, {
  "value": "삭제된 CSN 모바일 카드 별도 관리",
  "id": "삭제된-csn-모바일-카드-별도-관리",
  "level": 3
}, {
  "value": "삭제된 카드 ID로 재발급 방지",
  "id": "삭제된-카드-id로-재발급-방지",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "csn-모바일-카드-삭제-시-관리-지침",
      children: "CSN 모바일 카드 삭제 시 관리 지침"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar 2에 에어팝 포털 레귤러 사이트를 연동하여 CSN 모바일 카드를 사용 중일 때, 카드를 소지한 사용자가 카드를 삭제하더라도 동일한 카드 ID를 다른 사용자에게 발급할 수 있게 되어 있었습니다. 그러나 동일한 카드 ID를 다른 사용자에게 발급할 경우 기존의 카드 소지자도 계속 출입이 가능한 문제가 발생합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 문제를 해결하기 위해 CSN 모바일 카드를 삭제한 후 삭제 이력을 관리할 수 있도록 개선하였습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "삭제된-csn-모바일-카드-별도-관리",
      children: "삭제된 CSN 모바일 카드 별도 관리"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["삭제된 CSN 모바일 카드는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.setting"
      }), " > ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.card"
      }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.deletedCsnMobileCard"
      }), " 목록에 기록됩니다. 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardType"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.cardList.th.cardFormat"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardId"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.lastCardHolder"
      }), "를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/ko/biostar-298-Deleted-CSN-Mobile-Card.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "삭제된-카드-id로-재발급-방지",
      children: "삭제된 카드 ID로 재발급 방지"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "삭제 이력이 있는 CSN 모바일 카드를 다른 사용자에게 발급하려고 하는 경우 실패 처리합니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/ko/biostar-298-deleted-CSN-Mobile-Card-1.png",
      className: "none",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["삭제된 카드 ID로 카드를 발급하고자 하는 경우 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.deletedCsnMobileCard"
      }), " 목록에서 해당 CSN 모바일 카드를 제외한 후에만 발급이 가능합니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/ko/biostar-deleted-CSN-Mobile-Card-2.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.deletedCsnMobileCard"
        }), " 목록에 포함되어 있는 CSN 모바일 카드는 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.unassignedCard"
        }), " 목록에서 삭제할 수 없습니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.unassignedCard"
        }), " 목록에서 카드를 삭제하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.deletedCsnMobileCard"
        }), " 목록에서 카드를 먼저 제외한 다음 다시 시도하세요."]
      })]
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