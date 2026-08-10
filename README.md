# JJ비뇨기과 표재근막 보존 포경수술 안내 페이지

JJ비뇨기과 기존 홈페이지의 일반 진료 페이지에 들어가는 포경수술 본문입니다. 개인별 디자인, 표재근막 보존, 미세 봉합, PDRN 재생치료와 회복 안내를 중심으로 구성되어 있습니다.

이 프로젝트는 독립 랜딩페이지가 아닙니다. 실제 운영 시 병원 홈페이지의 공통 프레임을 유지합니다.

- 상단·모바일 전체 메뉴
- 서브페이지 카테고리 비주얼
- 로그인, 회원가입, 이벤트, 상담, 예약, 오시는 길 퀵바
- 하단 상담 신청 폼
- 병원 정보 및 푸터

## 확인 주소

- 검수 페이지: https://i8d8e8a8.github.io/jj-preservation-circumcision-page-preview/
- 실제 적용 주소: https://jj-man.co.kr/child/sub/surgery2/2.php

## 운영 적용 원칙

기존 `2.php` 파일 전체를 정적 HTML로 덮어쓰지 않습니다. 기존 PHP 페이지의 공통 프레임과 상담 기능을 보존하고, 본문 영역에서만 이 프로젝트의 정적 결과물을 불러옵니다.

구체적인 적용 방식은 [일반 페이지 통합 안내](server-integration/README.md)를 참고하세요.

## 주요 명령

```powershell
pnpm install
pnpm run dev
pnpm run build:pages
```

실제 홈페이지용 정적 파일은 다음 경로를 기준으로 빌드합니다.

```powershell
$env:STATIC_BASE_PATH='/child/sub/surgery2/circumcision-assets'
pnpm run build:pages
```

## 백업 범위

- 포경수술 안내 페이지 소스와 공개 이미지 자산
- GitHub Pages 검수 배포 설정
- 기존 홈페이지 프레임을 보존하는 운영 통합 자료
- 실제 홈페이지 정적 배포를 위한 `STATIC_BASE_PATH` 설정
- 진행 기록과 복구 안내
