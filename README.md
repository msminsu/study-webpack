# study-webpack

Webpack은 모든 자산을 가져 와서 생산 준비가 완료된 번들로 출력합니다.

   - JavaScript 파일을 하나의 파일로 묶어서 HTTP 요청을 최소화합니다.
   - SASS / LESS 파일을 CSS로 처리하고 필요한 경우에만 사용하십시오.
   - JSX 또는 ES2015를 브라우저가 이해하는 바닐라 JS로 변환



## branch : step-01
~~~c
   1. $npm init -y : package.json 자동생성  
   2. $npm install webpack --save-dev

   npm view webpack versions
   npm view webpack versions --json

   npm i -D webpack@4.18.0  : 해당 버전 설치


명령어 직접 입력  >  webpack.config.js (미리설정)
   webpack ./src/app.js ./dist/app.bundle.js
   webpack ./src/app.js ./dist/app.bundle.js -p --watch
   -d: develop 코드 모드
   -p:  minified 코드 모드
   --watch :  watch 모드



webpack.config.js  설정 > package.json 수정 > "scripts" : { "dev" : "webpack -d --watch"}
$npm run dev
~~~

~~~c
webpack4 는 
npm i -g webpack webpack-cli 
npm i -D webpack webpack-cli
이렇게 webpack webpack-cli 설치해줘야됩니다.

resolve 도 해줘야됩니다.
~~~
vscode setting
node_module, .vscode 폴더 숨기기 : 
F1 > Workspace setting > excluede files 에 추가 




## branch : step-02 
### Plugin
terminal
~~~c 
npm i -D html-webpack-plugin
~~~

webpack.config.js
~~~c
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/app.js',
    output: {
        path:'dist'
        filename: 'app.bundle.js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
      },
      plugins:[ new HtmlWebpackPlugin()]
}
~~~


## branch : step-03
### Style CSS SASS loader

~~~c
npm i css-loader -D  : js 파일에서 load
npm i style-loader -D : style 파일 링크 시켜줌 
npm i sass-loader -D : sass파일 변경

npm i extract-text-webpack-plugin -D : css 파일로 떨궈줌
npm i -D extract-text-webpack-plugin@next


loaders:'style-loader!css-loader' 문법 변경  ver.1
use : ['style-loader','css-loader']    ver.2

~~~

## branch : step-04

## branch : step-05

## branch : step-06
