
function delayedMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message); 
        callback(); 
    }, delay);
}

delayedMessage("This is a delayed message", 2000, () => {
    console.log("Message has been printed.");
});
