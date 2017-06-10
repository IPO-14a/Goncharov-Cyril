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







var table = document.createElement("table");
table.border = 1;
var trs = new Array(4);
var tds = new Array(16);

for (var i = 0; i < 16; i++)
{
    tds[i] = document.createElement("td");
    tds[i].textContent = matrix[i];
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