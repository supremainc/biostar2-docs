"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["7566"], {
"7208": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_update_299_how_to_use_cs_20_mdx_871_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-update-299-how-to-use-cs-20-mdx-871.json
var site_docs_update_299_how_to_use_cs_20_mdx_871_namespaceObject = JSON.parse('{"id":"update/299/how-to-use-cs20","title":"CoreStation 20 설정 및 출입문 생성하기","description":"BioStar 2에서 CoreStation 20을 올바르게 사용하는 방법을 설명합니다.","source":"@site/docs/update/299/how-to-use-cs20.mdx","sourceDirName":"update/299","slug":"/update/299/how-to-use-cs20","permalink":"/biostar2-docs/update/299/how-to-use-cs20","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"how-to-use-cs20","title":"CoreStation 20 설정 및 출입문 생성하기","description":"BioStar 2에서 CoreStation 20을 올바르게 사용하는 방법을 설명합니다.","keywords":["CoreStation 20","CS-20","CS-20P"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"2.9.9 버전 업데이트 안내","permalink":"/biostar2-docs/update/biostar2-299"},"next":{"title":"Door Interface 오프라인 모드 전용 시설 코드 인증 설정하기","permalink":"/biostar2-docs/update/299/how-to-use-di24"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/update/299/how-to-use-cs20.mdx


const frontMatter = {
	id: 'how-to-use-cs20',
	title: 'CoreStation 20 설정 및 출입문 생성하기',
	description: 'BioStar 2에서 CoreStation 20을 올바르게 사용하는 방법을 설명합니다.',
	keywords: [
		'CoreStation 20',
		'CS-20',
		'CS-20P'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "세부 항목 설정하기",
  "id": "cs20detailsetting",
  "level": 2
}, {
  "value": "장치 정보",
  "id": "장치-정보",
  "level": 3
}, {
  "value": "시스템",
  "id": "시스템",
  "level": 5
}, {
  "value": "네트워크 설정",
  "id": "네트워크-설정",
  "level": 3
}, {
  "value": "TCP/IP",
  "id": "tcpip",
  "level": 5
}, {
  "value": "서버 통신",
  "id": "서버-통신",
  "level": 5
}, {
  "value": "시리얼 통신",
  "id": "시리얼-통신",
  "level": 5
}, {
  "value": "인증 설정",
  "id": "인증-설정",
  "level": 3
}, {
  "value": "카드 종류",
  "id": "카드-종류",
  "level": 5
}, {
  "value": "고급 설정",
  "id": "고급-설정",
  "level": 3
}, {
  "value": "작업 조건 및 동작",
  "id": "작업-조건-및-동작",
  "level": 5
}, {
  "value": "Wiegand",
  "id": "wiegand",
  "level": 5
}, {
  "value": "Supervised Input",
  "id": "supervised-input",
  "level": 5
}, {
  "value": "보안 탬퍼",
  "id": "보안-탬퍼",
  "level": 5
}, {
  "value": "OSDP 리더 LED 및 버저",
  "id": "osdp-리더-led-및-버저",
  "level": 3
}, {
  "value": "LED",
  "id": "led",
  "level": 5
}, {
  "value": "버저",
  "id": "버저",
  "level": 5
}, {
  "value": "간편 출입문 설정 기능으로 출입문 생성하기",
  "id": "간편-출입문-설정-기능으로-출입문-생성하기",
  "level": 2
}, {
  "value": "<Cmd></Cmd> 메뉴에서 출입문 생성하기",
  "id": "-메뉴에서-출입문-생성하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h5: "h5",
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
      children: ["CoreStation 20(CS-20/CS-20P)은 2도어 출입 통제를 손쉽게 구현할 수 있는 슈프리마의 신규 컨트롤러입니다.", (0,jsx_runtime.jsx)("br", {}), "기존 4도어 지원 모델인 CoreStation(CS-40) 대비 경량화되어, RFID 카드 기반 출입 통제에 최적화된 설계를 제공합니다.", (0,jsx_runtime.jsx)("br", {}), "최대 50만 명의 사용자 정보를 저장할 수 있으며, 다양한 인터페이스와의 호환성을 지원합니다.", (0,jsx_runtime.jsx)("br", {}), "특히 CS-20P 모델은 PoE+(Power over Ethernet)로 간편한 설치가 가능하며, 보안 강화를 위한 SAM 카드 슬롯도 탑재하고 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 문서에서는 BioStar 2에서 CoreStation 20의 메뉴 설명과 출입문을 생성하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation 20은 무선 도어락을 지원하지 않습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CoreStation 20은 바이오메트릭 인증(얼굴, 지문 등)은 지원하지 않으며, 카드 인증만 지원합니다.", (0,jsx_runtime.jsx)("br", {}), "바이오메트릭 인증을 사용하려는 경우에는 CoreStation(CS-40)을 사용하는 것을 권장합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cs20detailsetting",
      children: "세부 항목 설정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.device"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록에서 설정하려는 CoreStation 20(CS-20/CS-20P)을 선택하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-정보",
      children: "장치 정보"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-Info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.name"
          }), ": 원하는 장치 이름을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceId"
          }), ": 장치 ID를 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.firmwareVersion"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.firmwareUpgrade"
          }), "를 클릭하면 새로운 펌웨어 버전을 설치할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.kernelVersion"
          }), ": 커널 버전을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.factoryDefault"
          }), ": 장치의 설정을 초기화할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset"
          }), "을 클릭하면 모든 설정을 초기화하며, ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset.withoutNetwork"
          }), "를 클릭하면 네트워크 설정은 유지하고 나머지 설정을 초기화합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeZone"
          }), ": 장치의 표준 시간대를 설정하세요. 장치의 표준 시간대는 BioStar 2 서버의 시간대와 다르게 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.setting.dst"
          }), ": 사용자가 설정한 일광 절약 시간을 장치에 적용할 수 있습니다. 새 일광 절약 시간은 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.dst"
          }), "에서 추가할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.group"
          }), ": 장치 그룹을 변경할 수 있습니다. 장치 그룹은 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.device"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.device.allDeviceGroups"
          }), " 부분에 마우스 오른쪽 버튼을 클릭한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.addDeviceGroup"
          }), "를 선택하여 추가할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceType"
          }), ": 장치 종류를 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.productName"
          }), ": 모델 이름을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.hwVersion"
          }), ": 하드웨어 버전을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.locked"
          }), ": 작업 조건 및 동작에 의해 장치가 잠겼을 경우 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.unlock"
          }), " 버튼을 클릭하여 해제할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeSync"
          }), ": 장치의 시간 정보를 서버와 동기화하려면 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "시스템",
      children: "시스템"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.date"
          }), ": ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/menus/ico-calendar.png",
            ico: true,
            alone: true
          }), "을 클릭하여 날짜와 시간을 수동으로 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeSync"
          }), "가 선택되어 있다면 사용자가 수동으로 날짜나 시간을 선택할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.getTime"
          }), ": 장치에 설정된 시간을 불러오려면 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.setTime"
          }), ": BioStar 2에 설정된 시간을 장치에 적용하려면 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "네트워크-설정",
      children: "네트워크 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TCP/IP"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DHCP"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP 주소"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "서브넷 마스크"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "게이트웨이"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS"
      }), " 등 기본 네트워크 설정을 지원합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.rs485"
        }), " 포트는 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.rs485.master"
        }), " 모드만 사용할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-Network.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "tcpip",
      children: "TCP/IP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useDhcp"
          }), ": 장치가 유동 IP 주소를 사용하도록 설정하려면 체크하세요. 이 항목을 체크하면 고정 IP 주소를 할당할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipAddress"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.subnetMask"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.gateway"
          }), ": 장치에 고정 IP를 할당할 경우 각 네트워크 정보를 입력하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useDhcp"
          }), "을 체크 해제한 뒤 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.devicePort"
          }), ": 장치가 사용할 포트를 입력하세요. 이 포트는 BioStar 2와 장치 간의 통신에 사용됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.dnsServerAddress"
          }), ": DNS 서버 주소를 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "서버-통신",
      children: "서버 통신"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceToServerConnection"
          }), ": 장치에서 연결할 BioStar 2 정보를 설정하려면 선택하세요. 이 항목을 선택하면 BioStar 2의 네트워크 정보를 입력할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.serverIP"
          }), ": BioStar 2의 IP 주소를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.serverPort"
          }), ": BioStar 2의 포트를 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "시리얼-통신",
      children: "시리얼 통신"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.rs485"
          }), ": 마스터 모드만 사용할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.baudRate"
          }), ": 각 RS-485 포트의 전송 속도를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.scbKey"
          }), ": 장치의 SCB 키를 설정할 수 있습니다. 이 메뉴는 CoreStation 20에 연결된 RS-485 장치가 없을 때만 활성화됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.scbKeyConfirm"
          }), ": 설정한 SCB 키와 일치 여부를 확인합니다. 이 메뉴는 CoreStation 20에 연결된 RS-485 장치가 없을 때만 활성화됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.scbKey"
        }), "는 최대 16 바이트까지 입력할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "인증-설정",
      children: "인증 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.serverMatching"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardType"
      }), "(", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.CSN"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.emcard"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.mifare_felica"
      }), "), ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.byteOrder"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.formatType"
      }), " 등 카드 인증 관련 설정을 지원합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "CoreStation 20은 바이오메트릭 인증(얼굴, 지문 등)은 지원하지 않으며, 카드 인증만 지원합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-auth.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching"
        }), ": ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.active"
        }), "으로 설정하면 BioStar 2가 설치된 PC에 저장된 사용자 정보를 이용하여 인증을 수행하며, ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.inactive"
        }), "으로 설정하면 장치에 저장된 사용자 정보를 이용하여 인증을 수행합니다. 서버 매칭을 사용할 경우 BioStar 2의 서버 매칭도 활성화해야 하며, ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching"
        }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.serverMatching.use"
        }), "을 활성화하세요."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "카드-종류",
      children: "카드 종류"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치에서 사용할 카드 종류를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "장치에서 지원하는 카드 종류가 표시됩니다."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.card.CSN"
        }), ": CSN 카드 및 포맷 종류를 선택하고 바이트 순서를 설정할 수 있습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.formatType"
            }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.cardIdFormat.normal"
            }), "으로 설정하면 카드의 일련 번호(CSN)를 별도의 변환 없이 모두 읽어서 표현하며, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.cardIdFormat.wiegand"
            }), "로 설정하면 장치가 CSN 카드를 읽을 때 사용자가 정의한 Wiegand 형식에 따라 카드의 일련 번호(CSN)를 변환하며 표현합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.formatType"
            }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.cardIdFormat.wiegand"
            }), "로 설정하면 장치에서 사용할 Wiegand 형식을 선택할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.byteOrder"
            }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "MSB"
            }), "로 설정하면 카드 데이터가 큰 바이트에서 작은 바이트 순서로 처리되어, 카드의 일련 번호(CSN)가 왼쪽에서 오른쪽으로 저장됩니다. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "LSB"
            }), "는 작은 바이트 단위에서 큰 바이트 단위 순서로 처리하여 카드의 일련 번호(CSN)를 저장합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "고급-설정",
      children: "고급 설정"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-advanced.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandTamper"
          }), ": 탬퍼 감지 기능을 키거나 끌 수 있습니다. 탬퍼 감지 기능은 장치의 뚜껑이 열리거나 장치가 떨어졌을 때 알람을 발생시킵니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.acfail"
          }), ": 전원 입력 신호 감지 기능을 키거나 끌 수 있습니다. AC Fail 기능은 전원 공급이 중단되었을 때 알람을 발생시킵니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.fire"
          }), ": 화재 감지 기능을 키거나 끌 수 있습니다. 화재 감지 기능은 화재가 발생하여 감지되면 알람과 함께 CoreStation 20으로 생성한 모든 출입문을 자동으로 개방합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.wiegandTamper"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.acfail"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.fire"
        }), "는 각 기능별로 Aux Input 0~2 포트가 고정으로 할당되어 있기 때문에 기능만 키면 자동으로 설정됩니다. 이 포트는 사용자가 변경할 수 없습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "작업-조건-및-동작",
      children: "작업 조건 및 동작"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.configuration"
        }), ": 미리 정의된 알람이나 신호 입력에 따른 장치의 동작을 설정할 수 있습니다. 예를 들어, CoreStation 20에서 탬퍼 켜짐 신호가 발생할 때 사용자가 설정한 신호를 출력하거나 장치를 사용하지 못하도록 설정할 수 있습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-trigger-action.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "wiegand",
      children: "Wiegand"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandInOut"
          }), ": 입력 모드만 사용할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.inOutFormat"
          }), ": 장치에 지정할 Wiegand 형식을 변경할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseWidth"
          }), ": Wiegand 신호의 펄스 폭을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseInterval"
          }), ": Wiegand 신호의 펄스 간격을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "supervised-input",
      children: "Supervised Input"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation 20의 Supervised Input 포트를 Input 포트로 사용하도록 설정할 수 있으며, Supervised Input에 사용할 저항값을 설정할 수 있습니다. 저항값은 1㏀, 2.2㏀, 4.7㏀, 10㏀을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "보안-탬퍼",
      children: "보안 탬퍼"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치에서 탬퍼 이벤트가 발생할 경우 장치에 저장된 전체 사용자 정보, 전체 로그, 보안 키가 삭제되도록 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "osdp-리더-led-및-버저",
      children: "OSDP 리더 LED 및 버저"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation 20에 연결된 모든 OSDP 리더의 이벤트 발생 시 LED와 버저의 동작을 일괄 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "CoreStation 20에 연결된 OSDP 리더가 LED와 버저를 지원하지 않는 경우 설정한대로 동작하지 않을 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-LED-Buzzer.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "led",
      children: "LED"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.waitingInput"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.authSuccess"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.authFail"
      }), " 이벤트 발생 시 LED 동작을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.off"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.led.mode.constant"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.blinking"
          }), " 중에 원하는 동작을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.cycle"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.blinking"
          }), "로 선택했을 경우 LED가 깜빡일 횟수를 입력합니다. 설정한 모드를 계속 반복되게 하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.infinite"
          }), "에 체크하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.ColorNDuration"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.blinking"
          }), "로 선택했을 경우 설정한 반복 횟수마다 깜빡일 두 가지 색상을 선택하고 지속 시간을 입력합니다.\n", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.led.mode.constant"
          }), "로 선택했을 경우 점등될 하나의 색상을 선택하고 지속 시간을 입력합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "버저",
      children: "버저"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.waitingInput"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.authSuccess"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.authFail"
      }), " 이벤트 발생 시 버저의 동작을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.off"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.buzzer.mode.constant"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.beeping"
          }), " 중에 원하는 동작을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.cycle"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.beeping"
          }), "으로 선택했을 경우 버저가 출력되는 횟수를 입력합니다. 설정한 모드를 계속 반복되게 하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.infinite"
          }), "에 체크하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "devce.info.osdp.ledBuzzer.duration"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.beeping"
          }), "으로 선택했을 경우 설정한 반복 횟수마다 버저가 출력될 지속 시간을 입력합니다.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.constant"
          }), "로 선택했을 경우 버저가 출력될 지속 시간을 입력합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "간편-출입문-설정-기능으로-출입문-생성하기",
      children: "간편 출입문 설정 기능으로 출입문 생성하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치 목록에서 연결된 CoreStation 20(CS-20/CS-20P)에 마우스 오른쪽 버튼을 클릭한 후 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.menu.quickDoorSetup"
      }), "을 선택하여 간편하게 출입문을 생성할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation 20에 연결된 슬레이브 또는 Wiegand 장치가 없는 경우에는 출입문을 생성할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation 20에 Door Interface만 연결되어 있는 경우에는 출입문을 생성할 수 없습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.device"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 목록에서 CoreStation 20의 장치 이름에 마우스 오른쪽 버튼을 클릭한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.quickDoorSetup"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/CS20-Quick Door Setup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.door.description"
          }), "과 옵션들을 설정하세요.", (0,jsx_runtime.jsx)("br", {}), "RS-485 또는 Wiegand 포트에 연결된 장치를 이용해 최대 2개의 출입문을 구성할 수 있습니다. ", (0,jsx_runtime.jsx)("br", {}), "각 출입문은 포트별로 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.entryDevice"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.doorRelay"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.doorSensor"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitButton"
          }), " 등의 항목이 자동으로 선택됩니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["I/O 장치(Door Module, Input Module, Output Module 등)는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.entryDevice"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice"
            }), "로 자동 선택되지 않습니다."]
          })
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/Quick-door-setup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문을 생성하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-메뉴에서-출입문-생성하기",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "audit.menu.door"
      }), " 메뉴에서 출입문 생성하기"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "audit.menu.door"
      }), " 메뉴에서 CoreStation 20의 릴레이를 선택하여 출입문을 생성할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.device"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addDoor"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.information"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.configuration"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.option"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiPassBack"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.alarm"
          }), "을 참고하여 각 항목을 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "doorinfo",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문의 이름, 그룹, 설명을 입력하거나 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-door-info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name"
          }), ": 원하는 출입문 이름을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group"
          }), ": 출입문 그룹을 선택하세요. 출입문 그룹은 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.door"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.door.allDoorGroups"
          }), " 부분에 마우스 오른쪽 버튼을 클릭한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.addDoorGroup"
          }), "를 선택하여 추가할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description"
          }), ": 출입문에 대한 간단한 설명을 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "doorconfig",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.configuration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치와 릴레이, 퇴실 버튼, 출입문 센서 등의 정보를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "CoreStation 20은 입실 장치나 퇴실 장치로 설정할 수 없습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-door-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.entryDevice"
          }), ": 입실할 때 사용할 장치를 선택하세요. 등록된 장치 목록에서 선택할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation 20은 무선 도어락을 지원하지 않습니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.doorRelay"
          }), ": 출입문 잠금 장치를 동작할 릴레이를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Lock 출입문 릴레이를 선택하면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.exitButton"
                }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.doorSensor"
                }), "가 자동으로 선택됩니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Alarm 릴레이는 출입문 릴레이로 사용할 수 없습니다."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitButton"
          }), ": 퇴실 버튼에 사용할 포트를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switchType"
              }), "는 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switch.normallyClose"
              }), "나 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switch.normallyOpen"
              }), "로 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.simulateUnlockSupported"
              }), ": 퇴실 버튼 입력 시 출입문 열림 요청 로그는 발생하지만 릴레이는 동작하지 않도록 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.doorSensor"
          }), ": 출입문 상태를 확인할 때 사용할 포트를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switchType"
              }), "는 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switch.normallyClose"
              }), "나 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switch.normallyOpen"
              }), "로 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbUseDoorSensor"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbUseDoorSensor"
              }), " 옵션을 사용할 때 출입문 센서 사용 여부를 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.title"
                }), "이 활성화되어 있을 경우 이 기능을 사용할 수 없습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.doorSensor"
                }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.none"
                }), "으로 설정하면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.alarm"
                }), " 탭을 설정할 수 없습니다."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitDevice"
          }), ": 퇴실할 때 사용할 장치를 선택하세요. 퇴실 장치는 슬레이브로 연결된 장치가 있어야 사용할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.exitDevice"
              }), "가 없는 경우 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.antiPassBack"
              }), "을 설정할 수 없습니다."]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dooroption",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.option"
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-door-option.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.open"
          }), ": 출입문 열림에 대한 옵션을 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openTime"
              }), ": 사용자 인증이 완료된 뒤 출입문이 열린 채로 유지되는 시간을 설정하세요. 인증이 성공했을 때 릴레이가 활성화되는 시간이며, 이 시간이 지나면 릴레이는 출입문에 신호를 보내지 않습니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.openTime"
                }), "은 사용하는 출입문 잠금 장치의 종류에 따라 달라질 수 있습니다."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnce"
              }), ": 출입문이 닫힌 것을 출입문 센서가 감지하면 출입문이 잠깁니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.option.openCondition.useAutoDoor"
              }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.on"
              }), "으로 설정한 경우 사용할 수 없습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.option.openCondition.useAutoDoor"
              }), ": 자동문을 출입문으로 사용할 경우 출입문 센서의 상태와 상관없이 릴레이를 동작할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnce"
              }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.on"
              }), "으로 설정한 경우 사용할 수 없습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.dualAuthentication"
          }), ": 두 사람(일반 사용자와 관리자)이 크리덴셜을 인증하여 출입문이 열리도록 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device"
              }), ": 이중 인증을 사용할 장치를 선택할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.device.noDevice"
              }), "으로 설정하면 이중 인증 모드를 사용하지 않습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.schedule"
              }), ": 이중 인증을 사용할 스케줄을 설정하세요. 원하는 스케줄이 없다면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.plusAddSchedule"
              }), "를 클릭하여 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType"
              }), ": 관리자 인증 순서를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.none"
              }), "으로 설정하면 인증 그룹과 관계 없이 두 명의 인증이 필요합니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.last"
              }), "으로 설정하면 일반 사용자가 인증한 뒤 설정된 인증 그룹에 포함된 사용자가 인증해야 합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.approvalGroup"
              }), ": 관리자가 속한 그룹을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.authenticationTimeout"
              }), ": 첫 번째 크리덴셜이 인증되고 두 번째 크리덴셜을 인증하는 대기 시간을 설정하세요. 첫 번째 크리덴셜이 인증되고 설정한 시간 안에 두 번째 크리덴셜이 인증되지 않으면 출입문이 열리지 않습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiTailSensor"
          }), " : 인증하지 않은 사람이 인증한 사람을 따라 출입하는 테일게이팅을 감지하도록 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.sensor"
            }), ": 테일게이팅을 감지할 센서를 선택할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "doorapb",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.antiPassBack"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["안티패스백은 출입 이력을 관리하고 보안을 강화하기 위해 사용합니다.", (0,jsx_runtime.jsx)("br", {}), "사용자가 출입 카드로 입실 후 다른 사용자에게 카드를 넘겨주는 악용 사례를 막을 수 있으며, 외부인이 출입 권한을 가진 사용자를 뒤따라 들어올 때 나가지 못하도록 막을 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.entryDevice"
      }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.exitDevice"
      }), "가 모두 설치된 경우 사용할 수 있으며, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.exitDevice"
      }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.none"
      }), "으로 설정하면 사용할 수 없습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "출입문 설정에서 안티패스백 탭을 활성화하려면 RS-485로 구성된 마스터 장치와 슬레이브 장치가 필요합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title"
            }), "이 활성화되어 있을 경우 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack"
            }), "을 사용할 수 없습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-door-apb.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.type"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiPassBack"
          }), " 종류를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.none"
              }), ": 안티패스백 기능을 끄려면 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.soft"
              }), ": 안티패스백을 위반할 경우 출입은 가능하지만 경보를 울리거나 BioStar 2에 로그를 생성하려면 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.hard"
              }), ": 안티패스백을 위반할 경우 출입할 수 없으며 경보를 울리거나 BioStar 2에 로그를 생성하려면 선택하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime"
          }), ": 안티패스백 기능이 초기화될 때까지의 시간을 설정할 수 있습니다. 최대 10,080분(7일)까지 설정할 수 있으며, 0으로 설정하면 초기화되지 않습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "doortapb",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "timedAPB.title"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "timedAPB.field"
      }), "은 사용자가 출입 인증 후 동일한 장치에 다시 인증하고자 할 때 발생하는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.antiPassBack"
      }), "이 재인증을 할 수 있을 때까지 걸리는 초기화 시간을 설정하여 빈번한 입실을 제한할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title"
            }), "은 별도의 BioStar 2 라이선스 없이 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title"
            }), "은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.entryDevice"
            }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice"
            }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.doorRelay"
            }), "가 선택된 상태에서만 설정할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["출입문의 보안을 강화하기 위해 사용하는 기능이므로 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.entryDevice"
              }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.exitDevice"
              }), " 중 하나만 선택된 상태에서도 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title"
            }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.apbUseDoorSensor"
            }), " 기능은 동시에 사용할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title"
            }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack"
            }), "은 동시에 사용할 수 없습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-door-tapb.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), "을 사용할 장치를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime"
          }), "을 원하는 대로 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.resetTime"
              }), ": 입력 단위는 분(min.)이며 기본값은 10분이고 입력 가능한 시간의 범위는 0 ~ 60분입니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.resetTime"
                }), "을 0분으로 설정하면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.title"
                }), "이 동작하지 않습니다."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apb.bypassGroup"
              }), ": 시간 제한 안티패스백에 제한받지 않고 항상 통과할 수 있는 출입 그룹을 지정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), "이 발생하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.monitoring"
          }), " 메뉴에서 이벤트 및 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.imageLog"
          }), "를 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dooralarm",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.alarm"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문이 강제로 열리거나 열린 채로 방치되었거나 안티패스백 위반이 발생했을 때 경보를 울리거나 장치를 사용하지 못하도록 막을 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-door-alarm.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.heldOpen"
          }), ": 출입문이 열린 채로 방치되었을 때 알람 동작을 설정할 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus"
          }), "를 클릭한 뒤 각 항목을 선택하세요. 설정한 항목을 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.heldOpenTime"
          }), ": 장시간 출입문이 열렸을 경우 경보를 울리는 시간을 설정하세요. 출입문이 열려 있을 수 있는 최대 시간을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.forcedOpen"
          }), ": 강제로 출입문이 열렸을 때 알람 동작을 설정할 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus"
          }), "를 클릭한 뒤 각 항목을 선택하세요. 설정한 항목을 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiPassBack"
          }), ": 안티패스백 위반이 발생했을 때 알람 동작을 설정할 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus"
          }), "를 클릭한 뒤 각 항목을 선택하세요. 설정한 항목을 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), ": 시간 제한 안티패스백 위반이 발생했을 때 알람 동작을 설정할 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus"
          }), "를 클릭한 뒤 각 항목을 선택하세요. 설정한 항목을 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack"
            }), "은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice"
            }), "가 등록되어야 설정할 수 있습니다."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["모든 설정을 완료한 후 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply"
      }), "을 클릭하면 출입문이 생성됩니다."]
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