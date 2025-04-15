"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["5082"], {
"8226": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_294_mdx_219_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-294-mdx-219.json
var site_docs_revision_294_mdx_219_namespaceObject = JSON.parse('{"id":"revision/294","title":"버전 2.9.4 (빌드 번호 2.9.4.29)","description":"릴리즈2023-09-20","source":"@site/docs/revision/294.mdx","sourceDirName":"revision","slug":"/revision/294","permalink":"/biostar2-docs/revision/294","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"294","title":"버전 2.9.4 (빌드 번호 2.9.4.29)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"버전 2.9.5 (빌드 번호 2.9.5.29)","permalink":"/biostar2-docs/revision/295"},"next":{"title":"버전 2.9.3 (빌드 번호 2.9.3.26)","permalink":"/biostar2-docs/revision/293"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/revision/294.mdx


const frontMatter = {
	id: 294,
	title: '버전 2.9.4 (빌드 번호 2.9.4.29)',
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
    em: "em",
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
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2023-09-20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 장치 연결 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BioStation 2a"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "템플릿 온 모바일"
          }), " 기능 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BioStation 3 펌웨어 1.2.0 이상"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CoreStation에 U&Z 무선 도어락 연결 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "커스텀 스마트 카드 레이아웃"
          }), " 지원"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "XPass D2 펌웨어 1.7.1 이상"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "스마트 카드 레이아웃"
          }), " 설정 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 상세 페이지의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "관리자"
          }), " 메뉴 UI 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "액티브 디렉토리"
          }), " 메뉴의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2 로그인에 사용"
          }), " 설정 메뉴 UX 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OpenSSL 버전 업그레이드"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OpenJDK 업데이트"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL Injection 보안 취약점 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "액티브 디렉토리"
          }), " 계정 설정 보안 취약점 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "액티브 디렉토리"
          }), " 로그인과 BioStar 2 로그인에 사용되는 ID 저장소 분리"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비디오 패키지 내 보안 취약점 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자가 잘못된 비밀번호로 로그인을 시도하여 설정된 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "비밀번호 최대 실패 허용 횟수"
          }), "를 초과했을 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "감사 추적"
          }), "이 기록되도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그인 ID"
          }), "를 최초 관리자의 기본값 ID인 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), "로 수정할 수 없도록 개선"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["BioStar 2 v2.9.4로 업그레이드 후에는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "로그인 ID"
            }), "가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "1"
              })
            }), "로 설정된 관리자 계정으로는 더 이상 접속할 수 없습니다."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 그룹"
          }), " 동기화 성능 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 자동 동기화"
          }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "특정 장치(해당하는 출입 그룹에 속한 장치만 동기화)"
          }), " 모드 사용 시 성능 개선"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "출입 그룹"
              }), " 수정 속도 개선"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["장치 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "일괄 편집"
              }), " 시 속도 개선"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "출입 등급"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "층 등급"
              }), " 생성 속도 개선"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "출입문"
              }), " 수정 및 삭제 속도 개선"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치와 서버가 재연결될 때 동기화 성능 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "방문자"
          }), " 메뉴에서 사용자 검색 속도 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "보안 크리덴셜 카드"
          }), " 발급 시 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "카드 ID"
          }), "에 0으로 시작하는 숫자가 입력된 경우 발급되지 않도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치에 설정된 스마트 카드 레이아웃이 BioStar 2에 없는 경우 장치 초기화 안내 메시지가 표시되지 않도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치에서 5회 이상 비정상적인 이벤트 로그를 서버에 전달하게되면 서버에서 더 이상 로그를 요청하지 않도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "개인 정보 DB 암호화"
          }), " 기능을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "사용 안 함"
          }), "으로 설정하여 복호화 진행 시 중복된 사용자 ID 또는 로그인 ID를 확인하는 과정 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "포트 메뉴에서 지원하지 않는 포트 삭제"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "리포트 클라우드 포트"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 추가 및 수정 시 사용자 이름에 지원하지 않는 문자가 포함되어 있는 경우 나타나는 오류 팝업 메시지에 지원하는 특수문자를 표시하여 알기쉽도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Airfob Portal에서 휴면 상태인 계정이나 추가 인증 모드를 사용 중인 계정을 BioStar 2에서 모바일 출입카드에 연결할 경우 표시되는 오류 메시지 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "모바일 출입 카드"
          }), " 메뉴에서 연결이 해제된 장치를 삭제하려고 할 경우 표시되는 오류 메시지 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일부 장치 이름 표기 변경"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Xpass 2 → XPass 2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Xpass D2 → XPass D2"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "비주얼 페이스 모바일 등록 링크"
          }), " 메일의 일본어 문구 개선"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "모니터링"
            }), " 메뉴의 일부 목록에서 PDF 인쇄 시 서버가 멈추는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 QR"
            }), "을 발급한 후 저장하여도 이메일이 오지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.11"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 장치 연결 시, 설정해놓은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 키"
            }), "가 간헐적으로 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 로그"
            }), "에 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "출입 통제"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "출입 그룹"
            }), "을 검색하고 목록에 나타난 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "출입 그룹"
            }), "의 상세 화면으로 진입하여 페이지 이동 버튼을 눌렀을 때 검색된 목록 내에서 이동되지 않고 전체 출입 그룹 목록에서 이동되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.3.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["등록된 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "그래픽 맵"
            }), "에서 갱신된 출입문 릴레이 상태를 불러오지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["API를 이용하여 사용자 생성 시 다른 사용자가 사용 중인 카드를 할당하면 카드 중복되어 사용자 생성에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "화재 경보 구역"
            }), "을 추가할 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "모드"
            }), "를 반복적으로 변경하면 정상적으로 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.6.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["커스텀 권한 관리자로 접속했을 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "실시간 로그"
            }), "에서 필터링이 설정한대로 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.6.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에서 로그아웃하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "로그인이 필요합니다."
            }), " 팝업이 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "시스템 보안"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "비밀번호 변경 주기"
            }), "를 활성화하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "액티브 디렉토리"
            }), " 계정으로 로그인이 되지않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CSV 불러오기"
            }), "를 이용하여 1000명 이상의 사용자를 생성하면 간헐적으로 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CSV 불러오기"
            }), "를 사용하여 잘못된 사용자 ID 생성이 가능한 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["AoC(Access on Card)가 발급된 사용자에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSV 불러오기"
            }), "로 사용자 정보를 덮어쓰기하여 변경한 경우 AoC 정보가 삭제되지만 블랙리스트에 추가되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.3.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["마스터-슬레이브-Wiegand 리더로 연결된 상태에서 특정 장치 그룹의 권한을 가진 사용자가 이벤트 로그 조회 시 Wiegand 리더의 동작 로그가 조회되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.6.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 언어의 리소스 파일을 추가하고 언어 설정을 해당 언어로 변경해도 해당 언어로 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioEntry W2 장치 추가 시 간헐적으로 로그아웃 되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MSSQL을 사용하는 환경에서 1000대 이상의 장치를 전체 삭제할 경우 삭제되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MSSQL을 사용하는 환경에서 사용자 검색이 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이벤트 검색 API 호출 시 필수 파라미터를 채우지 않고 호출 했을 때 로그아웃되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "서버 매칭"
            }), "을 사용하는 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSN Mobile"
            }), " 카드로 인증이 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["AoC(Access on Card) 스마트 카드 쓰기 실패 시 블랙리스트로 추가되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["암복호화 실행 시 서버가 정상적으로 종료되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "액티브 디렉토리"
            }), " 메뉴의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 로그인에 사용"
            }), "이 활성화된 상태에서 사용자의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "권한 등급"
            }), "을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "없음"
            }), "으로 설정하면 로그인 ID 정보가 삭제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "액티브 디렉토리"
            }), " 메뉴의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 로그인에 사용"
            }), "이 활성화된 상태에서 숫자로 시작되는 사용자 ID로 로그인하면 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.16"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["FaceStation F2 펌웨어 2.x.x 버전에서 사용자를 USB에 내보내기 한 후 BioStar 2에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "데이터 파일 가져오기"
            }), " 진행 시 비주얼 페이스가 업로드되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.10"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["FaceStation F2 펌웨어 1.x.x 버전에서는 BioStar 2에서 더 이상 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "데이터 파일 내보내기"
              }), "를 지원하지 않습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "데이터 파일 내보내기"
              }), "를 사용하려면 장치 펌웨어를 업그레이드하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "모바일 출입 카드 설정"
            }), "을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용 안 함"
            }), "으로 설정한 후 모바일 카드가 등록된 사용자를 삭제할 경우 불필요한 오류 팝업이 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "/api/users/data_export?id=*"
            }), "를 사용하여 API 호출 시 id에 입력된 사용자가 서버에 존재하지 않는 경우 서버가 종료되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.10"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["API로 CSN 카드 발급 시 유효하지 않은 CARD_ID로 발급이 가능한 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "CARD_ID가 숫자 외의 값을 포함하는 경우"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "CARD_ID가 32자를 초과하는 경우"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "CARD_ID가 0으로 시작하는 경우"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["DE-620과 카드의 기본 키를 사용하여 스마트 카드를 발급할 때 카드에 잘못된 키가 쓰여지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.14"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "비디오"
            }), "를 사용하는 환경에서 BioStar 2를 업그레이드한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 로그"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "비디오 로그"
            }), "가 보이지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar Setting"
            }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test Connection"
            }), " 버튼을 클릭하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar Setting"
            }), "이 종료되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "리포트"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 상세 정보"
            }), " 리포트 생성 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 그룹"
            }), "이 선택되어있는 사용자가 있을 경우 오류가 발생하는 문제", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2를 D드라이브에 설치하면 리포트 서비스가 시작되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.9.3"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["모바일 카드로 인증 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 로그"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "소집 구역"
            }), "의 인증 이벤트가 업데이트되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.8.6"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치를 선택하여 장치 상세페이지로 진입 시 간헐적으로 서버가 종료되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "발생 버전: v2.0.0"
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