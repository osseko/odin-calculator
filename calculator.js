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

// task: store input



    storedInput = [];
//stores input into array,
const operationUp = oprArr.forEach((buttons) => {
    
    buttons.addEventListener("mousedown", () =>{
         const inputReset = document.querySelector("input");

         storedInput.push(parseInt(showNum.value));
         
        console.log("showNum", showNum.value,"stored", storedInput);

        inputReset.value = "";
// if array.length > 3 

    } )

    buttons.addEventListener("mouseup", () =>{
         const operPressed = buttons.value;

            switch(operPressed){
                case "add":
                    const sum = storedInput.reduce((a, b) => a + b);
                    
                    console.log("sum", sum);
                                   
                    break;
                case "subtract":
                    const subt = storedInput.reduce((a, b) => a - b);
                                       
                    console.log("subtract", subt);
                    break;
                case "multiply":
                    const mult = storedInput.reduce((a, b) => a * b);

                                        
                    console.log("mult", mult);
                    break;
                case "divide":
                    const dvde = storedInput.reduce((a, b) => a/b);
                                        
                    console.log("dvde", dvde);
                    break;
                case "clear":
                    storedInput = [];
                                    
                    console.log("nptClr", document.querySelector("input").value);
                    break;
            }

    } );
    
  
})







