export interface Product{
    title:string;
    price:string;
    id:number;
    description:string;
    catehgory:string;
    image:string
}
export interface Cart extends Product{
    count:number;
}