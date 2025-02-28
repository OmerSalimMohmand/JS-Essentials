
function calculateArea() {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
   
    //If the following was an addition operation the parseFloat(...('length').value) function was used to avoid concatination
    let area = length * width; 
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker(val1, val2, val3){
    // const total = parseFloat(val1) + parseFloat(val2) + parseFloat(val3);
    const total = +val1 + +val2 + +val3
    document.getElementById("total").innerText = `The total amount is :$ ${total.toFixed(2)}`;
}