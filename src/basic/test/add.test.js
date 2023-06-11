const add = require('../add.js');

test('', () => {
  // 테스트 코드 작성!
  expect(add(2, 1)).toBe(3);
});

// 환경설정
// 1. npm init --yes
// 2. npm install jest --global
// 3. jest --init
// 4. npm i --save-dev jest
// 5. package.json에서 test:"jest --watch"
// 6. watch를 쓰려면 git init, .gitignore 에
//    node_modules/* 제외하고 git add 와 commit 까지 해주어야 한다.
