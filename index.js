// 1-misol

// function createThreeDigitNumber(a, b, c) {
//     if (a <= 0 || b <= 0 || c <= 0) {
//         console.log(0);
//     } else {
//         let threeDigitNumber = a * 100 + b * 10 + c;
//         console.log(threeDigitNumber);
//     }
// }

// 2-misol

// function getWeekday(dayNumber) {
//     switch (dayNumber) {
//         case 1:
//             console.log('Dushanba');
//             break;
//         case 2:
//             console.log('Seshanba');
//             break;
//         case 3:
//             console.log('Chorshanba');
//             break;
//         case 4:
//             console.log('Payshanba');
//             break;
//         case 5:
//             console.log('Juma');
//             break;
//         case 6:
//             console.log('Shanba');
//             break;
//         case 7:
//             console.log('Yakshanba');
//             break;
//         default:
//             console.log('none');
//     }
// }

// 3-misol

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }


// 4-misol

// function digitCount(a) {
//     if (a >= 1 && a <= 9) {
//         return 1;
//     } else if (a >= 10 && a <= 99) {
//         return 2;
//     } else if (a >= 100 && a <= 999) {
//         return 3;
//     } else {
//         return "Noto'g'ri son kiritildi"; // Agar son berilgan oraliqda bo'lmasa
//     }
// }


// 5-misol

// function areAllPositive(a, b, c, d) {
//     if (a > 0 && b > 0 && c > 0 && d > 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// 6-misol

// function sumUpToA(a) {
//     let sum = 0;
//     for (let i = 0; i <= a; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }

// 7-misol

// function isPerfectNumber(a) {
//     let sum = 0;
//     for (let i = 1; i < a; i++) {
//         if (a % i === 0) {
//             sum += i;
//         }
//     }
//     if (sum === a) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }


// 8-misol

// function countDigits(n) {
//     let digitCount = n.toString().length;
//     console.log('Raqamlari soni:', digitCount);
// }

// 9-misol

// function isPalindrome(n) {
    // Sonni satrga aylantiramiz
//     let str = n.toString();
//     let length = str.length;

//      Palindrom ekanligini tekshirish uchun for tsiklidan foydalanamiz
//     for (let i = 0; i < length / 2; i++) {
//         if (str[i] !== str[length - 1 - i]) {
//             console.log(false);
//             return;
//         }
//     }
//     console.log(true);
// }

// 10-misol

// function sumOfDigits(n) {
//     let sum = 0;
//     let str = n.toString();

//     for (let i = 0; i < str.length; i++) {
//         sum += parseInt(str[i], 10);
//     }

//     console.log(sum);
// }

// 11-misol

// function sumOfDigits(n) {
     // Sonni satrga aylantiramiz
//     let str = n.toString();
//     let sum = 0;

     // Har bir raqamni yig'indisini hisoblaymiz
//     for (let i = 0; i < str.length; i++) {
//         let digit = parseInt(str[i], 10); // Satrning i-chi belgisini raqamga aylantiramiz
//         sum += digit; // Summani yangilaymiz
//     }

     // Natijani chiqaramiz
//     console.log('Raqamlar yig\'indisi:', sum);
// }

// 12-misol

// function reverseArray(arr) {
//     let reversedArray = [];

//     // Massivni teskari tartibda yangi massivga ko'chirib o'tkazamiz
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray.push(arr[i]);
//     }

//     // Natijani konsolga chiqaramiz
//     console.log('Teskarisi:', reversedArray);
// }


// 13-misol

// function countOccurrences(n, arr) {
//     let count = 0;

//     // Massivni o'zini tekshiramiz
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             count++;
//         }
//     }

//     // Natijani chiqaramiz
//     console.log(`Natija: bu yerda ${count} ta ${n} bor.`);
// }


// 14-misol

// function findTwoElementsWithSum(a, arr) {
//     let found = false;

//     // Massivni tekshiramiz
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === a) {
//                 console.log(`Topilgan ikkita element: ${arr[i]} va ${arr[j]}`);
//                 found = true;
//                 break;
//             }
//         }
//         if (found) {
//             break;
//         }
//     }

//     if (!found) {
//         console.log(`Berilgan massivda ${a} ga teng bo'lishadigan ikkita element topilmadi.`);
//     }
// }


// 15-misol

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         console.log("Massivda kamida ikkita element bo'lishi kerak.");
//         return;
//     }

//     let max1 = -Infinity; // Eng katta birinchi element
//     let max2 = -Infinity; // Eng katta ikkinchi element

//     // Massivdagi eng katta va eng katta ikkinchi elementlarni topish
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max1) {
//             max2 = max1;   // Avvalgi eng katta ikkinchi element max2 ga olamiz
//             max1 = arr[i]; // Eng katta element max1 ga olamiz
//         } else if (arr[i] > max2 && arr[i] !== max1) {
//             max2 = arr[i]; // Agar hozirgi element max2 dan katta bo'lsa va max1 ga teng bo'lmasa, max2 ni yangilaymiz
//         }
//     }

//     // Natijani chiqaramiz
//     if (max2 !== -Infinity) {
//         console.log("Eng katta ikkinchi element:", max2);
//     } else {
//         console.log("Massivda kamida ikkita bir xil element bo'lishi kerak.");
//     }
// }
