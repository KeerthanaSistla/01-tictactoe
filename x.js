let patterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

let places = document.querySelectorAll("div");

let pre=document.querySelector("pre");
let p1=document.querySelector("#player1");
let p2=document.querySelector("#player2");
let p=document.querySelector("#win");
let tie=document.querySelector("#tie");

let board = document.querySelector(".main_area");
let final = document.querySelector(".final");

let turn_count = 1;

const win = () => {
    for(let pattern of patterns){
        let val1=places[pattern[0]-1].innerText;
        let val2=places[pattern[1]-1].innerText;
        let val3=places[pattern[2]-1].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 == val2 && val2 == val3){
                places[pattern[0]-1].style.color="rgb(220, 20, 60)";
                places[pattern[1]-1].style.color="rgb(220, 20, 60)";
                places[pattern[2]-1].style.color="rgb(220, 20, 60)";
                console.log(val1);
                if(val1=="O"){
                    setTimeout(() => {you_lose();}, 500);
                }
                else if(val1=="X") {
                    setTimeout(() => {you_win();}, 500);
                }
                setTimeout(() => {the_end();}, 500);
                re.innerText="RESTART?";
            }
        }
    }
}

const you_lose = () => {
    tie.innerText = "";
    p2.innerText = "";
    p1.innerText="Wanna play again?";
}

const you_win = () => {
    tie.innerText = "";
    p1.innerText = "";
    p2.innerText="Congratulations! You won!!!";
}

const draw = () =>{
    occupied=0;
    for(let i=0; i<9; i++){
        if(places[i].innerText != ""){
            occupied++;
        }
    }
    if(occupied == 9){
        if(p1.innerText=="" && p2.innerText==""){
            setTimeout(() => { the_end(); }, 499);
            setTimeout(() => { a_tie(); }, 499);
        }
    }
}

const the_end = () => {
    board.style.display = "none";
}

const a_tie = () => {
    p1.innerText="";
    p2.innerText="";
    tie.innerText="It is a tie";
    re.innerText="RESTART?";
}

const computer = () => {
    let index = Math.floor(Math.random() * 9);
    if(places[index].innerText == ""){
        places[index].innerText = "O";
    }else{
        computer();
    }
    win();
    draw();
}

const player = () => {
    places.forEach((place) => {
        place.addEventListener("click", () => {
            place.innerText="X";
            win();
            draw();
            turn_count++;
            play();
        })
    })
}

const play = () => {
    if(turn_count%2!=0){
        player();
    }else{
        setTimeout( () => {computer();}, 750);
        turn_count++;
    }
}

play();

let re = document.querySelector("#reset");

const reset = () =>{
        for(let i=0; i<9; i++){
            places[i].innerText = "";
        }
        p1.innerText="";
        p2.innerText="";
        p.innerText="";
        tie.innerText="";
        occupied=0;
        turn_count=1;
        board.style = "none";
        re.innerText = "RESET";
        for(let pattern of patterns){
            places[pattern[0]-1].style.color="black";
            places[pattern[1]-1].style.color="black";
            places[pattern[2]-1].style.color="black";
        }
}

re.addEventListener("click", reset);