const root = document.getElementById('root');

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
    return data.map(expense => renderExpense(expense));
}

 function renderExpense(expense) {
    const div = document.createElement('div');
    div.className = 'expense-item';
    // create a new elements to add into the new <div>
    const monthdDay = document.createElement('h3');
    const categoryTypeP = document.createElement('p');
    const amountP = document.createElement('p');

    const monthDayT = document.createTextNode(`${expense.day}`);
    const categoryTypeT = document.createTextNode(`${expense.category} ${expense.type}`);
    const amountT = document.createTextNode(expense.amount);
    // add some text into the h2 tag, the title of the post
    monthdDay.appendChild(monthDayT);
    categoryTypeP.appendChild(categoryTypeT);
    amountP.appendChild(amountT);

    div.appendChild(monthdDay, categoryTypeP, amountP);
 }

function button () {
    const expenseForm = document.getElementById("expenseForm")
    expenseForm.addEventListener('submit', event => {
        event.preventDefault();
        const day = document.getElementById("day").value;
        const category = document.getElementById("category").value;
        const type = document.getElementById("type").value;
        const amount = document.getElementById("amount").value;
        createExpense(month, day, category, type, amount)
    })
}

function createExpense(month, day, category, type, amount) {
    const data = {
        method: 'POST',
        headers: {
            content_type: 'application/json'
        },
        body: JSON.stringify({
            month, day, category, type, amount
        })
    }
    fetch('/api/createExpense/', data)
 }


 function clearChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
 }

 getExpenseList();