export class HiperCreditCard {

    private static HIPER_BINS: Array<string> = ["637095", "637612", "637599", "637609", "637568"];

    static isBrandHiper(number: string): boolean {
        return number 
                && number.length === 16 
                && HiperCreditCard.HIPER_BINS.includes(number.substr(0, 6));
    }
    
}