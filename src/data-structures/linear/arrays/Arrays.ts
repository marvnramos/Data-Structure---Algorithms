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
    
}