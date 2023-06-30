{
    function checkNotNullBad(arg:number | null):number{
        if (arg == null) {
            throw new Error(`not valid number!`);
        }
        return arg;
    }
    
    function checkNotNullAnyBad(arg: any | null): any{
        if (arg == null) {
            throw new Error(`not valid number!`);
        }
        return arg;
    }

    function checkGeneric<T>(arg:T | null):T {
    if (arg == null) {
            throw new Error(`not valid number!`);
        }
        return arg;
    }

    const result = checkGeneric(123);
    const bool:boolean = checkGeneric(true);
    console.log(result, bool);
}