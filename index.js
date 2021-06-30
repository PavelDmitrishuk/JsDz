
let num = +prompt("Введите число:");
let stage = +prompt("Введите степень:");


function step(num, stage =1) {


    if( typeof num === "number" || typeof stage === "number" ) {
        
        let result = Math.pow(num, stage);
        return result;
    }
    else {
        return "some error";
    }

}

alert(step(num, stage));