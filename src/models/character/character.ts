export class Character {
    constructor(name: string, gender: number) { 
        this._name = name;
        this._gender = gender;

    }
    
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }

    
    private _gender : number;
    public get gender() : number {
        return this._gender;
    }
    public set gender(num : number) {
        this._gender = num;
    }
    
    
}