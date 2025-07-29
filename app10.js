let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score")
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx= Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame=()=>{
     msg.innerText="game was draw.Play again";
     msg.style.backgroundColor="#081b31";
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{
    //generate comp choice->moduler
    const compchoice = gencompchoice();
    
    if(userchoice===compchoice){
        //draw game
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissor,paper
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            //rock,scissors
            userwin=compchoice==="scissor"?false:true;
        }else{
            //rock,paper
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was click",userchoice);
        playgame(userchoice);
    });

});