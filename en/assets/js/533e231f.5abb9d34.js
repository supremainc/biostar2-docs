"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["4733"], {
"6778": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_295_wireless_door_lock_mdx_533_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-295-wireless-door-lock-mdx-533.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_295_wireless_door_lock_mdx_533_namespaceObject = JSON.parse('{"id":"update/295/wireless-door-lock","title":"How to Use a Wireless Door Lock","description":"Explains how to connect and set up a wireless door lock.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/295/wireless-door-lock.mdx","sourceDirName":"update/295","slug":"/update/295/wireless-door-lock","permalink":"/biostar2-docs/en/update/295/wireless-door-lock","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"wireless-door-lock","title":"How to Use a Wireless Door Lock","description":"Explains how to connect and set up a wireless door lock.","keywords":["Wireless Door Lock"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"How to Enroll Profile Photo & Visual Face Using a Webcam","permalink":"/biostar2-docs/en/update/295/user-photo-enroll-using-webcam"},"next":{"title":"How to Use the Unified Gateway","permalink":"/biostar2-docs/en/update/295/unified-gateway"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/295/wireless-door-lock.mdx


const frontMatter = {
	id: 'wireless-door-lock',
	title: 'How to Use a Wireless Door Lock',
	description: 'Explains how to connect and set up a wireless door lock.',
	keywords: [
		'Wireless Door Lock'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Activating a Wireless Door Lock Device License",
  "id": "activating-a-wireless-door-lock-device-license",
  "level": 2
}, {
  "value": "Enrolling a Wireless Door Lock with Corestation",
  "id": "enrolling-a-wireless-door-lock-with-corestation",
  "level": 2
}, {
  "value": "Setting a Wireless Door Lock",
  "id": "setting-a-wireless-door-lock",
  "level": 2
}, {
  "value": "View a Wireless Door Lock Status",
  "id": "view-a-wireless-door-lock-status",
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
      children: "Connect a wireless door lock to CoreStation and use it as an entry door."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document explains how to connect and set up a wireless door lock."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Wireless Door Lock is available for CoreStation v1.7.1 or later and BioStar 2 v2.9.4 or later."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "activating-a-wireless-door-lock-device-license",
      children: "Activating a Wireless Door Lock Device License"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enrolling and using the wireless door lock requires a separate device license."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contact the place of purchase to issue a device license."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "Wireless Door Lock"
            }), " device licenses can be activated on CoreStation through BioStar 2."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The device license file is an encrypted file and cannot be modified arbitrarily."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Device licenses are issued based on the device ID. If the device ID is changed in an unusual way, the warranty service for the license is not provided."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can issue a device license for up to 12 devices, equal to the number of wireless door locks you want to connect."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The maximum number of wireless door locks that can be connected with a device license is 12. Even if you activate multiple device licenses, you cannot exceed 12 devices."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.license"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.browse"
          }), " to load the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.license.device"
          }), " file from the path where the device license is saved."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-device-license.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After checking the device list, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.license.button.activate"
          }), " to activate the device license. If the license activation fails, an activation failed message is displayed, and you can try to activate the license again."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enrolling-a-wireless-door-lock-with-corestation",
      children: "Enrolling a Wireless Door Lock with Corestation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add a wireless door lock to a CoreStation enrolled in BioStar 2."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Supported OSDP antenna and wireless door lock are as below:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "U&Z OSDP Antenna: CX8936"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "U&Z Wireless Door Lock: CX217x (Handle), CX212x (Knob)"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "To connect the Wireless Door Lock, the wireless antenna module must be connected to the CoreStation. Only two wireless antenna modules can be connected."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "6 wireless door locks can be connected to one wireless antenna module, and the maximum number of wireless door locks that can be connected to one CoreStation is 12."
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
          children: ["Right-click on the name of a CoreStation and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.addOsdpDevice"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-cs40-add-osdp-device.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.selectOsdpDeviceType"
          }), " window appears. Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdpModule"
          }), " and then click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.ok"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-cs40-select-osdp-type-antenna.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A list of ports appears. Among the ports whose ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.portStatus"
          }), " is ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.portStatusAvailable"
          }), ", select the port to add the OSDP antenna."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-cs40-add-osdp-device-zoom80.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.information"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdpNetworkRS485"
          }), ", and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-cs40-add-osdp-antenna-zoom80.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.osdpOsdpID"
            }), " defaults to 0. Enter the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.osdpOsdpID"
            }), " set on the OSDP antenna."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Right-click the added OSDP antenna and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.autoAddWirelessDoorLock"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-cs40-auto-add-wireless-doorlock.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tag the provided SERVICEKEY card on the wireless door lock."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The OSDP antenna connects to the wireless door lock. Set the door to a connected wireless door lock and use it."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-a-wireless-door-lock",
      children: "Setting a Wireless Door Lock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.osdpName"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.osdpStatus"
      }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.authenticationMode"
      }), " of the enrolled wireless door lock."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.device"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click a wireless door lock on the device list to edit."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-device-door-lock.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.osdpName"
              }), ": Enter a device name. If not entered, it will be assigned automatically."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.osdpStatus"
              }), ": Set the device status. If set to ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Inactive"
              }), ", CoreStation will not communicate with the wireless door lock."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.authenticationMode"
              }), ": The wireless door lock can only use a CSN card as an authentication mode."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.plusAdd"
                }), ", then drag and drop the ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "Card"
                }), ". Select a schedule and click ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "OK"
                }), " to register the authentication mode. If no desired schedule is available, click ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.plusAddSchedule"
                }), " to create one."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.usersHaveFullAccess"
              }), ": Full access can be granted to users registered in the CoreStation to which the wireless door lock is connected without setting an access group."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-a-wireless-door-lock-status",
      children: "View a Wireless Door Lock Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check the battery status of the wireless door lock in use."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.monitoring"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring.doorLockStatus"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring.view.list"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-status-wireless-door-lock.png",
      className: "none",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "1"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Save Filter"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Button"
          }), ": Saves the set filter."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "2"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Function Buttons (Column Setting)"
          }), ": Changes the column setting of the log."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "3"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Status List"
          }), ": Check the battery status of the wireless door lock in use."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.BatteryFullStatus"
              }), ": The battery level is sufficient."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.BatteryGoodStatus"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.BatteryHalfStatus"
              }), ": The battery level is low, it is recommended to replace the battery for smooth operation."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.BatteryLowStatus"
              }), ": The battery level is almost empty. Please replace the battery."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.alert"
        }), " menu, you can set alarms to occur at ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "eventType.19969"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "eventType.19970"
        }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "eventType.19971"
        }), "."]
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