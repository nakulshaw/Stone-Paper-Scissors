// accesing elements from play.html

yScore=document.querySelector(".yScore");
cScore=document.querySelector(".cScore");
uScore=document.querySelector(".uScore");
cpScore=document.querySelector(".cpScore");
img1=document.querySelector(".img1");
img2=document.querySelector(".img2");
image1=document.querySelector(".image1");
image2=document.querySelector(".image2");
cM=document.querySelector(".cM");
choice=document.querySelectorAll(".choice");
chImages=document.querySelector(".chImages");

// initializing scores
let s1=0;
let s2=0;


// creating and styling playAgain button
let playAgain=document.createElement("button");
playAgain.innerText="Play Again";
playAgain.style.color="cornsilk";
playAgain.style.backgroundColor="darkslategrey";
playAgain.style.padding="2rem";
playAgain.style.paddingLeft="4rem";
playAgain.style.paddingRight="4rem";
playAgain.style.borderRadius="20px";
playAgain.style.position="relative";
playAgain.style.left="530px";
playAgain.style.top="200px";
playAgain.style.fontSize="22px";

// creating result message and styling
let rMessage=document.createElement("p");
rMessage.style.color="cornsilk";
rMessage.style.fontSize="24px";
rMessage.style.position="relative";
rMessage.style.top="30px";
rMessage.style.left="545px";



// functionality of playAgain button
let enable=()=>{
    window.location.href="/index.html";
}

playAgain.addEventListener("click",enable);

// count no of times button clicked
let count=0;

// creating computer choices
let botChoices=["rock","paper","scissors"];

// function for computer choice
let botChoice=()=>{
    let i=Math.floor(Math.random()*3);
    let bot=botChoices[i];
    console.log(bot);
    return bot;
}


// creating result page
let result=()=>{
    img1.remove();
    img2.remove();
    cM.remove();
    for (c of choice){
        c.remove();
    }
    
    chImages.prepend(rMessage);
    chImages.prepend(playAgain);
    
}


// functionality of rock paper scissors button

let choose;

let play=(e)=>{
    cBot=botChoice();
    image1.style.width="300px";
    image2.style.width="300px";
    let attribute=e.target.getAttribute("id");
    
    if(attribute=="rock" && cBot=="rock"){
        image1.setAttribute("src","/rock.png");
        image2.setAttribute("src","/rock.png");
        count--;
    }
    else if(attribute=="paper" && cBot=="paper"){
        image1.setAttribute("src","/paper.png");
        image2.setAttribute("src","/paper.png");
        count--;
    }
    else if(attribute=="scissors" && cBot=="scissors"){
        image1.setAttribute("src","/scissors.png");
        image2.setAttribute("src","/scissors.png");
        count--;
    }
    else if(attribute=="rock" && cBot=="paper"){
        image1.setAttribute("src","/rock.png");
        image2.setAttribute("src","/paper.png");
        s2+=1;
        cpScore.innerText="";
        cpScore.innerText=s2;
        
    }
    else if(attribute=="rock" && cBot=="scissors"){
        image1.setAttribute("src","/rock.png");
        image2.setAttribute("src","/scissors.png");
        s1+=1;
        uScore.innerText="";
        uScore.innerText=s1;
        
    }
    else if(attribute=="paper" && cBot=="rock"){
        image1.setAttribute("src","/paper.png");
        image2.setAttribute("src","/rock.png");
        s1+=1;
        uScore.innerText="";
        uScore.innerText=s1;
        
    }
    else if(attribute=="paper" && cBot=="scissors"){
        image1.setAttribute("src","/paper.png");
        image2.setAttribute("src","/scissors.png");
        s2+=1;
        cpScore.innerText="";
        cpScore.innerText=s2;
        
    }
    else if(attribute=="scissors" && cBot=="rock"){
        image1.setAttribute("src","/scissors.png");
        image2.setAttribute("src","/rock.png");
        s2+=1;
        cpScore.innerText="";
        cpScore.innerText=s2;
        
    }
    else if(attribute=="scissors" && cBot=="paper"){
        image1.setAttribute("src","/scissors.png");
        image2.setAttribute("src","/paper.png");
        s1+=1;
        uScore.innerText="";
        uScore.innerText=s1;
        
    }
    
    count++;
    if(count>=3){
        if(s1 > s2) { 
            rMessage.innerText = "Congratulations, You won!"; 
        } 
        else if(s1 < s2) {
            rMessage.innerText = "You lost, try again!"; 
        } 
        else if(s1==s2) {
            rMessage.innerText = "Draw!";
        }
        for (choose of choice){
            choose.removeEventListener("click",play);
        }
        setTimeout(result,1300);
        
        
        
    }
};

for (choose of choice){
    choose.addEventListener("click",play);
}

