
//Declare interface for representation of Product

export type Product = {
    id : number,
    name : string
    price : number,
    description : string
}

export interface ProductProp {
    product : Product
}