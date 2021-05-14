export interface Rental{
    id:number,
    carId:number,
    customerId:number,
    rentDate:Date,
    rentEndDate:Date,
    returnDate:Date,
    brandName:string,
    customerFirstAndLastName:string,
    modelName:string
}