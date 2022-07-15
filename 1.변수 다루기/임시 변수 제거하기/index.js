function getElements() {
    //임시변수  => 이런게 있으면 저 result를 가지고 뭔가 변화를 하게 될 수 도있기때문에 만들지않고 바로 return하길 추천
    const result = {};

    result.title = document.querySelector('.title');
    result.text = document.querySelector('.text');
    result.value = document.querySelector('.value');

    return result;
}

function getElements_solved() {
    return {
        title: document.querySelector('.title'),
        text: document.querySelector('.text'),
        value: document.querySelector('.value'),
    };
}

/*
    임시변수를 제거해야한다 !
    
    이유?
        명령형으로 가득한 로직
        어디서 어떻게 잘못되었는지 디버깅이 어렵다.
        함수는 하나의 역할만 할수 있도록 해야하는데, 추가적인 코드를 작성하고 싶은 유혹에 빠지기 쉽다.
    
    해결책?
        함수를 잘게잘게 나눈다.(하나의 역할을 하는 함수로 만듬).
        바로 return을 한다. (예측가능한 return.             *pureFunction)
        고차함수를 사용한다. (map, filter, reduce 등...)
        선언형 코드로 작성한다.
*/
