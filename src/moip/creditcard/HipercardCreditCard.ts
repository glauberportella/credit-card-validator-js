export class HipercardCreditCard {

    static isBrandHipercard(number: string): boolean {
        return number && /^606282[0-9]{10}$/.test(number) || 
                /^3841(0|4|6)0[0-9]{13}$/.test(number);
    }
    
}