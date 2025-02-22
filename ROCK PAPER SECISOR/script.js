
let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userscorepara = document.querySelector(".user-score");
const compscorepara = document.querySelector(".comp-score");


//generating the computer choice 
const gencompchoice = () =>{
    const option = ["rock","paper","scissor"]
    const randomidx = Math.floor(Math.random()*3);
    return option[randomidx];

    
     
}
//when game draw 
const drawgame=() =>{
    msg.innerHTML = "game is draw . play again";
    
}


//when player win the game 
const showWinner =(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerHTML = userscore;
        msg.innerHTML = `you win ! ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerHTML = compscore;
        msg.innerHTML = `you lose! ${compchoice} beats ${userchoice} ` ;
        msg.style.backgroundColor = "red";
        
    }
}


//playing the game 
const playgame = (userchoice) =>{
    const compchoice = gencompchoice();
        
    if(userchoice === compchoice){
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice ==="paper" ? false : true;
        }
        else if (userchoice === "paper"){
            userwin = compchoice ==="scissor" ? false : true ;
        }
        else if (userchoice === "scissor"){
            userwin = compchoice === "rock" ? false : true ;
        }

        showWinner(userwin,userchoice,compchoice);
        

    }
     
}

//looping through the choices and calling the playgame function
choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
        
    })
});