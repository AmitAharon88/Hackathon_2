console.log('hello')
const root = document.getElementById('root');


function createExpense(day, category, type, amount) {
    console.log('hello')
    const data = {
        method: 'POST',
        headers: {
            content_type: 'application/json'
        },
        body: JSON.stringify({
            user, day, category, type, amount
        })
    }
    fetch('/api/createExpense/', data).then(result => console.log(`test: ${result}`))
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