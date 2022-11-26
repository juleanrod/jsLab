class LocalWithTaxStrategy {
    constructor(tax) {
        this.tax = tax;
    }

    quote(amount, gain) {
        return (amount * this.tax) + (amount * gain);
    }
}

module.exports = LocalWithTaxStrategy;
