let pointHome = document.getElementById("points1");
let pointAway = document.getElementById("points2");

let counter1 = 0;
let counter2 = 0;

function add1(){
    counter1 += 1;
    pointHome.textContent = counter1;
};
function add2(){
    counter1 += 2;
    pointHome.textContent = counter1;
};
function add3(){
    counter1 += 3;
    pointHome.textContent = counter1;
};
function add11(){
    counter2 += 1;
    pointAway.textContent = counter2;
};
function add22(){
    counter2 += 2;
    pointAway.textContent = counter2;
};
function add33(){
    counter2 += 3;
    pointAway.textContent = counter2;
};