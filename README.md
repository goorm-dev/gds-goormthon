# gds-goormthon

<br />

## Manual

#### npmrc 세팅

  1. [github personal access tokens](https://github.com/settings/tokens) 진입
  1. read package 권한 획득한 토큰 생성
  1. npmrc 편집
  ```shell
  # vim으로 npmrc 열기
  vim ~/.npmrc

  #`:` 명령행 모드 켜기
  #`i` insert 모드로 전환
  @goorm-dev:registry=https://npm.pkg.github.com/
  //npm.pkg.github.com/:_authToken=[권한 획득한 github 토큰]
  ```

<br/>

#### 패키지 설치

  1. CRA인 경우
  ```shell
  npx create-react-app goormthon-test
  cd goormthon-test && npm install reactstrap @goorm-dev/gds-goormthon
  ```


  2. 프레임워크 또는 자체 세팅이 완료된 경우
  ```shell
  npm install reactstrap @goorm-dev/gds-goormthon
  ```



<br />

## Use

1. Goormstrap 불러오기 (with CDN URL)
  ```html
  <head>
    <link
      rel="stylesheet"
      href="https://statics.goorm.io/css/goormstrap.v4.min.css"
    />
  </head>
  ```



2. Components import
  ```jsx
  import { Alert, UncontrolledAlert } from "@goorm-dev/gds-goormthon";
  ```


3. Icons import
  ```jsx
  import { ActivityIcon, CheckCircleIcon } from "@goorm-dev/gds-goormthon";

  //...

  <ActivityIcon width="1rem" className="ActivityIcon__icon" />; // svg와 동일
  ```



4. Color Token
  ```css
  .element {
    background-color: var(--red-100);
    color: var(--gray-500);
  }
  ```

<br />

## About

- [github](https://github.com/goorm-dev/gds-goormthon)
- [@goorm-dev](https://github.com/goorm-dev)
