"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["242"], {
"5776": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_wireless_door_lock_mdx_28d_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-wireless-door-lock-mdx-28d.json
var site_docs_wireless_door_lock_mdx_28d_namespaceObject = JSON.parse('{"id":"wireless-door-lock","title":"무선 도어락 사용하기","description":"무선 도어락의 연결 방법부터 설정 방법까지 설명합니다.","source":"@site/docs/wireless-door-lock.mdx","sourceDirName":".","slug":"/wireless-door-lock","permalink":"/biostar2-docs/en/wireless-door-lock","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"wireless-door-lock","title":"무선 도어락 사용하기","description":"무선 도어락의 연결 방법부터 설정 방법까지 설명합니다.","keywords":["2.9.5","다중 인증"],"isTranslationMissing":true},"sidebar":"biostar","previous":{"title":"웹캠으로 프로필 사진 & 비주얼 페이스 등록하기","permalink":"/biostar2-docs/en/user-photo-enroll-using-webcam"},"next":{"title":"BioStar 2 통합 게이트웨이 사용하기","permalink":"/biostar2-docs/en/unified-gateway"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/wireless-door-lock.mdx


const frontMatter = {
	id: 'wireless-door-lock',
	title: '무선 도어락 사용하기',
	description: '무선 도어락의 연결 방법부터 설정 방법까지 설명합니다.',
	keywords: [
		'2.9.5',
		'다중 인증'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "무선 도어락 장치 라이선스 활성화하기",
  "id": "무선-도어락-장치-라이선스-활성화하기",
  "level": 2
}, {
  "value": "CoreStation에 무선 도어락 등록하기",
  "id": "corestation에-무선-도어락-등록하기",
  "level": 2
}, {
  "value": "무선 도어락 장치 설정 변경하기",
  "id": "무선-도어락-장치-설정-변경하기",
  "level": 2
}, {
  "value": "무선 도어락 상태 확인하기",
  "id": "무선-도어락-상태-확인하기",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image, Num} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Num) _missingMdxReference("Num", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation에 무선 도어락을 연결하여 출입문으로 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 문서에서는 무선 도어락의 연결 방법부터 설정 방법까지 설명합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "무선 도어락은 CoreStation v1.7.1 이상, BioStar 2 v2.9.4 이상에서 사용할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "무선-도어락-장치-라이선스-활성화하기",
      children: "무선 도어락 장치 라이선스 활성화하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "무선 도어락을 등록하고 사용하려면 별도의 장치 라이선스가 필요합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치 라이선스를 발급하려면 구입처에 문의하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "무선 도어락"
            }), " 장치 라이선스는 BioStar 2를 통해 CoreStation에 활성화할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 라이선스 파일은 암호화 된 파일이므로 임의로 수정할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 라이선스는 장치 ID를 기준으로 발급됩니다. 비정상적인 방법으로 장치 ID를 변경할 경우 라이선스에 대한 보증 서비스가 제공되지 않습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "연결하려는 무선 도어락 대수만큼 최대 12대까지 장치 라이선스를 발급받을 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 라이선스로 연결할 수 있는 무선 도어락의 최대 장치 수는 12대입니다. 장치 라이선스 여러 개를 활성화하여도 12대를 초과할 수 없습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " > ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.license"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.license.device"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.browse"
          }), "를 클릭하고 발급받은 무선 도어락 장치 라이선스를 불러오세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-device-license.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 목록을 확인한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.license.button.activate"
          }), "를 클릭하여 장치 라이선스를 활성화하세요. 라이선스 활성화에 실패할 경우 활성화 실패 메시지가 표시되며, 라이선스 활성화를 다시 시도할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "corestation에-무선-도어락-등록하기",
      children: "CoreStation에 무선 도어락 등록하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar 2에 등록된 CoreStation에 무선 도어락을 추가할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지원되는 OSDP 안테나와 무선 도어락은 다음과 같습니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "U&Z OSDP 안테나: CX8936"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "U&Z 무선 도어락: CX217x(Handle), CX212x(Knob)"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "무선 도어락을 연결하려면 CoreStation에 무선 안테나 모듈이 연결되어 있어야 합니다. 무선 안테나 모듈은 2대만 연결할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "무선 안테나 모듈 한대에 연결할 수 있는 무선 도어락은 6대이며, CoreStation 한대에 연결할 수 있는 무선 도어락의 최대 수는 12대입니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.device"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CoreStation의 장치 이름에 마우스 오른쪽 버튼을 클릭한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.addOsdpDevice"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-cs40-add-osdp-device.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.selectOsdpDeviceType"
          }), " 창이 나타납니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdpModule"
          }), "를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.ok"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-cs40-select-osdp-type-antenna.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["포트 목록이 나타납니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.portStatus"
          }), "가 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.portStatusAvailable"
          }), "으로 되어있는 포트 중에서 OSDP 안테나를 추가할 포트를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-cs40-add-osdp-device-zoom80.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.information"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdpNetworkRS485"
          }), " 항목을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-cs40-add-osdp-antenna-zoom80.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.osdpOsdpID"
            }), "는 기본값이 0으로 설정되어 있습니다. OSDP 안테나에 설정되어 있는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.osdpOsdpID"
            }), "를 입력하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["추가된 OSDP 안테나에 마우스 오른쪽 버튼을 클릭한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.autoAddWirelessDoorLock"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-cs40_auto_add_wireless_doorlock.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제공받은 SERVICEKEY 카드를 무선 도어락에 태그하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OSDP 안테나가 무선 도어락과 연결됩니다. 연결된 무선 도어락에 출입문을 설정하여 사용할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "무선-도어락-장치-설정-변경하기",
      children: "무선 도어락 장치 설정 변경하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["무선 도어락의 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "장치 이름"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        children: "상태"
      }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "인증"
      }), " 항목을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.device"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록에서 설정하려는 무선 도어락을 클릭하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/ko/biostar-device-door-lock.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.osdpName"
              }), ": 장치 이름을 입력할 수 있습니다. 입력하지 않더라도 자동으로 지정됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.osdpStatus"
              }), ": 장치 상태를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "비활성"
              }), "으로 설정하면 CoreStation이 무선 도어락과 통신하지 않습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.authenticationMode"
              }), ": 무선 도어락은 인증 모드로 CSN 카드만 사용할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.plusAdd"
                }), "를 클릭한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "카드"
                }), "를 끌어다 놓으세요. 원하는 스케줄을 선택한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "확인"
                }), "을 클릭하면 인증 모드가 등록됩니다."]
              }), (0,jsx_runtime.jsxs)(_components.p, {
                children: ["원하는 스케줄이 없다면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.plusAddSchedule"
                }), "를 클릭하여 설정하세요."]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.usersHaveFullAccess"
              }), ": 무선 도어락이 연결된 CoreStation에 등록된 사용자에게 출입 그룹 설정 없이 모든 출입 권한을 부여할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "무선-도어락-상태-확인하기",
      children: "무선 도어락 상태 확인하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.gnb.monitoring"
      }), " 메뉴에서 사용중인 무선 도어락의 배터리 상태를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.monitoring"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring.view.list"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring.doorLockStatus"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/ko/biostar-status-wireless-door-lock.png",
      className: "none",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "1"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            children: "필터 저장"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "버튼"
          }), ": 설정한 필터를 저장할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "2"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "기능 버튼 (열 설정)"
          }), ": 로그 목록의 열 설정을 변경할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "3"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "상태 목록"
          }), ": 무선 도어락의 배터리 상태를 확인할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.BatteryFullStatus"
              }), ": 배터리가 충분한 상태입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.BatteryGoodStatus"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.BatteryHalfStatus"
              }), ": 배터리 잔량이 부족한 상태이므로 원활한 작동을 위해 배터리 교체를 권장합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.BatteryLowStatus"
              }), ": 배터리 잔량이 거의 없는 상태입니다. 배터리를 교체해주세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.setting"
        }), " > ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.alert"
        }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "eventType.19969"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "eventType.19970"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "eventType.19971"
        }), " 시 알람이 발생하도록 설정할 수 있습니다."]
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