type Product = {
  id:number;
  name:string;
  cargo:string;
  price:string;
  image:string;
};

type getProductSuccess = {type: 'PRODUCT_SUCCESS'; payload:Product[]};
export type getSuccessGenerator = (payload:Product[])=> getProductSuccess;

type getProductError = {type: 'PRODUCT_ERROR'; payload:Object};
export type getErrorGenerator = (payload: {id:number})=> getProductError;

export type asyncAction 