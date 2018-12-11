window.onload = function () {
    let turn = 'X';
    let board = document.getElementById("board").getElementsByTagName("td");
    let btn = document.getElementsByTagName('button')[0];
    let player1 = document.getElementById('player1-form');
    let player2 = document.getElementById('player2-form');

    player1.onsubmit = function (e) {
        e.preventDefault();
        let name = player1.firstChild.nextSibling.value;
        var nameText = document.getElementById('x-name');
        nameText.innerText = name;
        player1.innerHTML = '';
    }

    player2.onsubmit = function (e) {
        e.preventDefault();
        let name = player2.firstChild.nextSibling.value;
        let nameText = document.getElementById('o-name');
        nameText.innerText = name;
        player2.innerHTML = '';

    }

    const play = function () {
        if (this.innerHTML === '') {
            this.innerHTML = turn;
            setTimeout(function () {
                checkWinner();
            }, 0)
            checkTurn();
        }
    }

    const checkTurn = function () {
        turn = turn === 'X' ? 'O' : 'X';
    }

    const resetGame = function () {
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
            let name;
            if (winner === 'X') {
                name = document.getElementById('x-name').innerText;
                count = document.getElementById('x-count');

            } else if (winner === 'O') {
                name = document.getElementById('o-name').innerText;
                count = document.getElementById('o-count');
            }
            var num = Number(count.innerHTML) + 1;
            count.innerHTML = String(num);
            alert(name + ' wins!')
            resetGame();
            turn = winner;
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
