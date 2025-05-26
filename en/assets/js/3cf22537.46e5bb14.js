"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["6687"], {
"4139": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_299_how_to_use_cs_20_mdx_3cf_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-299-how-to-use-cs-20-mdx-3cf.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_299_how_to_use_cs_20_mdx_3cf_namespaceObject = JSON.parse('{"id":"update/299/how-to-use-cs20","title":"CoreStation 20 Setup and Door Creation","description":"This document describes how to properly use CoreStation 20 in BioStar 2.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/299/how-to-use-cs20.mdx","sourceDirName":"update/299","slug":"/update/299/how-to-use-cs20","permalink":"/biostar2-docs/en/update/299/how-to-use-cs20","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"how-to-use-cs20","title":"CoreStation 20 Setup and Door Creation","description":"This document describes how to properly use CoreStation 20 in BioStar 2.","keywords":["CoreStation 20","CS-20","CS-20P"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"Updates in BioStar 2 v2.9.9","permalink":"/biostar2-docs/en/update/biostar2-299"},"next":{"title":"Setting Facility Code Authentication for Offline Mode in Door Interface","permalink":"/biostar2-docs/en/update/299/how-to-use-di24"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/299/how-to-use-cs20.mdx


const frontMatter = {
	id: 'how-to-use-cs20',
	title: 'CoreStation 20 Setup and Door Creation',
	description: 'This document describes how to properly use CoreStation 20 in BioStar 2.',
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
  "value": "Detailed Device Settings",
  "id": "cs20detailsetting",
  "level": 2
}, {
  "value": "Device Information",
  "id": "device-information",
  "level": 3
}, {
  "value": "System",
  "id": "system",
  "level": 5
}, {
  "value": "Network Settings",
  "id": "network-settings",
  "level": 3
}, {
  "value": "TCP/IP",
  "id": "tcpip",
  "level": 5
}, {
  "value": "Server Communication",
  "id": "server-communication",
  "level": 5
}, {
  "value": "Serial Communication",
  "id": "serial-communication",
  "level": 5
}, {
  "value": "Authentication Settings",
  "id": "authentication-settings",
  "level": 3
}, {
  "value": "Card Types",
  "id": "card-types",
  "level": 5
}, {
  "value": "Advanced Settings",
  "id": "advanced-settings",
  "level": 3
}, {
  "value": "Trigger &amp; Action",
  "id": "trigger--action",
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
  "value": "Secure Tamper",
  "id": "secure-tamper",
  "level": 5
}, {
  "value": "OSDP Reader LED/Buzzer",
  "id": "osdp-reader-ledbuzzer",
  "level": 3
}, {
  "value": "LED",
  "id": "led",
  "level": 5
}, {
  "value": "Buzzer",
  "id": "buzzer",
  "level": 5
}, {
  "value": "Adding Doors Using the Quick Door Setup Feature",
  "id": "adding-doors-using-the-quick-door-setup-feature",
  "level": 2
}, {
  "value": "Adding Doors in the <Cmd></Cmd> Menu",
  "id": "adding-doors-in-the--menu",
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
      children: ["CoreStation 20 (CS-20/CS-20P) is Suprema's new controller that enables easy implementation of two-door access control.", (0,jsx_runtime.jsx)("br", {}), "Compared to the existing four-door model, CoreStation (CS-40), it is lighter and optimized for RFID card-based access control.", (0,jsx_runtime.jsx)("br", {}), "It can store up to 500,000 user infomation and supports compatibility with various interfaces.", (0,jsx_runtime.jsx)("br", {}), "In particular, the CS-20P model supports easy installation with PoE+ (Power over Ethernet) and is equipped with a SAM card slot for enhanced security."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides an overview of the CoreStation 20 menu in BioStar 2 and explains how to create doors."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation 20 does not support wireless door locks."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CoreStation 20 does not support biometric authentication (such as face or fingerprint); only card authentication is supported.", (0,jsx_runtime.jsx)("br", {}), "If biometric authentication is required, it is recommended to use CoreStation (CS-40)."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cs20detailsetting",
      children: "Detailed Device Settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.device"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the device list, select the CoreStation 20 (CS-20/CS-20P) you want to configure."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-information",
      children: "Device Information"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-Info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.name"
          }), ": Enter the desired device name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceId"
          }), ": The device ID appears."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.firmwareVersion"
          }), ": Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.firmwareUpgrade"
          }), " to install a new firmware version."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.kernelVersion"
          }), ": You can check the kernel version."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.factoryDefault"
          }), ": You can initialize the device settings. Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset"
          }), " to initialize all settings, or click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset.withoutNetwork"
          }), " to initialize all settings except for the network configuration."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeZone"
          }), ": Set the device's time zone. The device time zone can be set differently from the BioStar 2 server time zone."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.setting.dst"
          }), ": Apply the daylight saving time set by the user to the device. New daylight saving time can be added in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.dst"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.group"
          }), ": You can change the device group. Device groups can be added by right-clicking ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.device.allDeviceGroups"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.device"
          }), " menu and selecting ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.addDeviceGroup"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceType"
          }), ": The device type appears."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.productName"
          }), ": You can check the model name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.hwVersion"
          }), ": You can check the hardware version."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.locked"
          }), ": If the device is locked due to trigger & actions, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.unlock"
          }), " button to unlock it."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeSync"
          }), ": Select this option to synchronize the device time with the server."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "system",
      children: "System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.date"
          }), ": Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/menus/ico-calendar.png",
            ico: true,
            alone: true
          }), " to manually set the date and time. If ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeSync"
          }), " is enabled, you cannot manually set the date or time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.getTime"
          }), ": Click to retrieve the time set on the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.setTime"
          }), ": Click to apply the time set in BioStar 2 to the device."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-settings",
      children: "Network Settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TCP/IP"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DHCP"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP Address"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnet Mask"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gateway"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS"
      }), ", etc. Basic network settings are supported."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.rs485"
        }), " port can only be used in ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.rs485.master"
        }), " mode."]
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
          }), ": Check this option to configure the device to use a dynamic IP address. If this option is selected, a static IP address cannot be assigned."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipAddress"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.subnetMask"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.gateway"
          }), ": Enter the network information if you want to assign a static IP address to the device. Make sure to uncheck ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useDhcp"
          }), " before entering these values."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.devicePort"
          }), ": Enter the port number that the device will use. This port is used for communication between BioStar 2 and the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.dnsServerAddress"
          }), ": Enter the DNS server address."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "server-communication",
      children: "Server Communication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceToServerConnection"
          }), ": Select this option to configure the BioStar 2 connection information for the device. When selected, you can enter the network information for BioStar 2."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.serverIP"
          }), ": Enter the IP address of BioStar 2."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.serverPort"
          }), ": Enter the port number of BioStar 2."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "serial-communication",
      children: "Serial Communication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.rs485"
          }), ": Only master mode is supported."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.baudRate"
          }), ": Set the baud rate for each RS-485 port."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.scbKey"
          }), ": Set the SCB key for the device. This menu is only enabled when there are no RS-485 devices connected to CoreStation 20."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.scbKeyConfirm"
          }), ": Confirms whether the entered SCB key matches. This menu is only enabled when there are no RS-485 devices connected to CoreStation 20."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.scbKey"
        }), " can be entered up to 16 bytes."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authentication-settings",
      children: "Authentication Settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Supports card authentication related settings such as ", (0,jsx_runtime.jsx)(Cmd, {
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
      }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.formatType"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "CoreStation 20 does not support biometric authentication (such as face or fingerprint); only card authentication is supported."
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-auth.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching"
        }), ": If set to ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.active"
        }), ", authentication is performed using the user information stored on the PC where BioStar 2 is installed. If set to ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.inactive"
        }), ", authentication is performed using the user information stored on the device. When using server matching, BioStar 2's server matching must also be activated by enabling ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.serverMatching.use"
        }), " in ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "card-types",
      children: "Card Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the types of cards to be used on the device."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The types of cards supported by the device are displayed."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.card.CSN"
        }), ": Select the CSN card and format type and set the byte order."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.formatType"
            }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.cardIdFormat.normal"
            }), ", the card serial number (CSN) is read and presented without any conversion. When set to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.cardIdFormat.wiegand"
            }), ", the device converts and presents the card serial number (CSN) according to the user-defined Wiegand format when reading a CSN card."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.formatType"
            }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.cardIdFormat.wiegand"
            }), ", the Wiegand format to be used on the device is selected."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.byteOrder"
            }), " is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "MSB"
            }), ", card data is processed from the most significant byte to the least significant byte, and the card serial number (CSN) is proceed sequentially from left to right. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "LSB"
            }), " processes card data from the least significant byte to the most significant byte and stores the card serial number (CSN) accordingly."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-settings",
      children: "Advanced Settings"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-advanced.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandTamper"
          }), ": Enable or disable the tamper detection feature. The tamper detection feature triggers an alarm when the device's cover is opened or the device is dropped."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.acfail"
          }), ": Enable or disable the AC fail detection feature. The AC Fail feature triggers an alarm when the power supply is interrupted."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.fire"
          }), ": Enable or disable the fire detection feature. The fire detection feature triggers an alarm and automatically opens all doors created with CoreStation 20 when a fire is detected."]
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
        }), " are automatically set to Aux Input 0~2 ports fixed for each function, so they are automatically set the feature is turned on. These ports cannot be changed by the user."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "trigger--action",
      children: "Trigger & Action"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.configuration"
        }), ": Set the device's actions according to predefined alarms or signal inputs."]
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
          }), ": Can only be used in input mode."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.inOutFormat"
          }), ": Change the Wiegand format assigned to the device. For details on setting the Wiegand format, refer to the card format."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseWidth"
          }), ": Set the pulse width of the Wiegand signal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseInterval"
          }), ": Set the pulse interval of the Wiegand signal."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "supervised-input",
      children: "Supervised Input"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set the Supervised Input port of the CoreStation 20 to be used as a Input port, and set the resistance value to be used for Supervised Input. The resistance values can be set to 1㏀, 2.2㏀, 4.7㏀, or 10㏀."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "secure-tamper",
      children: "Secure Tamper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set it so that when a tamper event occurs on the device, all user information, logs, and security keys stored on the device are deleted."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "osdp-reader-ledbuzzer",
      children: "OSDP Reader LED/Buzzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uniformly set the operation of the LED and buzzer for events of all OSDP readers connected to the CoreStation 20."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "If the connected OSDP reader does not support LED and buzzer, it may not operate as set."
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-LED-Buzzer.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "led",
      children: "LED"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set the LED operation for events such as ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.waitingInput"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.authSuccess"
      }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.authFail"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), ": Set the desired action among ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.off"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.led.mode.constant"
          }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.blinking"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.cycle"
          }), ": If ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), " is selected as ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.blinking"
          }), ", enter the number of times the LED will blink. Check ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.infinite"
          }), " to repeat the set mode continuously."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.ColorNDuration"
          }), ": If ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), " is selected as ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.blinking"
          }), ", select two colors to blink at the set repetition rate and enter the duration. If ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), " is selected as ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.led.mode.constant"
          }), ", select one color to be lit and enter the duration."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "buzzer",
      children: "Buzzer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set the operation of the buzzer for events such as ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.waitingInput"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.authSuccess"
      }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.displaySound.event.authFail"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), ": Set the desired action among ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.off"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.buzzer.mode.constant"
          }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.beeping"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.cycle"
          }), ": If ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), " is selected as ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.beeping"
          }), ", enter the number of times the buzzer will sound. Check ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.infinite"
          }), " to repeat the set mode continuously."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "devce.info.osdp.ledBuzzer.duration"
          }), ": If ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), " is selected as ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.beeping"
          }), ", enter the duration for which the buzzer will sound at each set repetition rate.", (0,jsx_runtime.jsx)("br", {}), "If ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode"
          }), " is selected as ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdp.ledBuzzer.mode.constant"
          }), ", enter the duration for which the buzzer will sound."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-doors-using-the-quick-door-setup-feature",
      children: "Adding Doors Using the Quick Door Setup Feature"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Easily create doors by right-clicking on the connected CoreStation 20 (CS-20/CS-20P) in the device list and selecting ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.menu.quickDoorSetup"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Doors cannot be created if no slave or Wiegand device is connected to CoreStation 20."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Doors cannot be created if only a Door Interface is connected to CoreStation 20."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.device"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the device list, right-click on the device name of CoreStation 20 and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.quickDoorSetup"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/CS20-Quick Door Setup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.door.description"
          }), ", and options.", (0,jsx_runtime.jsx)("br", {}), "Up to 2 doors can be configured using devices connected to the RS-485 or Wiegand port. ", (0,jsx_runtime.jsx)("br", {}), "Each door is automatically assigned items such as ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.entryDevice"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.doorRelay"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.doorSensor"
          }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitButton"
          }), " by port."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["I/O devices (Door Module, Input Module, Output Module, etc.) are not automatically selected as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.entryDevice"
            }), " or ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice"
            }), "."]
          })
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/Quick-door-setup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " to create the door."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "adding-doors-in-the--menu",
      children: ["Adding Doors in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit.menu.door"
      }), " Menu"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add doors by selecting the relay of the CoreStation 20 in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit.menu.door"
      }), " menu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.door"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addDoor"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Refer to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.information"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.configuration"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.option"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiPassBack"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.alarm"
          }), " to configure each item."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "doorinfo",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enter or change the name, group, and description of the door."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-door-info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name"
          }), ": Enter the desired door name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group"
          }), ": Select the door group. Door groups can be added by right-clicking ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.door.allDoorGroups"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.door"
          }), " menu and selecting ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.addDoorGroup"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description"
          }), ": Enter a description of the door."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "doorconfig",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.configuration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure the device, relay, exit button, door sensor, and other related information."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "CoreStation 20 cannot be set as an entry or exit device."
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-door-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.entryDevice"
          }), ": Select the device to be used for entry. Choose from the list of registered devices."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation 20 does not support wireless door locks."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.doorRelay"
          }), ": Select the relay that will operate the door locking device."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["If select the Lock door relay, ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.exitButton"
                }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.doorSensor"
                }), " are automatically selected."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Alarm relay cannot be used as a door relay."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitButton"
          }), ": Select the port to be used for the exit button."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switchType"
              }), " it set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switch.normallyClose"
              }), " or ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switch.normallyOpen"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.simulateUnlockSupported"
              }), ": Set it so that when the exit button is pressed, the door open request log is generated, but the relay does not operate."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.doorSensor"
          }), ": Select the port to be used for checking the door status."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switchType"
              }), " it set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switch.normallyClose"
              }), " or ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switch.normallyOpen"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbUseDoorSensor"
              }), ": Set whether to use the door sensor when using the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbUseDoorSensor"
              }), " option."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["This feature cannot be used if ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.title"
                }), " is activated."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["If ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.doorSensor"
                }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.none"
                }), ", the ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.alarm"
                }), " tab cannot be configured."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitDevice"
          }), ": Select the device to be used for exit. The exit device must be connected as a slave device."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["If there is no ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.exitDevice"
              }), ", the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.antiPassBack"
              }), " cannot be set."]
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
          }), ": Set options for door opening."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openTime"
              }), ": Set the time for which the door remains open after user authentication is complete. This is the time when the relay is activated after successful authentication, and after this time, the relay will no longer send a signal to the door."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.openTime"
                }), " may vary depending on the type of door locking device used."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnce"
              }), ": The door will be locked when the door sensor detects that the door is closed. This cannot be used if ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.option.openCondition.useAutoDoor"
              }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.on"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.option.openCondition.useAutoDoor"
              }), ": If the automatic door is to be used as the access door, the relay can operate regardless of the status of the door sensor. This cannot be used if ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnce"
              }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.on"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.dualAuthentication"
          }), ": Set it so that the door opens only when two people (a regular user and an administrator) authenticate their credentials."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device"
              }), ": Select the device to use for dual authentication. If set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.device.noDevice"
              }), ", dual authentication mode is not used."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.schedule"
              }), ": Set the schedule for dual authentication. If there is no desired schedule, click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.plusAddSchedule"
              }), " to set it."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType"
              }), ": Set the order of administrator authentication. If set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.none"
              }), ", two authentications are required regardless of the authentication group. If set to the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.last"
              }), ", the user authenticated as a general user, followed by the user in the set authentication group, must authenticate."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.approvalGroup"
              }), ": Set the group to which the administrator belongs."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.authenticationTimeout"
              }), ": Set the waiting time for authenticating the second credential after the first credential is authenticated. If the second credential is not authenticated within the set time after the first credential is authenticated, the door will not open."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiTailSensor"
          }), " : Set it to detect tailgating, where an unauthorized person follows an authorized person to gain access."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.sensor"
            }), ": Select the sensor to detect tailgating."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "doorapb",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.antiPassBack"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Anti-passback is used to manage access records and enhance security.", (0,jsx_runtime.jsx)("br", {}), "It can prevent misuse cases where a user hands over their access card to another user after entering, and it can also prevent outsiders from following authorized users to gain access.", (0,jsx_runtime.jsx)("br", {}), "It can be used when both ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.entryDevice"
      }), " and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.exitDevice"
      }), " are installed, and cannot be used if ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.exitDevice"
      }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.none"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "To activate the anti-passback tab in the door settings, a master device and a slave device configured with RS-485 are required."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title"
            }), " is activated, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack"
            }), " cannot be used."]
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
          }), ": Select the type of ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiPassBack"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.none"
              }), ": Select this option to turn off the anti-passback feature."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.soft"
              }), ": Select this option to allow access even if anti-passback is violated, but still trigger an alarm or generate a log in BioStar 2."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.hard"
              }), ": Select this option to prevent access when anti-passback is violated, and still trigger an alarm or generate a log in BioStar 2."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime"
          }), ": Set the time until the anti-passback function is reset. It can be set up to 7 days (10,080 minutes), and if set to 0, it will not be reset."]
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
      }), " sets the time it takes for re-authentication to be possible after a user has authenticated their access, to prevent frequent re-entries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title"
            }), " is available without a separate BioStar 2 license."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title"
            }), " can only be configured when either ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.entryDevice"
            }), " or ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.doorRelay"
            }), " are selected."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["As this feature is used to enhance door security, it can also be configured when only one of ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.entryDevice"
              }), " or ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.exitDevice"
              }), " is selected."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.apbUseDoorSensor"
            }), " cannot be used at the same time."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack"
            }), " cannot be used at the same time."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-door-tapb.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the device to use ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), " and set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime"
          }), " as desired."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.resetTime"
              }), ": The input unit is minutes (min.), the default value is 10 minutes, and the available time range is 0 to 60 minutes."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "door.resetTime"
                }), " set to 0 minutes will deactivate ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "timedAPB.title"
                }), "."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apb.bypassGroup"
              }), ": Specify the access group that can always pass without being restricted by the time-limited anti-passback."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After setting, when the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), " occurs, can be view the events and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.imageLog"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.monitoring"
          }), " menu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dooralarm",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.alarm"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trigger an alarm or prevent the device from being used when the door is forcibly opened, left open, or when an anti-passback violation occurs."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/CS20-door-alarm.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.heldOpen"
          }), ": Set the alarm action when the door is left open.", (0,jsx_runtime.jsx)("br", {}), "Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus"
          }), ", then select each item. To register the set items, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.heldOpenTime"
          }), ": Set the time to trigger the alarm if the door is left open for a long time. This sets the maximum time the door can remain open."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.forcedOpen"
          }), ": Set the alarm action when the door is forcibly opened.", (0,jsx_runtime.jsx)("br", {}), "Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus"
          }), ", then select each item. To register the set items, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiPassBack"
          }), ": Set the alarm action when an anti-passback violation occurs.", (0,jsx_runtime.jsx)("br", {}), "Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus"
          }), ", then select each item. To register the set items, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title"
          }), ": Set the alarm action when an timed anti-passback violation occurs.", (0,jsx_runtime.jsx)("br", {}), "Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus"
          }), ", then select each item. To register the set items, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack"
            }), " can only be set if ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice"
            }), " is registered."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After completing all settings, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply"
      }), " to create the door."]
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