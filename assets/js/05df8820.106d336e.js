"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["7537"], {
6875: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_update_2911_bs_2_master_admin_mdx_05d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-update-2911-bs-2-master-admin-mdx-05d.json
var site_docs_update_2911_bs_2_master_admin_mdx_05d_namespaceObject = JSON.parse('{"id":"update/2911/bs2-master-admin","title":"마스터 관리자 설정하기","description":"BioStar 2에서 마스터 관리자를 설정하는 방법에 대한 가이드입니다.","source":"@site/docs/update/2911/bs2-master-admin.mdx","sourceDirName":"update/2911","slug":"/update/2911/bs2-master-admin","permalink":"/biostar2-docs/update/2911/bs2-master-admin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"bs2-master-admin","title":"마스터 관리자 설정하기","description":"BioStar 2에서 마스터 관리자를 설정하는 방법에 대한 가이드입니다.","keywords":["마스터 관리자","Master Admin","관리자 설정","BioStar 2 관리자"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"2.9.11 버전 업데이트 안내","permalink":"/biostar2-docs/update/biostar2-2911"},"next":{"title":"2.9.10 버전 업데이트 안내","permalink":"/biostar2-docs/update/biostar2-2910"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/update/2911/faqs.json
var faqs_namespaceObject = JSON.parse('[{"question":"마스터 관리자를 등록하지 않으면 어떻게 되나요?","answer":"마스터 관리자가 등록되지 않은 신규 장치는 인증 또는 설정 변경이 불가능합니다. 단, 장치를 BioStar에 연결하여 마스터 관리자를 등록할 수 있습니다."},{"question":"기존 장치에서 펌웨어 업그레이드한 장치에서 마스터 관리자 설정이 지원되나요?","answer":"아니요. 기존 장치에서 펌웨어 업그레이드한 장치는 마스터 관리자 설정이 제공되지 않습니다. 단, 2단계 인증 옵션을 통해 전체 관리자의 권한을 강화하여 장치의 보안을 향상시킬 수 있습니다. 자세한 내용은 <a href=\'#2step-authentication\'>2단계 인증</a>을 참조하세요."},{"question":"슬레이브 장치에서도 마스터 관리자를 등록할 수 있나요?","answer":"네. 슬레이브 장치에서도 마스터 관리자를 등록할 수 있습니다."}]')
;// CONCATENATED MODULE: ./docs/update/2911/bs2-master-admin.mdx


const frontMatter = {
	id: 'bs2-master-admin',
	title: '마스터 관리자 설정하기',
	description: 'BioStar 2에서 마스터 관리자를 설정하는 방법에 대한 가이드입니다.',
	keywords: [
		'마스터 관리자',
		'Master Admin',
		'관리자 설정',
		'BioStar 2 관리자'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "마스터 관리자",
  "id": "마스터-관리자",
  "level": 2
}, {
  "value": "마스터 관리자 지원 제품 안내",
  "id": "마스터-관리자-지원-제품-안내",
  "level": 3
}, {
  "value": "BioStar 2에서 마스터 관리자 등록하기",
  "id": "biostar-2에서-마스터-관리자-등록하기",
  "level": 3
}, {
  "value": "BioStar 2에서 마스터 관리자 관리하기",
  "id": "biostar-2에서-마스터-관리자-관리하기",
  "level": 3
}, {
  "value": "마스터 관리자 일괄 편집하기",
  "id": "마스터-관리자-일괄-편집하기",
  "level": 3
}, {
  "value": "2단계 인증",
  "id": "2step-authentication",
  "level": 2
}, {
  "value": "BioStar 2에서 2단계 인증 설정하기",
  "id": "biostar-2에서-2단계-인증-설정하기",
  "level": 3
}, {
  "value": "2단계 인증 일괄 설정하기",
  "id": "2단계-인증-일괄-설정하기",
  "level": 3
}, {
  "value": "안내 사항",
  "id": "안내-사항",
  "level": 2
}, {
  "value": "자주 묻는 질문",
  "id": "자주-묻는-질문",
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
  }, {Cmd, FaqsItems, Image, Row, Table, Tbody, Td, Th} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  if (!Th) _missingMdxReference("Th", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " 기능은 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "전체 관리자 권한을 강화"
      }), "하여, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "장치의 보안을 향상"
      }), "시키고 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "무단 접근 및 설정 변경을 방지"
      }), "하기 위한 기능입니다.", (0,jsx_runtime.jsx)("br", {}), "새 장치에는 이 기능을 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "반드시 마스터 관리자를 등록"
      }), "해야 하며, 등록된 마스터 관리자만 관리자 메뉴에 진입하여 장치 설정을 변경할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LCD 화면을 통한 사용자 인터페이스가 지원되는 슈프리마 제품"
      }), "에서만 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이 기능은 장치의 보안성을 강화하기 위한 필수 정책입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), "는 직접 삭제할 수 없으며 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "공장 초기화 시에만 삭제됩니다"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "마스터-관리자",
      children: "마스터 관리자"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "마스터-관리자-지원-제품-안내",
      children: "마스터 관리자 지원 제품 안내"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " 기능을 지원하는 제품은 다음과 같습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/BioStation 3-Front.png",
              className: "none",
              alone: true,
              width: "130px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/BioStation 2a-front.png",
              className: "none",
              alone: true,
              width: "200px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/BioLite N2-Front.png",
              className: "none",
              alone: true,
              width: "110px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/X-Station 2-Front.png",
              className: "none",
              alone: true,
              width: "300px"
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 3"
            }), (0,jsx_runtime.jsx)("br", {}), "펌웨어 1.4.0 버전 이상"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 2a"
            }), (0,jsx_runtime.jsx)("br", {}), "펌웨어 1.2.0 버전 이상"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioLite N2"
            }), (0,jsx_runtime.jsx)("br", {}), "펌웨어 1.7.0 버전 이상"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "X-Station 2"
            }), (0,jsx_runtime.jsx)("br", {}), "펌웨어 1.4.0 버전 이상"]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-2에서-마스터-관리자-등록하기",
      children: "BioStar 2에서 마스터 관리자 등록하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["새 장치의 연결을 마친 다음 최초로 장치를 부팅하면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " 등록 화면이 나타납니다. 새 장치는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), "를 필수적으로 등록해야 하며, 등록하지 않을 경우 장치 사용이 제한됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar 2에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), "를 등록하고 관리할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에 연결된 장치가 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), "가 등록되지 않은 새 장치만 있는 경우, BioStar 2에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), "를 등록하거나 관리할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), "가 등록되지 않은 장치에서는 크리덴셜 스캔(예: 얼굴, 지문, 카드 입력) 등의 기능이 제한되므로, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), "가 등록된 장치나 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " 기능을 지원하지 않는 장치를 등록용으로 사용하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 v2.9.11"
            }), "부터 지원됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["펌웨어를 업그레이드한 기존 장치는 BioStar 2의 장치 설정에 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " 메뉴가 나타나지 않습니다.", (0,jsx_runtime.jsx)("br", {}), "펌웨어를 업그레이드한 기존 장치는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " 설정을 제공하지 않지만, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), " 옵션을 통해 전체 관리자의 권한을 강화하여 장치의 보안을 향상시킬 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), "의 설정 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#2step-authentication",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar 2에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), "를 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device"
          }), " 메뉴로 이동하여 원하는 장치를 클릭하고 장치의 상세 페이지로 진입하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.advanced"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.administrator"
          }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), " 메뉴에서 원하는 크리덴셜 두 종류를 선택하여 등록하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-master-admin-1.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), "에 등록할 수 있는 크리덴셜은 다음과 같습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Table, {
          children: (0,jsx_runtime.jsxs)(Tbody, {
            children: [(0,jsx_runtime.jsxs)(Row, {
              children: [(0,jsx_runtime.jsx)(Th, {
                children: "크리덴셜 종류"
              }), (0,jsx_runtime.jsx)(Th, {
                children: "등록 가능 개수"
              }), (0,jsx_runtime.jsx)(Th, {
                children: "세부 조건"
              })]
            }), (0,jsx_runtime.jsxs)(Row, {
              children: [(0,jsx_runtime.jsx)(Td, {
                children: "카드"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "최대 4개"
              }), (0,jsx_runtime.jsxs)(Td, {
                children: ["CSN, Wiegand 타입만 지원", (0,jsx_runtime.jsx)("br", {}), "동일 타입 내 중복 등록 불가"]
              })]
            }), (0,jsx_runtime.jsxs)(Row, {
              children: [(0,jsx_runtime.jsx)(Td, {
                children: "얼굴"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "최대 2개"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "동종 알고리즘 탑재 장치에서만 등록 가능"
              })]
            }), (0,jsx_runtime.jsxs)(Row, {
              children: [(0,jsx_runtime.jsx)(Td, {
                children: "지문"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "최대 2개"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(Row, {
              children: [(0,jsx_runtime.jsx)(Td, {
                children: "PIN"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "1개"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "최소 8자리 이상"
              })]
            })]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "등록 조건"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "최소 두 종류 이상의 크리덴셜을 등록해야 합니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "새 장치와 펌웨어 업그레이드 장치 모두 동일한 조건이 적용됩니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "장치가 지원하는 모든 크리덴셜을 인증 수단으로 사용할 수 있습니다."
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["두 종류 이상의 크리덴셜을 등록한 후, ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " 버튼을 누르면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), " 등록이 완료됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-2에서-마스터-관리자-관리하기",
      children: "BioStar 2에서 마스터 관리자 관리하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["등록된 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), "는 BioStar 2에서 관리할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), "를 관리하려면 다음 단계를 따르세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device"
          }), " 메뉴로 이동하여 원하는 장치를 클릭하고 장치의 상세 페이지로 진입하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.advanced"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.administrator"
          }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), " 메뉴에서 등록된 크리덴셜을 확인하고 추가 또는 편집하거나 삭제할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-master-admin-2.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경한 사항을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "마스터-관리자-일괄-편집하기",
      children: "마스터 관리자 일괄 편집하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), "의 크리덴셜을 일괄 편집할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.batchEdit"
      }), " 기능을 통해 여러 장치의 마스터 관리자 크리덴셜을 동시에 등록하거나 수정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device"
          }), " 메뉴에 진입하여 좌측 체크박스에 일괄 편집하려는 장치들을 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-checkbox.png",
            ico: true,
            alone: true
          }), " 체크한 다음 상단의 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-batch-edit.png",
            ico: true,
            alone: true
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), "의 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-batch-edit-activate-button.png",
            ico: true,
            alone: true
          }), "을 클릭하여 편집 모드로 변경한 다음 원하는 크리덴셜을 등록하거나 편집 또는 삭제할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-batch-edit-master-admin.png",
          width: "600px"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "얼굴, 지문, 카드, PIN을 등록할 수 있으며, 최소 두 종류 이상의 크리덴셜을 등록해야 합니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경한 사항을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "일괄 편집 시 등록한 크리덴셜로 덮어쓰입니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "선택한 장치가 새 장치가 아니거나 설정한 크리덴셜을 지원하지 않는 경우, 해당 장치에는 설정이 적용되지 않습니다."
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostar2-batch-edit-master-admin-2.png"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2step-authentication",
      children: "2단계 인증"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["펌웨어를 업그레이드한 기존 장치는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " 설정을 제공하지 않지만, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title"
      }), " 옵션을 통해 전체 관리자의 권한을 강화하여 장치의 보안을 향상시킬 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), " 옵션은 기존에 사용하던 장치에서 펌웨어를 최신 버전으로 업그레이드 한 경우에만 표시됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), " 옵션을 활성화하지 않은 상태에서는 1단계 인증이 기본값입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 등록된 관리자의 크리덴셜이 두 종류 이상인 경우에만 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), "을 활성화할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "업그레이드 장치는 펌웨어 다운그레이드를 할 수 없습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-2에서-2단계-인증-설정하기",
      children: "BioStar 2에서 2단계 인증 설정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar 2에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.twoStepAuth.title"
          }), "를 설정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device"
          }), " 메뉴로 이동하여 원하는 장치를 클릭하고 장치의 상세 페이지로 진입하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "caution",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 전체 관리자가 설정되어 있지 않은 경우 다음과 같은 팝업 메시지가 나타납니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.advanced"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.administrator"
            }), " 탭에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.operatorLevel.all"
            }), "에 관리자를 추가하세요."]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostar2-admin-warning.png"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.advanced"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.administrator"
          }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.twoStepAuth.title"
          }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use"
          }), "으로 활성화하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-2step-auth-1.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " 버튼을 누르면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.twoStepAuth.title"
          }), "이 활성화됩니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["모든 관리자에게 두 종류 이상의 크리덴셜이 등록되어 있지 않을 때 활성화 시 설정이 실패하며 에러 메시지가 표시됩니다.", (0,jsx_runtime.jsx)("br", {}), "모든 관리자에게 두 종류 이상의 크리덴셜을 등록한 다음 다시 시도하세요."]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostar2-2step-auth-warning.png"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "warning",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), "을 활성화한 후 모든 관리자의 크리덴셜을 2종 미만으로 삭제하면, BioStar 2에 연결할 수 없는 상황일 때 장치에서 관리자 메뉴에 접근할 수 없게 됩니다. 따라서 관리자 크리덴셜을 삭제할 때는 각별한 주의가 필요합니다."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2단계-인증-일괄-설정하기",
      children: "2단계 인증 일괄 설정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title"
      }), "을 일괄 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.batchEdit"
      }), " 기능을 통해 여러 장치의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title"
      }), "을 동시에 활성화하거나 비활성화할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device"
          }), " 메뉴에 진입하여 좌측 체크박스에 일괄 편집하려는 장치들을 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-checkbox.png",
            ico: true,
            alone: true
          }), " 체크한 다음 상단의 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-batch-edit.png",
            ico: true,
            alone: true
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.twoStepAuth.title"
          }), "의 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-batch-edit-activate-button.png",
            ico: true,
            alone: true
          }), "을 클릭하여 편집 모드로 변경한 다음 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.twoStepAuth.title"
          }), "을 활성화하거나 비활성화할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-batch-edit-2step-auth.png",
          width: "600px"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), "을 활성화할 경우 등록된 크리덴셜 수가 부족한 관리자는 인증이 불가능할 수 있습니다. 따라서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), "을 활성화하기 전에 모든 관리자의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "크리덴셜이 두 종류 이상 등록"
            }), "되어 있는지 확인하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경한 사항을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "안내-사항",
      children: "안내 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "장치 해시키 수동 변경 시"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "장치 해시키를 수동으로 변경할 경우 마스터 관리자의 PIN이 삭제된다는 경고 메시지가 표시되므로 메시지를 확인한 후 변경하세요."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RS-485 통신구간 얼굴 이미지 전송 제한"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RS-485 통신구간에서는 바이오메트릭 크리덴셜 이미지가 전송되지 않으므로, 슬레이브 장치에서 등록된 마스터 관리자 얼굴 조회 시 대체 이미지를 표시합니다."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "자주-묻는-질문",
      children: "자주 묻는 질문"
    }), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: faqs_namespaceObject
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