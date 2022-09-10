window.addEventListener('load', e=> {
  console.log('document loaded');
  init();
});

function init(){
	loadAll();
	adding();
	updating();
	deleting();
}
function deleting(){
	  document.deleteForm.delete.addEventListener('click', function(event){
	  console.log('deleting budget');
	  let budgetId = deleteForm.id.value
	console.log(budgetId);
	  deleteBudget(budgetId);
  });
}
function deleteBudget(budgetId){
	  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', 'api/budgets/'+budgetId);
  xhr.onreadystatechange = ()=> {
    if (xhr.readyState === 4){
      if(xhr.status === 204){
        console.log('Budget deleted')
      }else if(xhr.status === 400 ){
		displayError('Invalid data');
	}else{
        displayError('Film not found:' + xhr.status);
      }
    }
  };
  /*
  xhr.setRequestHeader("Content-type","application/JSON");
	let budgetJson = JSON.stringify(budget);
  xhr.send(budgetJson);
  */
  xhr.send();
}
function updating(){
	  document.updateForm.update.addEventListener('click', function(event){
	  console.log('updating budget');
	  let budget = {
		id: updateForm.id.value,
		category: updateForm.category.value,
		description: updateForm.description.value,
		amount: updateForm.amount.value,
		date: updateForm.date.value,
		variance: updateForm.variance.value,
	};
	console.log(budget);
	  updateBudget(budget);
  });
}

function adding(){
	  document.addForm.add.addEventListener('click', function(event){
	  console.log('adding budget');
	  
	  let budget = {
		category: addForm.category.value,
		description: addForm.description.value,
		amount: addForm.amount.value,
		date: addForm.date.value,
		variance: addForm.variance.value,
	};
	console.log(budget);
	  addBudget(budget);
  });
}

function loadAll(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'api/budgets');

  xhr.onreadystatechange = ()=> {
    if (xhr.readyState === 4){
      if(xhr.status === 200){
        let data = xhr.responseText;
        let budgets = JSON.parse(data);
        displayBudgets(budgets);
        
      }else{
        console.error('Filme not found:' + xhr.status);
      }
    }
  };

  xhr.send();
}
function displayBudgets(budgets){
	let headers = ['Id', 'Category','Description','Amount','Date','Variance'];

    let content = document.getElementById('tableBudget');

    let table = document.createElement('table');

    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    budgets.forEach(budget => {
        let row = document.createElement('tr');
        Object.values(budget).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    
    content.appendChild(table);
}
const cells = document.querySelectorAll('tr');
for (var i = 0; i < cells.length; i++) {
  console.log(cells[i].innerText);
  cells[i].addEventListener('click', (event) => {
    console.log(event.target.innerText); // Take the text node from the element who fire the click event.

    // If you don't want to use innerText, you can do like this.
        console.log(
           //We transform querySelectorAll to traversable array. Then we find index of current event target.
           Array.from(document.querySelectorAll('tr')).findIndex(e => e === event.target)
        );

  });
}


function addBudget(budget) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'api/budgets');
  console.log(budget);
  xhr.onreadystatechange = ()=> {
    if (xhr.readyState === 4){
      if(xhr.status === 200 || xhr.status === 201){
        console.log('Budget created')
        loadNew();
      }else if(xhr.status === 400 ){
		displayError('Invalid data');
	}else{
        displayError('Film not found:' + xhr.status);
      }
    }
  };
  xhr.setRequestHeader("Content-type","application/JSON");
	let budgetJson = JSON.stringify(budget);
  xhr.send(budgetJson);
}

function updateBudget(budget) {
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', 'api/budgets/'+budget.id);
  console.log(budget);
  xhr.onreadystatechange = ()=> {
    if (xhr.readyState === 4){
      if(xhr.status === 200 || xhr.status === 201){
        console.log('Budget updated')
      }else if(xhr.status === 400 ){
		displayError('Invalid data');
	}else{
        displayError('Film not found:' + xhr.status);
      }
    }
  };
  xhr.setRequestHeader("Content-type","application/JSON");
	let budgetJson = JSON.stringify(budget);
  xhr.send(budgetJson);
}
