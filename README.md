# SHOP MY SKILLS – 김승은 Online MD Portfolio
HTML/CSS/JS 정적 사이트 (빌드 불필요).

## 실행
폴더 전체를 같은 위치에 둔 채 `index.html`을 열거나, 폴더에서 `python3 -m http.server` 후 http://localhost:8000 접속. (Pretendard는 CDN이라 인터넷 필요)
파일 하나로 열고 싶으면 `shop-my-skills-single.html`을 사용하세요.

## 수정
- 텍스트·이미지 경로: `content.js`
- 사진: `assets/img/`에 `profile.jpg`, `project1-1.jpg`, `project1-2.jpg`, `project2-1.jpg`, `project2-2.jpg`, `project3-1.jpg`, `project3-2.jpg` 를 넣으면 자동 교체 (없으면 플레이스홀더)

## GitHub Pages 배포
1. 새 저장소 생성 → 이 폴더의 파일을 저장소 루트에 업로드(Add file → Upload files)
2. Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `(root)` → Save
3. 1~2분 후 `https://<계정>.github.io/<저장소>/` 접속
