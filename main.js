let display = document.getElementById("display");

function clearAll(){
    display.value = "";
}

function Delete(){
    display.value = display.value.slice(0, -1)
}

function modulus(){
    display.value += "%"
}

function divide(){
    display.value += "/"
}

function num1(){
    display.value += "1";
}

function num2(){
    display.value += "2";
}

function num3(){
    display.value += "3";
}

function multiply(){
    display.value += "*";
}

function num4(){
    display.value += "4";
}

function num5(){
    display.value += "5";
}

function num6(){
    display.value += "6";
}

function minus(){
    display.value += "-";
}

function num7(){
    display.value += "7";
}

function num8(){
    display.value += "8";
}

function num9(){
    display.value += "9";
}

function plus(){
    display.value += "+";
}

function dblZero(){
    display.value += "00";
}

function zero(){
    display.value += "0";
}
function dot(){
    display.value += ".";
}
function equal(){
    let bal = display.value;
    ans = eval(bal);
    display.value = ans;
}




