'use strict';


/* 7 kyu  7 kyu  7 kyu  7 kyu  7 kyu  7 kyu */












/* Отфильтровать положительные числа */










/* Вернуть сумму чисел из заданного массива, если пустой -- 0 */


// function sum(numbers) {
//     let result = 0;

// 	numbers.forEach(num => {
// 		if (numbers.length == 0) {
// 			return 0;
// 		} else {
// 			result += num;
// 		}
// 	})
//     return result;
// };

// console.log(sum([1, 5.2, 4, 0, -1]));
// console.log(sum([]));
// console.log(sum([-1.398]));







// function filter_list(l) {


/* for */

	// let result = [];

	// for (let i = 0; i <= l.length; i++) {
	// 	if (l[i] >= 0 && Number.isInteger(l[i])) {
	// 		result.push(l[i]);
	// 	}
	// }

	// return result;


/* .filter() */

	// let res = l.filter(num => num >= 0 && Number.isInteger(num));

/* .filter() */

	// let res = l.filter(num => num >= 0 && Number.isInteger(num))
	// return res;


/* Codewars */

	// return l.filter(Number.isInteger);  /* Нет проверки на отрицательные числа */



// }

// console.log(filter_list([1,2,'a','b', -1]));
// console.log(filter_list([1,'a','b',0,15]));
// console.log(filter_list([1,2,'aasf','1','123',123]));






/* Вернуть только с 4 буквами */



// function friend(friends) {
// 	//your code here
// 	let newFriends = [];
// 	for (let value of friends) {
// 		if (value.length == 4) {
// 			newFriends.push(value);
// 		}
// 	}
// 	return newFriends;
// }





/* Codewars */


// function friend(friends) {
// 	return friends.filter(value => value.length === 4);
// }



// console.log(friend(['ffff', 'fffff', 'ffffff', 'aaaa']));







// function isIsogram(str) {
// 	str = str.toLowerCase();
// 	for (let i = 0; i <= str.length; i++) {
// 		for (let j = i + 1; j <= str.length; j++) {
// 			if (str[i] == str[j]) {
// 				return false;
// 			}
// 		}
// 	}
// 	return true;
// }





/* Codewars */



// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }



// isIsogram('I dont know');







// function getCount(str) {
// 	const char = 'aeiou';
// 	let result = 0;

// 	for (let i = 0; i < str.length; i++) {
// 		if (char.includes(str[i])) {
// 			result++;
// 		}
// 	}
// 	return result;
// }

// console.log(getCount('abracadabra'));




// function getCount(str) {
//   let sum = 0;
//   // for (let i = 0; i < str.length - 1; i++) {
//   //   if (i == 'a' || i == 'e' || i == 'o' || i == 'u' || i == 'i') {
//   //     sum += 1;
//   //   } 
//   // }
//   // return sum;

//   str.indexOf('a', 'e');

//   // str.split('').forEach((elem) => {
//   //   if (elem == 'a' || elem == 'e' || elem == 'o' || elem == 'i' || elem == 'u') {
//   //     sum += 1;
//   //   }
//   //   return sum;
//   // })
//   // return sum;
// }

// console.log(getCount('sjjdlhhffgaaaa aaaa fdkdii'));






// function findAverage(array) {
//   let sum = 0;
//   if (array.length == 0) return 0;
//   for (let value of array) {
//     sum += value;
//   }
//   let result = sum / array.length / 2;
//   return result;
// }

// console.log(findAverage([1, 2, 5, 7]));

/* Codewars */


/* 

function DNAStrand(dna) {
  return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}

*/



/* Codewars */


/* 

let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

*/


/* Codewars */

/* 

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

*/

// let str11 = "ATTGC",                                      /* --> "TAACG" */
//     str = "AAAA",
//     newStr = '';                                       /* --> "CATA" */

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'A') {
//         newStr += 'T';
//     } else if (str[i] == 'T') {
//         newStr += 'A';
//     } else if (str[i] == 'C') {
//         newStr += 'G';
//     } else if (str[i] == 'G') {
//         newStr += 'C';
//     }
// }

// console.log(newStr);




// const arr = [1, 2, 3, 4, 5, -1, -2, -4];
// const arr1 = [1, 2, 3, 4, 0, -1, -2, -3];
// const arr2 = [];

// function countPositivesSumNegatives(input) {


//     /* Решение с Codewars */
//     // return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0)
// .reduce((a, b) => a + b, 0)] : [];

/* Codewars */

// if (!Array.isArray(input) || !input.length) return [];
// return input.reduce((arr, n) => {
// if (n > 0) arr[0]++;
// if (n < 0) arr[1] += n;
// return arr;
// }, [0, 0]);


//     /* Решение chatGPT */
//     if (!input || input.length == 0) {
//         return [];
//     }
//     let positiveCount = 0;
//     let negativeSum = 0;
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] > 0) {
//             positiveCount++;
//         } else if (input[i] < 0) {
//             negativeSum += input[i];
//         }
//     }
//     return [positiveCount, negativeSum];
// }

// console.log(countPositivesSumNegatives(arr));
// console.log(countPositivesSumNegatives(arr1));
// console.log(countPositivesSumNegatives(arr2));


// function getMiddles(str) {
//     let middleSimb = '';
//     let strSimb = str.length / 2;
//     // return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);     /* Codewars */
//     // return str.slice((str.length - 1) / 2, str.length / 2 + 1);      /* Кодварс- str.slice(с какого, по какой) */
//     if (str.length % 2 != 0) {
//         return middleSimb += str.substring(Math.floor(strSimb), Math.floor(strSimb) + 1);
//     } else {
//         return middleSimb += str.substring(Math.floor(strSimb) - 1, Math.floor(strSimb) + 1);
//     }
// }

// console.log(getMiddles("test"));
// console.log(getMiddles("testing"));
// console.log(getMiddles("middle"));








// const sqrt = 784;
// let nextSqrt = sqrt + 1;

// function findNextSquare(x) {
    
//     if (!Number.isInteger(Math.sqrt(x))) {
//         return -1;
//     } else {
//         while (!Number.isInteger(Math.sqrt(nextSqrt))) {
//             nextSqrt++;
//         }
//     }
//     return nextSqrt;
// }

// console.log(findNextSquare(sqrt));


// // const sq = 676;

// function findNextSquare(sq) {
//     // let nextSq;
//     let sqMath = Math.sqrt(sq);
//     if (!Number.isInteger(Math.sqrt(sq))) {
//         return -1;
//     } else {
//         sqMath += 1;
//     }
//     return sqMath * sqMath;
// }

// console.log(findNextSquare(729))



// function findNextSquare(sq) {
//     return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }

// console.log(findNextSquare(625));
// console.log(findNextSquare(624));




/* Code from Codewars */

// function boolToWord( bool ){
//     return bool ? 'Yes':'No';
// }


/* My code */

// function boolToWord(bool) {
//     if (bool == 0) return 'No';
//     if (bool != 0) return 'Yes';
// }




/* 8 kyu  8 kyu  8 kyu  8 kyu  8 kyu  8 kyu */


/* Code from Codewars */

// function maps(x){
//     return x.map(n => n * 2);
// }

// maps = x => x.map(e => e * 2);




/* My code in Codewars */

// const arr = [1, 2, 3];

// function maps(x) {
//     let newArr = x.map(item => {
//         return item * 2;
//     });
//     return newArr;
// }

// maps(arr);


/* My code in VSCode */

// const arr = [1, 2, 3];
// let newArr = [];

// function maps(x) {
//     newArr = x.map((item) => {
//         return item * 2;
//     });
// }
// maps(arr);

// console.log(newArr);





// const arr = [1, 2, 3, 4],
//       x = 3;
// // let result;


// /* Desicion on Codewars !!! */

// const check = (a, x) => a.includes(x) > -1 ? true : false;


/* It's me ((())) */

// function check(a, x) {
//     for (let value of a) {
//         // result = (value === x) ? true : false;
//         // console.log(result);
//         if (value == x) {
//             return true;
//         }
//     }
//     return false;
//     // for (let i = 0; i < a.length; i++) {
//     //     result += a[i];
//     //     if (a[result] == x) {
//     //         return true;
//     //     } else {
//     //         return false;
//     //     }
//     // }
// }

// console.log(check(arr, x));
// // console.log(result);



// const n = 35231;

// function digitized(n) {
//     let myFunc = num => Number(num);
//     let arr = Array.from(String(n), myFunc);
//     return arr.reverse();
// }
// console.log(digitized(n));


