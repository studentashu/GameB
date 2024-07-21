let yourScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#desc");
const userscore=document.querySelector("#yourscore");
let compscoreacs=document.querySelector("#compscore");
let compgnrt=()=>{
    let options=["rock","paper","scissors"];
     let randomidx=Math.floor(Math.random()*3);
     return options[randomidx];
};
let gamedraw=()=>{
    msg.innerText="Game was draw!Play Again";
    msg.style.backgroundColor="darkblue";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        console.log("you win");
        yourScore++;
        userscore.innerText=yourScore;
        msg.innerText=`You win!! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        console.log("you lose");
        msg.innerText=`You Lose!   ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compscoreacs.innerText=compScore;
    }
};
let playgame=(userChoice)=>{
    console.log("userchoice=",userChoice);
let compChoice=compgnrt();
console.log("computer choice=",compChoice);
if(userChoice==compChoice){
    gamedraw();
}
else {
let userWin=true;
if (userChoice === "rock"){
    //paper,scissors
   userWin= compChoice==="paper" ? false : true;
}else if (userChoice==="paper"){
    //rock,scissors
    userWin=compChoice==="scissors" ? false : true;
}else{
    //rock ,paper
    userWin=compChoice==="rock"? false:true;
}
showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((val)=>{
    val.addEventListener("click",()=>{
    let userChoice= val.getAttribute("id");
    playgame(userChoice);
   })
});