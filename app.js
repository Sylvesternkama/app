let users = [];
let currentUser = null;
let balance = 0;

document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple user registration
    users.push({ username, password });
    alert('Registration successful!');
    this.reset();
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check credentials
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        alert('Login successful!');
        this.reset();
        updateBalance();
    } else {
        alert('Invalid username or password.');
    }
});

document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!currentUser) {
        alert('You need to log in first.');
        return;
    }

    const amount = parseFloat(document.getElementById('transaction-amount').value);
    const type = document.getElementById('transaction-type').value;

    // Handle transactions
    switch (type) {
        case 'save':
            balance += amount;
            alert(You saved $${amount}.);
            break;
        case 'withdraw':
            if (balance >= amount) {
                balance -= amount;
                alert(You withdrew $${amount}.);
            } else {
                alert('Insufficient balance.');
            }
            break;
        case 'receive':
            balance += amount;
            alert(You received $${amount}.);
            break;
        case 'transfer':
            // Placeholder for transfer logic
            alert(Transferred $${amount}. (Not implemented));
            break;
        case 'recharge':
            // Placeholder for recharge logic
            alert(Recharged for $${amount}. (Not implemented));
            break;
        default:
            alert('Invalid transaction type.');
    }

    this.reset();
    updateBalance();
});

function updateBalance() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}