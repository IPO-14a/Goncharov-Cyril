

/*var input = document.getElementById("testinput");

var line, column;

input.oninput = function () {
    //var input = document.getElementById(id);
    var text = "";
    text = input.value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        input.value = text.substring(0, text.length - 1);
}
input.onchange = function () {
    line = 0;
    column = 0;
    for (var i = 0; i < 4; i++) {
        if (input.value == matrix[line * 4 + i]) input.value = "0"
        if (input.value == matrix[i * 4 + column]) input.value = "0"
    }
}*/




var articleDiv = document.querySelector("div.base");



var matrix = new Array(16);



for (var i = 0; i < 4; i++)
    for (var j = 0; j < 4; j++)
        matrix[i * 4 + j] = (i * 2 + Math.floor(i / 2) + j) % 4 + 1;








for (var i = 0; i < 100; i++) {
    var n1 = Math.ceil(Math.random() * 4);
    var n2;
    do {
        n2 = Math.ceil(Math.random() * 4);
    }
    while (n1 == n2);

    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
            if (matrix[row * 4 + col] == n1)
                matrix[row * 4 + col] = n2;
            else if (matrix[row * 4 + col] == n2)
                matrix[row * 4 + col] = n1;
        }
    }
}

for (var c = 0; c < 100; c++) {
    var s1 = Math.floor(Math.random() * 2);
    var s2 = Math.floor(Math.random() * 2);

    for (var row = 0; row < 4; row++) {
        var tmp = this.matrix[row * 4 + (s1 * 2 + c % 2)];
        this.matrix[row * 4 + (s1 * 2 + c % 2)] = this.matrix[row * 4 + (s2 * 2 + c % 2)];
        this.matrix[row * 4 + (s2 * 2 + c % 2)] = tmp;
    }
}


for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
        for (var k = 0; k < 2; k++) {
            var c;
            do {
                c = Math.floor(Math.random() * 4);
            }
            while (matrix[(i * 2 + Math.floor(c / 2)) * 4 + j * 2 + c % 2] == 0);

            matrix[(i * 2 + Math.floor(c / 2)) * 4 + j * 2 + c % 2] = 0;
        }
    }
}






var table = document.createElement("table");
table.border = 1;
var trs = new Array(4);
var tds = new Array(16);



var inputs = new Array(8);
var inpinds = new Array(8);

for (var i = 0; i < 8; i++) {
    inputs[i] = document.createElement("input");
    inputs[i].type = "text";
}

inputs[0].oninput = function () {
    var text = "";
    text = inputs[0].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[0].value = text.substring(0, text.length - 1);
}
inputs[0].onchange = function () {
    var line = Math.floor(inpinds[0] / 4);
    var column = inpinds[0] % 4;
    inputs[0].className = "right";
    for (var i = 0; i < 4; i++) {
        if (inputs[0].value == matrix[line * 4 + i]) inputs[0].className = "wrong";
        if (inputs[0].value == matrix[i * 4 + column]) inputs[0].className = "wrong";
    }
    matrix[inpinds[0]] = inputs[0].value
}
inputs[1].oninput = function () {
    var text = "";
    text = inputs[1].value;
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[1].value = text.substring(0, text.length - 1);
}
inputs[1].onchange = function () {
    var line = Math.floor(inpinds[1] / 4);
    var column = inpinds[1] % 4;
    inputs[1].className = "right";
    for (var i = 0; i < 4; i++) {
        if (inputs[1].value == matrix[line * 4 + i]) inputs[1].className = "wrong";
        if (inputs[1].value == matrix[i * 4 + column]) inputs[1].className = "wrong";
    }
    matrix[inpinds[1]] = inputs[1].value
}
inputs[2].oninput = function () {
    var text = "";
    text = inputs[2].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[2].value = text.substring(0, text.length - 1);
}
inputs[2].onchange = function () {
    var line = Math.floor(inpinds[2] / 4);
    var column = inpinds[2] % 4;
    inputs[2].className = "right";
    for (var i = 0; i < 4; i++) {
        if (inputs[2].value == matrix[line * 4 + i]) inputs[2].className = "wrong";
        if (inputs[2].value == matrix[i * 4 + column]) inputs[2].className = "wrong";
    }
    matrix[inpinds[2]] = inputs[2].value
}
inputs[3].oninput = function () {
    var text = "";
    text = inputs[3].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[3].value = text.substring(0, text.length - 1);
}
inputs[3].onchange = function () {
    var line = Math.floor(inpinds[3] / 4);
    var column = inpinds[3] % 4;
    inputs[3].className = "right";
    for (var i = 0; i < 4; i++) {
        if (inputs[3].value == matrix[line * 4 + i]) inputs[3].className = "wrong";
        if (inputs[3].value == matrix[i * 4 + column]) inputs[3].className = "wrong";
    }
    matrix[inpinds[3]] = inputs[3].value
}
inputs[4].oninput = function () {
    var text = "";
    text = inputs[4].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[4].value = text.substring(0, text.length - 1);
}
inputs[4].onchange = function () {
    var line = Math.floor(inpinds[4] / 4);
    var column = inpinds[4] % 4;
    inputs[4].className = "right";
    for (var i = 0; i < 4; i++) {
        if (inputs[4].value == matrix[line * 4 + i]) inputs[4].className = "wrong";
        if (inputs[4].value == matrix[i * 4 + column]) inputs[4].className = "wrong";
    }
    matrix[inpinds[4]] = inputs[4].value
}
inputs[5].oninput = function () {
    var text = "";
    text = inputs[5].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[5].value = text.substring(0, text.length - 1);
}
inputs[5].onchange = function () {
    var line = Math.floor(inpinds[5] / 4);
    var column = inpinds[5] % 4;
    inputs[5].className = "right";
    for (var i = 0; i < 4; i++) {
        if (inputs[5].value == matrix[line * 4 + i]) inputs[5].className = "wrong";
        if (inputs[5].value == matrix[i * 4 + column]) inputs[5].className = "wrong";
    }
    matrix[inpinds[5]] = inputs[5].value
}
inputs[6].oninput = function () {
    var text = "";
    text = inputs[6].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[6].value = text.substring(0, text.length - 1);
}
inputs[6].onchange = function () {
    var line = Math.floor(inpinds[6] / 4);
    var column = inpinds[6] % 4;
    inputs[6].className = "right";
    for (var i = 0; i < 4; i++) {
        if (inputs[6].value == matrix[line * 4 + i]) inputs[6].className = "wrong";
        if (inputs[6].value == matrix[i * 4 + column]) inputs[6].className = "wrong";
    }
    matrix[inpinds[6]] = inputs[6].value
}
inputs[7].oninput = function () {
    var text = "";
    text = inputs[7].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[7].value = text.substring(0, text.length - 1);
}
inputs[7].onchange = function () {
    var line = Math.floor(inpinds[7] / 4);
    var column = inpinds[7] % 4;
    inputs[7].className = "right";
    for (var i = 0; i < 4; i++) {
        if (inputs[7].value == matrix[line * 4 + i]) inputs[7].className = "wrong";
        if (inputs[7].value == matrix[i * 4 + column]) inputs[7].className = "wrong";
    }
    matrix[inpinds[7]] = inputs[7].value
}



for (var i = 0, j = 0; i < 16; i++) {
    tds[i] = document.createElement("td");
    if (matrix[i] != 0) tds[i].textContent = matrix[i];
    else {
        inpinds[j] = i;
        tds[i].appendChild(inputs[j]);
        j++;
    }
}






for (var i = 0; i < 4; i++) {
    trs[i] = document.createElement("tr");
    trs[i].appendChild(tds[i * 4 + 0])
    trs[i].appendChild(tds[i * 4 + 1])
    trs[i].appendChild(tds[i * 4 + 2])
    trs[i].appendChild(tds[i * 4 + 3])


    table.appendChild(trs[i]);
}

articleDiv.appendChild(table);