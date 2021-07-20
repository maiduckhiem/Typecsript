type admin = {
    name: string ;
    privileges: string[];
}

type Emloyee = {
    name: string;
    startDate: Date;
}
type ElevatedEmplove = admin & Emloyee;