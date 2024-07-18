let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

const genComChoice=()=>{
    const options=["rock","paper","scissors"];
   const randIdx =Math.floor(Math.random()*3);
   return options[randIdx];
}
const drawGame=()=>{
    // console.log("Game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#081b31";
}
const showWin =(userWin,userChoice,comChoice)=>{
    if(userWin){
        // console.log("You win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    } else{
        // console.log("You lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose.Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="blue";
    }
}

const playGame=(userChoice)=>{
    // console.log("User choice=",userChoice);
    const comChoice=genComChoice();
        // console.log("Computer choice=",comChoice)


        if(userChoice == comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice ==="paper"? false : true;
        } else if(userChoice === "paper"){
                userWin = comChoice ==="scissors"? false : true;
            }  else{
                userWin = comChoice ==="rock"? false : true;
            }
            showWin(userWin,userChoice,comChoice);
        }
    }
    
    


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })

})