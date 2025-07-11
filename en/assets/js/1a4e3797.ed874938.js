"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["5230"], {
3634: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ theme_SearchPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2933);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 83 modules
var Layout = __webpack_require__(8472);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(4819);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(3012);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(6025);
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://x.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms = [
    'zero',
    'one',
    'two',
    'few',
    'many',
    'other'
];
function sortPluralForms(pluralForms) {
    return OrderedPluralForms.filter((pf)=>pluralForms.includes(pf));
}
// Hardcoded english/fallback implementation
const EnglishPluralForms = {
    locale: 'en',
    pluralForms: sortPluralForms([
        'one',
        'other'
    ]),
    select: (count)=>count === 1 ? 'one' : 'other'
};
function createLocalePluralForms(locale) {
    const pluralRules = new Intl.PluralRules(locale);
    return {
        locale,
        pluralForms: sortPluralForms(pluralRules.resolvedOptions().pluralCategories),
        select: (count)=>pluralRules.select(count)
    };
}
/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */ function useLocalePluralForms() {
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.Z)();
    return (0,react.useMemo)(()=>{
        try {
            return createLocalePluralForms(currentLocale);
        } catch (err) {
            console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);
            return EnglishPluralForms;
        }
    }, [
        currentLocale
    ]);
}
function selectPluralMessage(pluralMessages, count, localePluralForms) {
    const separator = '|';
    const parts = pluralMessages.split(separator);
    if (parts.length === 1) {
        return parts[0];
    }
    if (parts.length > localePluralForms.pluralForms.length) {
        console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);
    }
    const pluralForm = localePluralForms.select(count);
    const pluralFormIndex = localePluralForms.pluralForms.indexOf(pluralForm);
    // In case of not enough plural form messages, we take the last one (other)
    // instead of returning undefined
    return parts[Math.min(pluralFormIndex, parts.length - 1)];
}
/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */ function usePluralForm() {
    const localePluralForm = useLocalePluralForms();
    return {
        selectMessage: (count, pluralMessages)=>selectPluralMessage(pluralMessages, count, localePluralForm)
    };
} //# sourceMappingURL=usePluralForm.js.map

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(7026);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6550);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(7227);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated.js + 1 modules
var proxiedGenerated = __webpack_require__(322);
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/hooks/useSearchQuery.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



const SEARCH_PARAM_QUERY = "q";
const SEARCH_PARAM_CONTEXT = "ctx";
const SEARCH_PARAM_VERSION = "version";
function useSearchQuery() {
    const isBrowser = (0,useIsBrowser/* default */.Z)();
    const history = (0,react_router/* useHistory */.k6)();
    const location = (0,react_router/* useLocation */.TH)();
    const { siteConfig: { baseUrl } } = (0,useDocusaurusContext/* default */.Z)();
    const params = isBrowser ? new URLSearchParams(location.search) : null;
    const searchValue = params?.get(SEARCH_PARAM_QUERY) || "";
    const searchContext = params?.get(SEARCH_PARAM_CONTEXT) || "";
    const searchVersion = params?.get(SEARCH_PARAM_VERSION) || "";
    const getSearchParams = (searchValue)=>{
        const searchParams = new URLSearchParams(location.search);
        if (searchValue) {
            searchParams.set(SEARCH_PARAM_QUERY, searchValue);
        } else {
            searchParams.delete(SEARCH_PARAM_QUERY);
        }
        return searchParams;
    };
    return {
        searchValue,
        searchContext: searchContext && Array.isArray(proxiedGenerated/* searchContextByPaths */.Kc) && proxiedGenerated/* searchContextByPaths,some */.Kc.some((item)=>typeof item === "string" ? item === searchContext : item.path === searchContext) ? searchContext : "",
        searchVersion,
        updateSearchPath: (searchValue)=>{
            const searchParams = getSearchParams(searchValue);
            history.replace({
                search: searchParams.toString()
            });
        },
        updateSearchContext: (value)=>{
            const searchParams = new URLSearchParams(location.search);
            searchParams.set(SEARCH_PARAM_CONTEXT, value);
            history.replace({
                search: searchParams.toString()
            });
        },
        generateSearchPageLink: (searchValue)=>{
            const searchParams = getSearchParams(searchValue);
            // Refer to https://github.com/facebook/docusaurus/pull/2838
            return `${baseUrl}search?${searchParams.toString()}`;
        }
    };
}
/* ESM default export */ const hooks_useSearchQuery = (useSearchQuery);

// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/searchByWorker.js + 1 modules
var searchByWorker = __webpack_require__(9235);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/shared/interfaces.js
var interfaces = __webpack_require__(5528);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlight.js
var highlight = __webpack_require__(5658);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlightStemmed.js + 1 modules
var highlightStemmed = __webpack_require__(6810);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/getStemmedPositions.js
var getStemmedPositions = __webpack_require__(7303);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/LoadingRing/LoadingRing.jsx + 1 modules
var LoadingRing = __webpack_require__(5792);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/concatDocumentPath.js
var concatDocumentPath = __webpack_require__(7591);
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/SearchPage.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const SearchPage_module = ({"searchContextInput":"searchContextInput_mXoe","searchQueryInput":"searchQueryInput_CFBF","searchResultItem":"searchResultItem_U687","searchResultItemPath":"searchResultItemPath_uIbk","searchResultItemSummary":"searchResultItemSummary_oZHr","searchQueryColumn":"searchQueryColumn_q7nx","searchContextColumn":"searchContextColumn_oWAF"});
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/normalizeContextByPath.js
var normalizeContextByPath = __webpack_require__(4969);
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/SearchPage.jsx




















function SearchPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchPageContent, {})
    });
}
function SearchPageContent() {
    const { siteConfig: { baseUrl }, i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.Z)();
    const { selectMessage } = usePluralForm();
    const { searchValue, searchContext, searchVersion, updateSearchPath, updateSearchContext } = hooks_useSearchQuery();
    const [searchQuery, setSearchQuery] = (0,react.useState)(searchValue);
    const [searchResults, setSearchResults] = (0,react.useState)();
    const versionUrl = `${baseUrl}${searchVersion}`;
    const pageTitle = (0,react.useMemo)(()=>searchQuery ? (0,Translate/* translate */.I)({
            id: "theme.SearchPage.existingResultsTitle",
            message: 'Search results for "{query}"',
            description: "The search page title for non-empty query"
        }, {
            query: searchQuery
        }) : (0,Translate/* translate */.I)({
            id: "theme.SearchPage.emptyResultsTitle",
            message: "Search the documentation",
            description: "The search page title for empty query"
        }), [
        searchQuery
    ]);
    (0,react.useEffect)(()=>{
        updateSearchPath(searchQuery);
        if (searchQuery) {
            (async ()=>{
                const results = await (0,searchByWorker/* searchByWorker */.a)(versionUrl, searchContext, searchQuery, 100);
                setSearchResults(results);
            })();
        } else {
            setSearchResults(undefined);
        }
    // `updateSearchPath` should not be in the deps,
    // otherwise will cause call stack overflow.
    }, [
        searchQuery,
        versionUrl,
        searchContext
    ]);
    const handleSearchInputChange = (0,react.useCallback)((e)=>{
        setSearchQuery(e.target.value);
    }, []);
    (0,react.useEffect)(()=>{
        if (searchValue && searchValue !== searchQuery) {
            setSearchQuery(searchValue);
        }
    }, [
        searchValue
    ]);
    const [searchWorkerReady, setSearchWorkerReady] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        async function doFetchIndexes() {
            if (!Array.isArray(proxiedGenerated/* searchContextByPaths */.Kc) || searchContext || proxiedGenerated/* useAllContextsWithNoSearchContext */.pQ) {
                await (0,searchByWorker/* fetchIndexesByWorker */.r)(versionUrl, searchContext);
            }
            setSearchWorkerReady(true);
        }
        doFetchIndexes();
    }, [
        searchContext,
        versionUrl
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Head/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        property: "robots",
                        content: "noindex, follow"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: pageTitle
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container margin-vert--lg",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        children: pageTitle
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (0,clsx/* default */.Z)("col", {
                                    [SearchPage_module.searchQueryColumn]: Array.isArray(proxiedGenerated/* searchContextByPaths */.Kc),
                                    "col--9": Array.isArray(proxiedGenerated/* searchContextByPaths */.Kc),
                                    "col--12": !Array.isArray(proxiedGenerated/* searchContextByPaths */.Kc)
                                }),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                    type: "search",
                                    name: "q",
                                    className: SearchPage_module.searchQueryInput,
                                    "aria-label": "Search",
                                    onChange: handleSearchInputChange,
                                    value: searchQuery,
                                    autoComplete: "off",
                                    autoFocus: true
                                })
                            }),
                            Array.isArray(proxiedGenerated/* searchContextByPaths */.Kc) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (0,clsx/* default */.Z)("col", "col--3", "padding-left--none", SearchPage_module.searchContextColumn),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                    name: "search-context",
                                    className: SearchPage_module.searchContextInput,
                                    id: "context-selector",
                                    value: searchContext,
                                    onChange: (e)=>updateSearchContext(e.target.value),
                                    children: [
                                        proxiedGenerated/* useAllContextsWithNoSearchContext */.pQ && /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                            value: "",
                                            children: (0,Translate/* translate */.I)({
                                                id: "theme.SearchPage.searchContext.everywhere",
                                                message: "Everywhere"
                                            })
                                        }),
                                        proxiedGenerated/* searchContextByPaths,map */.Kc.map((context)=>{
                                            const { label, path } = (0,normalizeContextByPath/* normalizeContextByPath */._)(context, currentLocale);
                                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: path,
                                                children: label
                                            }, path);
                                        })
                                    ]
                                })
                            }) : null
                        ]
                    }),
                    !searchWorkerReady && searchQuery && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingRing/* default */.Z, {})
                    }),
                    searchResults && (searchResults.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: selectMessage(searchResults.length, (0,Translate/* translate */.I)({
                            id: "theme.SearchPage.documentsFound.plurals",
                            message: "1 document found|{count} documents found",
                            description: 'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'
                        }, {
                            count: searchResults.length
                        }))
                    }) :  true ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: (0,Translate/* translate */.I)({
                            id: "theme.SearchPage.noResultsText",
                            message: "No documents were found",
                            description: "The paragraph for empty search result"
                        })
                    }) : /*#__PURE__*/ 0),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        children: searchResults && searchResults.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultItem, {
                                searchResult: item
                            }, item.document.i))
                    })
                ]
            })
        ]
    });
}
function SearchResultItem(param) {
    let { searchResult: { document, type, page, tokens, metadata } } = param;
    const isTitle = type === interfaces/* SearchDocumentType,Title */.P.Title;
    const isKeywords = type === interfaces/* SearchDocumentType,Keywords */.P.Keywords;
    const isDescription = type === interfaces/* SearchDocumentType,Description */.P.Description;
    const isDescriptionOrKeywords = isDescription || isKeywords;
    const isTitleRelated = isTitle || isDescriptionOrKeywords;
    const isContent = type === interfaces/* SearchDocumentType,Content */.P.Content;
    const pathItems = (isTitle ? document.b : page.b).slice();
    const articleTitle = isContent || isDescriptionOrKeywords ? document.s : document.t;
    if (!isTitleRelated) {
        pathItems.push(page.t);
    }
    let search = "";
    if (proxiedGenerated/* Mark */.vc && tokens.length > 0) {
        const params = new URLSearchParams();
        for (const token of tokens){
            params.append("_highlight", token);
        }
        search = `?${params.toString()}`;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: SearchPage_module.searchResultItem,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    to: document.u + search + (document.h || ""),
                    dangerouslySetInnerHTML: {
                        __html: isContent || isDescriptionOrKeywords ? (0,highlight/* highlight */.C)(articleTitle, tokens) : (0,highlightStemmed/* highlightStemmed */.o)(articleTitle, (0,getStemmedPositions/* getStemmedPositions */.m)(metadata, "t"), tokens, 100)
                    }
                })
            }),
            pathItems.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: SearchPage_module.searchResultItemPath,
                children: (0,concatDocumentPath/* concatDocumentPath */.e)(pathItems)
            }),
            (isContent || isDescription) && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: SearchPage_module.searchResultItemSummary,
                dangerouslySetInnerHTML: {
                    __html: (0,highlightStemmed/* highlightStemmed */.o)(document.t, (0,getStemmedPositions/* getStemmedPositions */.m)(metadata, "t"), tokens, 100)
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/index.js

/* ESM default export */ const theme_SearchPage = (SearchPage);


}),

}]);