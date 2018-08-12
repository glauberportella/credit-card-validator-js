export class DinersCreditCard {
    
    static isBrandDiners(number: string): boolean {
        return number && /3[0-9]{13}/.test(number);
    }
    
}