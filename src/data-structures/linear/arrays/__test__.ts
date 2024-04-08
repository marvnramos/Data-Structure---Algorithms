import { Arrays } from "./Arrays";

/**
 * Create an array of numbers
 */
const array = new Arrays<number>();
array.addNewValue(-1);
array.addNewValue(315);
array.addNewValue(2);
array.addNewValue(38);
array.addNewValue(98);
array.addNewValue(98);
array.addNewValue(10001);
array.addNewValue(10001);
array.addNewValue(9);
array.addNewValue(2);
array.addNewValue(2);
array.addNewValue(2);
array.addNewValue(-7);
array.addNewValue(10000);
array.addNewValue(0);

/**
 * @description Sum the elements of an array and display the result in the console
 * @param array 
 */
const sumArray = (array: Array<number>): void => {
    const total = array.reduce((acc, value) => acc + value, 0);
    console.log(`The sum of the array is: ${total}`);
}

// sumArray(array.getArray());

/**
 * @description Find the max number in an array to display in the console
 * @param array 
 */
function findMaxNumber(array: number[]):void {
    let maxNumber = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] > maxNumber){
            maxNumber = array[i];
        }
    }

    console.log(`The max number in the array is: ${maxNumber}`);
}

// findMaxNumber(array.getArray());

/**
 * @description Find the min number in an array to display in the console
 * @param array 
 */
const findMinNumber = (array: Array<number>): void =>{
    let minNumber: number | null = null;
    
    for(let i = 0; i < array.length; i++){
        if(!minNumber){
            minNumber = array[i];
        }
        if(array[i] < minNumber){
            minNumber = array[i];
        }
    }
    console.log(`The min number in the array is: ${minNumber}`);
}

// findMinNumber(array.getArray());

/**
 * @description Remove duplicates from an array and display the modified array in the console
 * @param array 
 */
const removeDuplicates = (array: Array<number>): void => {
    array.splice(0, array.length, ...(new Set(array)));
    console.log(array)
}
// console.log(array.getArray()); // old array
// removeDuplicates(array.getArray()); // new array without duplicates
// console.log(array.getArray());// new array without duplicates


/**
 * @description Sort an array of numbers to display in the console
 * @param array 
 * @returns 
 */
const sortArray = (array: Array<number>): void => {
    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
            if(array[i] > array[j]){
                let temp: number = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
       }
    }
    console.log(array);

}

// sortArray(array.getArray());