console.log(history);


let roll=document.querySelector("#roll")
let diceNumber=document.querySelector("#diceNumber")
let totalRolls=document.querySelector("#total")
let showAllRolls=document.querySelector("#resultsButton")
let resultsContainer=document.querySelector("#results-container")
let resetButton=document.querySelector("#reset-button")
let dieRolls=[]


 rollButton.addEventListener("click",function(){
     console.log("Roll")
    
    let x = Number(diceNumber.value)
    let count = 0
    dieRolls=[]

    while (count < x ) {
        
        let diceRollValue= Math.floor(Math.random()*6) +1;
        console.log(diceRollValue);
        dieRolls.push (diceRollValue);
        count ++;
    }
    console.log (dieRolls)
    addedTogether =
    dieRolls.reduce(function (a, b) {
        return a + b;
    } ,  0)
    document.getElementById("totalRolls").innerHTML = addedTogether

    resultsButton.addEventListener("click", function(){
        console.log("resultsButton");
        let count = 0;
        resultsContainer.innerHTML= "";
        while(count<dieRolls.length) {
            console.log(dieRolls[count]);
            resultsContainer.innerHTML +='<li>The Roll: '  + (count+1) + ' Landed On:' + dieRolls[count] + '</li>'
            count++;
        }
    resetButton. addEventListener("click", function reset() {
        console.log("resetButton")
        let count = 0;
        document.getElementById("totalRolls").innerHTML = "";
         //document.getElementById("resultsContainer").innerHTML = "";
        document.getElementById("diceNumber").value = "";
        // document.getElementById("diceRoll").value = "";
        document.getElementById("results-container") .innerHTML = "";
        text = "";
        rolls = [];
        
    })
})


// function rollDice(){
//     let die =document.getElementById("die");
//     let status=document.getElementsById("status");
//     let d1 = Math.floor(Math.random() * 6) + 1;
//     let diceTotal = d1;
//     die.innerHTML= d1;
//     status.innerHTML = "You rolled" + diceTotal+"."

 })