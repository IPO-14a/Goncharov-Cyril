var articleDiv = document.querySelector("div.base");



var matrix = new Array(16);



for (var i = 0; i < 4; i++)
    for (var j = 0; j < 4; j++)
        matrix[i * 4 + j] = (i * 2 + Math.floor(i / 2) + j) % 4 + 1;








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