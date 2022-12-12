# Github.gg Project

[Link to github.gg](https://d3c97fi8gf3kcj.cloudfront.net/)

## 프로젝트

### 깃허브 유저 정보 검색 서비스 🔍

## Description

깃허브지지는 깃허브에 등록되어있는 유저를 검색하여 원하는 정보를 빠르게 확인할 수 있습니다.

또한, 선택한 유저의 레포지토리 설명과 사용 언어를 차트로 시각화하여 보여줍니다.

이 프로젝트는 기존 깃허브의 유저 검색 기능을 조금 더 가볍고 빠르게 이용하고자 개발되었습니다.

[이렇게 개발했어요.(Link to Notion)]()

## 주요 기능

- 깃허브에 등록되어있는 유저 검색 기능
- 검색 자동완성 & 최근 검색어/유저 저장 기능
- 유저 별 레포지토리 조회
- 레포지토리 설명, 토픽, 사용 언어 분석 차트 조회
- 유저 북마크 기능

## 실행 방법

1. .env 환경 변수 설정 (git api access token)

```bash
REACT_APP_TOKEN=YOUR_TOKEN
```

2. project start

```bash
npm install

npm start
```

## 폴더 구조

```bash
📦 src
┣ 📂 assets
┃ ┗ 📂 images
┣ 📂 components /- 공통 컴포넌트
┣ 📂 feature /- 기능 단위 컴포넌트
┃ ┣ 📂 SearchForm
┃ ┃ ┣ 📂 api /- api 호출 react query hooks
┃ ┃ ┣ 📂 components /- 컴포넌트
┃ ┃ ┃ ┃ 📂 __test__ /- 테스트 코드
┃ ┃ ┃ ┃ 📜 SearchFormContainer.tsx /- 컨테이너 컴포넌트
┃ ┃ ┃ ┗ ...
┃ ┃ ┗ 📂 hooks /- 커스텀 훅
┃ ┃   ┃ 📂 __test__ /- 테스트 코드
┃ ┃   ┃ 📜 useSearchQuery.tsx /- 커스텀 훅
┃ ┃   ┗ ...
┃ ┗ ...
┣ 📂 layouts /- 레이아웃 컴포넌트
┣ 📂 lib /- 커스텀 라이브러리
┃ ┗ 📜 axios.ts /- axios 인스턴스
┣ 📂 pages /- 페이지 컴포넌트
┣ 📂 store /- recoil atom 저장소
┣ 📂 styles /- 공통 styled-components
┣ 📂 types /- 공용 타입
┣ 📂 utils /- 로직 분리
┃ ┣ 📂 hooks /- 공통 커스텀 훅
┃ ┃ ┃ 📂 __test__ /- 테스트 코드
┃ ┃ ┃ 📜 useToggle.tsx /- 커스텀 훅
┃ ┃ ┗ ...
┃ ┣ 📂 services /- api 서비스
┃ ┣ 📂 models /- react query key
┃ ┗ 📂 common /- 공통 함수 및 상수
┣ 📜 App.tsx
┣ 📜 Router.tsx
┗ 📜 index.tsx
```

## 라이브러리

<p align="center">
  <img src="https://img.shields.io/badge/react-v18.2.0-61DAFB">
  <img src="https://img.shields.io/badge/typescript-v4.8.4-3178C6">
  <img src="https://img.shields.io/badge/axios-v1.1.3-black"/>
  <img src="https://img.shields.io/badge/recoil-v0.7.6-blue">
  <img src="https://img.shields.io/badge/react query-v4.16.1-red">
  <img src="https://img.shields.io/badge/styled_components-v4.8.4-FF69B4">
</p>
