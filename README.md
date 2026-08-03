# JJ비뇨기과 표재근막 보존 포경수술 랜딩페이지

JJ비뇨기과의 포경수술 안내 페이지를 위한 Next.js 기반 랜딩페이지입니다. 개인별 디자인, 표재근막 보존, 미세 봉합, PDRN 재생치료와 회복 안내를 중심으로 구성되어 있습니다.

## 확인 주소

- 검수 페이지: https://i8d8e8a8.github.io/jj-preservation-circumcision-preview/
- 실제 적용 주소: https://jj-man.co.kr/child/sub/surgery2/2.php

## 주요 명령

```powershell
pnpm install
pnpm run dev
pnpm run build:pages
```

실제 홈페이지용 정적 파일을 만들 때는 다음 경로를 사용합니다.

```powershell
$env:STATIC_BASE_PATH='/child/sub/surgery2/circumcision-assets'
pnpm run build:pages
```

## 백업 범위

- 페이지 소스와 공개 이미지 자산
- GitHub Pages 검수 배포 설정
- 실제 홈페이지 정적 배포를 위한 `STATIC_BASE_PATH` 설정
- 최종 FileZilla 운영 적용 ZIP
- 최신 외부 플랫폼 전달용 ZIP
- 진행 기록과 복구 안내

임시 렌더, 중간 생성 이미지, 폐기된 배포 패키지와 다른 랜딩페이지 작업물은 저장소 크기와 혼선을 줄이기 위해 제외합니다.

자세한 현황은 [현재 진행상황 문서](docs/현재_진행상황_2026-08-03.md)를 참고하세요.
