"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["92"], {
"6495": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_multi_factor_auth_for_login_mdx_edb_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-multi-factor-auth-for-login-mdx-edb.json
var site_docs_multi_factor_auth_for_login_mdx_edb_namespaceObject = JSON.parse('{"id":"multi-factor-auth-for-login","title":"다중 인증으로 BioStar 2 로그인하기","description":"다중 인증으로 BioStar 2 로그인하는 방법입니다.","source":"@site/docs/multi-factor-auth-for-login.mdx","sourceDirName":".","slug":"/multi-factor-auth-for-login","permalink":"/biostar2-docs/multi-factor-auth-for-login","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"multi-factor-auth-for-login","title":"다중 인증으로 BioStar 2 로그인하기","description":"다중 인증으로 BioStar 2 로그인하는 방법입니다.","keywords":["2.9.7","다중 인증"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"BioStar 2 v2.9.8 업데이트 안내","permalink":"/biostar2-docs/298"},"next":{"title":"비주얼 페이스를 템플릿으로만 동기화하기","permalink":"/biostar2-docs/visual-face-with-template"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/multi-factor-auth-for-login.mdx


const frontMatter = {
	id: 'multi-factor-auth-for-login',
	title: '다중 인증으로 BioStar 2 로그인하기',
	description: '다중 인증으로 BioStar 2 로그인하는 방법입니다.',
	keywords: [
		'2.9.7',
		'다중 인증'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "참고사항",
  "id": "참고사항",
  "level": 2
}, {
  "value": "다중 인증 로그인 설정하기",
  "id": "다중-인증-로그인-설정하기",
  "level": 2
}, {
  "value": "여러 사용자에게 동시에 설정하기",
  "id": "여러-사용자에게-동시에-설정하기",
  "level": 3
}, {
  "value": "다중 인증으로 로그인하기",
  "id": "다중-인증으로-로그인하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar 2에 로그인 시 ID와 비밀번호만으로는 계정의 보안이 부족하다고 느끼거나 보안을 강화하고 싶은 사용자의 경우 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.fingerprintLogin"
      }), " 기능을 사용하여 계정의 보안을 향상 시킬 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.fingerprintLogin"
      }), "은 기존의 ID와 비밀번호 조합에 지문 스캐너를 이용한 지문 인증 단계를 추가하여 사용자 계정의 보안을 향상시킬 수 있는 기능입니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/ko/biostar-297-login-full.png",
      className: "none",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.fingerprintLogin"
        }), " 기능을 사용하려면 BioStar 2 클라이언트에 다중 인증 로그인이 지원되는 지문 스캐너가 연결되어 있어야 합니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "지원되는 지문 스캐너는 다음과 같습니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "BioMini"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "BioMini Plus 2"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "참고사항",
      children: "참고사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["전체 관리자(ID 1번) 계정에 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.fingerprintLogin"
        }), "을 사용하는 동안 지문을 사용할 수 없게 되는 경우 계정에 영구적으로 로그인할 수 없게 되므로 주의가 필요합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["지문을 사용할 수 없게 되어 로그인이 불가해진 경우 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://support.supremainc.com",
            children: "슈프리마 기술지원팀"
          }), "으로 문의하세요."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), "이 설정되어 있는 사용자가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 클라우드"
            }), "로 접속할 경우 지문 인증 로그인을 지원하지 않으므로 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), "을 사용할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["액티브 디렉토리 서버 계정으로 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "biostar.login"
            }), " 옵션을 사용 중인 경우 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), "을 사용할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), "이 설정되어 있는 사용자는 BioStar 2 AC 이외의 BioStar 2 서비스에 등록할 수 없습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "다중-인증-로그인-설정하기",
      children: "다중 인증 로그인 설정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.fingerprintLogin"
          }), "을 설정하려는 사용자를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.fingerprintLogin"
          }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.fingerprintLogin.active"
          }), "으로 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.fingerprintLogin"
            }), " 기능을 사용하기 전에 다음 조건들을 만족해야 합니다."]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "이 기능을 사용하려는 사용자에게 지문 인증 수단이 등록되어 있어야 합니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.bioStarOperator"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.loginId"
                }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.password"
                }), "가 설정되어 있어야 합니다."]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-297-multi-factor-auth-1.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "여러-사용자에게-동시에-설정하기",
      children: "여러 사용자에게 동시에 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "일괄 편집에서 여러명의 사용자를 선택하여 한 번에 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록에서 설정하려는 사용자들을 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-checkbox.png",
            ico: true
          }), "체크하여 선택한 다음 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ko/ico-batch-edit.png",
            ico: true
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.fingerprintLogin"
          }), "의 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-batch-edit-activate-button.png",
            ico: true
          }), "을 클릭하여 편집 모드로 변경한 다음 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.fingerprintLogin.active"
          }), "으로 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.ok"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-297-multi-factor-auth-2.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["선택한 사용자 중에 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.fingerprintLogin"
              }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user.fingerprintLogin.active"
              }), "으로 설정하는 데에 필요한 조건들을 만족하지 않는 사용자가 있는 경우 팝업 메시지에 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user.batchedit.popup.notavailableuser"
              }), "가 표시됩니다. 설정에 필요한 조건들을 확인한 다음 다시 시도하세요."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.fingerprintLogin"
                }), " 기능을 사용하려면 다음 조건들을 만족해야 합니다."]
              }), (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "이 기능을 사용하려는 사용자에게 지문 인증 수단이 등록되어 있어야 합니다."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "user.bioStarOperator"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "user.loginId"
                    }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "common.password"
                    }), "가 설정되어 있어야 합니다."]
                  }), "\n"]
                }), "\n"]
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "다중-인증으로-로그인하기",
      children: "다중 인증으로 로그인하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 로그인 화면에서 사용자 ID와 비밀번호를 입력하고 로그인하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-297-login.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "지문 입력 화면이 나타납니다. 지문 스캐너에 등록한 손가락의 지문을 입력하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-297-multi-factor-auth-3.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "스캔 제한 시간은 18초로 고정되어 있으며 변경할 수 없습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "지문은 3회까지 연속으로 스캔할 수 있으며 3회 내에 지문이 정확하게 스캔 되지 않으면 인증 실패 처리됩니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["인증에 실패한 경우 ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/ko/ico-retry.png",
                  ico: true
                }), "를 클릭하여 지문 인증을 재시도할 수 있습니다. 최대 2회까지 재시도할 수 있습니다."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "재시도 횟수 2회 동안에도 인증에 실패하는 경우 ID + 비밀번호 로그인 단계로 되돌아갑니다."
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/ko/biostar-297-multi-factor-auth-fail.png",
            caption: true
          })]
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