export interface CarDetails{
    id:number;
    brandName:string;
    colorName:string;
    modelName:string;
    dailyPrice: number; 
    modelYear:string;
    description:string;
    image:string;

    //deletable
    carId:number;
    imagePath:string;
    imageUploadDate:Date;
}