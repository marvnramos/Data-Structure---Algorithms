export class Arrays<T>{
    private _array: Array<T> = [];
      
    constructor(){};

    public addNewValue(value:any): string {
        this._array.push(value);
        return `Value [${value}] added to the array`;
    }

    /**
     * @description Remove the last value from the array
     * @returns string
     * @memberof Arrays
     */
    public removeValue(): string {
        const deletedValue:any = this._array.pop();
        return `Value [${deletedValue}] removed from the array`;
    }


    public getArray(): Array<any> {
        return this._array;
    }
    public getArrayLength(): number {
        return this._array.length;
    }
    public getArrayValueByIndex(index:number): any {
        return this._array[index];
    }
    public getArrayLastValue(): any {
        return this._array[this._array.length-1];
    }
    
}