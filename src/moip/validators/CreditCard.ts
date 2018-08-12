import { AmexCreditCard } from '../creditcard/AmexCreditCard';
import { Brands } from '../creditcard/Brands';
import { DinersCreditCard } from '../creditcard/DinersCreditCard';
import { EloCreditCard } from '../creditcard/EloCreditCard';
import { HipercardCreditCard } from '../creditcard/HipercardCreditCard';
import { HiperCreditCard } from '../creditcard/HiperCreditCard';
import { MasterCreditCard } from '../creditcard/MasterCreditCard';
import { VisaCreditCard } from '../creditcard/VisaCreditCard';


export class CreditCard {

    constructor(private creditCard: string) {

    }

    getBrand(): Brands {
        if (!this.validateNumber()) {
            return Brands.UNKNOWN;
        }
        this.creditCard = this.creditCard.replace(/[.\\s]/g, "");
        // As bandeiras são caraterizadas por conjuntos de BINs com sobre-posição.
        // Identificar a bandeira correta por verificar primeiro a bandeira com BINs mais específicos.
        if (EloCreditCard.isBrandElo(this.creditCard)) {
            return Brands.ELO;
        }
        if (HiperCreditCard.isBrandHiper(this.creditCard)) {
            return Brands.HIPER;
        }
        if (VisaCreditCard.isBrandVisa(this.creditCard)) {
            return Brands.VISA;
        }
        if (MasterCreditCard.isBrandMaster(this.creditCard)) {
            return Brands.MASTERCARD;
        }
        if (AmexCreditCard.isBrandAmex(this.creditCard)) {
            return Brands.AMERICAN_EXPRESS;
        }
        if (DinersCreditCard.isBrandDiners(this.creditCard)) {
            return Brands.DINERS;
        }
        if (HipercardCreditCard.isBrandHipercard(this.creditCard)) {
            return Brands.HIPERCARD;
        }
        return Brands.UNKNOWN;
    }

    validateNumber(): boolean {
        return this.creditCard != null && /\\d{13,19}/.test(this.creditCard.replace(/[.\\s]/g, ""));
    }

    isValid(): boolean {
        return Brands.UNKNOWN !== this.getBrand();
    }
}