let cells = document.querySelectorAll(".cell");
let board = ["","","","","","","","",""];
let game = true;
let playerScore = 0;
let aiScore = 0;

function play(i) {

    if(board[i] == "" && game == true) {

        board[i] = "X";
        cells[i].innerHTML = "X";

        if(check()) {
            playerScore++;
            document.getElementById("result").innerHTML = "You Win! 🎉";
            document.getElementById("playerScore").innerHTML = playerScore;
            game = false;
        }

        else if(!board.includes("")) {
            document.getElementById("result").innerHTML = "Draw!";
            game = false;
        }

        else {
            computer();
        }
    }
}

function check() {

    if(board[0] == board[1] && board[1] == board[2] && board[0] != "") return true;
    else if(board[3] == board[4] && board[4] == board[5] && board[3] != "") return true;
    else if(board[6] == board[7] && board[7] == board[8] && board[6] != "") return true;
    else if(board[0] == board[3] && board[3] == board[6] && board[0] != "") return true;
    else if(board[1] == board[4] && board[4] == board[7] && board[1] != "") return true;
    else if(board[2] == board[5] && board[5] == board[8] && board[2] != "") return true;
    else if(board[0] == board[4] && board[4] == board[8] && board[0] != "") return true;
    else if(board[2] == board[4] && board[4] == board[6] && board[2] != "") return true;
    else return false;
}

function computer() {
    let i = -1;
    if(i == -1) {
        i = findMove("O");
    }
    if(i == -1) {
        i = findMove("X");
    }
    if(i == -1 && board[4] == "") {
        i = 4;
    }
    if(i == -1 && board[0] == "") i = 0;
    if(i == -1 && board[2] == "") i = 2;
    if(i == -1 && board[6] == "") i = 6;
    if(i == -1 && board[8] == "") i = 8;

    if(i == -1 && board[1] == "") i = 1;
    if(i == -1 && board[3] == "") i = 3;
    if(i == -1 && board[5] == "") i = 5;
    if(i == -1 && board[7] == "") i = 7;

    if(i != -1) {

        board[i] = "O";
        cells[i].innerHTML = "O";

        if(check()) {
            aiScore++;
            document.getElementById("result").innerHTML = "AI Wins!";
            document.getElementById("aiScore").innerHTML = aiScore;
            game = false;
        }

        else if(!board.includes("")) {
            document.getElementById("result").innerHTML = "Draw!";
            game = false;
        }

    }
}

function findMove(p) {

    if(board[0] == "" && board[1] == p && board[2] == p) return 0;
    if(board[1] == "" && board[0] == p && board[2] == p) return 1;
    if(board[2] == "" && board[0] == p && board[1] == p) return 2;

    if(board[3] == "" && board[4] == p && board[5] == p) return 3;
    if(board[4] == "" && board[3] == p && board[5] == p) return 4;
    if(board[5] == "" && board[3] == p && board[4] == p) return 5;

    if(board[6] == "" && board[7] == p && board[8] == p) return 6;
    if(board[7] == "" && board[6] == p && board[8] == p) return 7;
    if(board[8] == "" && board[6] == p && board[7] == p) return 8;

    if(board[0] == "" && board[3] == p && board[6] == p) return 0;
    if(board[3] == "" && board[0] == p && board[6] == p) return 3;
    if(board[6] == "" && board[0] == p && board[3] == p) return 6;

    if(board[1] == "" && board[4] == p && board[7] == p) return 1;
    if(board[4] == "" && board[1] == p && board[7] == p) return 4;
    if(board[7] == "" && board[1] == p && board[4] == p) return 7;

    if(board[2] == "" && board[5] == p && board[8] == p) return 2;
    if(board[5] == "" && board[2] == p && board[8] == p) return 5;
    if(board[8] == "" && board[2] == p && board[5] == p) return 8;

    if(board[0] == "" && board[4] == p && board[8] == p) return 0;
    if(board[4] == "" && board[0] == p && board[8] == p) return 4;
    if(board[8] == "" && board[0] == p && board[4] == p) return 8;

    if(board[2] == "" && board[4] == p && board[6] == p) return 2;
    if(board[4] == "" && board[2] == p && board[6] == p) return 4;
    if(board[6] == "" && board[2] == p && board[4] == p) return 6;

    return -1;
}

function restart() {

    board = ["","","","","","","","",""];
    game = true;

    cells[0].innerHTML = "";
    cells[1].innerHTML = "";
    cells[2].innerHTML = "";
    cells[3].innerHTML = "";
    cells[4].innerHTML = "";
    cells[5].innerHTML = "";
    cells[6].innerHTML = "";
    cells[7].innerHTML = "";
    cells[8].innerHTML = "";

    document.getElementById("status").innerHTML = "Your Turn (X)";
    document.getElementById("result").innerHTML = "Let's Play!";
}