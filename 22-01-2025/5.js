let arr = [
    { user: "abc", pass: "abc1234", card: "12345678", cvv: "124", amount: 10000 },
    { user: "cde", pass: "abc123", card: "12335678", cvv: "224", amount: 1000 },
    { user: "aqw", pass: "abc", card: "12345688", cvv: "174", amount: 100 }
];

let user = document.getElementById('name');
let pass = document.getElementById('pass');
let card = document.getElementById('card');
let cvv = document.getElementById('cvv');
let amountField = document.getElementById('amount');

// Function to authenticate user
function authenticateUser(username, password, callback) {
    setTimeout(() => {
        let data = arr.find(item => item.user === username && item.pass === password);
        if (data) {
            console.log("User authenticated.");
            callback(null, data);
        } else {
            callback("Authentication failed.");
        }
    }, 1000);
}

// Function to verify payment method
function verifyPaymentMethod(cardDetails, callback) {
    setTimeout(() => {
        let data = arr.find(item => item.card === cardDetails.card && item.cvv === cardDetails.cvv);
        if (data) {
            console.log("Payment method verified.");
            callback(null);
        } else {
            callback("Invalid card details.");
        }
    }, 1000);
}

// Function to process payment
function processPayment(amount, callback) {
    setTimeout(() => {
        if (amount > 0) {
            console.log("Payment processed.");
            callback(null);
        } else {
            callback("Payment failed: Invalid amount.");
        }
    }, 1000);
}

// Function to update account balance
function updateAccountBalance(username, amount, callback) {
    setTimeout(() => {
        let userAccount = arr.find(item => item.user === username);
        if (userAccount && userAccount.amount >= amount) {
            userAccount.amount -= amount;
            console.log(`Account balance updated for ${username} current balance ${userAccount.amount}.`);
            callback(null);
        } else {
            callback("Insufficient funds.");
        }
    }, 1000);
}

// Function to send email notification
function sendEmailNotification(user, callback) {
    setTimeout(() => {
        console.log(`Email sent to ${user} notifying payment success.`);
        callback(null);
    }, 1000);
}

// Main function to handle the transaction
function processTransaction() {
    const username = user.value;
    const password = pass.value;
    const cardDetails = { card: card.value, cvv: cvv.value };
    const amount = parseInt(amountField.value);

    if (!amount || isNaN(amount)) {
        console.log("Please enter a valid amount.");
        return;
    }

    authenticateUser(username, password, (authError, userData) => {
        if (authError) {
            console.log(authError);
            return;
        }

        verifyPaymentMethod(cardDetails, (verifyError) => {
            if (verifyError) {
                console.log(verifyError);
                return;
            }

            processPayment(amount, (paymentError) => {
                if (paymentError) {
                    console.log(paymentError);
                    return;
                }

                updateAccountBalance(username, amount, (balanceError) => {
                    if (balanceError) {
                        console.log(balanceError);
                        return;
                    }

                    sendEmailNotification(username, (emailError) => {
                        if (emailError) {
                            console.log(emailError);
                            return;
                        }

                        console.log("Payment transaction completed successfully.");
                    });
                });
            });
        });
    });
}
