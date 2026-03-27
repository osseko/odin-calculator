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

window.addEventListener("keydown", () => {
    console.log(event.key)
    showNum.value += event.key;
})


//keyboard button press to trigger button.id
                
storedInput = [];
storedOperation = [];
let compute;
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

        // function clicked(){
        //     return `${numDown} is clicked`
        // }
        // console.log(clicked());
       
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

            console.log(storedInput, "stored")
        showNum.value = []
      
        if(storedInput.length >= 2){
            let a = storedInput[0];
            let b = storedInput[1];
             

           if(storedOperation[0] === "add"){
            console.log(a+b)
            storedInput.push(a+b);
            compute = (a+b).toFixed(2);
           } else if (storedOperation[0] === "subtract"){
            console.log(a+(-b));
            storedInput.push(a-b);
            compute = (a-b).toFixed(2);
           } else if (storedOperation[0] === "divide"){
            console.log(a/b);
            storedInput.push(a/b);
            compute = (a/b).toFixed(2);
           } else if (storedOperation[0] === "multiply"){
            console.log(a*b);
            storedInput.push(a*b);
            compute = (a*b).toFixed(2);
           } else if(storedOperation[0] === "equals"){
            storedInput.push(parseFloat(compute));
           }
                 

           if(storedOperation[0] === "divide" && b === 0){
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

        } 

        if (storedOperation.length > 2){
            storedOperation.splice(0,1);
        }

        console.log("length", storedInput.length, "arr", storedInput, "opr", storedOperation)
    

    })

})








