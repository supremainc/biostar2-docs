"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["6262"], {
"9685": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_update_295_new_dashboard_mdx_251_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-update-295-new-dashboard-mdx-251.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_update_295_new_dashboard_mdx_251_namespaceObject = JSON.parse('{"id":"update/295/new-dashboard","title":"How to Use the New Dashboard","description":"The newly added dashboard can be customized as desired by selecting the desired information for each user, adding widgets, and freely arranging the widgets.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/update/295/new-dashboard.mdx","sourceDirName":"update/295","slug":"/update/295/new-dashboard","permalink":"/biostar2-docs/en/update/295/new-dashboard","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"new-dashboard","title":"How to Use the New Dashboard","description":"The newly added dashboard can be customized as desired by selecting the desired information for each user, adding widgets, and freely arranging the widgets.","keywords":["New Dashboard","Widget"],"isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"Version 2.9.5","permalink":"/biostar2-docs/en/update/biostar2-295"},"next":{"title":"How to Use the Quick Action","permalink":"/biostar2-docs/en/update/295/quick-action"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/update/295/new-dashboard.mdx


const frontMatter = {
	id: 'new-dashboard',
	title: 'How to Use the New Dashboard',
	description: 'The newly added dashboard can be customized as desired by selecting the desired information for each user, adding widgets, and freely arranging the widgets.',
	keywords: [
		'New Dashboard',
		'Widget'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "New Dashboard Main Screen",
  "id": "new-dashboard-main-screen",
  "level": 2
}, {
  "value": "Adding Widgets",
  "id": "adding-widgets",
  "level": 2
}, {
  "value": "Widget Types",
  "id": "widget-types",
  "level": 3
}, {
  "value": "Chart",
  "id": "chart",
  "level": 4
}, {
  "value": "Counter",
  "id": "counter",
  "level": 4
}, {
  "value": "Text",
  "id": "text",
  "level": 4
}, {
  "value": "Real-time Events",
  "id": "real-time-events",
  "level": 4
}, {
  "value": "Checkpoint",
  "id": "checkpoint",
  "level": 4
}, {
  "value": "System Usage",
  "id": "system-usage",
  "level": 4
}, {
  "value": "Door Control",
  "id": "door-control",
  "level": 4
}, {
  "value": "Edit Widget",
  "id": "edit-widget",
  "level": 2
}, {
  "value": "Delete Widget",
  "id": "delete-widget",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      children: "The newly added dashboard can be customized as desired by selecting the desired information for each user, adding widgets, and freely arranging the widgets."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For each user, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Dashboard"
            }), " can be configured for them personally."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Information available on the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Dashboard"
            }), " may vary depending on ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.bioStarOperator"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-dashboard-main-screen",
      children: "New Dashboard Main Screen"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-custom-dashboard.png",
      className: "none",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "1"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Widget Area"
          }), ": The area where user-added widgets are displayed."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "The size of each widget can be freely adjusted within the size limits for each widget."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Widgets can only be placed in empty areas, and they cannot overlap each other."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "2"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Refresh"
          }), ": Refresh the new dashboard page to update the data in the modified widget."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set the refresh cycle in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.autoRefreshInterval"
            }), " in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dashboardSettings"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "3"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.dashboardSettings"
          }), ": Add new widgets or set the data and appearance of the added widgets."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-widgets",
      children: "Adding Widgets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-new-dashboard.png",
            ico: true
          }), " on the main screen of BioStar 2."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addWidget"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If widgets have already been added, click ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/ico-new-dashboard-setting.png",
              ico: true,
              alone: true
            }), " to enter ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dashboardSettings"
            }), ", and then click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.addWidget"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes"
          }), ", then enter or set the required fields, depending on the widget."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "widget-types",
      children: "Widget Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The default widget size is set differently for each widget and is optimized to look best at the default."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "All widgets can be resized by dragging the lower-right corner."
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostar-295-adjust-win-size.png",
            caption: true
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "chart",
      children: "Chart"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-295-chart.png",
      className: "none",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Selecting desired chart data enables the display of the number of events that occurred in a chart."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes.chartData"
          }), ": From the daily or weekly event list, select the desired chart data."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessGranted"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessDenied"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyCommunicationIssue"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAPBViolation"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessGranted"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessDenied"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyCommunicationIssue"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAPBViolation"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartType"
          }), ": Select the desired type among ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.verticalBar"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.horizontalBar"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.line"
          }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.pie"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartColorSchemes"
          }), ": Select the desired color among 5 color schemes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The charts shown when selecting ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.chartColorSchemes"
        }), " are random values for preview, not actual values."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "counter",
      children: "Counter"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-295-counter.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Selecting desired counter data enables the display of the number of events that occurred as a number."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes.counterData"
          }), ": From the daily or weekly event list, select the desired counter data."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessGranted"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessDenied"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyCommunicationIssue"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAPBViolation"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessGranted"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessDenied"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyCommunicationIssue"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAPBViolation"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "text",
      children: "Text"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-295-text.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the widgets area of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Dashboard"
      }), ", you can enter and place desired text. After creation, you can place it in the required location and use it as a title for a widget or as a notice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you select the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.text.removeBackground"
        }), " option while creating a ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.text"
        }), " widget, transparency will be applied to the background."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-time-events",
      children: "Real-time Events"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-295-real-time-event.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shows events occurring in BioStar 2 in real time. You can check events by filtering specific events, users, doors, and devices."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.pause"
          }), ": To pause the real-time event."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.play"
          }), ": Resume a real-time event that stopped."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.clear"
          }), ": The entire captured record will be removed."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you navigate to another page and subsequently return to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "New Dashboard"
        }), ", the list will be cleared, and events will be logged anew."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "checkpoint",
      children: "Checkpoint"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-295-checkpoint.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select one device and display the profile photo and information (", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.user"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.date"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.device"
      }), ") of the user who successfully authenticated to the selected device in real time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.pause"
          }), ": To pause the checkpoint."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.play"
          }), ": To resume the checkpoint that paused."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.clear"
          }), ": The entire captured record will be removed."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.checkpoint"
        }), " are recorded for up to 5 people."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "system-usage",
      children: "System Usage"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-295-system usage.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The various usage statuses of BioStar 2 are displayed in numbers."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes.systemUsage"
          }), " that can be displayed is as follows:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.users"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.cards"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.fingerprint"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.visualFace"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.face"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.qrBarcode"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.mobileAccessCard"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.devices"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.doors"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.zones"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.accessGroups"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.userGroups"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.systemUsage.deviceGroups"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "door-control",
      children: "Door Control"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-295-door-control.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select one door to check and control its status."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The following items can be controlled with the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.doorControl.actionsBtn"
          }), " buttons:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.doorControl.actions.open"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.doorControl.actions.normalize"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.doorControl.actions.lock"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.doorControl.actions.unlock"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.doorControl.actions.clearAlarm"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.doorControl.actions.clearAPB"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The name of the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.doorControl"
        }), " widget is automatically assigned to the name of the door and cannot be modified."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After completing the settings of the widget, click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.apply"
        }), ", and the widget will be created in the widget area. Adjust it to the desired size and location, then click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.apply"
        }), ", and the widget will be added to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "New Dashboard"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-widget",
      children: "Edit Widget"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-new-dashboard.png",
            ico: true
          }), " on the main screen of BioStar 2."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-new-dashboard-setting.png",
            ico: true,
            alone: true
          }), " at the top right to enter ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.dashboardSettings"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-widget-edit.png",
            ico: true,
            alone: true
          }), " at the top right of the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Widget"
          }), " you want to edit, then edit the desired part."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-widget-edit.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After making edits, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.apply"
          }), " to save the changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After making adjustments to the widgets, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.apply"
          }), ", located at the top-right of the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.dashboardSettings"
          }), " screen, to apply and save the changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.editWidget"
            }), " cannot be changed in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.widgetTypes"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.widgetTypes.systemUsage"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.widgetTypes.checkpoint"
            }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.widgetTypes.doorControl"
            }), " that use a specific name cannot modify the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.widgetName"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-widget",
      children: "Delete Widget"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-new-dashboard.png",
            ico: true
          }), " on the main screen of BioStar 2."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-new-dashboard-setting.png",
            ico: true,
            alone: true
          }), " in the upper right to enter ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.dashboardSettings"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-widget-del.png",
            ico: true,
            alone: true
          }), " at the top right of the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Widget"
          }), " you want to delete."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-295-widget-del.png",
          className: "none",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the deletion confirmation pop-up and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.yes"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.apply"
          }), " at the top right of the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.dashboardSettings"
          }), " screen to apply the deletion."]
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