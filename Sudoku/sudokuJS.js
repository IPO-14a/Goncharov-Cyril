var CheckValues = function()
{

}
var InputNumber = function()
{
    //var input = document.getElementById(id);
    alert("asd");
}

var input = document.getElementById("testinput");

var line, column;

input.oninput = function () {
    //var input = document.getElementById(id);
    var text = "";
    text = input.value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        input.value = text.substring(0, text.length - 1);
}
input.onchange = function()
{
    line = 0;
    column = 0;
    for(var i=0; i<4; i++)
    {
        if (input.value == matrix[line * 4 + i]) input.value = "0"
        if (input.value == matrix[i * 4 + column]) input.value = "0"
    }
}









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
        // for each 3x3 subsquare, pick 5 random cells
        // and mask them.
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

for (var i = 0; i < 16; i++)
{
    tds[i] = document.createElement("td");
    if (matrix[i] != 0) tds[i].textContent = matrix[i];
    else tds[i].textContent = "";
}

for (var i = 0; i < 4; i++)
{
    trs[i] = document.createElement("tr");
    trs[i].appendChild(tds[i * 4 + 0])
    trs[i].appendChild(tds[i * 4 + 1])
    trs[i].appendChild(tds[i * 4 + 2])
    trs[i].appendChild(tds[i * 4 + 3])


    table.appendChild(trs[i]);
}

articleDiv.appendChild(table);