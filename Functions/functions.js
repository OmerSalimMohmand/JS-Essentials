
function calculateArea() {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
   
    //If the following was an addition operation the parseFloat(...('length').value) function was used to avoid concatination
    let area = length * width; 
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}