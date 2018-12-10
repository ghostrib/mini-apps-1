window.onload = function () {

    let turn = 'X';
    let board = document.getElementById("board").getElementsByTagName("td");
    let btn = document.getElementsByTagName('button')[0];

    const play = function () {
        if (this.innerHTML === '') {
            this.innerHTML = turn;
            setTimeout(function () {
                checkWinner();
            }, 0)
            turn = turn === 'X' ? 'O' : 'X';
        }
    }

    const resetGame = function () {
        turn = 'X';
        for (var i in board) {
            board[i].innerHTML = ''
        }
    }

    const checkWinner = function () {
        let winner;
        if (board[0].innerHTML === board[1].innerHTML && board[2].innerHTML === board[0].innerHTML && board[0].innerHTML !== '') {
            winner = board[0].innerHTML;
        }
        if (board[3].innerHTML === board[4].innerHTML && board[5].innerHTML === board[3].innerHTML && board[3].innerHTML !== '') {
            winner = board[3].innerHTML;
        }
        if (board[6].innerHTML === board[7].innerHTML && board[8].innerHTML === board[6].innerHTML && board[6].innerHTML !== '') {
            winner = board[6].innerHTML;
        }
        if (board[0].innerHTML === board[3].innerHTML && board[6].innerHTML === board[0].innerHTML && board[0].innerHTML !== '') {
            winner = board[0].innerHTML;
        }
        if (board[1].innerHTML === board[4].innerHTML && board[7].innerHTML === board[1].innerHTML && board[1].innerHTML !== '') {
            winner = board[1].innerHTML;
        }
        if (board[2].innerHTML === board[5].innerHTML && board[8].innerHTML === board[2].innerHTML && board[2].innerHTML !== '') {
            winner = board[2].innerHTML;
        }
        if (board[0].innerHTML === board[4].innerHTML && board[8].innerHTML === board[0].innerHTML && board[0].innerHTML !== '') {
            winner = board[0].innerHTML;
        }
        if (board[2].innerHTML === board[4].innerHTML && board[6].innerHTML === board[2].innerHTML && board[2].innerHTML !== '') {
            winner = board[2].innerHTML;
        }
        if (winner) {
            let count;
            if (winner === 'X') {
                count = document.getElementById('x-count');
            } else if (winner === 'O') {
                count = document.getElementById('o-count');
            }
            var num = Number(count.innerHTML) + 1;
            count.innerHTML = String(num);
            alert(winner + ' wins!')
            resetGame();
        }
    }

    for (let i in board) {
        board[i].onclick = play;
    }

    btn.onclick = function () {
        turn = 'X';
        resetGame();
    }
}
