var tablemade = false;
function start() {
	if(document.getElementById("jsj") != null){
		var element = document.getElementById("jsj");
		element.parentNode.removeChild(element);
	}
	var file = fileInput.files[0];
	var reader = new FileReader();
	var str = "";
	reader.readAsText(file);
	var ary = [];
	reader.onload = function(e){
		var temp = reader.result;
		ary = temp.split("\n");
		var maze = [];
		for(var i = 0; i < ary.length; i++) maze.push(ary[i].split(''));
		console.log(maze);
		createTable(maze);
		while(!tablemade);
		createPath();
	}
}

function createTable(tableData) {
  var table = document.createElement('table');
  table.id="jsj";
  table.style="font-family:arial";
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
  tablemade = true;
}

function createPath(){
	var table = document.getElementById("jsj");
	var rows = table.getElementsByTagName("tr");
	var temp = document.getElementById("coor").value.split("\n");
	for(var i = 0; i < temp.length; i++){
		var line = temp[i].split(",");
		var x = line[0];
		var y = line[1];
		rows[parseInt(x)].cells[parseInt(y)].style.backgroundColor="#4286f4";
	}
}
