window.onload = function () {

    let turn = 'X';
    let cells = document.getElementById("board").getElementsByTagName("td");
    let btn = document.getElementsByTagName('button')[0];

    function next() {
        turn = turn === 'X' ? 'O' : 'X';
    }
    function play() {
        if (this.innerHTML === '') {
            this.innerHTML = turn;
            next();
        }
    }

    for (var i in cells) {
        cells[i].onclick = play;
    }

    btn.onclick = function () {
        for (var i in cells) {
            cells[i].innerHTML = '';
        }
    }

}
