"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["6563"], {
"3637": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_2816_mdx_7b2_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-2816-mdx-7b2.json
var site_docs_revision_2816_mdx_7b2_namespaceObject = JSON.parse('{"id":"revision/2816","title":"버전 2.8.16 (v2.8.16.56)","description":"버전 2.8.16 (v2.8.16.56)","source":"@site/docs/revision/2816.mdx","sourceDirName":"revision","slug":"/revision/2816","permalink":"/biostar2-docs/en/revision/2816","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"2816","title":"버전 2.8.16 (v2.8.16.56)","description":"버전 2.8.16 (v2.8.16.56)","isTranslationMissing":true},"sidebar":"biostar","previous":{"title":"버전 2.8.17 (v2.8.17.62)","permalink":"/biostar2-docs/en/revision/2817"},"next":{"title":"버전 2.8.15 (v2.8.15.12)","permalink":"/biostar2-docs/en/revision/2815"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/revision/2816.mdx


const frontMatter = {
	id: 2816,
	title: '버전 2.8.16 (v2.8.16.56)',
	description: '버전 2.8.16 (v2.8.16.56)',
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "릴리즈",
  "id": "릴리즈",
  "level": 3
}, {
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
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h3, {
      id: "릴리즈",
      children: "릴리즈"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2022-04-13"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "대시 보드에 비주얼 페이스 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비주얼 페이스 모바일 등록 페이지 UI 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비주얼 페이스 모바일 등록 요청 메일에 바닥글 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "QR/바코드 발급 시 사용자 ID를 카드 ID로 사용할 수 있는 옵션 삭제"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 QR로 QR/바코드 발급 시 이미지 크기를 변경하여 선명도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Wiegand 카드 ID를 0으로 시작할 수 없는 제약 수정"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "첫 번째 필드에 0을 입력할 수 있도록 허용"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "네 개의 필드 데이터를 모두 0으로만 구성할 수 없도록 제약"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CSV 불러오기에 실패한 사용자 목록 파일(User_Import_Error)에 실패 사유 열 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 정의 설치 시 AC, TA, VE 서비스가 동일한 데이터베이스 이름을 사용하지 못하도록 체크하는 로직 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 설치 시 포함된 크롬(Chrome)을 75버전으로 변경"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "USB Device Agent 보안 취약점 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비디오 보안 취약점 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "데이터베이스 암복호화 시 TA, VE 데이터베이스에 동일한 테이블 이름이 존재할 경우 스키마명까지 확인하여 올바른 결과 값을 조회하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "미할당 카드 삭제 옵션 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "퇴실 버튼 입력에 대한 릴레이 비활성 옵션 추가"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "퇴실 버튼 입력 시 출입문 열림 요청 로그는 발생하지만 릴레이는 동작하지 않도록 설정할 수 있는 옵션 지원"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입문 개방 사유 관련 로그 분리"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "퇴실 버튼에 의한 출입문 개방 요청"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "관리자에 의한 출입문 개방 요청"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "스마트 카드 출력 바이트 순서 설정 추가"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wiegand 또는 OSDP로 출력되는 데이터 값에 대해 바이트 순서를 설정할 수 있도록 지원"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "setting.config 파일 초기화 로직 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 출입카드 발급 시 사용자의 전화번호가 Airfob Portal의 허용 범위를 벗어날 경우 포털로 전송하지 않도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "클라우드 이용 시 개인 정보 수집 및 이용 동의 확인 절차 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문 이중 인증 설정에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 장치"
          }), " 옵션 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "재실 인원 제한 구역 모니터링 페이지를 모니터링 장치 화면 해상도에 맞게 출력하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CoreStation의 슬레이브 장치로 X-Station 2를 연결할 수 있도록 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "얼굴 크리덴셜 미리보기 숨기기 옵션 추가"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "개인 정보 보호를 위해 서버에 등록된 사용자의 얼굴 정보 미리보기 화면을 숨길 수 있도록 지원"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카드를 QR로 인증하기 옵션 추가"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "장치에서 스캔한 QR 데이터가 사용자에게 발급한 카드 데이터와 동일할 경우의 인증 허용 여부를 선택할 수 있도록 지원"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "액티브 디렉토리 계정으로 BioStar 2에 로그인할 수 있도록 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "LCD 화면이 없는 장치로 사용자 데이터를 전송할 때 데이터에 사용자 이름을 포함하도록 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "적용 장치: CoreStation, BioEntry W2, BioEntry P2, XPass 2"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "독일어, 프랑스어 리소스 파일 업데이트"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "연결이 끊긴 슬레이브 장치를 선택해 상세 페이지에 진입 시 화면이 비정상적으로 출력되는 문제 (발생 버전: v2.8.6)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "POST/api/users의 photo 값에 대한 설명이 binaryDatas로 잘못 기재된 문제 (발생 버전: v2.7.12)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "6개월 이상 장기 미출입 사용자를 조회할 때 해당 사용자의 마지막 인증 기록이 표시되지 않는 문제 (발생 버전: v2.5.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FaceStation 2에서 화면 보호기 사용 여부 선택 옵션을 펌웨어 1.5.0 버전 이상에서부터 지원함에도, 이하 버전 장치의 상세 페이지에도 해당 옵션이 표시되는 문제 (발생 버전: v2.8.10)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "조지아어로 설정한 권한 등급 이름이 감사 추적 메뉴에서 물음표로 표시되는 문제 (발생 버전: v2.7.6)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioEntry W2 (BEW2-OHP) 장치의 CSN 카드, 스마트 카드, 모바일 카드 활성화 설정이 저장되지 않는 문제 (발생 버전: v2.7.6)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL Server 데이터베이스를 사용하는 환경에서 CoreStation의 슬레이브 장치로 추가된 Output Module(OM-120)을 삭제할 경우 장치 목록이 조회되지 않는 문제 (발생 버전: v2.8.12)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "복호화 환경에서 암호화 마이그레이션에 실패하는 문제 (발생 버전: v2.8.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "간헐적으로 비주얼 페이스 데이터가 다른 장치에 동기화되지 않는 문제 (발생 버전: v2.8.6)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치의 사용자 관리에서 사용자를 삭제할 경우 동기화 테이블의 다른 정보까지 삭제되어 동기화에 실패하는 문제 (발생 버전: v2.4.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 장치(장치 사용자 변경 포함)"
          }), " 사용자 자동 동기화 시 커스텀 사용자 필드를 사용 중인 사용자는 업데이트되지 않는 문제 (발생 버전: v2.8.0)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["경보 설정을 변경하면 감사 추적의 변경 대상이 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "eventType.번호"
          }), " 형식으로 출력되는 문제 (발생 버전: v2.8.9)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Airfob Portal 연결 시 알 수 없는 오류 메시지가 표시되며 연결에 실패하는 문제 (발생 버전: v2.7.12)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "전체 권한이 설정된 장치에 출입 등급을 설정할 수 있는 문제 (발생 버전: v2.4.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "릴레이를 설정하지 않으면 출입문을 생성할 수 없으나, 기존에 생성된 출입문은 릴레이 설정 없이 저장되는 문제 (발생 버전: v2.5.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "실시간 로그에 기록된 로그가 이벤트 로그에서는 조회되지 않는 문제 (발생 버전: v2.8.4)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "온도 측정 오류 팝업 메시지에 사용자 ID만 표시되고 이름은 출력되지 않는 문제 (발생 버전: v2.8.11)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일광 절약 시간(DST) 설정이 이미지 로그 시간 정보에 반영되지 않는 문제 (발생 버전: v2.0.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서브도메인을 사용할 경우 비디오 메뉴에 접속할 수 없는 문제 (발생 버전: v2.6.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치에서 추가된 사용자를 동기화할 경우 사용자 그룹의 카운트는 업데이트되지 않는 문제 (발생 버전: v2.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "아래와 같은 조건으로 안티패스백 구역을 구성한 장치를 소집 구역으로 중복 구성할 경우 정상 인증에 대해서도 안티패스백 위반 경보가 발생하는 문제"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "안티패스백 구역의 입실 장치를 소집 구역의 퇴실 장치로 구성하고, 안티패스백 구역의 퇴실 장치를 소집 구역의 입실 장치로 설정"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 홈 화면 로고 및 슬라이드 쇼 설정 시 이미지가 장치 화면의 해상도에 맞춰 리사이징되지 않아 화면이 깨져 보이는 문제 (발생 버전: v2.6.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "개인 정보 DB 암호화를 사용할 때 액티브 디렉토리에서 사용자 정보를 편집한 뒤 동기화하면 변경 내용이 동기화되지 않는 문제 (발생 버전: v2.8.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "소집 구역 및 인터락 구역에 알람을 설정할 때 장치 수가 많을 경우 알람 추가 화면에 장치 목록 전체가 표시되는 문제 (발생 버전: v2.6.0)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "목록을 스크롤 형식으로 변경"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "언어를 일본어로 설정했을 때 이벤트 로그를 CSV 파일로 내보내면 파일 내 텍스트가 영어로 출력되는 문제 (발생 버전: v2.8.9)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 상세 페이지에 진입한 상태에서 장치 연결이 끊어졌을 때 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "확인"
          }), " 버튼을 클릭하면 상황과 무관한 오류 메시지가 표시되는 문제 (발생 버전: v2.7.10)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "장치가 연결되지 않았음을 알리는 메시지를 표시하도록 개선"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "라이선스에서 지원하는 개수를 초과하여 출입문을 생성할 때 오류 메시지가 표시되지 않는 문제 (발생 버전: v2.8.3)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["API를 이용해 사용자 정보를 업데이트할 때 기존과 동일한 이메일을 유지할 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "E-mail already exists"
          }), " 메시지가 반환되는 문제 (발생 버전: v2.0.1)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "비주얼 페이스 추출 실패"
          }), " 이벤트가 이벤트 로그 필터로 조회되지 않는 문제 (발생 버전: v2.8.10)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 정보의 부서, 직함 입력 시 특수 문자 사용을 지원하지 않음에도 API로는 특수 문자를 입력할 수 있는 문제 (발생 버전: v2.8.9)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "커스텀 사용자 필드가 존재할 경우 CSV 불러오기 후 사용자 상세 페이지에서 설정 변경 없이 확인을 클릭해도 동기화가 진행되는 문제 (발생 버전: v2.8.12)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "QR/바코드를 발급한 사용자의 이름에 일부 기호(-)를 입력할 수 없는 문제 (발생 버전: v2.8.11)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비주얼 페이스 모바일 등록 페이지에 불필요한 날짜가 표시되는 문제 (발생 버전: v2.8.11)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "액티브 디렉토리에서 동기화를 진행해도 마지막 동기화 시간, 마지막 업데이트 시간이 표시되지 않는 문제 (발생 버전: v2.7.11)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모바일 출입카드가 설정된 상태에서 모바일 출입카드 설정 화면의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "연결"
          }), " 버튼을 클릭하면 오류 메시지가 표시되는 문제 (발생 버전: v2.8.14)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "최선 버전 크롬(Chrome 98)을 사용하는 환경에서 USB 지문 등록용 장치(BioMini)로 지문을 등록할 때 지문 스캔 요청이 2회 동작하는 문제 (발생 버전: v2.0.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 관리를 지원하지 않는 장치 상세 페이지에 근태 관리 관련 설정이 표시되는 문제 (발생 버전: v2.8.14)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일부 근태 보고서를 2페이지 이상 PDF 내보내기 할 경우 기능이 정상적으로 동작하지 않는 문제 (발생 버전: v2.8.14)"
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