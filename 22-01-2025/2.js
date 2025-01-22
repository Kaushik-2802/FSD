function multiplyBy2(num, callback) {
    const result = num * 2;
    callback(result); 
}

function subtract3(num, callback) {
    const result = num - 3;
    callback(result); 
}


function add10(num, callback) {
    const result = num + 10;
    callback(result); 
}


function performOperations(num, callback) {
    multiplyBy2(num, (result1) => {
        subtract3(result1, (result2) => {
            add10(result2, (result3) => {
                callback(result3); 
            });
        });
    });
}

performOperations(5, (finalResult) => {
    console.log("Final result:", finalResult); 
});
