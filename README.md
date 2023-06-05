# 바닐라 자바스크립트 팀 프로젝트

## 개요
팀 프로젝트는 Github PR(Pull Request)을 이용하여 진행합니다.  
아래 사항을 잘 따라와 주시면 감사하겠습니다.  

## 참고 자료
혹 자바스크립트 코드나 기타 내용에 대한 참고가 필요하시다면 아래 링크를 참조해 주세요.  
[자바스크립트 기본기](https://github.com/issuebombom/nodejs_study_alone/blob/main/study_alone_basic.md)  
[자바스크립트 웹개발 기본기](https://github.com/issuebombom/nodejs_study_alone/blob/main/study_alone_web.md)  
[코멘트 작성 구현 참조](https://github.com/issuebombom/basic_website_project_02)

## 본격 Github 협업 툴 활용하기 (Collaborators)
1. 해당 레포지토리를 git clone해서 각자의 로컬 PC에 가져옵니다.
2. 레포지토리에서 issues에 들어가 TODO를 확인해 주세요.
![issues-exam](./img/issue_exam.png)
3. 각자 업무 분담이 끝났다면 각자의 로컬 환경에서 branch를 생성하여 구현을 시작합니다.

## Git 업무 로테이션
git 협업 툴 사용에 관한 상세 설명 페이지를 참조합니다. [git 상세 설명 페이지 보기](https://teamsparta.notion.site/Github-3f4ee9e7ab2741368648f90acec31835)  

github툴 협업 시 업무 세부 순서는 아래와 같습니다.

> 📌 현재 git clone까지 마친 상태를 전제로 합니다.  
1. issues를 보고 기능 구현을 담당합니다.

2. `git checkout -b 브랜치이름`을 통해 브랜치를 생성합니다.
  - 브랜치명은 영어로 작성하시되 컨벤션을 지켜주세요. (작업형태/내용)
  - ex) 상세페이지 기능구현 시 `feat/detail_page_html`와 같은 형태로 지어주세요.

3. 생성한 브랜치에 머무르는 상태에서 `git pull origin main`을 입력해서 최신 데이터를 가져옵니다.

4. 기능 구현 시작 (반드시 주어진 업무 만큼만 구현합니다.)

5. `git add .` 을 입력하여 작업 내용을 스테이지에 올립니다.  

6. `git commit`을 입력하여 커밋 메시지를 작성합니다. (하단의 컨벤션 참조)
  - 커밋 작성 예시는 아래와 같습니다.  
  > feat: 상세 페이지 html, css 틀 구현  
  > (한 줄 띄우고)  
  > 상세페이지 기능 구현 완료하였습니다. 코드 확인 부탁드립니다.

7. `git push origin 브랜치이름`을 통해 push 합니다.

8. git clone했던 레퍼지토리 사이트로 이동합니다.

9. 정상적으로 push가 완료되었다면 아래와 같은 그림이 떠야 합니다.  
![pull-request-exam](./img/pull_request_exam.png)  

10. Compare & pull request를 클릭하여 내용을 작성해줍니다.
  - git commit할 당시 작성한 내용이 그대로 전달되었다면 굳이 수정하지 않습니다.

11. Create pull request를 클릭하여 PR을 생성합니다.

12. 만약 아래와 같이 Conflict가 발생했다면 해결이 필요합니다. (해결방법은 git 상세설명 페이지 참조)  
![conflicts-exam](./img/conflicts_exam.png)

13. confilict까지 해결이 되었다면 다른 팀원들에게 코드리뷰를 받고, 수정사항이 있다면 수정합니다.  
- pull request는 각 업무당 최초에 한 번 생성합니다. 코드 수정 시에는 `git push origin 브랜치이름`만 해도 됩니다.

14. 다른 프로젝트 팀원의 승인(Approval)을 받으면 main 브랜치에 코드가 등록됩니다. (owner가 정한 최소 승인 개수를 초과해야 merge가 가능합니다.)

15. 이제 main 브랜치의 코드가 변동되었기 때문에 다른 작업자들은 각자의 브랜치에서 `git pull origin main`을 또 진행해야 합니다. 이 과정에서 conflict가 발생할 수 있으며 이 또한 팀원과의 소통을 통해 해결해가야 합니다.

16. 새로운 업무를 맡을 때 마다 위 작업을 반복합니다.


## Git 컨벤션 참고
|태그명|설명|  
|---|---|  
|feat|새로운 기능 추가|  
|fix|버그 수정|  
|refactor|리팩토링|  
|style|스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)|  
|docs|문서 (문서 추가, 수정, 삭제)|  
|test|테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)|  
|chore|기타 변경사항 (빌드 스크립트 수정 등)|


## 본격 Github 협업 툴 활용하기 (Contributor)
컨트리뷰터는 github의 `Fork` 기능을 사용합니다.  
![fork-exam](./img/fork_exam.png)  
협업하고자 하는 레포지토리를 본인의 레포지토리로 가져와서 작업 후 수정 사항 변경 요청을 레포지토리 주인에게 허락을 구하는 방식으로 진행됩니다.

Contributor로서 github툴 협업에 참여 시 업무 세부 순서는 아래와 같습니다.

`Fork`를 통해 받아온 레포지토리가 본인의 레포지토리에 설치되었을 것입니다.  
만약 본인이 `issuebombom`이라는 계정의 주인이고, `bombom/test-repo`라는 프로젝트를 Fork했다면 `issuebombom/test-repo`라는 fork 레포지토리가 생성되었을 것입니다. 그 레포지토리를 git clone합니다. 이후로도 예시와 같은 상황을 가정하겠습니다. (반드시 본인의 레포지토리에 저장된 Fork떠온 레포지토리여야 합니다.)

1. `git remote add upstream bombom/test-repo` 를 입력해서 Fork뜬 레포지토리와 원본 레포지토리를 연결하는 작업을 합니다. 이는 원본 레포지토리 업데이트에 따른 로컬 환경의 최신화를 위함입니다.
2. 신규 기능 구현을 위해 `git checkout -b 브랜치이름` 으로 생성합니다.
3. 구현 완료 후 add, commit, `git push origin 브랜치이름`을 통해 push합니다.
4. 본인의 레포지토리로 가서 PR 생성이 가능한지 확인 후 PR 생성합니다. 여기서 생성하면 원본 레포지토리 주인이 PR을 확인할 수 있습니다.
5. 또 다른 작업을 시작한다면 새로운 브랜치 생성 및 `git fetch upstream`을 통해 원본 레포지토리의 최신 main 브랜치 코드를 받습니다. 이는 다른 contributor 또는 프로젝트 관계자로 인해 코드가 업데이트 되어 로컬 환경과 sync가 맞지 않을 수 있기 때문입니다.
6. 작업을 시작하고자 하는 브랜치에 위치한 상태에서 `git merge upstream/main`을 입력하면 원본 main 브랜치의 내용으로 최신화 됩니다.
7. 이후 작업 및 반복 과정은 동일합니다.

코드 리뷰 과정은 collaborator와 동일합니다. 차이점은 contributor에게는 merge 권한이 없습니다. 그러므로 원본 레포지토리의 Owner 혹은 collaborator가 허락하지 않으면 main 브랜치에 merge할 수 없습니다.  
만약 팀프로젝트를 owner와 contributor로 구성한다면 owner의 허락 없이 merge가 진행되지 못하므로 프로젝트 진행 속도가 더뎌질 수 있습니다.  
반면 owner와 collaborator로 구성된다면 approval 설정 기준이 낮다면 누구나 쉽게 merge가 가능하므로 코드 관리가 제대로 이뤄지지 않을 수 있습니다.  

그러므로 collaborator와 contributor는 각각 장단점이 있습니다.