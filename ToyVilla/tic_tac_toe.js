$(function() { 
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  });
  
  
let ding = new Audio("ting.mp3");
let turn = "X";
let gameover = false;
const change_turn = ()=>{ //to change turn
   return turn === "X" ? "O" : "X";
    
}
//who won?
const check_win = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            let text = document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            alert(text);
            gameover = true
        //     // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        //     document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        //     document.querySelector(".line").style.width = "20vw";
        }
        
    })
  if(gameover == true){
  window.location.reload();
  }
  
 
}

let cells = document.getElementsByClassName("cell");
Array.from(cells).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = change_turn();
            ding.play();
            check_win();
            if(!gameover)
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})
function myfunc(){
    window.location.reload();
}

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
        
    });
    turn = "X"; 
    gameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
   
    // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

