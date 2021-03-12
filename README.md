# WhyDoThat-career/front

프로그래머스, 원티드, 잡플래닛 등 웹페이지에 흩어져있는 개발자 구인구직 정보를 한 곳에 모아줄 수 있는 사이트 프론트엔드.

## 🛠️스택

- front
  - ReactJS
  - typescript
  -
- backend
  - python flask
  - docker
  - MySQL
  -

## 🚧프로젝트 구조

CDD(Component-Driven Development) 기반의 프로젝트 Components 구조화.

- tools : Storybook, Figma

```
📦src
 ┣ 📂api // rest api 관련
 ┣ 📂app
 ┃ ┣ 📂components // 컴포넌트
 ┃ ┣ 📂contents // 조합 컴포넌트
 ┃ ┣ 📂page // 컴포넌트 레이아웃 주입
 ┃ ┣ 📂template // 프론트엔드 레이아웃
 ┃ ┣ 📂units // 가장 작은 컴포넌트 구성 단위
 ┃ ┗ 📜App.tsx // 어플리케이션 컴포넌트 집합체
 ┣ 📂interface
 ┣ 📂shared //공통 파일
 ┃ ┣ 📂lib // 비즈니스 로직 폴더
 ┃ ┃ ┣ 📂hooks // 커스텀 훅
 ┃ ┃ ┗ 📂util // 공용 로직
 ┃ ┗ 📂store // 상태관리 저장소
 ┣ 📜index.tsx
```
