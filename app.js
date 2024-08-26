let userScore = 0;
let compScore = 0;

const choises = document.querySelectorAll(".choise");
const msg=document.querySelector("#msg");

const userScorepra=document.querySelector("#user-score");
const compScorepra=document.querySelector("#comp-score");

const gencompChois=()=>{
const options=["rock","paper","scisores"];
const ranIdnx=Math.floor(Math.random()*3);
return options[ranIdnx];
};

const drowgame=()=>{//drawgame
    msg.innerText="Game is draw!, Play Agains";
    msg.style.backgroundColor= "#081b31";
};

const showWIner=(userWin , UserChoise,compchoise)=>{
if(userWin){
    userScore++;
    userScorepra.innerText=userScore;
    msg.innerText=`you are win! your ${UserChoise} beats ${compchoise}`;
    msg.style.backgroundColor="green";
}else{
    compScore++;
    compScorepra.innerText=compScore;
    msg.innerText=`you are loss!${compchoise} your beat ${UserChoise}`;
    msg.style.backgroundColor="red";
}
}
const playgame=(UserChoise)=>{
    //comchoise
    const compchoise=gencompChois();
    if(UserChoise === compchoise) {
        drowgame();
    }else{
        let userWin=true;
        if(UserChoise==="rock"){
            //scisores,paper
        userWin=compchoise === "paper"?false:true;
    }else if(UserChoise === "paper"){
        //rock,scisore
        userWin= compchoise==="rock"?false:true;
    }else{
        //rock,paper
        userWin=compchoise==="scisores"?false:this;
    }
    showWIner(userWin, UserChoise,compchoise);
    }

};

choises.forEach((choise) => {
    choise.addEventListener("click",()=>{
        //userchoise
        const UserChoise=choise.getAttribute("id");
        playgame(UserChoise);
    });
});