"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["5870"], {
"8795": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_index_mdx_c10_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-index-mdx-c10.json
var site_docs_revision_index_mdx_c10_namespaceObject = JSON.parse('{"id":"revision/index","title":"BioStar 2 리비전 노트","description":"신기능이나 개선된 기능 및 버그 수정에 대한 정보를 제공합니다.","source":"@site/docs/revision/index.mdx","sourceDirName":"revision","slug":"/revision/","permalink":"/biostar2-docs/en/revision/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BioStar 2 리비전 노트","description":"신기능이나 개선된 기능 및 버그 수정에 대한 정보를 제공합니다.","isTranslationMissing":true},"sidebar":"biostar","previous":{"title":"BioStar 2 통합 게이트웨이 사용하기","permalink":"/biostar2-docs/en/update/295/unified-gateway"},"next":{"title":"버전 2.9.8 (v2.9.8.30)","permalink":"/biostar2-docs/en/revision/298"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/revision/index.mdx


const frontMatter = {
	title: 'BioStar 2 리비전 노트',
	description: '신기능이나 개선된 기능 및 버그 수정에 대한 정보를 제공합니다.',
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "BioStar 2 업그레이드 시 주의사항",
  "id": "biostar-2-업그레이드-시-주의사항",
  "level": 2
}, {
  "value": "리비전 노트",
  "id": "리비전-노트",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    li: "li",
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
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "biostar-2-업그레이드-시-주의사항",
      children: "BioStar 2 업그레이드 시 주의사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2.9.2 버전부터는 32비트 운영체제용 설치 파일이 제공되지 않습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 1이 설치된 PC에 BioStar 2를 설치하지 마세요. 프로그램 성능에 문제가 발생할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2.2.1이나 2.2.2 버전이 설치된 상태에서 BioStar 2.3.0을 설치할 경우 SQLite에 저장된 모든 정보를 새로운 MariaDB로 마이그레이션합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 최신 버전으로의 업그레이드는 버전 2.6.0에서부터 지원됩니다. BioStar 2.6.0 이하 버전을 사용 중인 경우, 최신 버전으로 업그레이드하려면 아래와 같이 2.6.0 이하 버전의 BioStar 2를 모두 순차적으로 설치하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "현재 버전"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "업그레이드 순서"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.2.1 > 2.3 > 2.4 > 2.4.1 > 2.5.0 > 2.6.4 > 최신 버전"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: ["2.2", (0,jsx_runtime.jsx)("br", {}), "2.2.1", (0,jsx_runtime.jsx)("br", {}), "2.2.2"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.3 > 2.4 > 2.4.1 > 2.5.0 > 2.6.4 > 최신 버전"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2.3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.4 > 2.4.1 > 2.5.0 > 2.6.4 > 최신 버전"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2.4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.4.1 > 2.5.0 > 2.6.4 > 최신 버전"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: ["2.5", (0,jsx_runtime.jsx)("br", {}), "2.6"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.6.4 > 최신 버전"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2.6.4 버전 이상"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "최신 버전"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows 8.1을 사용하는 경우 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://support.microsoft.com/ko-kr/help/2919355/windows-rt-8-1--windows-8-1--and-windows-server-2012-r2-update-april-2",
            children: "다음 링크"
          }), "를 참고하여 KB2919355 업데이트를 설치하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL 2012 Express를 사용할 경우 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/ko-kr/download/details.aspx?id=49996",
            children: "다음 링크"
          }), "를 참고하여 서비스 팩 3를 설치하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL 2014 Express를 사용할 경우 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/ko-kr/download/details.aspx?id=53168",
            children: "다음 링크"
          }), "를 참고하여 서비스 팩 2를 설치하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL Server와 BioStar 2가 서로 다른 PC에 설치된 경우 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/ko-kr/download/details.aspx?id=50402",
            children: "다음 링크"
          }), "를 참고하여 BioStar 2가 설치된 PC에 Native Client를 설치해야 합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL Server를 사용할 경우 서버 및 각 테이블의 Collation 옵션을 CI (Case-insensitive)로 설정하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기존 버전의 BioStar 2에서 데이터베이스를 백업할 때 모든 서비스를 사용 중지한 뒤 진행하세요. 또한, AC 데이터베이스와 TA 데이터베이스를 함께 백업하고 복원하지 않으면 TA 데이터베이스를 사용할 수 없게 됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar 2 데이터베이스를 백업하려면 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar 2(x64)\\util"
          }), " 폴더의 enckey 파일과 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar 2(x64)"
          }), " 폴더의 system.conf, setting.conf 파일도 반드시 함께 백업하세요. 그렇지 않으면, 데이터베이스를 사용할 수 없게 됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2가 사용하는 포트의 기본 값은 아래와 같습니다. 다른 프로그램에서 동일한 포트를 점유할 경우 BioStar 2가 정상적으로 구동되지 않을 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/ko/biostar_2_port_ko.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "관리자 가이드 변경점 안내"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["BioStar 2.9.5 버전부터는 신기능이나 개선된 기능의 사용 방법에 대해 주제 단위로 분리하여 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "기능 가이드"
        }), "를 제공합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "FaceStation F2 v1.x.x 펌웨어 지원 중단 안내"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "BioStar 2 v2.9.7부터 사용자의 비주얼 페이스를 장치에 동기화할 때 템플릿만 전송하도록 변경하여 동기화 성능을 최적화했습니다."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "따라서 BioStar 2 v2.9.7부터는 장치에서만 템플릿을 추출할 수 있는 FaceStation F2 v1.x.x 펌웨어의 지원이 중단됩니다."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["현재 FaceStation F2의 1.x.x 버전 펌웨어를 사용 중인 경우 BioStar 2 v2.9.7을 사용하기 위해서는 FaceStation F2를 최신 펌웨어로 업그레이드하여 사용하세요. (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com",
          children: "https://download.supremainc.com"
        }), ")"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "특정 옵션에서 드롭다운 목록을 제대로 선택할 수 없는 경우 문제 해결 방법 (2.9.7 버전 이하)"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "크롬(Chrome)의 Keyboard focusable scrollers 기능이 활성화되어 있는 경우, 드롭다운 목록이 길어서 스크롤이 필요한 옵션을 선택할 때 키보드 포커스가 의도하지 않은 방식으로 동작하여, 사용자가 원하는 옵션을 제대로 선택할 수 없는 문제가 발생할 수 있습니다."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "해결 방법"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "크롬(Chrome) 설정에서 Keyboard focusable scrollers 기능 비활성화"
          })
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "주소창에 *chrome://flags/*를 입력하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Keyboard focusable scrollers"
            }), "를 검색하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Keyboard focusable scrollers"
            }), "의 드롭다운 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disabled"
            }), "를 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "다시 시작"
            }), "을 눌러 크롬(Chrome)을 다시 시작하면 변경 사항이 적용됩니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/ko/keyboard_focusable_scrollers_ko.png",
        className: "none"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "리비전-노트",
      children: "리비전 노트"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "298",
        children: "버전 2.9.8 (v2.9.8.30)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "297",
        children: "버전 2.9.7 (v2.9.7.41)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "296",
        children: "버전 2.9.6 (v2.9.6.40)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "295",
        children: "버전 2.9.5 (v2.9.5.29)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "294",
        children: "버전 2.9.4 (v2.9.4.29)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "293",
        children: "버전 2.9.3 (v2.9.3.26)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "292",
        children: "버전 2.9.2 (v2.9.2.4)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "291",
        children: "버전 2.9.1 (v2.9.1.25)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "290",
        children: "버전 2.9.0 (v2.9.0.80)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2817",
        children: "버전 2.8.17 (v2.8.17.62)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2816",
        children: "버전 2.8.16 (v2.8.16.56)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2815",
        children: "버전 2.8.15 (v2.8.15.12)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2814",
        children: "버전 2.8.14 (v2.8.14.74)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2813",
        children: "버전 2.8.13 (v2.8.13.22)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2812",
        children: "버전 2.8.12 (v2.8.12.10)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2811",
        children: "버전 2.8.11 (v2.8.11.60)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2810",
        children: "버전 2.8.10 (v2.8.10.37)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "289",
        children: "버전 2.8.9 (v2.8.9.53)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "288",
        children: "버전 2.8.8 (v2.8.8.10)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "286",
        children: "버전 2.8.6 (v2.8.6.38)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "285",
        children: "버전 2.8.5 (v2.8.5.46)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "284",
        children: "버전 2.8.4 (v2.8.4.34)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "283",
        children: "버전 2.8.3 (v2.8.3.10)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "282",
        children: "버전 2.8.2 (v2.8.2.3)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "281",
        children: "버전 2.8.1 (v2.8.1.35)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "280",
        children: "버전 2.8.0 (v2.8.0.106)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2714",
        children: "버전 2.7.14 (v2.7.14.52)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2712",
        children: "버전 2.7.12 (v2.7.12.39)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2711",
        children: "버전 2.7.11 (v2.7.11.65)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "2710",
        children: "버전 2.7.10 (v2.7.10.21)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "278",
        children: "버전 2.7.8 (v2.7.8.42)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "277",
        children: "버전 2.7.7 (v2.7.7.38)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "276",
        children: "버전 2.7.6 (v2.7.6.16)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "275",
        children: "버전 2.7.5 (v2.7.5.7)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "274",
        children: "버전 2.7.4 (v2.7.4.25)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "273",
        children: "버전 2.7.3 (v2.7.3.23)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "272",
        children: "버전 2.7.2 (v2.7.2.19)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "271",
        children: "버전 2.7.1 (v2.7.1.13)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "270",
        children: "버전 2.7.0 (v2.7.0.50)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "264",
        children: "버전 2.6.4 (v2.6.4.7)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "263",
        children: "버전 2.6.3 (v2.6.3.73)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "262",
        children: "버전 2.6.2 (v2.6.2.64)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "261",
        children: "버전 2.6.1 (v2.6.1.10)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "260",
        children: "버전 2.6.0 (v2.6.0.155)"
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