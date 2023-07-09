const root = document.getElementById('root');

const pathname = window.location.pathname;
const pathnameParts = pathname.split('/');
const expenseId = pathnameParts[2];

 async function getExpenseDetail(expenseId) {
    try {
        const response = await fetch(`/api/budget/${expenseId}/`)
        if(response.ok) {
            const expenseData = await response.json(); //PROMISE
            clearChildren(root);
            renderExpense(expenseData);
        } else {
            throw new Error ("issues with fetch")
        }
    }catch(error) {
        console.log("ERROR", error)
    }
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

 getExpenseDetail(expenseId)