window.onload = function () {

    let turn = 'X';
    let cells = document.getElementById("board").getElementsByTagName("td");
    let btn = document.getElementsByTagName('button')[0];

    function play() {
        if (this.innerHTML === '') {
            this.innerHTML = turn;
            setTimeout(function () {
                checkWinner();
            }, 0)
            turn = turn === 'X' ? 'O' : 'X';
        }

    }

    function checkWinner() {
        let winner;
        let board = document.getElementById('board').getElementsByTagName('td');
        if (board[0].innerHTML === board[1].innerHTML && board[2].innerHTML === board[0].innerHTML && board[0].innerHTML !== '') {
            winner = board[0].innerHTML;
            //console.log(board[0].innerHTML, 'wins')
        }

        if (board[3].innerHTML === board[4].innerHTML && board[5].innerHTML === board[3].innerHTML && board[3].innerHTML !== '') {
            winner = board[3].innerHTML;
            //console.log(board[3].innerHTML, 'wins')
        }

        if (board[6].innerHTML === board[7].innerHTML && board[8].innerHTML === board[6].innerHTML && board[6].innerHTML !== '') {
            winner = board[6].innerHTML;
            //console.log(board[6].innerHTML, 'wins')
        }

        if (board[0].innerHTML === board[3].innerHTML && board[6].innerHTML === board[0].innerHTML && board[0].innerHTML !== '') {
            winner = board[0].innerHTML;
            //console.log(board[0].innerHTML, 'wins')
        }

        if (board[1].innerHTML === board[4].innerHTML && board[7].innerHTML === board[1].innerHTML && board[1].innerHTML !== '') {
            winner = board[1].innerHTML;
            //console.log(board[1].innerHTML, 'wins')
        }

        if (board[2].innerHTML === board[5].innerHTML && board[8].innerHTML === board[2].innerHTML && board[2].innerHTML !== '') {
            winner = board[2].innerHTML;
            //console.log(board[2].innerHTML, 'wins')
        }

        if (board[0].innerHTML === board[4].innerHTML && board[8].innerHTML === board[0].innerHTML && board[0].innerHTML !== '') {
            winner = board[0].innerHTML;
            //console.log(board[0].innerHTML, 'wins')
        }

        if (board[2].innerHTML === board[4].innerHTML && board[6].innerHTML === board[2].innerHTML && board[2].innerHTML !== '') {
            winner = board[2].innerHTML;
            //console.log(board[2].innerHTML, 'wins')
        }
        if (winner) {
            alert(winner + ' wins!')
            for (var i in cells) {
                cells[i].innerHTML = '';
            }
        }
    }

    for (var i in cells) {
        cells[i].onclick = play;
    }

    btn.onclick = function () {
        turn = 'X';
        for (var i in cells) {
            cells[i].innerHTML = '';
        }
    }
}
