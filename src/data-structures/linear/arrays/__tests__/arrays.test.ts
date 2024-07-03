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

/**
 * @description Get the modified array again; this time the array will not contain 2 as the last item.
 */
test('get array without 2 as last value ', ()=>{
    expect(array.getArray().toString()).toBe(array_test.toString());
})

/**
 * @description Get the array length
 * Our current array looks like this: [-1, 315, 2, 38, 98, 98, 10001, 10001, 9, 2, 2, 2, -7, 10000, 0]
 * Therefore, its length is the total number of items in it: 15
 */
test('get length from array', () => {
    expect(array.getArrayLength()).toBe(15);
})

/**
 * @description Get array item by index
 * As we know, array indices go from 0 to N-1; this means, when I want to get the 2nd value,
 * in this case 315, I have to consider this. Therefore, the index of 315 will be 1 because the first index is 0.
 *
 * Note: N, when N equal the total of items in the array
 */
test('get array item by index', ()=>{
    expect(array.getArrayValueByIndex(3)).toBe(38);
})

/**
 * @description
 * Current array remains unchanged: [-1, 315, 2, 38, 98, 98, 10001, 10001, 9, 2, 2, 2, -7, 10000, 0]
 * Since no modifications have been made yet, then, we go to get 0 as response.
 */
test("get array last value item", ()=>{
    expect(array.getArrayLastValue()).toBe(0);
})

/**
 * @description
 * Define a new string array
 */
const string_array = new Arrays<string>();
string_array.addNewValue('uwu')
string_array.addNewValue('ewe')
string_array.addNewValue('owo')
string_array.addNewValue('nwn')

/**
 * @description
 * Our string_array defined looks like ['uwu', 'ewe', 'owo', 'nwn']
 *                                                            {☝️}
 *                                           ___________________|_______________________
 *                                           |  In this case, 'nwn' is our last value  |
 *                                           |  so, we must receive 'nwn' as output.   |
 *                                           -------------------------------------------
 */
test('get string[] last value', () => {
    expect(string_array.getArrayLastValue()).toBe('nwn')
})
