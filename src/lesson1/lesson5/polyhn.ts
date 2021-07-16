class poHn {
    private static cosoHN: poHn;
    //shorthand initalizer
    public constructor(private readonly address: string){
        this.address =address;
    }
    public static getcoso():poHn{
        if(poHn.cosoHN == null){
            poHn.cosoHN = new poHn('tvb')
        }
        return poHn.cosoHN;
    }
}
let p1: poHn = poHn.getcoso();
// let p1: poHn = new poHn('tvb');
// let p2: poHn = new poHn('dia nguc');
