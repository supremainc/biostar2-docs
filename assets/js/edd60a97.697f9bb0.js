"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["1918"], {
5577: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_revision_299_draft_mdx_edd_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-299-draft-mdx-edd.json
var site_docs_revision_299_draft_mdx_edd_namespaceObject = JSON.parse('{"id":"revision/299-draft","title":"버전 2.9.9 (빌드 번호 2.9.9.15)","description":"릴리즈2025-05-30","source":"@site/docs/revision/299-draft.mdx","sourceDirName":"revision","slug":"/revision/299-draft","permalink":"/biostar2-docs/revision/299-draft","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":299,"frontMatter":{"id":"299-draft","title":"버전 2.9.9 (빌드 번호 2.9.9.15)","isTranslationMissing":false}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/revision/299-draft.mdx


const frontMatter = {
	id: '299-draft',
	title: '버전 2.9.9 (빌드 번호 2.9.9.15)',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "신규 기능 및 개선",
  "id": "신규-기능-및-개선",
  "level": 2
}, {
  "value": "버그 수정",
  "id": "버그-수정",
  "level": 2
}, {
  "value": "제외 이슈",
  "id": "제외-이슈",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Badge, BugLists, Cmd, Details, Jira, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Jira) _missingMdxReference("Jira", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2025-05-30"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "FaceStation F2 v1.x.x 펌웨어 지원 중단 안내"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "BioStar 2 v2.9.7부터 사용자의 비주얼 페이스를 장치에 동기화할 때 템플릿만 전송하도록 변경하여 동기화 성능을 최적화했습니다."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "따라서 BioStar 2 v2.9.7부터는 장치에서만 템플릿을 추출할 수 있는 FaceStation F2 v1.x.x 펌웨어의 지원이 중단됩니다."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "현재 FaceStation F2의 1.x.x 버전 펌웨어를 사용 중인 경우 BioStar 2 v2.9.7을 사용하기 위해서는 FaceStation F2를 최신 펌웨어로 업그레이드하여 사용하세요."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["최신 펌웨어는 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com",
          children: "슈프리마 다운로드 센터"
        }), "에서 다운로드할 수 있습니다."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BE-3743"
      }), " XP2-MHPB 장치 지원\n", (0,jsx_runtime.jsx)(Jira, {
        num: "SW5-708"
      }), " 30. Support for XP2-MAPB-H on BioStar 2\n", (0,jsx_runtime.jsx)(Jira, {
        num: "SW5-660"
      }), " [BDP-1228] xp2 키 패드 백라이트 지원 및 기능 확인."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 장치 연결 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "XPass 2 (XP2-MAPB-H)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports a new devices."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "XPass 2 (XP2-MAPB-H)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BE-3705"
      }), " CS-20 지원 2차 및 DI-24 지원"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 컨트롤러 연결 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CoreStation 20 (CS-20, CS-20P), DoorInterface (DI-24)"
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
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BE-3615"
      }), " Microsoft Entra ID(Azure Active Directory) 연동"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Microsoft Entra ID(Azure Active Directory) 연동하여 BioStar 2에 로그인할 수 있도록 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added support for logging in to BioStar 2 using Microsoft Entra ID (Azure Active Directory) integration."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BE-3613"
      }), " 기존 Active Directory 동기화 개선\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-4038"
      }), " [Suprema ME - ELM] 바이오스타의 이벤트 로그가 Database에 실시간 반영되지 않는 현상이 발생 - 긴급 처리 요청 건\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-4347"
      }), " [Suprema ME][stcpay] Active Directory에서 User Group Filter 활성화되어 있다가 비활성화 되어 있는 문제 2.7.8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory"
          }), " 동기화 성능 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory"
          }), " synchronization performance."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BE-3678"
      }), " BS3, XS2 장치에서 PIN 입력용 숫자 키패드 옵션 설정"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "인증 메뉴에 스크램블 키패드를 켜고 끌 수 있는 옵션 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added option to turn scramble keypad on and off in authentication menu."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BE-3731"
      }), " [보안] 모의 해킹 결과 4.4.1 우회 페이로드 입력 가능 관련\n", (0,jsx_runtime.jsx)(Jira, {
        num: "BE-3732"
      }), " [보안] 모의 해킹 결과 4.4.2 악성 코드 파일 업로드 관련\n", (0,jsx_runtime.jsx)(Jira, {
        num: "BE-3733"
      }), " [보안] 모의 해킹 결과 4.4.3 Stored-XSS 취약점 처리"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "파일 업로드 및 입력값에 대한 검증 강화"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved security vulnerabilities."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enhanced validation for file uploads and inputs"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BF-1320"
      }), " OLE DB + MSSQL 2022 지원"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL Server 2022 및 OLE DB 드라이버 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports MS SQL Server 2022 and OLE DB Driver.+"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "TA-374"
      }), " MSSQL 연결시 TLS 1.2 지원 2.2.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL 보안 통신 TLS 1.2 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Support for TLS 1.2 when connecting to MS SQL secure communications."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BVE-3128"
      }), " MariaDB 11.4.4 업그레이드"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MariaDB 버전 업그레이드 (11.4.4)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Upgraded MariaDB version (11.4.4)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "TA-371"
      }), " External service interaction (HTTP) 취약점 이슈 2.2.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 관리 보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "External service interaction (HTTP) 보안 취약점 개선"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved Time and Attendance security vulnerabilities."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Improved security vulnerabilities of External service interaction (HTTP)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "TA-408"
      }), " System Login 로직 수정 2.8.9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시스템 로그인 로직 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved system login logic."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "TA-513"
      }), " \"/punch_logs/modified\" api 호출시 user_id를 넣지 않아도 되며, 넣지 않으면 전체 사용자에 대한 검색이 된다. 2.8.11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 관리 /punch_logs/modified API 사용성 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved usability of /punch_logs/modified API for attendance management."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "TA-547"
      }), " MSSQL 윈도우윈증시에 DB와 연결끊기면 다시 연결이 되지 않음 2.7.14\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-4104"
      }), " [SUPREMA UK][TESCO] BioStar 2.9.5 - BioStar 2 TA 서비스가 시작 중일 때, TA 메뉴 클릭하면 자동 로그아웃, Unified Gateway 실행 중일 때도 자동 로그아웃 증상 2.7.14"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MSSQL 윈도우 인증 사용 시 DB 연결이 끊긴 후 서버 재시작 없이도 자동으로 재연결되도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to automatically reconnect to the database without restarting the server when using MSSQL with Windows authentication."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "TA-581"
      }), " MSSQL ODBC 지원 with MSSQL 2022 2.7.14"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Microsoft ODBC Driver 17 for SQL Server 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports Microsoft ODBC Driver 17 for SQL Server."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "TA-640"
      }), " 사용자 동기화시 LSTMOD 값 외에 새로운 값을 이용하여 동기화를 진행한다. 2.8.9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 동기화 성능 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved user sync performance."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "TA-663"
      }), " AC 서버가 가동하지 않는 경우 동기화를 진행하지 않는다. 2.8.0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AC 서비스를 가동하고있지 않은 경우에는 동기화를 진행하지 않도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to prevent synchronization when the AC service is not running."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BE-3768"
      }), " 컨트롤러 Custom Smart Card 미지원, 슬레이브가 지원일 때, 설정을 지원하는 방안"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["컨트롤러가 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.customSmartCard"
          }), "를 지원하지 않더라도, 연결된 슬레이브 장치가 해당 기능을 지원하는 경우 설정이 가능하도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved to allow configuration when the connected slave device supports ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.customSmartCard"
          }), ", even if the controller does not support the feature."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BF-217"
      }), " 암복호화 마이그레션시 Java 서버 TA DB 연결 끊어져서 에러 나는 버그"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "암복호화 마이그레이션 실행 시 장시간 경과로 TA DB 연결이 끊긴 경우, 자동으로 재연결되도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to automatically reconnect when the TA DB connection is lost during encryption migration after a long idle period."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BF-1865"
      }), " [성능 개선] 출입그룹에 속한 사용자 조회 View 쿼리 성능 개선 2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입 그룹에 속해 있는 사용자 조회 성능 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved performance when retrieving users belonging to access groups."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BJ-682"
      }), " 사용자에 크리덴셜 추가를 위해 TCP/IP로 추가된 Slave 장치로 Scan 시 팝업 문구 개선 2\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-3380"
      }), " [Johnson Controls] BEW2 Error 1013 Issue 2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TCP/IP로 연결된 슬레이브 장치에서 사용자에게 크리덴셜을 추가하려고 할 때 나타나는 팝업 메시지 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved the popup message shown when adding credentials to a user on a slave device connected via TCP/IP."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BJ-1786"
      }), " 오프라인 라이선스 활성화 오류 발생 시 에러 팝업이 발생하지 않음 2.7.14\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-3245"
      }), " [Control A] BioStar 2 offline license를 적용하였으나 적용되지 않음 2.8.12\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-4172"
      }), " [긴급][Meyer] BioStar 2 2.9.6 License (오프라인) 활성화 시도 했으나, [Activated 반영 성공] 또는 [실패 메시지]가 나타나지 않는 증상 2.8.12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "오프라인 환경에서 라이선스 활성화에 실패할 경우 에러 코드를 포함한 팝업 메시지가 표시되도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to display a error popup message with an error code when license activation fails in an offline environment."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "SW5-479"
      }), " 24. [BDP-1055] Removing some of the input restrictions for the SIP Username, Authorization ID fields"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.interphone"
          }), " 설정의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.account.new"
          }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.authorization.id"
          }), "에 일부 특수문자(", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: ","
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "_"
          }), ") 지원"]
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
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BJ-1936"
      }), " 비디오 개선 작업 2.9.9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.video"
          }), " 메뉴 성능 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.video"
          }), " performance."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "SW5-798"
      }), " slave 에서 secure tamper on 표시.\n", (0,jsx_runtime.jsx)(Jira, {
        num: "SW5-789"
      }), " slave장치에서 tamper 안나오는 기능 수정."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["일부 슬레이브 장치에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tamperOn"
          }), " 설정이 표시되도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved to display the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tamperOn"
          }), " setting on certain slave devices."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "SW5-461"
      }), " 18. [cloud] port 외부망 접근 문제 로 인한 cloud 설정 후 Register 시 발생 메시지 개선"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "클라우드 등록 시 네트워크 환경에 따라 발생할 수 있는 오류 메시지를 안내하여 원인 확인이 가능하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved the error message shown during cloud registration to help identify possible network-related causes."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "SW5-470"
      }), " 20. [cloud] cloud 설정을 off 하는 경우 에러 나는 문제.\n", (0,jsx_runtime.jsx)(Jira, {
        num: "SW5-460"
      }), " 17. [cloud] [BDP-391] email activation 을 BioStar2 에서 메일을 재발 송 할 수 있도록 기능 제공.\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-3496"
      }), " [Kimaldi] Cloud 활성화 계정 적용 불가 \"there is no data to process\"\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-3503"
      }), " [산호인터네셔널] BioStar2(앱) 서버 접속 불가\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-3564"
      }), " [슈프리마] 바이오스타 모바일 로그인 불가\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-3569"
      }), " [Brikom EntryPass] BioStar 2 Cloud subdomain 생성 후, PC에서는 접속이 가능하나 Mobile app에서는 접속이 불가능한 현상이 확인됨\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-3624"
      }), " [Suprema US] 웹상에서는 Cloud 도메인으로 접속이 가능하나 BioStar Mobile App으로는 접속 불가 현상\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-3632"
      }), " [Suprema EMEA] BioStar 2 Mobile APP 사용 불가 - 로그인 정보가 만료되었습니다 or ACE Error Code 101"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.setting.cloud"
          }), " 계정을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.notUse"
          }), "으로 전환할 수 있는 기능을 추가하고, 재등록 메일 발송, 상태 정보 표시, 연결 포트 검사 기능을 지원하도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added the features to switch the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.setting.cloud"
          }), " account to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.notUse"
          }), " and improved support for re-sending activation emails, displaying status information, and checking connection ports."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "SW5-419"
      }), " 5. Logging/error handling when backup fails."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.systemBackup"
          }), " 진행 시 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring.auditTrail"
          }), "에 성공 또는 취소 상태가 표시되도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Backup status now displayed as Success or Cancelled in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring.auditTrail"
          }), " when performing a ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.menu.systemBackup"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "SW5-162"
      }), " [BDP-926] Mobile App Renewal"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 Mobile 애플리케이션 업데이트"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Updated BioStar 2 Mobile application."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BE-3671"
      }), " BioStar 에 연결되는 BioMini 제품 종류에 따른 아이콘 표시 지원"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioMini 제품 종류에 따라 아이콘이 표시되도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved display of icons according to BioMini product type."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(BugLists, {
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "TA-265"
        }), " Archived 테이블이 올바르게 생성 되지 않았는데 계속 해서 새로 만들려고 시도하는 경우 2.8.13\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-3192"
        }), " [Suprema LATAM][Sautech ltda.][Fiduciaria Central] BioStar 2.8.15에서 4월, 5월 근태 리포트 결과가 Absence 2.8.13\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-3234"
        }), " [슈프리마]5월에서 6월 넘어가면서 이벤트 로그에는 있으나 근태가 결근으로 처리되고 있는 증상(모든 임직원) 2.8.13\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-3272"
        }), " [Suprema LATAM][Colombia][Books and books 0001] BioStar 2 TA Report Absence 이슈 2.8.13\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-3406"
        }), " [ScreenCheck] Individual report에 IN/OUT 결과가 표시되지 않음 2.8.13\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-3470"
        }), " BioStar2 2022년 12월 ~ 2023년 1월 근태데이터 누락증상 2.8.13\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4091"
        }), " [Suprema India] BioStar 2 V 2.9.4 TA 기록이 되지 않는 현상 2.8.13\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4133"
        }), " [Suprema India] TA Report 생성 불가 이슈 2.8.13\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4294"
        }), " [Suprema ME][Centena Saudi Arabia] 8월부터 ta 리포트가 생성되지 않고, ta db 에 archivedpunchlog 도 없음. 2.8.13\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4368"
        }), " [Suprema LATAM][Datasys Group S.A] 특정 달에 ta 리포트에 펀치 로그가 안 보임 2.8.13"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["새로운 월이 시작된 후 근태 기록 조회 시 해당 월의 근태 기록이 조회되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.13"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The TA Report for the current month is not displayed when looked up after the start of a new month. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.13"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "BF-1162"
        }), " db convertor validation check 에 대한 System log 기록 및 back table 삭제 기능 추가 2.8\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-3484"
        }), " [Besense] BioStar 2 업그레이드 후 DB 암호화를 활성화했던 현장에서 복호화가 되지 않음 2.8.0"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.sever.secure.comm.encrypt.db"
            }), "를 진행했던 환경에서 다시 복호화를 진행할 때 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.0"
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "BF-1351"
        }), " 장치 동기화 시 BS_ERR_INVALID_SLOT_NO = -702 응답을 받았지만 사용자 재 동기화 하는 문제 2.0.0\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-3634"
        }), " [Entripas][GO-WORK] log 파일 사이즈 급증, 메모리 활용률 문제 이슈"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 동기화 시 특정 오류로 인해 사용자 동기화가 반복되어 메모리 사용량 및 로그 파일 크기가 비정상적으로 증가하던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Repeated user synchronization and abnormal increase in memory usage and log file size due to specific error during device synchronization. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "BF-1596"
        }), " 커스텀 계정이 사용자 그룹 1100개 권한을 가진 경우 로그인시 사용자 조회 안됨. 2.9.5"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["커스텀 계정이 1100개 이상의 사용자 그룹 권한을 가진 경우 사용자 조회가 되지 않던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.5"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Failed to load users after login when a custom account had permissions for more than 1100 user groups. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.5"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "BF-1815"
        }), " Visual Face Migration 대상 개수 표기 오류 2.9.7\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4297"
        }), " [STC (Saudi Telecommunication Company)] User>Visual Face Migration 선택 (대쉬보드의 Visual Face유저와 다름) 2.9.7"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["비주얼 페이스 마이그레이션 대상 개수가 실제와 다르게 표시되던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.7"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Visual Face Migration target count was displayed incorrectly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.7"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "BF-1860"
        }), " ToM 을 지원하지만, ToM 등록을 미지원하는 장치의 상세 페이지에 ToM Enrollment 메뉴가 보이는 문제. 2.9.4"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateOnMobile"
            }), " 등록을 지원하지 않는 장치의 상세 페이지에 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.enrollTemplateOnMobile"
            }), " 메뉴가 나타나는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.4"
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "BF-1881"
        }), " TA 레지스터된 환경에서 바이오스타 로그아웃시 캐시 초기화 안되는 문제"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["TA가 등록된 환경에서 로그아웃 시 캐시가 초기화되지 않아 이전 정보가 남아있던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cached data was not cleared after logout in environments where TA was registered, causing previous information to remain. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.6.0"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "BF-1885"
        }), " FaceStation F2(ToM 지원 Version) 의 Device Detail 에 ToM Enrollment 의 Info Message 가 잘못 표기되는 문제 2.9.6"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["FaceStation F2(2.2.0 버전 이상)의 장치 상세 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.enrollTemplateOnMobile"
            }), "의 안내 메시지가 잘못 표시되던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.enrollTemplateOnMobile"
            }), " info message was incorrectly displayed on the device detail page for FaceStation F2 (version 2.2.0 or higher). ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.6"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "BF-1895"
        }), " AC사용자 그룹 변경에 따른 LSTMOD 추가\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4309"
        }), " [긴급][Suprema ME][Petrojet Time and attendance system] AC와 TA 사용자 수가 다른 문제 2.8.9"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.license.ac"
            }), " 사용자와 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.license.ta"
            }), " 사용자의 수가 일치하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.9"
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "BJ-600"
        }), " BioStar2 2.7.1에서 2.8.11 이상 버전으로 업그레이드 후 BioStar 2 QR 발급 정보가 Audit Trail에 기록 되지 않는 문제 2.8.11"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2.8.11 이상 버전에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.qrSecureCredentialCard"
            }), "의 발급 정보가 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "monitoring.auditTrail"
            }), "에 기록되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.11"
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "BJ-626"
        }), " 특정 사용자 그룹의 사용자를 Select All로 선택하여 Batch Edit 수정 시, Audit Trail에 '모든 사용자'로 출력되는 문제 2.7.1"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 사용자 그룹 내에서 사용자를 전체 선택하여 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.header.batchEdit"
            }), "했을 때 감사 추적에 모든 사용자로 잘못 기록되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.1"
            })]
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "BJ-693"
        }), " User ID와 동일한 ID를 가진 Card 인증 실패 시 로그에 카드 ID(사용자 이름)로 출력 되는 현상 2\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4073"
        }), " [Suprema JP - 세큐아, enduser: LineYahoo] 다음의 2가지 문제가 발생 (이슈1. \"1:1 인증 카드 인증 실패 시 userID(user name) 가 로그에 기록되는 현상 / 이슈2. -702 에러가 발생\" 2"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 ID와 카드 ID가 같을 때 인증에 실패할 경우 이벤트 로그에 사용자 이름이 잘못 표시되던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When user ID and card ID were the same, the user name was incorrectly logged in the event log after authentication failure. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "TA-525"
        }), " 세션 만료된 상태에서 메뉴 선택시 로그아웃이 되지 않는다. 2.2.0"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["로그인 세션 만료된 상태에서 근태 관리 메뉴 선택 시 로그아웃이 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Selecting the Time Attendance menu with an expired login session did not trigger a logout. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.0"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "TA-627"
        }), " Individual 타입 리포트 생성 혹은 api 호출시 응답이 오래 걸리는 경우에 대한 수정 2.8.5\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4288"
        }), " [Nedo Corporation] /tna/report.json 호출 시, 너무 오래 걸리고 데이터가 돌아오지 않을 때도 있음 2.8.5"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 사용자를 대상으로 개별 리포트 생성 또는 API 호출 시 응답이 지연되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.5"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Delayed response when generating individual reports or calling the API for specific users. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.5"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "TA-636"
        }), " Shift에서 Meal Duduction을 특정시간에 대해서 하나만 선택할 경우 나오는 경고팝업 버그 수정 2.9.6"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.shift"
            }), " 설정에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.mealDeduction"
            }), "을 하나만 사용할 경우에도 중복 시간 경고 팝업이 표시되던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.6"
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "TA-649"
        }), " Schedule에서 Leave 가 설정되어 있는 추가된 사용자를 제거할때 발생하는 버그 수정 2.9.6\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4338"
        }), " [Suprema India -Nedo Corporation] TA 스케쥴에서 사용자를 삭제했을 때, 삭제 후의 사용자수가 정상적으로 카운트되지 않는 현상이 발생 2.9.6"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.schedule"
            }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "leave.leave"
            }), "가 설정된 사용자를 삭제했을 때 사용자 수가 올바르게 반영되지 않던 문제 ", (0,jsx_runtime.jsx)(Badge, {
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "SW5-639"
        }), " 29. DST configuration not applied when generate report with two DST configurations activated"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["두 개의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.dst"
            }), "(DST) 설정이 활성화된 상태에서 리포트를 생성할 경우 DST 설정이 적용되지 않던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "SW5-638"
        }), " 28. DST configuration don't apply on dashboard when two DST configurations activated"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["두 개의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.dst"
            }), "(DST) 설정이 활성화된 경우 대시보드 위젯에 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.dst"
            }), "(DST) 설정이 적용되지 않던 문제 ", (0,jsx_runtime.jsx)(Badge, {
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "SW5-622"
        }), " 27. [Report] Custom Report with dynamic time filter returns empty result if using from 0 days back at 00:00 to 0 days back at 23:59"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.customReport"
            }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "customReport.dialog.period"
            }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dynamic"
            }), " 및 '0일 전 00:00부터 0일 전 23:59까지'로 설정 시 결과가 비정상적으로 표시되던 문제 ", (0,jsx_runtime.jsx)(Badge, {
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "SW5-446"
        }), " 9. [Backup and Restore] Biostar 2 web-app shows sysbackup.conf not found error when fresh install Biostar 2"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2를 새로 설치했을 때 sysbackup.conf 파일을 찾을 수 없다는 오류가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Fixed an issue where an error occurred indicating that the sysbackup.conf file was missing when installing BioStar 2. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "SW5-441"
        }), " 8. Create Quick Action fetch API Available Trigger&Action Twice"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["새 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.quickAction"
            }), " 추가 시 API가 두 번 호출되던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.5"
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "SW5-417"
        }), " 4. [FISS-4193] User Camera Integration return incorrect UI when access with HTTP and IP address\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4193"
        }), " [Suprema UK] BioStar 2의 사용자 이미지 추가 UI/UX 표기 이상 현상 2.9.5"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["HTTP와 IP 주소로 BioStar 2에 접속한 상태에서 사용자에 사진 등록 시 UI가 비정상적으로 표시되던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.5"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "보안 연결(HTTPS)이 필요하다는 안내 메시지 추가"
            }), "\n"]
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "SW5-411"
        }), " 3. [Custom Field][Print] Custom Field value in SVG and PDF switch with other Custom Field after edit the Custom Field order from Setting Server"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server"
            }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.title"
            }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.order"
            }), "를 변경한 후 사용자 정보를 PDF 또는 SVG로 출력할 때, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.title"
            }), " 값이 서로 바뀌어 표시되던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.3"
            })]
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "SW5-290"
        }), " 2. Update the card type that uses the - sign on report all cards"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "predefinedReport.name.allCards"
            }), " 리포트를 생성하면 일부 카드의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.card.cardType"
            }), "가 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            }), "로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
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
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "FISS-3939"
        }), " [키말디] 특정 사용자에 대한 T&A Report를 생성하고자 할 때, 사용자 검색창에 어떠한 사용자도 나타나지 않는 문제가 발생 2.8.0"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 사용자에 대한 근태 보고서를 생성할 때 사용자 검색창에 목록이 표시되지 않던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["User list was not displayed in the search window when generating a time and attendance report for a specific user. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.0"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4325"
        }), " [Suprema JP - 세큐아] custom 계정을 사용하는 현장에서 특정 시나리오를 따를 때, edit/read 권한이 없는 Access group에 대해서도 read/edit가 가능한 문제가 발생함"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 등록 시 이전 세션의 영향을 받아 권한이 없는 출입 그룹까지 표시되고 선택할 수 있던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.6.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Access groups without proper permissions were displayed and selectable during user registration due to residual data from a previous session. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.6.0"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Jira, {
          num: "TA-698"
        }), " 1000명 이상의 그룹을 대상으로 리포트 생성시 일부 사용자가 보이지 않는다 2.9.8\n", (0,jsx_runtime.jsx)(Jira, {
          num: "FISS-4402"
        }), " [Suprema ME][Avensys] 모든 사용자의 ta report 를 불러올때 특정 알파벳의 사용자들은 안 나옴 2.9.8"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["1,000명 이상의 사용자를 대상으로 리포트를 생성할 때 일부 사용자가 표시되지 않던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Some users were not displayed when generating a report for more than 1,000 users. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.8"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "제외-이슈",
      children: "제외 이슈"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BE-3745"
      }), " CS-40 이름 수정 건"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BF-1798"
      }), " C서버 error log callstack 추가"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BF-1898"
      }), " mssql 스마트카드 mifare_primary_key 빈값으로 넣는경우 쿼리 에러"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BF-1919"
      }), " FSF2, BS3 T_DEVCAPS MX_SYNC_CNT DB 누락 2.9.8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BJ-1909"
      }), " MSSQL 설치 시 Server IP에 Host Name 입력을 통해 설치할 수 있도록 개선 2.6.0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BVE-3159"
      }), " Spring Cloud Gateway 적용\n", (0,jsx_runtime.jsx)(Jira, {
        num: "FISS-3935"
      }), " [Hanman] OpenJDK is affected by multiple vulnerabilities. 2.3.0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "SW5-768"
      }), " [Document Storage] Refactor Directive File Upload\n", (0,jsx_runtime.jsx)(Jira, {
        num: "SW5-767"
      }), " [Document Storage] Refactor staging 2.9.9 e2e\n", (0,jsx_runtime.jsx)(Jira, {
        num: "SW5-766"
      }), " [Dashboard] Refactor staging 2.9.9 e2e timing issue\n", (0,jsx_runtime.jsx)(Jira, {
        num: "SW5-759"
      }), " [Report] Refactor E2E Test Code Staging 2.9.9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "SW5-702"
      }), " 31. Remove tab in MSSQL GO Statement"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "SW5-463"
      }), " 19. Create test code based on 2.9.8 projects (416 items)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "SW5-435"
      }), " [Backup and Restore]: Floating Frequency dropdown when zoom in the screen"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "SW5-424"
      }), " 6. Display error when printing device without any device data if there is a change in user data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BE-3744"
      }), " XS2-Q 모델에서 Camera QR 지원"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "제외 - 펌웨어 개발 미완"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["X-Station 2 (XS2-QAPB, XS2-QDPB) 모델에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useVisualBarcode"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Support for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useVisualBarcode"
          }), " feature on X-Station 2 (XS2-QAPB, XS2-QDPB) models."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BF-1876"
      }), " 네트워크 트래픽 제한 설정 버그 수정 2.9.1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      }), " - 문제점이 발견되어 차기 버전으로 이관"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["네트워크 트래픽 제한 설정 시 장치 연결이 끊기던 문제 ", (0,jsx_runtime.jsx)(Badge, {
            children: "2.9.4"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Device connections were lost due to network traffic limit settings. ", (0,jsx_runtime.jsx)(Badge, {
            children: "2.9.4"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Jira, {
        num: "BVE-3199"
      }), " 사용자/장치/도어 그룹 트리 구조 UI 개선"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "제외"
      }), " - 복잡한 환경에서 동작에 문제가 발생하여 차기 버전으로 이관"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일부 메뉴의 그룹 트리 UI 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved group tree UI in certain menus."
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