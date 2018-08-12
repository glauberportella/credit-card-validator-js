export class VisaCreditCard {

    static isBrandVisa(number: string): boolean {
        return number && /"4[0-9]{15}"/.test(number);
    }

}
