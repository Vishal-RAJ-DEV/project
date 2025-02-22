let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let message = document.querySelector('.msg');
let newbtn = document.querySelector('.btn-new');
let messageCONT = document.querySelector('.msg-con')
let turn0 = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6,],
    [0, 4, 8],
    [1, 4, 7,],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "X";
            turn0 = false;
        }
        else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    });


});

//to reset the game 

const resetgame = () => {
    turn0 = true;
    enablebtn();
    messageCONT.classList.add("hide")
    
}


// to disable the button after the game is over
const disabledbtn= () =>{
    for( let box of boxes){
        box.disabled = true;
    }
}

const enablebtn =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

// messgae function
const showwinner = (winner) => {
    message.innerHTML = ` congularation, player ${winner} wins`;
    //to remmove the hide class from container where display is none 
    messageCONT.classList.remove("hide")
    disabledbtn();


}

//to check the winner

const checkwinner = () => {
    for (let pattern of winpattern) {
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;

        if (post1 != "" && post2 != "" && post3 != "") {
            if (post1 === post2 && post2 === post3) {
                showwinner(post1);

            }
        }
    }
}

resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);