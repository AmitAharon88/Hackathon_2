async function getExpenseList () {
    try {
        const response = await fetch(`/api/expense`)
        if(response.ok) {
            const expenseData = await response.json(); //PROMISE
            clearChildren(root);
            renderExpenses(expenseData);
        } else {
            throw new Error ("issues with fetch")
        }
    }catch(error) {
            console.log("ERROR", error)
        }
}

function renderExpenses(data){
    return data.map(post => {
    renderExpense(post);
    })
}

function renderExpense(expense) {
    const root = document.getElementById('root');

    const newDiv = document.createElement('div');
    div.className = 'expense-item';
    const dateEl = document.createElement('h2');
    const categoryEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const amountEl = document.createElement('p');

    const dateText = document.createTextNode(expense['date']);
    const categoryText = document.createTextNode(expense['category']);
    const typeText = document.createTextNode(expense['type']);
    const amountText = document.createTextNode(expense['amount']);
 
    root.appendChild(newDiv);
    newDiv.appendChild(dateEl);
    newDiv.appendChild(categoryEl);
    newDiv.appendChild(typeEl);
    newDiv.appendChild(amountEl);
    newDiv.appendChild(dateEl);

    dateEl.appendChild(dateText);
    categoryEl.appendChild(categoryText);
    typeEl.appendChild(typeText);
    amountEl.appendChild(amountText);
}

getExpenseList()