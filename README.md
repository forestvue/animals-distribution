# animals-distribution

## 개요
싱글 페이지 어플리케이션은 일반적으로 동적 데이터가 필요할 때 별도의 API서버에서 데이터를 받아오는데요, Vue를 포함한 모든 SPA 프레임워크는 하나의 페이지에서 새로고침 없는 Ajax 데이터 통신을 이용합니다. 이 프로젝트에서 별도의 api서버를 구축하기 않고 Firebase Cloudstore를 이용한 데이터 엑세스를 구현하고자 합니다.

## 초보자 가이드
Visual Studio Code나 Webstorm IDE 사용을 적극 권장합니다.
저같은 경우 Webstorm에서 Vue 프로젝트 템플릿을 자동으로 생성해줍니다.
[프로젝트 예시](https://github.com/forestvue/vue-portfolio)

작업과정은 다음과 같습니다

1. 이 repository를 clone 한다.
2. repository 밑에 새로운 vue 프로젝트를 생성
3. 별도의 branch 생성 후 이 repository에 주기적으로 push
4. 과제를 완료하였을 경우 pull request
5. code review에 자신을 제외한 나머지 스터디원분들을 걸어준다.

## Todo(필수)
[Vue 공식 문서(한국어)](https://kr.vuejs.org/v2/guide/index.html)

[Firebase Cloudstore 공식문서](https://firebase.google.com/docs/firestore/quickstart?hl=ko)

1. Vue 프레임워크를 사용해 요청에 따라 페이지가 바뀌는 상황을 보여주시면 되겠습니다.
다음 url 요청에 따라 메인 페이지의 일부분이 바뀌는 모습을 구현.
 
   / - (메인 페이지)
  
   /dashboard - 모든 동물들의 리스트를 출력
   
   /dashboard/`:animal_type` - 특정 타입의 동물들의 리스트를 출력
   
   /`else url` - **나머지 경로 접근에 대해 경고 화면 출력**
   
2. 각 컴포넌트는 최소한 별도의 `<template></template>`을 가지고 있어야 합니다.


3. 사전에 초대드렸던 Firebase Cloudstore에서 데이터를 가져옵니다. [프로젝트 바로가기](https://console.firebase.google.com/project/forestvue-8424e)


4. 모든 데이터 리스트는 `v-for`를 이용해서 출력되어야 합니다.

  
## Todo(옵션)
동물의 타입에 따라 `v-if` 및 `computed` 속성을 이용해서 다른 종류의 css 속성 입히기.

