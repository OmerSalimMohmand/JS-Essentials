
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

//__________________________________________________________________

let count = 0; // Initialize count to 0

function increaseCount() {
  count++;
  displayCount();
  checkCountValue();
}

function displayCount() {
document.getElementById('countDisplay').innerText=count;
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function resetCount(){
    count = 0;
    displayCount();
    setTimeout(()=>{
        alert("The followers count has been reset!");
    }, 1);
}

//__________________________________________________________________

function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const userExperience = document.getElementById('Experience').value;
    
    alert('Thank you for your valuable feedback');

    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;
    document.getElementById('userExperience').innerText = userExperience;

    document.getElementById('userInfo').style.display = 'block';
}

const submitButton=document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter')
        submitFeedback();
});