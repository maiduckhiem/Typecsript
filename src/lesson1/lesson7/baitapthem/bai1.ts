interface IVATCalculator{
    calculate(amount: number ):number;
}
class VATcalculator implements IVATCalculator{
    public calculate(amount: number):number{
        return amount *1.25;
    }
}
const vat = new VATcalculator();
console.log(vat.calculate(100));