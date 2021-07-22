# WhyDoThat-career/front

프로그래머스, 원티드, 잡플래닛 등 웹페이지에 흩어져있는 개발자 구인구직 정보를 한 곳에 모아줄 수 있는 사이트 프론트엔드.

- Link: https://whydothat.net

## 🛠️스택

- front
  - ReactJS
  - typescript
  - Storybook
  - AWS S3
- backend
  - python flask
  - kafka
  - docker
  - MySQL, mongoDB
  - Elastic search

## 🚧프로젝트 구조

CDD(Component-Driven Development) 기반의 프로젝트 Components 구조화.

tools : Storybook, Figma

- Page : 웹페이지 별 최상위 컴포넌트.
- Component : 웹사이트를 구성하는 컴포넌트 부속품.

```
📦src
 ┣ 📂api
 ┣ 📂app
 ┣ 📂components
 ┃ ┣ 📂article
 ┃ ┣ 📂button
 ┃ ┣ 📂card
 ┃ ┣ 📂chip
 ┃ ┣ 📂dropdown
 ┃ ┣ 📂input
 ┃ ┣ 📂modal
 ┃ ┣ 📂nav
 ┃ ┗ 📂select
 ┣ 📂interface
 ┣ 📂page
 ┣ 📂shared
 ┃ ┣ 📂resource
 ┃ ┗ 📂hooks
 ┣ 📂stories
 ┗ 📜index.tsx
```

## 🔑로그인 관리

로그인 및 회원가입 페이지는 reactStrap을 사용하여 modal로 구현하였음.

email input을 입력 할 시, checkEmail api를 요청하여 DB와 비교.

--

## 인터페이스

채용 공고 페이지에 표시되는 정보

```jsx
{

  salary : *연봉 정보*,

  href : *채용 공고 페이지*,

  id: *DB에서 id값*,

  crawl_date: *크롤링한 시간*,

  big_company : *대기업 여부*,

  company_address : *기업 주소*,

  deadline : *마감일*,

  newbie : *신입 가능 여부*,

  skill_tag : *공고에 명시된 스킬 리스트*,

  main_text : *HTML 데이터*,

  title : *공고 제목*,

  platform : *플랫폼 이름*,

  logo_image : *로고이미지 url*,

  company_name : *기업명*,

  career : *경력 여부*,

  sector : *직군*}
```
