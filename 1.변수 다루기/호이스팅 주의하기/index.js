function sum() {
    return 1 + 2;
}
var sum;

// 초기화를 하면서 정확한 분리가됨.
var sum = 10;

console.log(sum);

// 따라서 함수도 const로 선언하고 할당하는걸 추천.
const sum1 = function () {
    return 1 + 2;
};

console.log(sum1());
