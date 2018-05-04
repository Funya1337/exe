const arr1 = [null, null, null, null];
const arr2 = [null, 1, 1, 1];
const arr3 = [null, 0, 0, 0];
const arr4 = [null, 0, 1, 0];
const arr5 = [1, 1, 0, 1];

const winArr = [1, 3];

function checkWinPlayer(winArray, arr, player) {
	let sum = true;
	for (let i = 0; i < winArray.length; i++) {
		if (arr[winArray[i]] !== player) {
			sum = false;
		}
	}
	return sum;
}

function checkWin(arr) {
	
	if (checkWinPlayer(winArr, arr, 1) === true) {
		return 'x';
		}
	else if (checkWinPlayer(winArr, arr, 0) === true) {
		return 'o';
	}
	else if (arr[0] !== null && arr[winArr[0]] !== null && arr[winArr[1]] !== null && arr[winArr[2]] !== null) {
		return 'n';
	} else {
		return 'c';
		}
}
console.log(checkWin(arr1)); // c
console.log(checkWin(arr2)); // x
console.log(checkWin(arr3)); // o
console.log(checkWin(arr4)); // c
console.log(checkWin(arr5)); // n
