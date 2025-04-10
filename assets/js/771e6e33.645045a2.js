"use strict";
(self['webpackChunkBioStar2_Docs'] = self['webpackChunkBioStar2_Docs'] || []).push([["3484"], {
"3163": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_revision_2814_mdx_771_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-revision-2814-mdx-771.json
var site_docs_revision_2814_mdx_771_namespaceObject = JSON.parse('{"id":"revision/2814","title":"버전 2.8.14 (v2.8.14.74)","description":"버전 2.8.14 (v2.8.14.74)","source":"@site/docs/revision/2814.mdx","sourceDirName":"revision","slug":"/revision/2814","permalink":"/biostar2-docs/revision/2814","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"2814","title":"버전 2.8.14 (v2.8.14.74)","description":"버전 2.8.14 (v2.8.14.74)","isTranslationMissing":false},"sidebar":"biostar","previous":{"title":"버전 2.8.15 (v2.8.15.12)","permalink":"/biostar2-docs/revision/2815"},"next":{"title":"버전 2.8.13 (v2.8.13.22)","permalink":"/biostar2-docs/revision/2813"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/revision/2814.mdx


const frontMatter = {
	id: 2814,
	title: '버전 2.8.14 (v2.8.14.74)',
	description: '버전 2.8.14 (v2.8.14.74)',
	isTranslationMissing: false
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
    code: "code",
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
      children: "2021-12-15"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 장치 연결 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Input Module (IM-120)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CoreStation에 대한 얼굴 1", ":N", " 보안 등급 설정 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OpenJDK 적용"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BioStar 2 버전 2.8.14에서부터 OpenJDK가 적용되어 PC에 설치된 Java 버전에 관계없이 BioStar 2를 사용할 수 있습니다."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 열 설정에 부서, 직함, 전화번호 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CSV 불러오기 시 PIN도 입력 및 수정할 수 있도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API 호출 시 불필요한 사용자 정보는 조회하지 않도록 변경하여 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API를 이용한 장치 검색 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 자동 동기화 성능 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "동기화 시 사용하는 데이터베이스 열에 누락된 인덱스 추가"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "모든 장치"
              }), " 사용자 자동 동기화 속도 개선 및 동기화 동작하지 않는 오류 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "특정 장치"
              }), " 사용자 자동 동기화 속도 개선"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "특정 장치"
              }), " 사용자 자동 동기화 시 변경 사항을 벌크 단위로 전송하도록 개선"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "특정 장치"
              }), " 사용자 자동 동기화 실패 후 재시도 시 null 값에 대한 예외 처리 추가"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "보안 취약점 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Log4j 2 2.16.0 버전 적용"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "OpenSSL 1.1.1k 버전 적용"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "jQuery 3.4.1 버전 적용"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "API를 이용한 접근 시에도 사용자 권한 등급 및 커스텀 권한을 체크하도록 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "CSV 내보내기 한 파일에 수식 기호( = )가 포함되어 있을 경우 파일을 실행하면 수식이 적용되는 문제 수정"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "웹 소켓 연결 시 세션 ID에 대한 보안 체크 및 CORS 체크를 수행하도록 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SQL Injection 공격 방어"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "서버 상태 응답 오류가 발생할 경우 오류 메시지(오류 이름, http 오류 코드, 오류 설명)가 표시되도록 개선"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Swagger 내 API 보강"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "장치 작업 조건 및 동작 API 설명 보강"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "비주얼 페이스 이미지 업로드 API 추가"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["[POST] /devices/", (0,jsx_runtime.jsx)(_components.code, {
                children: "{id}"
              }), " /users 또는 [POST] /api/users/export를 사용하여 장치에 사용자를 추가할 때 반환되는 결과 값과 달리 실제 장치에는 사용자가 추가되지 않는 문제 수정"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이벤트 로그 처리 성능 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "MS SQL Server 데이터베이스 환경의 이벤트 로그 조회 속도 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "장치 이벤트 로그 생성 시 데이터베이스 처리 속도 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "장치 로그 데이터 동기화 시 데이터베이스에 변경 사항이 있는 장치만 갱신되도록 수정"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다수의 장치가 연결된 BioStar 2 서버 재기동 시 장치 메뉴 화면 진입 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 연결 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 스레드 기본 개수를 늘려 장치 연동 처리 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "불필요한 체크 로직을 삭제하여 모니터링 메뉴 진입 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "불필요한 코드를 삭제하여 출입 그룹 연동 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "블랙리스트 카드 동기화 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "데이터베이스 데이터 처리 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서버 성능 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "C서버와 Java 서버간 통신 시 클라이언트 포트를 매번 재할당하지 않고 기존 연결을 유지하도록 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "C 서버에서 로그 레벨에 따라 불필요한 함수가 호출되지 않도록 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Java 서버에서 개인 정보 암호화를 위한 개체를 매번 재할당하지 않고 재사용하도록 개선"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API를 이용한 등록 가능 장치 조회 속도 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 1.x to BioStar 2.x Migration Tool에 26 bit Wiegand 카드 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2 설치 시 데이터베이스 접속 여부를 반드시 확인한 뒤 설치가 진행되도록 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["사용자 정의 설치 절차에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "접속 여부 확인"
            }), " 옵션 삭제"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Swagger 문서를 서버 주소 없이 로컬에서도 실행할 수 있도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입문 장시간 열림 기본 값 변경"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "기존: 3초"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "변경: 10초"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OM-120 장치 아이콘 변경"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "X-Station 2 지문 모델(XS2-ODPB, XS2-OAPB)이 화면 보호기 기능을 지원함에도 설정 화면에 해당 기능이 표시되지 않는 문제 (발생 버전: v2.8.12)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "특정 장치"
          }), " 사용자 자동 동기화 옵션 사용 시 사용자 ID에 일부 기호(_)가 포함되어 있을 경우 동기화되지 않는 문제 (발생 버전: v2.7.11)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "특정 장치"
          }), " 사용자 자동 동기화 옵션 사용 시 스마트 카드 쓰기를 진행할 경우 동기화 로직이 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 장치"
          }), "로 동작하는 문제 (발생 버전: v2.7.11)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 추가 화면의 정보 입력 필드에 크롬 자동 완성 기능이 잘못 매핑되는 문제 (발생 버전: v2.7.8)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MS SQL Server 데이터베이스를 사용하는 경우 감사 추적에서 일부 언어가 물음표로 표시되는 문제 (발생 버전: v2.7.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비주얼 페이스를 사용자 프로필 이미지로 사용할 경우 해당 이미지가 프로필 이미지 허용 크기를 초과하여 장치에 동기화되지 않는 문제 (발생 버전: v2.8.6)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["FaceStation F2에서 퓨전 매칭 모드를 해제 후 재설정할 경우 위조 얼굴 검출이 기본 값(다소 강함)이 아닌 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "보통"
          }), " 옵션으로 설정되는 문제 (발생 버전: v2.6.0)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FaceStation F2의 홈 화면으로 로고 이미지를 설정할 때 이미지가 장치에 맞는 해상도로 적용되지 않는 문제 (발생 버전: v2.8.6)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "장치에서 서버 연결"
          }), "을 사용할 때 서버 주소에 대문자를 입력할 수 없는 문제 (발생 버전: v2.7.0)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 보고서에서 커스텀 사용자 필드 데이터가 반영되지 않는 문제 (발생 버전: v2.8.3)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API를 이용해 스마트 카드 레이아웃을 가져올 때 키 값이 노출되는 문제 수정 (발생 버전: v2.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서버가 간헐적으로 충돌하는 문제"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 그룹 캐시 생성 시 데이터베이스를 조회하지 못한 경우 C 서버 충돌 발생 (발생 버전: v2.0)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "serviceTask JsonResult에 Lock 처리 누락 (발생 버전: v2.0)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이전에 크리덴셜 등록 시 사용했던 장치를 삭제하였음에도 크리덴셜 등록 장치 목록에 해당 장치가 표시되는 문제 (발생 버전: v2.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar 2를 신규로 설치한 뒤 실행하였을 때 로그인 화면이 아닌 마이그레이션 화면이 실행되는 문제 (발생 버전: v2.4.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["카드만 지원하는 장치를 선택해 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "장치의 사용자 관리"
          }), "를 실행하면 지문이 등록된 사용자의 상태가 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "정보가 다름"
          }), "으로 표시되는 문제 (발생 버전: v2.0)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이메일 설정에서 유니코드가 적용된 언어로 이메일 제목을 입력할 경우 설정한 SMTP 서버에 따라 이메일 제목의 텍스트가 깨진 상태로 전송되는 문제 (발생 버전: v2.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "백업된 로그 테이블을 복구할 때 로그 테이블 인덱스와 현재 로그 테이블이 상이하여 매칭이 안 될 경우 테이블 생성에 실패하는 문제 (발생 버전: v2.7.11)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CoreStation의 작업 조건 및 동작 설정에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "신호 입력"
          }), "(", (0,jsx_runtime.jsx)(_components.strong, {
            children: "이벤트 이름 변경"
          }), ")을 선택해 10개 이상의 이벤트를 생성할 경우 설정한 대로 동작하지 않는 문제 (발생 버전: v2.8.8)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "브라우저의 Local storage language에 BioStar 2에서 지원하지 않는 언어가 있을 경우 BioStar 2 로그인 페이지에 진입할 수 없는 문제 (발생 버전: v2.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 그룹 생성 시 브라우저에서 오류 코드 발생하며 사용자 그룹이 생성되지 않는 문제 (발생 버전: v2.7.14)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서버 매칭을 사용하고, FaceStation 2의 인증 모드를 카드+얼굴로 설정한 경우 카드 인증 후 얼굴 인증 모드가 동작하지 않는 문제 (발생 버전: v2.8.6)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "본 수정은 1.5.1 버전 이상의 펌웨어가 설치된 장치에 적용됩니다."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 장치"
          }), " 사용자 자동 동기화 시 간헐적으로 출입 그룹, 출입문 동기화 결과가 갱신되지 않는 문제 (발생 버전: v2.0)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 자동 동기화 시 데이터의 양이 많을 경우 장치 연결이 끊어지는 문제 (발생 버전: v2.0)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API를 이용해 사용자 추가 시 BioStar 2에서 지원하지 않는 값으로 사용자 ID 생성이 가능한 문제 (발생 버전: v2.8.1)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치의 작업 조건 및 동작 설정에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "신호 입력"
          }), "(", (0,jsx_runtime.jsx)(_components.strong, {
            children: "이벤트 이름 변경"
          }), ")을 선택해 이벤트 추가 시 등록된 이벤트가 많을 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "이벤트 이름 추가"
          }), " 버튼이 잘려 보이는 문제 (발생 버전: v2.0)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSV 불러오기로 사용자를 불러올 때 업데이트되지 않은 정보가 있는 경우에도 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "업로드 성공"
          }), " 메시지가 표시되는 문제 (발생 버전: v2.3.0)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "인텔리전트 슬레이브 기능을 지원하지 않는 장치에서 OSDP ID를 유효하지 않은 값으로 보내주는 경우 BioStar 2에서 해당 값을 0으로 초기화하면서 RS-485 설정이 업데이트되어 기존의 슬레이브 연결이 끊어지는 문제 (발생 버전: v2.8.10)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStation 2가 서버 매칭을 지원함에도 설정 화면에 해당 기능이 표시되지 않는 문제 (발생 버전: v2.2.2)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 데이터에 비정상적인 프로필 이미지가 있을 경우 정상적으로 장치에 동기화되지 않는 문제 (발생 버전: v2.8.0)"
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