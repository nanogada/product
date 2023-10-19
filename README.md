# 연습해보기


## 시작
VS Code에 GitHub Repositories Extension 


VS Code에 Markdown Extension
## 개발 순서
git init으로 시작

# 요약
branch파기
->git config로 보내는 사람 선언

->git remote로 업로드 할 장소 선언

->git add로 업로드 할 변경사항 확정

 ->git commit 으로 변경사항 
 commit하기

 ->git push로 commit 되어있는 사항 보내기
 
 ->pull requiest로 변경사항 적용하기

1. git clone [링크]로 갖고온다
2. git branch [branch_name]으로 브랜치를 만든다

        git checkout [branch_name]?


+ 작업시작 전에 꼭 브랜치 확인하기
3. git status

    commit 가능한 파일들 표시

4. git add [변경사항]
    
        git add .
        git add [변경사항]
    
5. git config로 보내는 사람이 누군지 선언

    본인이 누군지 선언

        git config --global user.name "name"

        git config --global user.email youremail@snu.ac.kr
6. git commit으로 보낼 준비 마무리하기

        git commit -m "<comment message>"


7. git remote add로 보낼 장소 설정

        git remote add origin [원격저장소 주소]

8. git push로 저장소에 보내기
    
    commit은 그냥 작업 뭉탱이일 뿐

            git push -u origin HEAD

    HEAD는 현재 내가 만든 커밋

    -u는 서버에 만들어진 브랜치를 따라간다는 뜻


## 이름써보기
### 1. 신정민
+ 신정민

-------------
## 코드작성
    들여쓰기로 코드블럭.
``` C
따옴표로 만들기
printf("Hello World!")
``` 

