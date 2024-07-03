import { Arrays } from "../Arrays";

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

const value = 2;
const array_test = array.getArray();

/**
 *    @description At this point, the array object looks like this:
 *    array = [-1, 315, 2, 38, 98, 98, 10001, 10001, 9, 2, 2, 2, -7, 10000, 0]
 */
test('add an item to array', () => {
    expect(array.addNewValue(value)).toBe(`Value [${value}] added to the array`);
})

/**
 *    @description When we add value (2) to the array, this will look like:
 *    [-1, 315, 2, 38, 98, 98, 10001, 10001, 9, 2, 2, 2, -7, 10000, 0, 2]
 */
// const modified_array : number[] = [-1, 315, 2, 38, 98, 98, 10001, 10001, 9, 2, 2, 2, -7, 10000, 0, 2]
const modified_array : number[] = array.getArray()
test('get array with 2 new value', ()=>{
    expect(array.getArray().toString()).toBe(modified_array.toString());
})

/**
 * @description Let's remove the last value from the array.
 * This means removing 2, which is the last item in our array.
 */

test('remove an item from array', () => {
    expect(array.removeLastValue()).toBe(`Value [${value}] removed from the array`)
})

test('get array ', ()=>{
    expect(array.getArray().toString()).toBe(array_test.toString());
})

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
    array.splice(0, array.length, ...Array.from(new Set(array)));
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