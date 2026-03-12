"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["202"], {
6857: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_2911_bs_2_master_admin_mdx_e7b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-2911-bs-2-master-admin-mdx-e7b.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_2911_bs_2_master_admin_mdx_e7b_namespaceObject = JSON.parse('{"id":"update/2911/bs2-master-admin","title":"Setting Master Admin","description":"This document provides a guide on how to set up a Master Admin in BioStar 2.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/2911/bs2-master-admin.mdx","sourceDirName":"update/2911","slug":"/update/2911/bs2-master-admin","permalink":"/biostar2-docs/en/update/2911/bs2-master-admin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"bs2-master-admin","title":"Setting Master Admin","description":"This document provides a guide on how to set up a Master Admin in BioStar 2.","keywords":["Master Admin","Administrator Settings","BioStar 2 Admin"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"Updates in BioStar 2 v2.9.11","permalink":"/biostar2-docs/en/update/biostar2-2911"},"next":{"title":"Updates in BioStar 2 v2.9.10","permalink":"/biostar2-docs/en/update/biostar2-2910"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/2911/faqs.json
var faqs_namespaceObject = JSON.parse('[{"question":"What happens if you do not register a Master Administrator?","answer":"A new device without a registered Master Admin cannot perform authentication or change settings. However, you can connect the new device to BioStar to register a Master Admin."},{"question":"Is Master Administrator configuration supported on devices upgraded with firmware from existing devices?","answer":"No. Devices upgraded with firmware from existing devices do not support master administrator configuration. However, you can enhance device security by strengthening the permissions of all administrators through the <b>Two-Step Authentication</b> option. For details about the <a href=\'#2step-authentication\'>Two-Step Authentication</a> option, see the following document."},{"question":"Can you register a Master Administrator on a slave device?","answer":"Yes. You can register a Master Administrator on a slave device."}]')
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/2911/bs2-master-admin.mdx


const frontMatter = {
	id: 'bs2-master-admin',
	title: 'Setting Master Admin',
	description: 'This document provides a guide on how to set up a Master Admin in BioStar 2.',
	keywords: [
		'Master Admin',
		'Administrator Settings',
		'BioStar 2 Admin'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Master Admin",
  "id": "master-admin",
  "level": 2
}, {
  "value": "Supported Products for Master Admin",
  "id": "supported-products-for-master-admin",
  "level": 3
}, {
  "value": "Registering Master Admin in BioStar 2",
  "id": "registering-master-admin-in-biostar-2",
  "level": 3
}, {
  "value": "Managing Master Admin in BioStar 2",
  "id": "managing-master-admin-in-biostar-2",
  "level": 3
}, {
  "value": "Batch Editing Master Admin",
  "id": "batch-editing-master-admin",
  "level": 3
}, {
  "value": "Two-step Authentication",
  "id": "2step-authentication",
  "level": 2
}, {
  "value": "Setting Up Two-Step Authentication in BioStar 2",
  "id": "setting-up-two-step-authentication-in-biostar-2",
  "level": 3
}, {
  "value": "Batch Editing Two-Step Authentication",
  "id": "batch-editing-two-step-authentication",
  "level": 3
}, {
  "value": "Additional Information",
  "id": "additional-information",
  "level": 2
}, {
  "value": "Frequently Asked Questions",
  "id": "frequently-asked-questions",
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
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " feature is designed to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "enhance device security"
      }), " by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strengthening overall administrator privileges"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "preventing unauthorized access and configuration changes"
      }), ".\nWith this feature, you ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must register a Master Admin"
      }), " on the new device, and only registered Master Admins can access the administrator menu and change device settings."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " feature is available ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "only on Suprema products that support user interface via LCD screen"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "This feature is an essential policy to enhance device security."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " cannot be deleted directly, and they are ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "deleted only through factory reset"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "master-admin",
      children: "Master Admin"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supported-products-for-master-admin",
      children: "Supported Products for Master Admin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following products support the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " feature:"]
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
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.4.0 or later"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 2a"
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.2.0 or later"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioLite N2"
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.7.0 or later"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "X-Station 2"
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.4.0 or later"]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registering-master-admin-in-biostar-2",
      children: "Registering Master Admin in BioStar 2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you boot a new device for the first time after connecting it, the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " registration screen appears. The new device must register a ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), ", and if not registered, the use of the device will be restricted."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In BioStar 2, you can register and manage ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If only new devices without a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " registered are connected to BioStar 2, you cannot register or manage the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " in BioStar 2."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Devices without a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " registered have limited features, such as credential scanning (for example, face, fingerprint, or card input). To enroll the credentials, use a device with a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " already registered, or use a device that does not support the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " feature."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " feature is supported from ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 v2.9.11"
            }), " onwards."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For existing devices with upgraded firmware, the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " menu does not appear in BioStar 2 device settings.", (0,jsx_runtime.jsx)("br", {}), "Existing devices upgraded via firmware do not provide ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title"
            }), " settings, but you can enhance administrator security by enabling the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), " option. For ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), " settings, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#2step-authentication",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To register ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), " in BioStar 2, go to the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device"
          }), " menu, click the desired device, and enter the device detail page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.advanced"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.administrator"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), " menu, select and enroll two types of desired credentials."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-master-admin-1.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Credentials that can be enrolled for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), " are as follows:"]
        }), "\n", (0,jsx_runtime.jsx)(Table, {
          children: (0,jsx_runtime.jsxs)(Tbody, {
            children: [(0,jsx_runtime.jsxs)(Row, {
              children: [(0,jsx_runtime.jsx)(Th, {
                children: "Credential Type"
              }), (0,jsx_runtime.jsx)(Th, {
                children: "Max Quantity"
              }), (0,jsx_runtime.jsx)(Th, {
                children: "Details"
              })]
            }), (0,jsx_runtime.jsxs)(Row, {
              children: [(0,jsx_runtime.jsx)(Td, {
                children: "Card"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "Up to 4"
              }), (0,jsx_runtime.jsxs)(Td, {
                children: ["Supports CSN and Wiegand type only", (0,jsx_runtime.jsx)("br", {}), "No duplicate enrollment within the same type"]
              })]
            }), (0,jsx_runtime.jsxs)(Row, {
              children: [(0,jsx_runtime.jsx)(Td, {
                children: "Face"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "Up to 2"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "Available only on devices with the same algorithm"
              })]
            }), (0,jsx_runtime.jsxs)(Row, {
              children: [(0,jsx_runtime.jsx)(Td, {
                children: "Fingerprint"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "Up to 2"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(Row, {
              children: [(0,jsx_runtime.jsx)(Td, {
                children: "PIN"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(Td, {
                children: "Minimum 8 digits"
              })]
            })]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enrollment Conditions"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "At least two different types of credentials must be enrolled."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "The same conditions apply to both new and firmware upgraded devices."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "All credentials supported by the device can be used for authentication."
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After enrolling at least two types of credentials, press the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " button to finish ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), " registration."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "managing-master-admin-in-biostar-2",
      children: "Managing Master Admin in BioStar 2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Registered ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " can be managed in BioStar 2. To manage ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), ", follow these steps:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device"
          }), " menu, click the desired device, and enter the device detail page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.advanced"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.administrator"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), " menu, you can view enrolled credentials and add, edit, or delete them."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-master-admin-2.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " button to apply your changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-editing-master-admin",
      children: "Batch Editing Master Admin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can batch edit ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " credentials. Use the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.batchEdit"
      }), " feature to enroll or modify master administrator credentials for multiple devices simultaneously."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device"
          }), " menu, ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-checkbox.png",
            ico: true,
            alone: true
          }), " check the devices you want to batch edit in the left checkboxes, then click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-batch-edit.png",
            ico: true
          }), " at the top."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-batch-edit-activate-button.png",
            ico: true,
            alone: true
          }), " for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.title"
          }), " to switch to edit mode, then you can enroll, edit, or delete the desired credentials."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-batch-edit-master-admin.png",
          width: "600px"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "You can enroll face, fingerprint, card, and PIN credentials, and at least two different types of credentials must be enrolled."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " button to apply your changes."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Batch editing overwrites with the enrolled credentials."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "If the selected device is not a new device or does not support the configured credentials, the settings will not be applied to that device."
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostar2-batch-edit-master-admin-2.png"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2step-authentication",
      children: "Two-step Authentication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Existing devices upgraded via firmware do not provide ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title"
      }), " settings, but you can enhance administrator security by enabling the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title"
      }), " option."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), " option appears only when the firmware has been upgraded to the latest version on existing devices."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The default value for ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), " is single-step authentication."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), " can be activated only if all registered administrators have at least two types of credentials."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The firmware upgrade device cannot be downgraded to a lower version after upgrading the firmware."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setting-up-two-step-authentication-in-biostar-2",
      children: "Setting Up Two-Step Authentication in BioStar 2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To setting ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.twoStepAuth.title"
          }), " in BioStar 2, go to the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device"
          }), " menu, click the desired device, and enter the device detail page."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "caution",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["If no full administrator is configured on the device, the following popup message appears. Add an administrator to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.operatorLevel.all"
            }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.advanced"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.administrator"
            }), " tab."]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostar2-admin-warning.png"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Activate ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.twoStepAuth.title"
          }), " by setting it to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.advanced"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.administrator"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-2step-auth-1.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " button to activate ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.twoStepAuth.title"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["If not all administrators have at least two types of credentials, activation will fail and an error message will appear.", (0,jsx_runtime.jsx)("br", {}), "Enroll at least two types of credentials for all administrators, and then try again."]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostar2-2step-auth-warning.png"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "warning",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you activate ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), " and then delete credentials so that all administrators have fewer than two types, you will not be able to access the administrator menu if BioStar 2 connection is also unavailable. Therefore, exercise caution when deleting administrator credentials."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-editing-two-step-authentication",
      children: "Batch Editing Two-Step Authentication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can batch edit ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title"
      }), ". Use the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.batchEdit"
      }), " feature to enable or disable ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title"
      }), " for multiple devices simultaneously."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device"
          }), " menu, ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-checkbox.png",
            ico: true,
            alone: true
          }), " check the devices you want to batch edit in the left checkboxes, then click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-batch-edit.png",
            ico: true
          }), " at the top."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-batch-edit-activate-button.png",
            ico: true,
            alone: true
          }), " for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.twoStepAuth.title"
          }), " to switch to edit mode, then you can enable or disable ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.masterAdmin.twoStepAuth.title"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-batch-edit-2step-auth.png",
          width: "600px"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When enabling ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), ", administrators with insufficient enrolled credentials may be unable to authenticate. Therefore, before enabling ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title"
            }), ", ensure that ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "all administrators have at least two types of credentials enrolled"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply"
          }), " button to apply your changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-information",
      children: "Additional Information"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual Device Hash Key Change"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When manually changing the device hash key, a warning message will indicate that Master Admin PINs will be deleted. Please confirm the message before proceeding."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RS-485 Biometric Image Transmission Restriction"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Biometric credential images are not transmitted over RS-485 communication, so substitute images appear when viewing the registered Master Admin face on slave devices."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "frequently-asked-questions",
      children: "Frequently Asked Questions"
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