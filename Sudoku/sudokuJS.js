var articleDiv = document.querySelector("div.base");









var table = document.createElement("table");
table.border = 1;
var trs = new Array(4);
var tds = new Array(16);

for (var i = 0; i < 16; i++)
{
    tds[i] = document.createElement("td");
    tds[i].textContent = 0;
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