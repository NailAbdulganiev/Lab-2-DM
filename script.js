function createMatrix() {
	var n = document.getElementById("n").value;
	if (n < 0) {
		alert("n не может быть отрицательным");
	}
    var html = '<table>';

    for (var i = 0; i < n; i++) {
		html += '<tr>';
		for(var j = 0; j < n; j++) {
			html += '<td> <input type="number" class="cell" min="0" max="1"></td>';
		}
		html += '</tr>';       
    }

    html += '</table>';

    document.getElementById('table').innerHTML = html; 

}

function validation() {
	var n = document.getElementById("n").value;
	var arr = document.getElementsByClassName("cell");
	
	var s = 1;
	var k = 1;
	for (var i = 1; i <= n * n; i++) {
		if(!(arr[i-1].value == 0 || arr[i-1].value == 1)) {
			if(s == 2) {
				alert("Исправьте "+ k + " элемент во " + s + " строке");
			}
			else {
				alert("Исправьте "+ k + " элемент в " + s + " строке");
			}			
			break;
		}
		k++;
		if (i % n == 0) {
			s++;
			k = 1;
		}		
    }

	return true;
}

function ref() {
	var n = document.getElementById("n").value;
	var arr = document.getElementsByClassName("cell");

	var k = 0;
	var con = true;
	for (var i = 0; i < n; i++){
		for (var j = 0; j < n; j++){
			if(i == j) {
				if(arr[k].value != 1) {
					con = false;
				}				
			}
			k++;
		}	
	}
	
	if(con) {
		document.getElementById('ref').innerHTML = 'Рефлексивно';
	}
	else {
		document.getElementById('ref').innerHTML = 'Не является рефлексивным';
	}
}

function simm() {
	var n = document.getElementById("n").value;
	var arr = document.getElementsByClassName("cell");

	var k = 0;
	var con = true;
	var arr2 = [];
	for (var i = 0; i < n; i++){
		arr2[i] = [];
		for (var j = 0; j < n; j++){
			arr2[i][j] = arr[k].value;
			k++;
		}	
	}
	
	for (var i = 0; i < n; i++){
		for (var j = 0; j < n; j++){
			if(!(arr2[i][j] == arr2[j][i])) {
				con = false;
			}
		}	
	}
	
	if(con) {
		document.getElementById('simm').innerHTML = 'Симметрично';
	}
	else {
		document.getElementById('simm').innerHTML = 'Не является симметричным';
	}
}

function cososimm() {
	var n = document.getElementById("n").value;
	var arr = document.getElementsByClassName("cell");

	var k = 0;
	var con = true;
	var arr2 = [];
	for (var i = 0; i < n; i++){
		arr2[i] = [];
		for (var j = 0; j < n; j++){
			arr2[i][j] = arr[k].value;
			k++;
		}	
	}
	
	for (var i = 0; i < n; i++){				
		for (var j = 0; j < n; j++){
			if(i != j) {
				if(!(arr2[i][j] != arr2[j][i])) {
					con = false;
				}
			}			
		}	
	}
	
	if(con) {
		document.getElementById('antisimm').innerHTML = 'Кососимметрично';
	}
	else {
		document.getElementById('antisimm').innerHTML = 'Не является кососимметричным';
	}
}

function trans() {
	var n = document.getElementById("n").value;
	var arr = document.getElementsByClassName("cell");

	var k = 0;
	var con = true;
	var arr2 = [];
	var kv = [];						//перевод в двумерный массив
	for (var i = 0; i < n; i++){
		arr2[i] = [];
		kv[i] = [];
		for (var j = 0; j < n; j++){
			arr2[i][j] = arr[k].value;
			kv[i][j] = 0;
			k++;
		}	
	}
	
	for (var i = 0; i < n; i++) {		//возведение матрицы в квадрат
		for (var j = 0; j < n; j++) {
			for (var z = 0; z < n; z++) {
				kv[i][j] += arr2[i][z] * arr2[z][j];
			}
			if (kv[i][j] > 1) {
				kv[i][j] = 1;
			}
		}		
	}	
	
	for (var i = 0; i < n; i++){		//если единиц в квадрате матрицы больше, то нетранзитивно
		for (var j = 0; j < n; j++){
			if (arr2[i][j] < kv[i][j]) {
				con = false;
			}				
		}		
	}	
	
	if(con) {
		document.getElementById('trans').innerHTML = 'Транзитивно';
	}
	else {
		document.getElementById('trans').innerHTML = 'Не является транзитивным';
	}
}

function properties() {
	validation();
	ref();
	simm();
	cososimm();
	trans();
}