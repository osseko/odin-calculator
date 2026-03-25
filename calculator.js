const calcBtn = document.querySelectorAll("button");
const numShow = document.getElementsByClassName("numPad");
    const numArr = Array.from(numShow); //formed array for 'foreach' loop method
const oprShow = document.getElementsByClassName("operation");
    const oprArr = Array.from(oprShow);
const result = document.getElementById("result");
const showNum = document.getElementById("showNum");//input box
    const inputShow = showNum.value;
    
//function calcOperation(a, b)
//different loop for input 1 and input 2
// directly reference array[0] and array[1] for compute function
//store operation after first array, then compute after array[1]
//result will be new array[0]
//if arr.length===2; function (arr[0], operPressed, arr[1])
// parseInt[arr[0, 1]]
// return [0] operPressed [1]
// problem with empty array pushed,, do not push if empty; if arr==='' no push
// 


const numberUp = numArr.forEach((buttons) => {
    
        

    buttons.addEventListener("click", () =>{
        
        const numDown = buttons.value;
        showNum.value += numDown;

    })
    
})

storedInput = [];
let storedOperation;

const operPressed = oprArr.forEach((buttons) => {

        const oprDown = buttons.value;
        
    buttons.addEventListener("click", () => {
       
        console.log(showNum.value)
        if(showNum.value === ''){
            console.log("dont push")
        } else {
            storedInput.push(parseInt(showNum.value))
        }
        
            console.log(storedInput)
        showNum.value = []
        if(storedInput.length === 2){
            // let a = storedInput[0];
            // let b = storedInput[1];

           //console.log(storedInput.reduce((a, b) => a+b), "reduce");
            const compResult = storedInput.push(calculon(storedInput[0], storedInput[1]));

            console.log(calculon(storedInput[0], storedInput[1]), "compResult")
            storedInput.splice(0, 2);
            console.log("remove arr")
            

               
        }
     

            //function operation return arr.push[0]

            function calculon(a, b){

               if(oprDown === "add"){
                return a + b;
               } else if(oprDown === "subtract"){
                return a +(-b);
               } else if(oprDown === "multiply"){
                return a * b;
               } else if(oprDown === "divide"){
                return a / b;
               }
                
            }
                               
            //     switch(oprDown){
            //     case "add":   
                  
            //         storedOperation = "add"  
                    
            //         break;
            //     case "subtract":
                   
            //         storedOperation = "subtract"
                 
            //         break;
            //     case "multiply":                                      
                    
            //         storedOperation = "multiply"
                      
            //         break;
            //     case "divide":                                   
                   
            //         storedOperation = "divide"
                        
            //         break;
            //     case "clear":                                   
            //         console.log("nptClr");
            //         break;
            // }
    
     

    })

})


// const numberUp = numArr.forEach((buttons) => {

    
//         buttons.addEventListener("click", () =>{
        
//             const numDown = buttons.value

//             showNum.value += parseInt(numDown); // input value === button value

//             console.log(numDown);        
//         } )
    
    
// })

//if arr.length=2
//input 1 push input 2
// arr[0], operation, arr[1] = result push arr
//arr.length = 3, slice(0, 1)

   
//stores input into array,
// const operationUp = oprArr.forEach((buttons) => {
    
//     buttons.addEventListener("mousedown", () =>{
//         console.log(showNum.value)
//         //  const inputReset = document.querySelector("input");
        
//         //  storedInput.push(parseInt(showNum.value));   
     
//         // console.log(numberUp, "numberup")         

//         // inputReset.value = "";

//     } )

// // if array.length > 3 
// // factors go to different array? 
// // store input 1, operation, store input 2, operation, answer, operation input 3...
// // returns NaN if no input, array doesn't calculate with NaN
//     // buttons.addEventListener("mouseup", () =>{
//     //      const operPressed = buttons.value;

//     //         switch(operPressed){
//     //             case "add":
//     //                 const sum = storedInput.reduce((a, b) => a + b);
                    
//     //                 console.log("sum", sum);                           
//     //                 break;
//     //             case "subtract":
//     //                 const subt = storedInput.reduce((a, b) => a - b);
                                       
//     //                 console.log("subtract", subt);
//     //                 break;
//     //             case "multiply":
//     //                 const mult = storedInput.reduce((a, b) => a * b);

                                        
//     //                 console.log("mult", mult);
//     //                 break;
//     //             case "divide":
//     //                 const dvde = storedInput.reduce((a, b) => a/b);
                                        
//     //                 console.log("dvde", dvde);
//     //                 break;
//     //             case "clear":
//     //                 storedInput = [];
                                    
//     //                 console.log("nptClr", document.querySelector("input").value);
//     //                 break;
//     //         }

//     // } );
    
  
// })







