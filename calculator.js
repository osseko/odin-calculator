const calcBtn = document.querySelectorAll("button");
const numShow = document.getElementsByClassName("numPad");
    const numArr = Array.from(numShow); //formed array for 'foreach' loop method
const oprShow = document.getElementsByClassName("operation");
    const oprArr = Array.from(oprShow);
// const oprPrss = document.getElementById("oprPrss");
//     const signPushed = oprPrss.value;
const showNum = document.getElementById("showNum");//input box
    const inputShow = showNum.value;
    
            //press decimal dot once // backspace // clear
                function disableDot(){
                    document.getElementById("dot").disabled = true;
                }

                function enableDot(){
                    document.getElementById("dot").disabled = false;
                }

                function bckSpace(){
                    userInput = showNum.value;
                    showNum.value = showNum.value.substring(0, showNum.value.length -1);
                    console.log(userInput, "backspace")
                }

                function clearInput(){
                    storedInput=[];
                    storedOperation=[];
                    showNum.value = '';
                    console.log("input", storedInput, "opr", storedOperation)
                }



//button listener and event key to trigger shownum value
// rearrange code calculon(storedInput[0], storedInput[1], storedOperation[0])

//keyboard button press to trigger button.id
                
storedInput = [];
storedOperation = [];
let compute;

function calculon(a, b, c){

    if(c === "add"){
        console.log(a+b)
        storedInput.push(a+b);
        compute = (a+b).toFixed(2);
    } else if (c === "subtract"){
        console.log(a+(-b));
        storedInput.push(a-b);
        compute = (a-b).toFixed(2);
    } else if (c === "divide"){
        console.log(a/b);
        storedInput.push(a/b);
        compute = (a/b).toFixed(2);
    } else if (c === "multiply"){
        console.log(a*b);
        storedInput.push(a*b);
        compute = (a*b).toFixed(2);
    } else if(c === "equals"){
        storedInput.push(parseFloat(compute));
    }
                 

    if(c === "divide" && b === 0){
        console.log("vacuum")
        alert("You've broken the space-time continuum")
            storedOperation.splice(0, 1);            
            storedInput.splice(0, 2);
            compute = "kaboom";
    }

        showNum.value = compute;
        storedOperation.splice(0, 1);            
        storedInput.splice(0, 2);
        console.log(storedOperation)
        console.log("compute", compute)

}// operation function

//returns number/numpad input
const numberUp = numArr.forEach((buttons) => {    

    buttons.addEventListener("click", () => {
       const numDown = buttons.value;       
       
        if(compute){
            console.log("whoosh")
            showNum.value = "";
            compute = null;
        }
        
        showNum.value += numDown;
      
    })
    
})
//returns operation input / returns computation
const operPressed = oprArr.forEach((buttons) => {

        const oprDown = buttons.value;   
        
    buttons.addEventListener("click", () => {
        
        storedOperation.push(oprDown);
        
        // oprPrss.value = oprDown;
     
        if(showNum.value === ''){
            console.log("dont push")
        } else {
            storedInput.push(parseFloat(showNum.value))
        }

        showNum.value = []// resets input box after pushing storedInput
      
        if(storedInput.length >= 2){
        // code bulk rearranged to calculon()  
            calculon(storedInput[0], storedInput[1], storedOperation[0])
       
        } 

        if (storedOperation.length > 2){
            storedOperation.splice(0,1);
        }

        console.log("length", storedInput.length, "arr", storedInput, "opr", storedOperation)
        
    })

})


window.addEventListener("keydown", () => {
    let keybLocation = event.location;
    let keybInput = event.key
    // no 'enter' key yet
    //key location = 3, numpad
    if(keybInput >= 0 && keybInput <=9 || keybInput === "."){

        if(compute){
            console.log("whoosh")
            showNum.value = "";
            compute = null;
        }
        showNum.value += keybInput
    }

    if(keybInput === '+' || keybInput === '-' || keybInput === '*' || keybInput === '/' || keybInput === "Enter"){

        if(showNum.value === ''){
            console.log("dont push")
        } else {
            storedInput.push(parseFloat(showNum.value))
        }
            showNum.value = []
    
        let keybOperation; 
            switch (keybInput){
                case "+":
                    keybOperation = "add"
                    break;
                case "-":
                    keybOperation = "subtract"
                    break;
                case "*":
                    keybOperation = "multiply"
                    break;
                case "/":
                    keybOperation = "divide"
                    break;
                case "Enter":
                    keybOperation = "equals"
                    break;
            }
        storedOperation.push(keybOperation);


        if(storedInput.length >= 2){
        // code bulk rearranged to calculon()  
            calculon(storedInput[0], storedInput[1], storedOperation[0])
       
        } 

        if (storedOperation.length > 2){
            storedOperation.splice(0,1);
        }

       console.log("Klength", storedInput.length, "Karr", storedInput, "Kopr", storedOperation)
            
    }
    
    
})









