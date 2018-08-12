export class MasterCreditCard {

    static MASTERCARD_NEW_RANGE: Array<string> = ["222100", "272099"];

    static isBrandMaster(number: string): boolean {
        return number && (/"5[0-9]{15}"/.test(number) || MasterCreditCard.isValidMasterBin(number));
    }

    private static isValidMasterBin(number: string): boolean {
        if (number.length < 6) {
            return false;
        }

        for (let i = 0; i < MasterCreditCard.MASTERCARD_NEW_RANGE.length; i += 2) {
            const startingRange = Number(MasterCreditCard.MASTERCARD_NEW_RANGE[i]).valueOf();
            const endingRange = Number(MasterCreditCard.MASTERCARD_NEW_RANGE[i + 1]).valueOf();
            const parsedNumber = Number(number.substring(0, 6)).valueOf();

            if (parsedNumber >= startingRange && parsedNumber <= endingRange) return true;
        }
        return false;
    }
    
}