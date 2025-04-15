"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["8033"], {
"455": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Cover)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 78 modules
var Layout = __webpack_require__("1225");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__("3187");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__("7262");
;// CONCATENATED MODULE: ./src/pages/cover/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"coverpage":"coverpage_s00n","title":"title_Ox8A","ver":"ver_YY1T","lang":"lang_UZLZ","number":"number__Jg4","next":"next_L80O","footer":"footer_XGkm","logo":"logo_jjey"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__("1199");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
;// CONCATENATED MODULE: ./src/pages/cover/biostar2.js








function Cover() {
    const { i18n: { currentLocale, label }, siteConfig } = (0,useDocusaurusContext/* default */.Z)();
    const title = "BioStar 2";
    const subtitle = "Revision Notes";
    const ver = "v2.9.8";
    const lang = siteConfig.i18n.localeConfigs[currentLocale].label;
    const langLabel = currentLocale.toUpperCase();
    const num = `${langLabel} 301.00.BS2`;
    const next = (0,useBaseUrl/* default */.ZP)('/revision');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Head/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "robots",
                        content: "noindex, nofollow"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("style", {
                        children: `@page {margin: 0;}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.coverpage,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.title,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                children: subtitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.ver,
                                children: ver
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.lang,
                                children: lang
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.number,
                                children: num
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.footer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: (0,useBaseUrl/* default */.ZP)('img/suprema-logo-bottom.svg'),
                            className: styles_module.logo,
                            alt: "Suprema Logo"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                        className: (0,clsx/* default */.Z)(styles_module.next, "pagination-nav__link pagination-nav__link--next"),
                        href: next,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "pagination-nav__sublabel",
                            children: "다음"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "page-break"
                    })
                ]
            })
        ]
    });
}


}),

}]);