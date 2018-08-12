export class EloCreditCard {

    static ELO_BINS: Array<string> = [
        "401178", "401179", "431274", "438935", "451416", "457393", "457631", 
        "457632", "504175", "627780", "636297", "636368", "636369"
    ];

    static ELO_RANGES: Array<Array<string>> = [
        ["506699", "506778"],
        ["509000", "509999"],
        ["650031", "650033"],
        ["650035", "650051"],
        ["650405", "650439"],
        ["650485", "650538"],
        ["650541", "650598"],
        ["650700", "650718"],
        ["650720", "650727"],
        ["650901", "650920"],
        ["651652", "651679"],
        ["655000", "655019"],
        ["655021", "655058"]
    ];

    static isBrandElo(number: string): boolean {
        if (number === undefined || number === null) {
            return false;
        }

        return number.length === 16
                && (EloCreditCard.ELO_BINS.includes(number.substr(0, 6))
                || EloCreditCard.isInEloRange(number));
    }

    static isInEloRange(number: string): boolean {
        if (number.length < 5) {
            return false;
        }
        for (let i = 0; i < EloCreditCard.ELO_RANGES.length; i++) {
            const startingRange = Number(EloCreditCard.ELO_RANGES[i][0]).valueOf();
            const endingRange = Number(EloCreditCard.ELO_RANGES[i][1]).valueOf();
            const parsedNumber = Number(number.substr(0, 6)).valueOf();
            if (parsedNumber >= startingRange && parsedNumber <= endingRange) return true;
        }
        return false;
    }
}