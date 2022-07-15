var global = '전역';

if (global === '전역') {
    var global = '지역';

    console.log(global);
}

console.log(global);

let global_let = '전역';

{
    let global_let = '지역';

    console.log(global_let);
}

console.log(global_let);

const global_const = '전역';

{
    let global_const = '지역';

    console.log(global_const);
}

console.log(global_const);
