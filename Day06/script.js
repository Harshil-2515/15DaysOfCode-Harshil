let user = 0;
let Computer = 0;
let choices = document.querySelectorAll(".choice");
const message= document.querySelector("#status");
const uscore= document.querySelector("#Userscore");
const cscore= document.querySelector("#Compscore");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let choiceId = choice.getAttribute("id")
        console.log("User : ", choiceId);
        playGame(choiceId);
    })
});

const compChoice = () => {
    const opt = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return opt[random];
};

const drawgame = () => {
    console.log("draw");
    message.innerText="what a coincedence"
}

const showresult = (winvalue) => {
    if (winvalue) {
        console.log("User won");
        message.innerText="You Did it"
        // user++;
        uscore.innerText= ++user;
    } else {
        console.log("Looser heeeeeee");
        message.innerText="Better luck next time u nooobbbbb"
        cscore.innerText= ++Computer;
    }
};


const playGame = (userchoice) => {

    const computerChoice = compChoice();
    console.log("Comp: ", computerChoice);


    if (userchoice === computerChoice) {
        drawgame();
    }

    else {
        let winvalue = true;

        if (userchoice == "rock") {
            winvalue = computerChoice ==="paper" ? false : true;
        }
        else if (userchoice == "paper") {
            winvalue = computerChoice ==="scissors" ? false : true;
        }
        else {
            winvalue = computerChoice ==="rock" ? false : true;
        }

        showresult(winvalue);
    }

};
