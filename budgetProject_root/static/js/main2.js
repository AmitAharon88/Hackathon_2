console.log('hello')
const root = document.getElementById('root');


function createExpense(day, category, type, amount) {
    const object = {
        day: day,
        category: category,
        type: type,
        amount: amount
    }
    console.log(object);
    console.log('hello')
    const data = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(object)
    }
    fetch('/api/budget/add-expense/', data).then(result => console.log(`test: ${result}`))
 }


const expenseForm = document.getElementById("expenseForm");
console.log(expenseForm);
expenseForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log('test');
    const day = document.getElementById("day").value;
    const category = document.getElementById("category").value;
    const type = document.getElementById("type").value;
    const amount = document.getElementById("amount").value;
    console.log(day, category, type, amount);
    createExpense(day, category, type, amount);
})