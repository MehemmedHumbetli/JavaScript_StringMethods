// 1. Capitalize the first letter of a given string.
// Example: "hello" → "Hello"
 
// let text = "hello";
// console.log(text[0].toUpperCase() + text.slice(1));
 
 
// 2. Check if a string contains a specific substring.
// Example: "Hello World", substring "World" → true
 
// let text = "Hello World";
// function checkText(text,searchText)
// {
//         if (text.includes(searchText))
//         {
//                 return true;
//         }
//         else
//         {
//                 return false;
//         }
// }
 
// console.log(checkText(text,"World"));
 
// 3. Repeat a given string 'n' times.
// Example: "abc", 3 → "abcabcabc"
 
// let text = "abc";
// function repeatText(text,number)
// {
//         return text.repeat(number);
// }
// console.log(repeatText(text,3));
 
// 4. Replace all occurrences of a specific word in a string with another word.
// Example: "I love apples", replace "apples" with "oranges" → "I love oranges"
 
// let text = "I love apples";
 
// function replaceText(text,word,RPword)
// {
//         return text.replace(word,RPword);
// }
 
// console.log(replaceText(text,"apples","banana"));
 
// 5. Count the number of words in a sentence.
// Example: "Hello World!" → 2
 
// let text = "Hello World";
// function countWord(text)
// {
//         return text.split(" ").length
// }
 
// console.log(countWord(text));
 
// 6. Reverse the characters in a given string.
// Example: "hello" → "olleh"
 
// let text = "Hello";
 
// function reverseText(text)
// {
//         return text.split("").reverse().join("");
// }
// console.log(reverseText(text));
 
 
// 7. Extract the text between two characters.
// Example: "Hello [World]", characters "[" and "]" → "World"
 
// let text = "Hello [World]";

// function extractTextBetweenChars(input, startChar, endChar) {
//     let startIndex = input.indexOf(startChar);
//     let endIndex = input.indexOf(endChar);

//     return input.slice(startIndex + 1,endIndex);
// }

// console.log(extractTextBetweenChars(text,"[","]"));
 
// 8. Convert a string to snake_case format.
// Example: "Hello World" → "hello_world"
 
// let text = "Hello World";
// function convertSnakeCase(input)
// {
//     return input.toLowerCase().replace(" ","_")
// }
// console.log(convertSnakeCase(text));

// 9. Remove leading, trailing, and extra spaces in a string.
// Example: "   Hello    World   " → "Hello World"
 
// let text = "   Hello   World   ";
// function RemoveSpaces(input)
// {
//     return input.trim().replace(/\s+/g, ' ');
// }
// console.log(RemoveSpaces(text));

// 10. Identify the longest word in a given sentence.
// Example: "I love programming" → "programming"
 
// let text = "I love S1000RR";

// function LongestWord(input) {
//     let words = input.split(" ");
//     let longest = "";

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
    
//     return longest;      //FUNKSIYA MECBUR ISTIFADE ETMELIYDIM BASQA CUR ALINMIRDI)
// }

// console.log(LongestWord(text));

// Number Method Tasks
 
// 1. Convert a string to a number and handle invalid cases.
// Example: "123" → 123, "abc" → NaN
 
// let str = "123";

// function Convert_Number(input) {
//     let number = Number(input);


//     if (!isNaN(number)) {
//         return number; 
//     } else {
//         return NaN;
//     }
// }

// console.log(Convert_Number(str)); 

// 2. Round a decimal number to two decimal places.
// Example: 3.14159 → 3.14
 
// let num = 3.14159;
// function Round_two_decimal(input)
// {
//     return input.toFixed(2);
// }

// console.log(Round_two_decimal(num));

// 3. Write a function that returns the square root of a given number.
// Example: 5 → 25

// let number = 5;

// function Give_SquareNumber(input)
// {
//     return input * input;
// }
// console.log(Give_SquareNumber(number));
 
// 4. Write a function that converts a string to a floating-point number.
// Example: "2.454" → 2.454
 
// let str = "2.454";

// function Convert_To_Float(input) {
//     let number = Number(input);

//     if (!isNaN(number)) {
//         return number; 
//     } else {
//         return NaN;
//     }
// }

// console.log(Convert_To_Float(str));

// 5. Parse a string to an integer
// Example: "55" → 55
 
// let str = "55";

// function Parse_To_Int(input)
// {
//     return parseInt(input);
// }

// console.log(Parse_To_Int(str));

// 6. Write a function that checks if a given value is NaN (Not-a-Number)
// Example: "ereferf" → true, "23" → false
 
// let str = "123a";

// function Check_Num_Or_NaN(input) {
//     let number = Number(input);


//     if (!isNaN(number)) {
//         console.log("False");
//     } 
//     else {
//         console.log("TRUE")
//     }
// }
// console.log(Check_Num_Or_NaN(str));

// 7. Calculate the sum of the digits of a given number.
// Example: 123 → 6

// let number = 123; 

// function sumOfDigits(num) {
//     let sum = 0;
//     let digits = num.toString();

//     for (let i = 0; i < digits.length; i++) {
//         sum += parseInt(digits.charAt(i));
//     }

//     return sum;
// }

// console.log(sumOfDigits(number));

// 8. Find the number of digits in a given number.
// Example: 1234 → 4
 
// let number = 1234;
// function Count_Num(input)
// {
//     let digits = input.toString();
//     return digits.length;
// }

// console.log(Count_Num(number));

// 9. Find the sum of array items
// Example: [1, 3, "5"] → 9
 
// let arr = [1, 3, "5"];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]);
// }

// console.log(sum);
