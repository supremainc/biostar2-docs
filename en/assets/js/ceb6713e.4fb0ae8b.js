"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["3948"], {
5042: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (MDXContent),
  d$: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Details} = _components;
  if (!Details) _missingMdxReference("Details", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Details, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Notice on FaceStation F2 v1.x.x Firmware Support Discontinuation"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Starting with BioStar 2 v2.9.7, we have enhanced synchronization performance by modifying the process to transmit templates exclusively when synchronizing a user's visual face to the device."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Given the differences in visual face algorithms, FaceStation F2 v1.x.x won't sync well with the new BioStar 2. Therefore, we've decided to end support for FaceStation F2 v1.x.x from BioStar 2 v2.9.7 onward."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you are currently using FaceStation F2 v1.x.x firmware, kindly upgrade your FaceStation F2 to the latest firmware to utilize BioStar 2 v2.9.7."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The latest firmware can be downloaded from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://download.supremainc.com",
        children: "Suprema Download Center"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
3354: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_revision_299_mdx_ceb_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-revision-299-mdx-ceb.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_revision_299_mdx_ceb_namespaceObject = JSON.parse('{"id":"revision/299","title":"Version 2.9.9 (Build No. 2.9.9.17)","description":"Release2025-06-04","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/revision/299.mdx","sourceDirName":"revision","slug":"/revision/299","permalink":"/biostar2-docs/en/revision/299","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"299","title":"Version 2.9.9 (Build No. 2.9.9.17)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"Precautions when upgrading BioStar 2","permalink":"/biostar2-docs/en/revision/"},"next":{"title":"Version 2.9.8 (Build No. 2.9.8.30)","permalink":"/biostar2-docs/en/revision/298"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_fsf2-firmware-support-discontinuation.mdx
var _fsf2_firmware_support_discontinuation = __webpack_require__(5042);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/revision/299.mdx


const frontMatter = {
	id: 299,
	title: 'Version 2.9.9 (Build No. 2.9.9.17)',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._fsf2_firmware_support_discontinuation/* toc */.d$, {
  "value": "New Features and Improvements",
  "id": "new-features-and-improvements",
  "level": 2
}, {
  "value": "Bug Fixes",
  "id": "bug-fixes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Badge, BugLists, Cmd, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2025-06-04"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_fsf2_firmware_support_discontinuation/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-features-and-improvements",
      children: "New Features and Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports a new devices."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "XPass 2 (XP2-MAPB-H)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports a new controller."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CoreStation 20 (CS-20, CS-20P), DoorInterface (DI-24)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added support for logging in to BioStar 2 using Microsoft Entra ID (Azure Active Directory) integration."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory"
          }), " synchronization performance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added option to turn scramble keypad on and off in authentication menu."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved security vulnerabilities."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enhanced validation for file uploads and inputs"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports MS SQL Server 2022 and OLE DB Driver."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Support for TLS 1.2 when connecting to MS SQL secure communications."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Upgraded MariaDB version (11.4.4)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved Time and Attendance security vulnerabilities."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Improved security vulnerabilities of External service interaction (HTTP)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved system login logic."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved usability of /punch_logs/modified API for attendance management."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to automatically reconnect to the database without restarting the server when using MSSQL with Windows authentication."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports Microsoft ODBC Driver 17 for SQL Server."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved user sync performance."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to prevent synchronization when the AC service is not running."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved to allow configuration when the connected slave device supports ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.customSmartCard"
          }), ", even if the controller does not support the feature."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to automatically reconnect when the TA DB connection is lost during encryption migration after a long idle period."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved performance when retrieving users belonging to access groups."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved the popup message shown when adding credentials to a user on a slave device connected via TCP/IP."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to display a error popup message with an error code when license activation fails in an offline environment."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added support for special characters (", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: ","
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "_"
          }), ") in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.account.new"
          }), " and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.authorization.id"
          }), " fields for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.interphone"
          }), " settings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.video"
          }), " performance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved to display the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tamperOn"
          }), " setting on certain slave devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved the error message shown during cloud registration to help identify possible network-related causes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added the features to switch the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.setting.cloud"
          }), " account to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.notUse"
          }), " and improved support for re-sending activation emails, displaying status information, and checking connection ports."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Backup status now displayed as Success or Cancelled in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring.auditTrail"
          }), " when performing a ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.systemBackup"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Updated BioStar 2 Mobile application."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved display of icons according to BioMini product type."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The TA Report for the current month is not displayed when looked up after the start of a new month. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.13"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Decryption failed in environments where ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.sever.secure.comm.encrypt.db"
            }), " had previously been applied. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Repeated user synchronization and abnormal increase in memory usage and log file size due to specific error during device synchronization. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Failed to load users after login when a custom account had permissions for more than 1100 user groups. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.5"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Visual Face Migration target count was displayed incorrectly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.7"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.enrollTemplateOnMobile"
            }), " menu appeared on the device detail page for devices that do not support ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateOnMobile"
            }), " enrollment. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cached data was not cleared after logout in environments where TA was registered, causing previous information to remain. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.enrollTemplateOnMobile"
            }), " info message was incorrectly displayed on the device detail page for FaceStation F2 (version 2.2.0 or higher). ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The number of ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.license.ac"
            }), " users and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.license.ta"
            }), " users does not match. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In BioStar 2.8.11 and above, issuance information for ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.qrSecureCredentialCard"
            }), " was not recorded in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "monitoring.auditTrail"
            }), " ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.11"
            }), " ."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When performing ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.header.batchEdit"
            }), " with select all in a specific user group, the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "monitoring.auditTrail"
            }), " incorrectly logged the target as All User. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When user ID and card ID were the same, the user name was incorrectly logged in the event log after authentication failure. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Selecting the Time Attendance menu with an expired login session did not trigger a logout. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Delayed response when generating individual reports or calling the API for specific users. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.5"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Warning popup for overlapping time was incorrectly shown when only one ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.mealDeduction"
            }), " was configured in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.shift"
            }), " settings. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Incorrect user count update when deleting a user with a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "leave.leave"
            }), " entry from a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.schedule"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.dst"
            }), " settings were not applied when generating a report with two ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.dst"
            }), " configurations enabled. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.dst"
            }), " settings were not applied to dashboard widgets when two ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.dst"
            }), " configurations were enabled. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Results were displayed incorrectly in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.customReport"
            }), " when the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "customReport.dialog.period"
            }), " was set to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dynamic"
            }), " and configured from '0 days back at 00:00 to 0 days back at 23:59'. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Fixed an issue where an error occurred indicating that the sysbackup.conf file was missing when installing BioStar 2. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["API was called twice when adding a new ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.quickAction"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.5"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["UI was displayed incorrectly when adding a photo to a user while accessing BioStar 2 via HTTP and IP address. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.5"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Added a message indicating that a secure connection (HTTPS) is required."
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.title"
            }), " values were incorrectly switched when exporting user information to PDF or SVG after changing the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.order"
            }), " of ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.title"
            }), " in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.card.cardType"
            }), " was displayed as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            }), " for some cards in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "predefinedReport.name.allCards"
            }), " report. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["User list was not displayed in the search window when generating a time and attendance report for a specific user. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Access groups without proper permissions were displayed and selectable during user registration due to residual data from a previous session. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Some users were not displayed when generating a report for more than 1,000 users. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
            })]
          }), "\n"]
        }), "\n"]
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