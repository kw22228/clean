# clean

To study about clean code.

1. 클린 코드에 대한 고민

-   타인이 정의한 답을 의심하자.
-   배움에 열린 태도를 갖는다.
-   직접 생각하고 또 고민한다.
-   흔히 알려진 코드에 대해서 고민한다.

2.

-   https://github.com/denysdovhan/wtfjs/blob/master/README-kr.md

3. Javascript Everywhere

-   nodejs -> Node.js®는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임
-   express -> node.js를 사용하여 서버를 개발하고자 하는 개발자들을 위하여서 서버를 쉽게 구성할 수 있게 만든 프레임워크.
    프레임 워크 이기 떄문에 규칙이 강제된다, 그렇기 때문에 코드의 구조 및 통일성을 향상.
    각종 라이브러리와 미들웨어가 내장되어있어 개발하기 편함.

4.  임시변수를 제거해야한다 !

    이유?
    명령형으로 가득한 로직
    어디서 어떻게 잘못되었는지 디버깅이 어렵다.
    함수는 하나의 역할만 할수 있도록 해야하는데, 추가적인 코드를 작성하고 싶은 유혹에 빠지기 쉽다.

    해결책?
    함수를 잘게잘게 나눈다.(하나의 역할을 하는 함수로 만듬).
    바로 return을 한다. (예측가능한 return. \*pureFunction)
    고차함수를 사용한다. (map, filter, reduce 등...)
    선언형 코드로 작성한다.
