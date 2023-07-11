console.log('hello')
const root = document.getElementById('root');

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    console.log(`getCookie(‘${name}’) returned: ${cookieValue}`);
    return cookieValue;
}

function createExpense(day, category, type, amount) {
    const object = {
        day: day,
        category: category,
        type: type,
        amount: amount
    }
    console.log(object);
    console.log('hello');
    const csrftoken = getCookie('csrftoken');  // get CSRF token
    console.log(csrftoken);
    const data = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken  // add CSRF token to request header
        },
        body: JSON.stringify(object)
    }
    fetch('/api/budget/add-expense/', data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
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
});