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
var site_docs_298_mdx_f6d_namespaceObject = JSON.parse('{"id":"298","title":"BioStar 2 v2.9.8 업데이트 안내","description":"BioStar 2 v2.9.8 업데이트 안내입니다.","source":"@site/docs/298.mdx","sourceDirName":".","slug":"/298","permalink":"/biostar2-docs/en/298","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"298","title":"BioStar 2 v2.9.8 업데이트 안내","description":"BioStar 2 v2.9.8 업데이트 안내입니다.","keywords":["2.9.8","keyword 2"],"isTranslationMissing":true},"sidebar":"biostar","previous":{"title":"BioStar 2 신규 기능 소개","permalink":"/biostar2-docs/en/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/298.mdx


const frontMatter = {
	id: 298,
	title: 'BioStar 2 v2.9.8 업데이트 안내',
	description: 'BioStar 2 v2.9.8 업데이트 안내입니다.',
	keywords: [
		'2.9.8',
		'keyword 2'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "마스크를 착용한 경우 인증을 거부하도록 설정하기",
  "id": "마스크를-착용한-경우-인증을-거부하도록-설정하기",
  "level": 2
}, {
  "value": "사용자 정보에 파일 업로드하기",
  "id": "사용자-정보에-파일-업로드하기",
  "level": 2
}, {
  "value": "장치에 사용자 개인 메시지 표시하기",
  "id": "장치에-사용자-개인-메시지-표시하기",
  "level": 2
}, {
  "value": "사용자 정보에 개인 메시지 입력하기",
  "id": "사용자-정보에-개인-메시지-입력하기",
  "level": 3
}, {
  "value": "장치의 서버 개인 메시지 옵션 활성화하기",
  "id": "장치의-서버-개인-메시지-옵션-활성화하기",
  "level": 3
}, {
  "value": "시간 제한 안티패스백 업데이트",
  "id": "시간-제한-안티패스백-업데이트",
  "level": 2
}, {
  "value": "시간 제한 안티패스백을 장치별로 설정하기",
  "id": "시간-제한-안티패스백을-장치별로-설정하기",
  "level": 3
}, {
  "value": "시간 제한 안티패스백의 항시 통과 그룹 설정하기",
  "id": "시간-제한-안티패스백의-항시-통과-그룹-설정하기",
  "level": 3
}, {
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
}, {
  "value": "그 외 업데이트 및 개선 사항",
  "id": "그-외-업데이트-및-개선-사항",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar 2.9.8 버전에서 업데이트된 기능들을 소개하고 사용하기 쉽도록 안내합니다."
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
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "마스크 착용 시 인증 거부"
            }), " 옵션은 BioStation 3 펌웨어 1.3.1버전 이상에서만 사용할 수 있습니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.mask"
          }), " 설정에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.mask.useMask"
          }), " 기능을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.mask.checkModeDenyMask"
          }), "로 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-298-mask-detection-unmask.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.mask.useMask"
            }), " 기능을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.mask.checkModeDenyMask"
            }), "로 설정한 경우 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.maskOnlyMode"
            }), "이 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.authAfterMode"
            }), "으로 고정되며 변경할 수 없습니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-정보에-파일-업로드하기",
      children: "사용자 정보에 파일 업로드하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "커스텀 사용자 필드를 사용하여 사용자 정보에 파일을 업로드하고 저장할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " > ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.server"
          }), " > ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.userDeviceManagement"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.title"
          }), "의 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ko/ico-add.png",
            ico: true
          }), "를 클릭하여 필드를 추가한 다음, 원하는 이름을 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.type"
          }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.fileupload"
          }), "를 선택한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하여 저장하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-298-apb-alarm.png",
          className: "none",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "파일 업로드 필드는 최대 2개까지 추가할 수 있습니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user"
          }), " 메뉴로 진입한 다음 사용자 목록에서 원하는 사용자를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["추가한 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.fileupload"
          }), " 커스텀 사용자 필드 부분에 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ko/ico-browse.png",
            ico: true
          }), "를 클릭하여 원하는 파일을 업로드하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-298-custom-user-field-file-upload-1.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "업로드 파일 제약사항"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "파일 유형에는 제약이 없습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "지원하는 최대 파일 크기는 1MB 입니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "파일명은 영숫자와 특수 기호(-, _)을 포함하여 최대 120자까지 입력할 수 있습니다."
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["업로드한 파일을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하고, 삭제하려면 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-upload-delete.png",
            ico: true
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["업로드한 파일을 저장한 후에는 사용자 정보에서 ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/ico-download.png",
              ico: true
            }), "를 클릭하여 파일을 다운로드하거나 ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/ico-delete.png",
              ico: true
            }), "를 클릭하여 삭제할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostar-298-custom-user-field-file-upload-2.png",
          caption: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치에-사용자-개인-메시지-표시하기",
      children: "장치에 사용자 개인 메시지 표시하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "슈프리마 장치에는 사용자 인증 시 설정된 개인 메시지를 화면에 표시할 수 있는 기능이 있습니다. 다만 이 기능은 BioStar 2 Device SDK를 이용하여 설정해야만 사용할 수 있었습니다. BioStar 2 v2.9.8부터는 서버 개인 메시지 옵션을 추가하여 더 쉽게 사용자의 개인 메시지를 화면에 표시할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "사용자-정보에-개인-메시지-입력하기",
      children: "사용자 정보에 개인 메시지 입력하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "개인 메시지를 설정하려는 사용자를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.advanced"
          }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.privateMessage"
          }), "란에 인증 시 표시할 메시지를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-298-private-message-1.png",
          className: "none",
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
      id: "장치의-서버-개인-메시지-옵션-활성화하기",
      children: "장치의 서버 개인 메시지 옵션 활성화하기"
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.advanced"
          }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.displaySound"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.serverPrivateMsg"
          }), " 옵션을 활성화하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-298-private-message-2.png",
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
      id: "시간-제한-안티패스백-업데이트",
      children: "시간 제한 안티패스백 업데이트"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            sid: "timedAPB.field"
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
          src: "/img/ko/biostar-298-timed-APB-drop.png",
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
            sid: "timedAPB.field"
          }), "을 사용할 장치를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime"
          }), "을 원하는 대로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.field"
          }), "에 제한받지 않도록 설정할 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apb.bypassGroup"
          }), "을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-298-timed-APB-bypass.png",
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
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)(Image, {
        src: "/img/ko/biostar-298-deleted-CSN-Mobile-Card-1.png",
        className: "none",
        caption: true
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["삭제된 카드 ID로 카드를 발급하고자 하는 경우 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.deletedCsnMobileCard"
      }), " 목록에서 해당 CSN 모바일 카드를 제외한 후에만 발급이 가능합니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/ko/biostar-298-deleted-CSN-Mobile-Card-2.png",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "그-외-업데이트-및-개선-사항",
      children: "그 외 업데이트 및 개선 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar 2 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.video"
          }), " 메뉴 지원 중단"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.door"
          }), " 메뉴 UI 개선"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["출입문 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openTime"
              }), " 설정의 UI 개선"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.alarm"
              }), " 설정에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.antiPassBack"
              }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "timedAPB.title"
              }), " 중 어떤 기능에 대한 알람인지 구분할 수 있도록 UI 개선"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.report"
          }), " 메뉴 성능 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dashboard"
          }), " 메뉴 성능 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록 및 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.advancedSearch"
          }), " 기능의 호환성 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.device"
          }), " 메뉴의 장치 목록 화면에 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.firmwareVersion"
          }), " 열 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring.pastEvent"
          }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "columnSetting.columnList"
          }), "에 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.elevator"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.zone"
          }), " 열 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Wiegand 카드 사전 정의 포맷 추가"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "MIFARE CSN 32bit"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "MIFARE CSN 34bit (Parity)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "DESFire 56bit"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "DESFire 58bit (Parity)"
            }), "\n"]
          }), "\n"]
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