let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");
//computer choice
const getCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const ramdIdx=Math.floor(Math.random()*3);
    return options[ramdIdx];
}
//draw game
const drawGame=()=>{
    msg.innerText="Game was draw! Please try again..";
    msg.style.backgroundColor="rgb(121, 5, 123)";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        user_score.innerText=userScore;
        msg.style.backgroundColor="green";
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
    }else{
        compScore++;
        comp_score.innerText=compScore;
        msg.style.backgroundColor="red";
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
    }
}
//play game
const playGame=(userChoice)=>{
    //generate computer choice
    const compChoice=getCompChoice();
    

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // paper scissor
            userWin= compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock scissor
            userWin= compChoice==="scissor"?false:true;
        }else{
            //paper rock
            userWin=  compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
    
}

//for userchoice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
 
