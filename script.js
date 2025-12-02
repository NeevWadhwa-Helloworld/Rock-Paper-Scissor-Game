let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice = () => {
    const options =["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner= (userWin) => {
    if(userWin===true){
        console.log("You Win");
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose");
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText="You Lose";
        msg.style.backgroundColor ="red";
    }
}

const playGame=(userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice= genCompChoice();
    console.log("comp choice=", compChoice);

    if(userChoice === compChoice){
        console.log("game was draw");
        msg.innerText="Game was Draw";
        msg.style.backgroundColor = "rgb(7, 7, 69)";
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                userWin=false;
            }
        }else if(userChoice==="paper"){
            if(compChoice==="scissor"){
                userWin=false;
            }
        }else{
            if(compChoice==="rock"){
                userWin=false;
            }
        }
        showWinner(userWin);
    }


};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});