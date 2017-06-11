/**
* Элемент html страницы div
*
* Используется для хранения 
* динамически созданных 
* элементов
*
* @var div articleDiv
*/
var articleDiv = document.querySelector("div.base");


/**
* Матрица доски судоку
*
* Используется для хранения 
* значений доски судоку 4*4
*
* @var int[] matrix
*/
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
            /**
            * Номер ячейки доски
            *
            * Случайная ячейка для маскировки
            *
            * @var int c
            */
            var c;
            do {
                c = Math.floor(Math.random() * 4);
            }
            while (matrix[(i * 2 + Math.floor(c / 2)) * 4 + j * 2 + c % 2] == 0);

            matrix[(i * 2 + Math.floor(c / 2)) * 4 + j * 2 + c % 2] = 0;
        }
    }
}





/**
* Таблица доски
*
* Используется для вывода  
* доски на страницу
*
* @var table table
*/
var table = document.createElement("table");
table.border = 1;
/**
* Строки таблицы
*
* Массив строк, используется для  
*  хранения строк таблицы
*
* @var tr[] trs
*/
var trs = new Array(4);
/**
* Столбцы таблицы
*
* Массив столбцов, используется для  
*  хранения столбцов таблицы
*
* @var tr[] trs
*/
var tds = new Array(16);

/**
* Изменяемые ячейки
*
* Массив полей ввода, используется 
* для хранения полей ввода пустых  
* ячеек таблицы
*
* @var input[] inputs
*/
var inputs = new Array(8);
/**
* Номера пустых ячеек
*
* Массив индексов, используется 
* для хранения номеров пустых  
* ячеек таблицы
*
* @var int[] inpinds
*/
var inpinds = new Array(8);

for (var i = 0; i < 8; i++) {
    inputs[i] = document.createElement("input");
    inputs[i].type = "text";
}


/**
* Событие ввода для поля 1
*
* Переназначить событие ввода
* для поля ввода 1 пустой
* ячейки. Служит для контроля ввода
* цифр.
*/
inputs[0].oninput = function () {
    var text = "";
    text = inputs[0].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[0].value = text.substring(0, text.length - 1);
}
/**
* Событие изменения для поля 1
*
* Переназначить событие изменения
* для поля ввода 1 пустой
* ячейки. Служит для проверки
* ячейки на совпадения в строке/столбце.
*/
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
/**
* Событие ввода для поля 2
*
* Переназначить событие ввода
* для поля ввода 2 пустой
* ячейки. Служит для контроля ввода
* цифр.
*/
inputs[1].oninput = function () {
    var text = "";
    text = inputs[1].value;
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[1].value = text.substring(0, text.length - 1);
}
/**
* Событие изменения для поля 2
*
* Переназначить событие изменения
* для поля ввода 2 пустой
* ячейки. Служит для проверки
* ячейки на совпадения в строке/столбце.
*/
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
/**
* Событие ввода для поля 3
*
* Переназначить событие ввода
* для поля ввода 3 пустой
* ячейки. Служит для контроля ввода
* цифр.
*/
inputs[2].oninput = function () {
    var text = "";
    text = inputs[2].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[2].value = text.substring(0, text.length - 1);
}
/**
* Событие изменения для поля 3
*
* Переназначить событие изменения
* для поля ввода 3 пустой
* ячейки. Служит для проверки
* ячейки на совпадения в строке/столбце.
*/
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
/**
* Событие ввода для поля 4
*
* Переназначить событие ввода
* для поля ввода 4 пустой
* ячейки. Служит для контроля ввода
* цифр.
*/
inputs[3].oninput = function () {
    var text = "";
    text = inputs[3].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[3].value = text.substring(0, text.length - 1);
}
/**
* Событие изменения для поля 4
*
* Переназначить событие изменения
* для поля ввода 4 пустой
* ячейки. Служит для проверки
* ячейки на совпадения в строке/столбце.
*/
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
/**
* Событие ввода для поля 5
*
* Переназначить событие ввода
* для поля ввода 5 пустой
* ячейки. Служит для контроля ввода
* цифр.
*/
inputs[4].oninput = function () {
    var text = "";
    text = inputs[4].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[4].value = text.substring(0, text.length - 1);
}
/**
* Событие изменения для поля 5
*
* Переназначить событие изменения
* для поля ввода 5 пустой
* ячейки. Служит для проверки
* ячейки на совпадения в строке/столбце.
*/
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
/**
* Событие ввода для поля 6
*
* Переназначить событие ввода
* для поля ввода 6 пустой
* ячейки. Служит для контроля ввода
* цифр.
*/
inputs[5].oninput = function () {
    var text = "";
    text = inputs[5].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[5].value = text.substring(0, text.length - 1);
}
/**
* Событие изменения для поля 6
*
* Переназначить событие изменения
* для поля ввода 6 пустой
* ячейки. Служит для проверки
* ячейки на совпадения в строке/столбце.
*/
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
/**
* Событие ввода для поля 7
*
* Переназначить событие ввода
* для поля ввода 7 пустой
* ячейки. Служит для контроля ввода
* цифр.
*/
inputs[6].oninput = function () {
    var text = "";
    text = inputs[6].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[6].value = text.substring(0, text.length - 1);
}
/**
* Событие изменения для поля 7
*
* Переназначить событие изменения
* для поля ввода 7 пустой
* ячейки. Служит для проверки
* ячейки на совпадения в строке/столбце.
*/
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
/**
* Событие ввода для поля 8
*
* Переназначить событие ввода
* для поля ввода 8 пустой
* ячейки. Служит для контроля ввода
* цифр.
*/
inputs[7].oninput = function () {
    var text = "";
    text = inputs[7].value
    if (text[text.length - 1] != 1 && text[text.length - 1] != 2 && text[text.length - 1] != 3 && text[text.length - 1] != 4)
        inputs[7].value = text.substring(0, text.length - 1);
}
/**
* Событие изменения для поля 8
*
* Переназначить событие изменения
* для поля ввода 8 пустой
* ячейки. Служит для проверки
* ячейки на совпадения в строке/столбце.
*/
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