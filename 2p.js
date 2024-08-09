// alert("Player 1 is X and player 2 is O")

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

let turn_count = 0;

let pre=document.querySelector("pre");
let p1=document.querySelector("#player1");
let p2=document.querySelector("#player2");
let p=document.querySelector("#win");
let tie=document.querySelector("#tie");

let board = document.querySelector(".main_area");
let final = document.querySelector(".final");
let clear1 = document.querySelector("#edit1");
let clear2 = document.querySelector("#edit2");

places.forEach((place) => {

    place.addEventListener("click", () => {
        turn_count++;
        if(turn_count%2!=0){
            place.innerText="X";
        } else {
            place.innerText="O";
        }
        win();
        setTimeout(() => { draw(); }, 200);
    });

    place.addEventListener("dblclick", () => {
        place.innerText="";
        occupied--;
    })
})

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

                setTimeout(() => { the_end(); }, 200);
                setTimeout(() => { winner(); }, 200);
            }
        }
    }
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
            setTimeout(() => { the_end(); }, 200);
            setTimeout(() => { a_tie(); }, 200);
        }
    }
}

const the_end = () => {

    board.style.display = "none";
    clear1.style.display = "none";
    clear2.style.display = "none";

}

const winner = () =>{

    if(turn_count%2!=0){
        p1.innerText="Congratulations player 1";
    }
    
    else {
        p2.innerText="Congratulations player 2";
    }

    p.innerText="You won!!!";
    tie.innerText = "";
    re.innerText="RESTART?";
}

const a_tie = () => {
    tie.innerText="It is a tie";
    re.innerText="RESTART?";
}

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
        turn_count=0;
        board.style = "none";
        clear1.style = "none";
        clear2.style = "none";
        re.innerText = "RESET";
        for(let pattern of patterns){
            places[pattern[0]-1].style.color="black";
            places[pattern[1]-1].style.color="black";
            places[pattern[2]-1].style.color="black";
        }
}

re.addEventListener("click", reset);