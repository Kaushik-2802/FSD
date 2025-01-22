function fetchDataWithCallback(isSuccess, callback) {
    setTimeout(() => {
        if (isSuccess) {

            const response =   "Successfully fetched data" ;
            callback(null, response); 
        } else {

            const error = "Failed to fetch data";
            callback(error, null);
        }
    }, 2000);
}

fetchDataWithCallback(true, (error, response) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Success:", response);
    }
});


