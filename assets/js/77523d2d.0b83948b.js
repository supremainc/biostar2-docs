"use strict";
(self["webpackChunkBioStar2_Docs"] = self["webpackChunkBioStar2_Docs"] || []).push([["5538"], {
2141: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_revision_291_mdx_775_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-291-mdx-775.json
var site_docs_revision_291_mdx_775_namespaceObject = JSON.parse('{"id":"revision/291","title":"버전 2.9.1 (빌드 번호 2.9.1.25)","description":"릴리즈2023-02-08","source":"@site/docs/revision/291.mdx","sourceDirName":"revision","slug":"/revision/291","permalink":"/biostar2-docs/revision/291","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"291","title":"버전 2.9.1 (빌드 번호 2.9.1.25)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"버전 2.9.2 (빌드 번호 2.9.2.4)","permalink":"/biostar2-docs/revision/292"},"next":{"title":"버전 2.9.0 (빌드 번호 2.9.0.80)","permalink":"/biostar2-docs/revision/290"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/revision/291.mdx


const frontMatter = {
	id: 291,
	title: '버전 2.9.1 (빌드 번호 2.9.1.25)',
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
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2023-02-08"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "타사 OSDP 리더 연결 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치에서 특정 기능 사용에 대한 라이선스 활성화 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "얼굴 검출 설정"
          }), " 기능 개선"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "얼굴 인식 거리"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "얼굴 인식 영역 넓히기"
            }), " 옵션 지원"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "도움말 jQuery 최신 버전 적용"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "관리자 권한에 대한 보안 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HTTP 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Injection 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "인증 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "기타 보안 취약점 개선"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 CSV 내보내기 실행 시 저장되는 파일명 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이미지 로그의 저장 경로 설정 시 이미 생성되어있는 디렉토리만 사용할 수 있도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SMTP 설정 보안 취약점 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 정의 설치 시 데이터베이스 및 테이블의 대소문자 미구분 가이드 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 관리 보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HTTP Content-Security-Policy, X-XSS-Protection, X-Content-type-options 취약점 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "TA Path Traversal 취약점 개선"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "실시간 이벤트 로그 성능 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 및 사용자 그룹의 생성 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "미확인 알람 조회 시 로딩 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자가 많은 대용량 환경에서 일부 기능 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "암복호화 데이터 처리 성능 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 로그아웃 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 설치 시 Maria DB 메모리 설정 최적화"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "연결되어있지 않은 장치의 이미지 로그 확인 시 나타나는 팝업 메시지 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1세대 장치로 엘리베이터 스케줄 개방 설정 시 나타나는 팝업 메시지 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사진을 업로드하여 비주얼 페이스 등록 시 노이즈로 인한 사진 화질 저하 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API를 이용하여 비주얼 페이스 등록 시 인코딩 여부 확인하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "작업 조건 및 동작"
          }), "과 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "이메일 설정"
          }), "의 SMTP 정보가 서로 동기화 되도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL Server 데이터베이스를 사용하는 환경에서 방문자 검색 성능 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로그인 페이지 변경"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일부 용어 변경"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기타 성능 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기타 서버 안정화"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 사용자 그룹에서 사용자를 전체 체크하고 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 삭제"
            }), " 시 다른 그룹에 포함된 사용자의 모바일 카드까지 삭제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.12"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 라이브러리가 Windows Server 2012에서 설치되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["API를 이용하여 1000명 이상의 사용자를 삭제할 경우 사용자가 삭제되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["API를 이용하여 사용자를 추가하고 start_datetime 및 expiry_datetime에서 시간을 설정하는 경우 정확한 시간이 반영되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["등록된 사운드 파일 삭제 시 필요한 권한이 있어도 거부되어 삭제할 수 없는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 장치의 아이콘이 제대로 표시되지않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.3.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["간헐적으로 장치 연결이 끊어지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["등록된 사용자가 많은 상태에서 사용자 그룹 정보를 변경하면 변경점이 반영되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["동일한 출입레벨을 사용하는 출입그룹 중 사용자 그룹이 설정된 출입그룹 삭제 시 사용자 그룹에 포함된 사용자가 단독으로 추가되어있는 다른 출입그룹에서도 삭제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["서버 재기동 이후에 발생되는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "장치연결해제 감지"
            }), " 이벤트가 일부 누락되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.11"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["FaceStation F2의 장치 로그가 간헐적으로 누락되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 연결 시 간헐적으로 로그인 페이지로 이동되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MS SQL Server 데이터베이스를 사용하는 환경에서 사용자 정보의 이메일 주소를 이미 사용중인 이메일 주소로 변경하여도 중복 체크되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["비주얼 페이스 모바일 등록 안내 이메일 발송 시 스페인어 바닥글이 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CSV 불러오기"
            }), "를 이용하여 CSN 모바일 카드 발급 시 유효 기간에 슬래시(/)를 사용한 경우 올바르게 표기되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2 로그인 시 일부 구 버전 장치에 대한 펌웨어 업그레이드 고지가 나타나지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 자동 동기화"
            }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "특정 장치"
            }), "(", (0,jsx_runtime.jsx)(_components.strong, {
              children: "해당하는 출입 그룹에 속한 장치만 동기화"
            }), ")로 설정 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSV 불러오기"
            }), "로 업데이트한 사용자 정보가 장치에 동기화 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.7.11"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["API를 이용하여 카드 발급 시 최대 발급 개수를 초과하여 발급이 가능한 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "액티브 디렉토리"
            }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 로그인에 사용"
            }), " 옵션이 비활성화 상태일 때 액티브 디렉토리 동기화 시 로그인되어있는 ID가 동기화되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["다수의 비주얼 페이스가 등록된 사용자를 데이터 내보내기하면 서버가 멈추는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 파일의 사용자 정보에 최대 입력 글자 수가 초과하지 않아도 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSV 불러오기"
            }), "에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MS SQL Server 데이터베이스를 사용하는 환경에서 특정 언어로 부재가 등록된 경우 근태 기록 조회 시 해당 언어가 올바르게 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자"
            }), " 메뉴에서 다수의 사용자 그룹을 여러 번 이동한 경우 제대로 동기화가 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.8.9"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["다수의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "시간 규칙"
            }), "이 생성되어있는 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 관리"
            }), "에 접근이 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MS SQL Server 데이터베이스를 사용하는 환경에서 긴 내용의 인증서를 적용한 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 관리"
            }), "에 접근이 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "근무 스케줄"
            }), "에 새 사용자를 추가하는 과정에서 스케줄에 등록된 사용자가 초기화 되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 언어에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "모니터링"
            }), " 메뉴에 진입하면 세션이 종료되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.9.1.25"
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