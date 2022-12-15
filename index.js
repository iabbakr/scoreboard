let pointHome = document.getElelementById("points1");
let pointAway = document.getElementById("points2");

let counter = 0;

function add1(){
    counter += 1;
    pointHome.textContent = counter;
};
function add2(){
    counter += 2;
    pointHome.textContent = counter;
};
function add3(){
    counter += 3;
    pointHome.textContent = counter;
};