"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["9079"], {
"1244": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Details} = _components;
  if (!Details) _missingMdxReference("Details", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Details, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Notice on improved Administrator Guide"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Starting with BioStar v2.9.5, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Feature Guide"
      }), " is provided separately by topic on how to use new or improved features."]
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
"4635": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_revision_296_mdx_70a_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-revision-296-mdx-70a.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_revision_296_mdx_70a_namespaceObject = JSON.parse('{"id":"revision/296","title":"Version 2.9.6 (Build No. 2.9.6.40)","description":"Release2024-06-12","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/revision/296.mdx","sourceDirName":"revision","slug":"/revision/296","permalink":"/biostar2-docs/en/revision/296","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"296","title":"Version 2.9.6 (Build No. 2.9.6.40)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"Version 2.9.7 (Build No. 2.9.7.41)","permalink":"/biostar2-docs/en/revision/297"},"next":{"title":"Version 2.9.5 (Build No. 2.9.5.29)","permalink":"/biostar2-docs/en/revision/295"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_improved-administrator-guide.mdx
var _improved_administrator_guide = __webpack_require__("1244");
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/revision/296.mdx


const frontMatter = {
	id: 296,
	title: 'Version 2.9.6 (Build No. 2.9.6.40)',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._improved_administrator_guide/* toc */.d$, {
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
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2024-06-12"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_improved_administrator_guide/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-features-and-improvements",
      children: "New Features and Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports a new device."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "XPass 2 (XP2-MAPB)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Display Result from Controller"
          }), " feature for displaying authentication success or failure results from a 3rd party controller on the device screen when using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Intelligent Slave"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ignore Repeated Signals Duration"
          }), " feature, which ignores repetitive authentication signals from the controller when the device is connected to a 3rd party controller via Wiegand."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports the feature to select the resolution of the video transmitted from the device when using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Intercom"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RTSP"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Intercom Video Resolution"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "RTSP Video Resolution"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The authentication result display option supports selecting how the user ID and name are displayed on the device's authentication result screen."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "User ID Display"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "User Name Display"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SIP Server Transport"
          }), ", which selects the SIP transmission method when setting up the SIP server of the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Intercom"
          }), " on the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Auth Mode"
          }), " editing in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Batch Edit"
          }), " of devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["FaceStation F2 (firmware v2.1.4 or higher) - Added ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Power Line Frequency"
          }), " option to prevent flicker based on the illuminance environment in which the device is installed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports FeliCa card from ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Smart Card Layout"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Face Detection"
          }), " feature on X-Station 2 is discontinued."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved security vulnerabilities."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved XSS security vulnerability."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved web socket security vulnerabilities."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved CSRF security vulnerability."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Upgraded 7zip version."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved security vulnerabilities of SSL/TLS Diffie-Hellman Modulus."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Upgraded Spring Framework version."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved security vulnerabilities of HTTP Content-Security-Policy."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Removed the auto-completion feature from all input fields."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved SQL Injection security vulnerabilities."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved BioStar 2 certificate security vulnerabilities."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Improved ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Active Directory"
              }), " security vulnerabilities."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved Time and Attendance security vulnerabilities."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved security vulnerabilities of Access-Control-Allow-Origin."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Added X-Frame-Options to T&A API document."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved user inquiry screen performance in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TIME ATTENDANCE"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Schedule"
          }), " menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added a refresh button to the T&A record details view screen (calendar, list) in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TIME ATTENDANCE"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Report"
          }), " menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved time display method in the T&A Report in countries that do not use Daylight Saving Time (DST)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved synchronization performance of the latest data when there is a large volume of old T&A report data."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved to display both the user name and user ID in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User"
          }), " column of the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Alert List"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved the time to be displayed in seconds in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Date"
          }), " column of the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Alert List"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved performance when Automatic User Synchronization is set to Specific Devices(Only devices belonging to the access group) option."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Improved performance when adding, modifying, or deleting ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ZONE"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Improved ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Access Level"
              }), " edit performance."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Group"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Device Group"
          }), " synchronization of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TIME ATTENDANCE"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Fixed error pop-up message is displayed when uploading visual face files with filenames starting with '0' while the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User ID Type"
          }), " is set to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Number"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved check logic for duplicate user IDs when using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User ID Type"
          }), " as ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Alphanumeric"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to use a static IP address when calling internal APIs from C to Java."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Increased the maximum number of authentication modes for a specific device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added new index for environments using MS SQL Server databases."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Adjusted the maximum number of characters that can be entered in the card ID when issuing a CSN mobile card."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to display a pop-up message when the user sets the encryption key storage path directly with special characters in the path."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved Wiegand reader to be supported in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TRIGGER & ACTION"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to check the server's readiness before starting the BioStar 2 server and display a popup message in case of any issues."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved the display of user-related event logs in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV Export"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Print"
          }), " to differentiate whether the event occurred from the device or server."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved to leave an event log and alert in real-time when ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum Invalid Attempts"
          }), " is exceeded."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added API to edit information in batch up to 100 users."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved password ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum Invalid Attempts"
          }), " limit option to be applied by default value."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added notification pop-up messages for unset items and reduced the conditions required when creating an ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Access Group"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved login API."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved mobile card ID check logic."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved BioStar 2 Setting UI"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved display in the status window of BioStar 2 Setting when the service ports are in use."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Updated Spanish resource file."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Email sending fails in certain SMTP environments. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When using Global APB and dual authentication mode on a specific device, authentication failure occurs for the first user. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fire Alarm"
            }), " zone list, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Active/Inactive"
            }), " column is not sorted properly in ascending or descending order. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Visitor Operator"
            }), " is displayed in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Operator Level"
            }), " of a user without a visitor license. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.7.7"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Fixed display errors in Arabic for certain items. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The card gets falsely issued in BioStar 2 when a smart card is issued with Visual Face template using a disconnected device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The launcher service (biostar-server.exe) terminates in specific environments. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When exporting ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Elevator permission by Floor"
            }), " as CSV and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Elevator Permission by User"
            }), " list in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Status"
            }), " of the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACCESS CONTROL"
            }), " menu, the user ID and name are encrypted and output. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When restarting the BioStar 2 service, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security Level"
            }), " of Face in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Server Matching"
            }), " and the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Display user profile image when there is no image log for the events"
            }), " settings in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Image Log"
            }), " are initialized. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After locking a specific device, no sound is being played. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full Access"
            }), " is activated even though the device is included in specific access levels or access groups. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When selecting all devices in a device group and performing ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete Data & Sync Device"
            }), ", all devices are synchronized, leading to unintended synchronization. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When editing device settings using device ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Batch Edit"
            }), ", the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use QR as Card"
            }), " is activated. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After logging in and out with an account that has a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Level"
            }), " without user menu permissions, and then logging in with an Administrator account, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add New User"
            }), " screen is displayed when entering the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "USER"
            }), " menu. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.7.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When using ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Specific Devices(Only devices belonging to the access group)"
            }), " mode, modifying the visitor's credentials does not synchronize with the device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The device registered to the mobile access card does not get deleted. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.7"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When printing the door list, status of all doors are printed as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Normal"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The device selected to enroll a credential is displayed in the device list in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "User"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Credential"
            }), " even after being deleted. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Images that cannot be used for authentication gets enrolled. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An error occurs when deleting BioStar 2 event logs from an operating system that does not use the Gregorian calendar. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Column List"
            }), " is displayed abnormally when configuring ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Column Setting"
            }), " in a specific zone. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.5.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Device groups are displayed abnormally when the device ID exceeds a certain number of digits. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.6.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When a device that supports ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Occupancy Limit"
            }), " is in Arm mode state, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete Data & Sync Device"
            }), " proceeds while the attempt should fail. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.11"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When changing the user name while logging in, the user name in the upper right corner is not updated. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When executing the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Send Visual Face Mobile Enrollment Link"
            }), " in a user group without users, an error popup message does not appear. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When importing a CSV file containing ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Group"
            }), " structured in 8 depths, the User Groups are not added correctly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Fixed error message that appears when user expiration period is out of range when importing a CSV file. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When setting ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduled Lock"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduled Unlock"
            }), " Zone, doors from a different RS-485 network appears. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After logging in, when entering ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TRIGGER & ACTION"
            }), ", the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Action"
            }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Output"
            }), " list does not appear. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "User ID Type"
            }), " changes when all devices are not connected to the server. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PDF is not printed properly when sorting columns by ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Group"
            }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "USER"
            }), " menu. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.7.8"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encrypt Personal Data on Database"
            }), " is enabled, if more than 16 characters are entered for the user ID and then decrypted, an error occurs in user ID sorting. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Unsupported menu appears on the device detail page of the BioStation 2a (BS2A-ODPB) model. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Any changes on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Group"
            }), " does not synchronize with the user information in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Muster Zone"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When selecting all users in a specific user group and then ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Send Visual Face Mobile Enrollment Link"
            }), ", an email is also sent to all users not included in the group. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Device type could be changed using the API on registered devices. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.5.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When creating or editing a user using the User API, logout occurs when the API is called with empty credentials values. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Data File Import"
            }), " from ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Event Log"
            }), " causes an unintended logout intermittently. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An error pop-up does not occur under certain conditions when running ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data File Import"
            }), " from the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "USER"
            }), " menu. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card Layout"
            }), " with status 'Unknown' is synced to the device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Changing the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card Layout"
            }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "None"
            }), " on a device with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card"
            }), " set results in the device being synchronized with the default layout. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When a user with permission to only some device groups enrolls a card, devices without permission also appear in the list. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Entering the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Control"
            }), " menu causes an unintended logout intermittently. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When users click the + or - buttons for schedules where users are not registered in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule"
            }), " menu, an error popup message appears. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In an environment using MS SQL Server database, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TIME ATTENDANCE"
            }), " menu cannot be accessed when BioStar 2 is upgraded from a specific version (2.8.10 ~ 2.8.12). ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When using the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "First check-in & Last check-out"
            }), " option and setting ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Break Time"
            }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fixed"
            }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shift"
            }), ", the T&A report time is not displayed correctly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When exporting to PDF, certain languages are displayed abnormally. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Improved the Time and Attendance API document page. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.2.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Connections are successfully made when using other protocols."
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When there are many temporary schedules, accessing the Schedule becomes slow. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When logging in as a user with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edit/Read"
            }), " permission to the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TIME ATTENDANCE"
            }), " menu, some T&A menus do not appear. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When calling the Report API, the data is not returned as specified by the designated fields. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.11"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After editing the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Punchlogs storage duration"
            }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Setting"
            }), " of the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TIME ATTENDANCE"
            }), " menu, editing certain other options without clicking the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apply"
            }), " button results in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Punchlogs storage duration"
            }), " being applied. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.17"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Infinite loading occurs when calling Schedule Create API in the T&A API document. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An error occurs when a user with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T&A Operator"
            }), " permissions generates a T&A ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Report"
            }), " for the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom User Field"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["T&A report events for a specific device are not synchronized. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "REPORT"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Dashboard"
            }), " menu screens are displayed abnormally after changing to some languages. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.5"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An error occurs when generating a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Report"
            }), " after logging in as a custom level account. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When backing up repeatedly using the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "System Backup"
            }), " feature, folders and files already saved in the backup file storage path are deleted. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The event log is not saved properly when the month changes while using the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automatic System Backup"
            }), " option. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When generating a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Report"
            }), " with filter conditions set, the correct data is not generated. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The events in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "MONITORING"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "REPORT"
            }), " are logged with different timestamps. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When using the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 Restore"
            }), " tool to restore data backed up from the same version as the current BioStar 2, errors occur during the restoration process. ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When restarting the Core Web Server service in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 Setting"
            }), " while using the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automatic System Backup"
            }), ", the setting of ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automatic System Backup"
            }), " is reset to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not Use"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "Affects version: v2.9.5"
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