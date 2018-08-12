export class AmexCreditCard {
    
    static isBrandAmex(number: string): boolean {
        return number && /3(7|4)[0-9]{13}/.test(number);
    }
    
}