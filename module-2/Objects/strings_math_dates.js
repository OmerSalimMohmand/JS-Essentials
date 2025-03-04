//*** Strings

// const sentence = "The quick brown fox jumps over the lazy dog.";
// const hasFox = sentence.includes("fox");
// const indexOfFox = sentence.indexOf("fox");

// console.log(hasFox);
// console.log(indexOfFox);


// const text = "Hello, World!";
// const subText1 = text.slice(0, 5);
// const subText2 = text.substr(0, 5); //substr is deprecated
// const subText3= text.slice(7);
// const subText4= text.substr(7);
// const subText5= text.substr(7, 5);
// const subText6= text.substr(7, 5);

// console.log(subText1);
// console.log(subText2);
// console.log(subText3);
// console.log(subText4);
// console.log(subText5);
// console.log(subText6);

// const updatedText = text.replace("World", "Universe");
// console.log(updatedText);


// const csvData = "Omer,25,Edmonton;Jamshid,28,Kabul;Salim,30,New York";
// const people = csvData.split(';');
// console.log(people);

// const person1 = people[0].split(',');
// console.log(`Personal Detail:

// Name: ${person1[0]}
// Age: ${person1[1]}
// Province: ${person1[2]}`);

//*** Math

//   const quotes = [
//     "The only way to do great work is to love what you do. - Steve Jobs",
//     "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
//     "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
//     "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
//     "The best way to predict the future is to create it. - Peter Drucker",
//     "It is never too late to be what you might have been. - George Eliot",
//     "Life is what happens when you're busy making other plans. - John Lennon",
//     "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
//     "The purpose of our lives is to be happy. - Dalai Lama",
//     "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
//   ];

//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   console.log(quotes[randomIndex]);

// console.log(2 ** 3); // exponentiation operator
// console.log(16 ** (1/2));

//*** Date

// const currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth()); // 0 indexed: getMonth, getHours, getMinutes, getSeconds
// console.log(currentDate.getDate());

// console.log(currentDate.toLocaleDateString());
// console.log(currentDate.toLocaleDateString());
// console.log(currentDate.toLocaleTimeString());

setTimeout(() => {
    console.log("Late Hello");
}, 5000);

let count = 0;
const intervalId = setInterval(function(){
    console.log("Count: " + count);
    count++;
    if(count > 5)
        clearInterval(intervalId)
}, 1000);

