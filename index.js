class TableClass {
	constructor() {
		this.table = document.createElement('table');
		this.table.border = 1;
		this.table.width = "100%";

		this.tbody = document.createElement('tbody');
		this.table.appendChild(this.tbody);
		let rowLength = this.table.rows.length;
		this.table.insertRow(rowLength);
	}

	initialTable(data) {
		for (let index = 0; index < data.length; index++) {
			let rowLength = this.table.rows.length;
			this.tbody.insertRow(rowLength);
	
			this.tbody.rows[rowLength].insertCell(0);
			this.tbody.rows[rowLength].cells[0].appendChild(document.createTextNode(index));
			this.tbody.rows[rowLength].insertCell(1);
			this.tbody.rows[rowLength].cells[1].appendChild(document.createTextNode(data[index]));
		}
	}

	addRow() {
		let rowLength = this.table.rows.length;
		this.tbody.insertRow(rowLength);
		let cellsLength = this.table.rows[rowLength - 1].cells.length;
	
		for (let index = 0; index < cellsLength; index++) {
			if (index === cellsLength - 1) {
			this.tbody.rows[rowLength].insertCell(index);
				const value = parseInt(this.tbody.rows[rowLength - 1].cells[index].innerText);
				this.tbody.rows[rowLength].cells[index].appendChild(document.createTextNode(value + 1));
			} else {
				this.tbody.rows[rowLength].insertCell(index);
				this.tbody.rows[rowLength].cells[index].appendChild(document.createTextNode(rowLength - 1));
			}
		}
	}

	deleteRow() {
		let rowLength = this.table.rows.length;
		if (rowLength < 1) {
			alert('table is null');
		} else {
			this.table.deleteRow(rowLength - 1);
		}
	}

	assignTableData(data) {
		// table index start with 1
		for (let index = 1; index <= data.length; index++) {
			this.tbody.rows[index].cells[1].innerText = data[index - 1];
		}
	}
}

// TODO: class ReadData

// TODO: class ButtonAction
class ButtonAction {
	sortTable(tableClass) {
		// TODO: get all table data and assign an array
		let rowLength = tableClass.table.rows.length - 1;
		let tableValues = [];
		for (let index = 1; index <= rowLength; index++) {
			const tableValue = parseInt(tableClass.tbody.rows[index].cells[1].innerText);
			tableValues.push(tableValue);
		}
		
		tableValues = tableValues.sort((a, b) => {
			return a - b;
		});
	
		tableClass.assignTableData(tableValues);
	}	
}


let data = [1, 4, 7, 3, 2];
let renderTable = new TableClass();
let action = new ButtonAction();
renderTable.initialTable(data);

document.body.appendChild(renderTable.table);
// //增加列
// function addCol() {
//     let rowLength = table.rows.length;
//     let colLength;
//     if (rowLength < 1) {
//         tbody.insertRow(0);
//         tbody.rows[0].insertCell(0);
//         tbody.rows[0].cells[0].appendChild(document.createTextNode('cell0.0'));
//     } else {
//         colLength = table.rows[0].cells.length;
//         for (let i = 0; i < rowLength; i++) {
//             tbody.rows[i].insertCell(colLength);
//             tbody.rows[i].cells[colLength].appendChild(document.createTextNode('cell' + i + '.' + colLength));
//         }
//     }
// }
// //删除列
// function deleteCol() {
//     let rowLength = table.rows.length;
//     let colLength;
//     if (rowLength < 1) {
//         alert('table is null');
//     } else {
//         colLength = table.rows[0].cells.length;
//         if (colLength === 1) {
//             while (tbody.hasChildNodes()) {
//                 tbody.removeChild(tbody.firstChild);
//             }
//         } else {
//             for (let i = 0; i < rowLength; i++) {
//                 tbody.rows[i].deleteCell(colLength - 1);
//             }
//         }
//     }
// }