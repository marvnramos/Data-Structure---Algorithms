export class Arrays<T>{
    private _array: Array<T> = [];
      
    /**
     * @description Creates an instance of Arrays.
     * @constructor 
     * @memberof Arrays
     */
    constructor(){};

    /**
     * @description Add a new value to the array
     * @param value 
     * @returns string
     */
    public addNewValue(value:any): string {
        this._array.push(value);
        return `Value [${value}] added to the array`;
    }

    /**
     * @description Remove the last value from the array
     * @returns string
     * @memberof Arrays
     */
    public removeLastValue(): string {
        const deletedValue:any = this._array.pop();
        return `Value [${deletedValue}] removed from the array`;
    }

    /**
     * @description Return the entire array
     * @returns Array<any>
     * @memberof Arrays
     */
    public getArray(): Array<any> {
        return this._array;
    }

    /**
     * @description Get the length of the array
     * @returns number
     * @memberof Arrays
     */
    public getArrayLength(): number {
        return this._array.length;
    }

    /**
     * @description Get the value of the array at a specific index
     * @param index
     * @returns T, the type of the array
     * @memberof Arrays
    * */
    public getArrayValueByIndex(index:number): T {
        return this._array[index];
    }

    /**
     * @description Get the first value of the array
     * @returns any
     * @memberof Arrays
     */
    public getArrayLastValue(): any {
        return this._array[this._array.length-1];
    }

    /**
     * @description Sum the elements of the array and return the result
     * @returns number The sum of the elements in the array
     */
    public sumArray(): number {
        const numbersArray: Array<number> = this._array as Array<number>;
        return numbersArray.reduce((acc, value) => acc + value, 0);
    }

    /**
     * @description Find the max number in an array to display in the console
     * @return number 
     * @memberof Arrays
     */
    public findMaxNumber(): number {
        let maxNumber: number = Number(this._array[0]) ;

        for(let i = 0; i < this._array.length; i++){
            if(Number(this._array[i]) > maxNumber){
                maxNumber = Number(this._array[i]);
            }
        }
        return maxNumber;
    }
    /**
     * @description Find the min number in an array to display in the console
     * @return number
     * @memberof Arrays
     */

    public findMinNumber(): number {
        let minNumber: number = Number(this._array[0]);
        
        for(let i = 0; i < this._array.length; i++){
            if(Number(this._array[i]) < minNumber){
                minNumber = Number(this._array[i]);
            }
        }
        return minNumber;
    }

    /**
    * @description Remove duplicates from an array and display the modified array in the console
    * @returns Array<T>
    * @memberof Arrays
    *  */
    public removeDuplicates(): Array<T> {
        this._array.splice(0, this._array.length, ...Array.from(new Set(this._array)));
        return this._array;
    }
    
    /**
     * @description Sort an array of numbers to display in the console
     * @returns Array<numeber>
     * @memberof Arrays
     */

    public sortArray(): Array<number> {
        const numbersArray: Array<number> = this._array as Array<number>;
        
        for(let i = 0; i < this._array.length; i++){
            for(let j = i + 1; j < this._array.length; j++){
                 if(numbersArray[i] > numbersArray[j]){
                     let temp: number = numbersArray[i];
                     numbersArray[i] = numbersArray[j];
                     numbersArray[j] = temp;
                 }
            }
         }
        return numbersArray;
    }

    /**
     * @description Update the value of the array at a specific index
     * @param index
     * @return Array<any>
     */
    public updateValueByIndex(index: number, value: any): Array<any> {
        this._array[index] = value;
        return this._array;
    }
}