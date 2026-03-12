"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["2309"], {
3918: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_update_2912_bs_2_remote_access_mdx_3cf_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-update-2912-bs-2-remote-access-mdx-3cf.json
var site_docs_update_2912_bs_2_remote_access_mdx_3cf_namespaceObject = JSON.parse('{"id":"update/2912/bs2-remote-access","title":"리모트 액세스 설정하기","description":"리모트 액세스를 설정 방법을 안내합니다. 리모트 액세스(Remote Access)는 ngrok 서비스를 통해 외부 네트워크에서 내부 네트워크로 안전하게 접속할 수 있는 기능입니다.","source":"@site/docs/update/2912/bs2-remote-access.mdx","sourceDirName":"update/2912","slug":"/update/2912/bs2-remote-access","permalink":"/biostar2-docs/update/2912/bs2-remote-access","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"bs2-remote-access","title":"리모트 액세스 설정하기","description":"리모트 액세스를 설정 방법을 안내합니다. 리모트 액세스(Remote Access)는 ngrok 서비스를 통해 외부 네트워크에서 내부 네트워크로 안전하게 접속할 수 있는 기능입니다.","keywords":["리모트 액세스","ngrok"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"2.9.12 버전 업데이트 안내","permalink":"/biostar2-docs/update/biostar2-2912"},"next":{"title":"2.9.11 버전 업데이트 안내","permalink":"/biostar2-docs/update/biostar2-2911"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/update/2912/bs2-remote-access.mdx


const frontMatter = {
	id: 'bs2-remote-access',
	title: '리모트 액세스 설정하기',
	description: '리모트 액세스를 설정 방법을 안내합니다. 리모트 액세스(Remote Access)는 ngrok 서비스를 통해 외부 네트워크에서 내부 네트워크로 안전하게 접속할 수 있는 기능입니다.',
	keywords: [
		'리모트 액세스',
		'ngrok'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "언제 사용하나요?",
  "id": "언제-사용하나요",
  "level": 2
}, {
  "value": "리모트 액세스 설정",
  "id": "리모트-액세스-설정",
  "level": 2
}, {
  "value": "리모트 액세스 라이선스 활성화",
  "id": "리모트-액세스-라이선스-활성화",
  "level": 3
}, {
  "value": "리모트 액세스 활성화",
  "id": "리모트-액세스-활성화",
  "level": 3
}, {
  "value": "ngrok 설정 정보 입력",
  "id": "ngrok-설정-정보-입력",
  "level": 3
}, {
  "value": "엔드포인트 URL 접속",
  "id": "엔드포인트-url-접속",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "리모트 액세스(Remote Access)는 기존 BioStar 2 클라우드 기능을 대체하는 새로운 기능입니다. ngrok 서비스를 통해 외부 네트워크에서 내부 네트워크로 안전하게 접속할 수 있는 기능입니다. 이 기능을 사용하면 방화벽 설정이나 포트 포워딩 없이도 원격지에서 BioStar 2 서버에 접속할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["리모트 액세스(Remote Access) 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 리모트 액세스"
            }), " 라이선스가 필요합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "리모트 액세스 라이선스를 구매하면 슈프리마에서는 리모트 액세스 라이선스 발급 및 리모트 액세스 사용을 위한 ngrok 슈프리마 사이트의 bot 계정, 엔드포인트를 생성하고 라이선스 문서를 사용자에게 제공합니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["리모트 액세스(Remote Access) 기능은 제3자 서비스인 ngrok의 터널링 서비스를 통해 제공됩니다. 기능 사용 전 반드시 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.supremainc.com/legal/eula#remote-access-agreement",
              children: "Remote Access 기능 사용 동의"
            }), " 약관을 확인하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStar 2는 단순히 ngrok API를 호출하여 연결을 지원할 뿐, 인터넷 연결의 보안성, 안전성, 연속성은 ngrok 서비스에 전적으로 의존합니다. 따라서 본 기능 사용 중 발생할 수 있는 보안 사고, 데이터 손실, 시스템 침해 등에 대하여 슈프리마는 어떠한 책임도 지지 않습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "언제-사용하나요",
      children: "언제 사용하나요?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음과 같은 상황에서 리모트 액세스 기능을 사용하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "외부 네트워크에서 사내 BioStar 2 서버에 접속해야 할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "방화벽이나 NAT 환경으로 인해 직접 접속이 어려운 경우"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "복잡한 네트워크 설정 없이 간편하게 원격 접속을 구성하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "임시로 외부 접속 권한을 제공해야 하는 경우"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "리모트-액세스-설정",
      children: "리모트 액세스 설정"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "리모트-액세스-라이선스-활성화",
          children: "리모트 액세스 라이선스 활성화"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar 2 관리자 아이디로 로그인하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.setting"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.license"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.license.biostar2"
              }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.remoteAccess.root"
              }), "에서 관리자 이름과 슈프리마로부터 전달받은 리모트 액세스 라이선스 키를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.license.button.activate"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "리모트-액세스-활성화",
          children: "리모트 액세스 활성화"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar 2 관리자 아이디로 로그인하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.setting"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.remoteAccess.root"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.section.title"
              }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.remoteAccess.root"
              }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use"
              }), "으로 변경하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/bs2-settings-remote-access.png"
        }), (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "통합 게이트웨이 설정에 따른 리모트 액세스 접근 권한"
            })
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), "의 활성화 여부에 따라 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.remoteAccess.root"
            }), "로 접근할 수 있는 서비스가 달라집니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enabled"
            }), "는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.systemSecurity"
            }), "에서 설정할 수 있습니다."]
          }), (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "통합 게이트웨이"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "접근 가능 서비스"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "활성화"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "모든 서비스"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "비활성화"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "출입 통제 서비스"
                })]
              })]
            })]
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ngrok-설정-정보-입력",
          children: "ngrok 설정 정보 입력"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "슈프리마로부터 전달받은 ngrok 설정 정보를 입력하세요."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.tunnelToken"
              }), ": 인증 토큰(Authtoken)을 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.hostURL"
              }), ": 엔드포인트 URL을 입력하세요. URL은 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "your-name.bs.ngrok.app"
              }), " 형식입니다."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 정보를 입력한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요. 경고 메시지 창이 나타나면 내용을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.remoteAccess.button.agree"
          }), " 버튼을 클릭하세요."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "엔드포인트-url-접속",
      children: "엔드포인트 URL 접속"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["설정을 완료하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.remoteAccess.field.hostURL"
      }), " 항목에 입력한 엔드포인트 URL을 통해 외부 네트워크에서 BioStar 2 서버에 접속할 수 있는지 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "외부 네트워크에서 엔드포인트 URL을 통해 접속할 수 없다면 라이선스를 발급받은 영업점 또는 대리점에 문의하세요."
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
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
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