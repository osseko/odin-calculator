const calcBtn = document.querySelectorAll("button");
const numShow = document.getElementsByClassName("numPad");
    const numArr = Array.from(numShow);
const oprShow = document.getElementsByClassName("operation");
    const oprArr = Array.from(oprShow);
const result = document.getElementById("result");
const showNum = document.getElementById("showNum");
    const inputShow = showNum.value;
        

const factor = document.createElement("li");

    

const numberUp = numArr.forEach((buttons) => {

    const numInput = document.createElement("factor")
        buttons.addEventListener("click", () =>{
        
        const numDown = buttons.value

        showNum.value += numDown;
        
        console.log("number")
        console.log("numDown", numDown);
            
    } )
    
    
})

// innertext to stored input to array
// appendchild to store number input?

const operationUp = oprArr.forEach((buttons) => {
    
    buttons.addEventListener("click", () =>{

          

        const operPressed = buttons.value;
        
     
        console.log(operPressed)
        
        switch(operPressed){
            case "add":
                console.log(sum(2, 2));
                break;
            case "subtract":
                console.log(subt(2,2));
                break;
            case "multiply":
                console.log(mult(2,3));
                break;
            case "divide":
                console.log(dvde(10, 2));
                break;
            case "clear":
                console.log("clear");
                break;
        }


    } )
    
    
})


const sum = function add(a, b){
    return a + b;
};

const subt = function subtract(a, b){
    return a - b;
};

const dvde = function divide(a, b){
    return a/b
};

const mult = function multiply(a, b){
    return a*b;
};

//create array from input(button press)
//if operation is pressed break += 