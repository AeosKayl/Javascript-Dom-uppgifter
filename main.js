console.log("Let's try this calculator");

//Skapa en simpel kalkylator. Det ska finnas två input fält som tar in varsitt nummer, och när användaren fyllt i bägge och klickar på en knapp ska dessa två värdena adderas med varandra (+).
//Skapa ytterligare en knapp för att multiplicera dessa tal med varandra
// Skapa en knapp för att subtrahera dessa tal med varandra (tal1 - tal2). Om resultatet blir mindre än 0, skriv ut ett snällt felmeddelande i webbläsaren, där det står tydligt vad användaren gjort fel och behöver rätta till för att få det att fungera.

/* skapa en knapp för att addera siffrorna
skapa en behållare för svaret, 
peka vart den ska placeras,
skapa en funktion för att göra kalkylen. 
addera en eventlistener som körs när man har angett parametrarna. 
skriv ut svaret på skärmen.*/




let calcContainer = document.querySelector(".calculator-container");
let firstNum = document.querySelector("#first-num");
let secondNum = document.querySelector("#second-num");
// let firstNum = parseInt(document.querySelector("#first-num").value);
// let secondNum = parseInt(document.querySelector("#second-num").value);
let resultField = document.createElement("p");
resultField.id = "result";

// skapar en add knapp och lägger den i div-en med class namd .calculator-container
let addBtn = document.createElement("button");
addBtn.innerText = "Add";
addBtn.id = "add-btn";
calcContainer.appendChild(addBtn);

addBtn.addEventListener("click",()=>{
  let result = parseInt(firstNum.value) + parseInt(secondNum.value);
  // let result = firstNum + secondNum;
  resultField.innerText = result;
  
})


//console.log(calcContainer);

// skapar en multiply knapp...
let multiplyBtn = document.createElement("button");
multiplyBtn.innerText = "Multiply";
multiplyBtn.id = "multiply-btn";
calcContainer.appendChild(multiplyBtn);

multiplyBtn.addEventListener("click",()=>{
  let result = parseInt(firstNum.value) * parseInt(secondNum.value);
  // let result = firstNum * secondNum;
  resultField.innerText = result;
})

// skapar en substract knapp ...
let substractBtn = document.createElement("button");
substractBtn.innerText = "Substract";
substractBtn.id = "substract-btn";
calcContainer.appendChild(substractBtn);

substractBtn.addEventListener("click",()=>{
  
  let result = parseInt(firstNum.value) - parseInt(secondNum.value);
  // let result = firstNum - secondNum;
  if(result < 0){
    alert("The result is negative. Please choose a smaller second number");
    return false;
  }
  else if(!parseInt(firstNum.value) || !parseInt(secondNum.value)){
    alert("You have an empty field. Please choose a proper number!");
    return false;
  }
  else{
    resultField.innerText = result;
  }

  
})

calcContainer.appendChild(resultField);


let clearBtn = document.createElement("button");
clearBtn.innerText = "Clear result";
clearBtn.id = "clear-btn";
calcContainer.appendChild(clearBtn);

// clearBtn.addEventListener("mouseover",()=>{
//   alert("Are you sure about clearing the result?");
// })
let warningTxt = document.createElement("p");
warningTxt.innerText = "Are you sure about clearing the result?"
warningTxt.className = "warning";
warningTxt.id = "warning-text";
calcContainer.appendChild(warningTxt);

clearBtn.addEventListener("click",()=>{
  resultField.innerText = "";
  firstNum.value = "";
  secondNum.value ="";
})



// function controlParameters(num1,num2) {
//   if(num1 === "" || num2 === "" || num1 === undefined || num2 === undefined || num1 === NaN || num2 === NaN){
//     console.log(`${num1} or ${num2} is not allowed`);
//   } 
// }

// controlParameters(undefined,NaN);
