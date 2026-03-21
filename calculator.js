const calcBtn = document.querySelectorAll("button");
const numShow = document.getElementsByClassName("numPad");
    const numArr = Array.from(numShow); //formed array for 'foreach' loop method
const oprShow = document.getElementsByClassName("operation");
    const oprArr = Array.from(oprShow);
const result = document.getElementById("result");
const showNum = document.getElementById("showNum");//input box
    const inputShow = showNum.value;
        

const factor = document.querySelector("ul");

    

const numberUp = numArr.forEach((buttons) => {

    
        buttons.addEventListener("click", () =>{
        
        const numDown = buttons.value

        showNum.value += numDown; // input value === button value

            
            } )
    
    
})

// input stored after click
    userInput = [];
//stores input into array,
const operationUp = oprArr.forEach((buttons) => {
    
    buttons.addEventListener("click", () =>{
         const inputReset = document.querySelector("input");
        console.log(showNum.value);
        userInput += showNum.value;
               
        console.log(userInput)
        // const numPlace = document.createElement("li"); 
        //     factor.appendChild(numPlace);
               
        const operPressed = buttons.value;
             
        switch(operPressed){
            case "add":
                inputReset.value = "";
                
                console.log(sum(2, 2));
                break;
            case "subtract":
                inputReset.value = "";
                
                console.log(subt(2,2));
                break;
            case "multiply":
                inputReset.value = "";
                
                console.log(mult(2,3));
                break;
            case "divide":
                inputReset.value = "";
                
                console.log(dvde(10, 2));
                break;
            case "clear":
               
                    inputReset.value = "";
                
                console.log("nptClr", document.querySelector("input").value);
                break;
        }
        console.log("operPressed", operPressed)

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

