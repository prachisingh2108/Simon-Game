let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started.");
        started=true;
        levelup();
    }
});

function gameFlash(btn)
{
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
};
 
function userFlash(btn)
{
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
};

function levelup()
{
    userSeq=[];
    level++;
    h2.innerText=`Level : ${level}`;

    //choose random button
    let random_index=Math.floor(Math.random()*3);
    let random_color=btns[random_index];
    let random_btn=document.querySelector(`.${random_color}`);
    gameSeq.push(random_color);
    console.log("Game Sequence : ",gameSeq);
    console.log(random_btn);
    console.log(random_index);
    console.log(random_color);
    gameFlash(random_btn);
}

function checkAns(index)
{
    // console.log(`Current Level ${level}`);
    // let index=level-1;
    if(userSeq[index]===gameSeq[index])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {

        h2.innerHTML=`Game Over!<b> Your color is ${level}</b><br>Press any key to start.`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn); 
    userColor=btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    console.log("User Sequence : ",userSeq);
    console.log(userColor);
}
let allBtns=document.querySelectorAll('.btn');
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}