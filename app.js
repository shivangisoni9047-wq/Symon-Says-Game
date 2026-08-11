let gameSeq=[];
let userSeq=[];
let highestScore = 0;
let btns =["yellow","pink","purple","skyblue"]

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started = true;

        levelUp();
    } 
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
 
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*4);
    let randColor =btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
}
function Red(btn){
    btn.classList.add("Red");
    setTimeout(function(){
        btn.classList.remove("Red");
    },250);
}


function checkAns(idx,btn){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            highestScore++;
          setTimeout(levelUp,500);
        }
    }else{
        
        h2.innerHTML =`Game Over! Your Score was <b> ${level} </b> <br> Press any key to Restart.`;
        // document.querySelector("body").style.backgroundColor = "red";
        // setTimeout(function(){
        //     document.querySelector("body").style.backgroundColor ="white";
        // },150);
        // let allBtn = document.querySelectorAll('.btn');

        // for(let butt of allBtn){
        //     butt.classList.add('disabled-div');
        // }
        Red(btn);
        let score = document.querySelector(".score");
        score.innerHTML = `${highestScore}`;
        reset();
    }
}

function btnpress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1,btn);
    
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0
}