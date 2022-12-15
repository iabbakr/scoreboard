let pointHome = document.getElementById("points1");
let pointAway = document.getElementById("points2");

let counter = 0;

function add1(){
    counter = counter + 1;
    pointHome.textContent = counter;
};
function add2(){
    counter = counter + 2;
    pointHome.textContent = counter;
};
function add3(){
    counter = counter + 3;
    pointHome.textContent = counter;
};
function add11(){
    counter += 1;
    pointAway.textContent = counter;
};
function add22(){
    counter += 2;
    pointAway.textContent = counter;
};
function add33(){
    counter += 3;
    pointAway.textContent = counter;
};