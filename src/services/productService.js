import ShirtProduct from "../models/productModel.js";

export const createProduct= async (data)=>{
    try {
        const create=new ShirtProduct({...data})
        const result=await create.save();
        return { status:true }

    }catch(error){
        return { status:false}

    }
}

export const readProduct= async (_id)=>{
    try{
        const result=await ShirtProduct.find({_id})
        return {data:result,status:true}
    }catch(error){
        return{status:false,error}
    }
}

export const updateProduct=async (_id,newdata)=>{
    try{
        const result=await ShirtProduct.findByIdAndUpdate({_id},{$set:{...newdata}})
        return {data:result,status:true}

    }catch(error){
        return{status:false,error}
    }
}

export const deleteProduct=async (_id)=>{
    try{
        const result= await ShirtProduct.findByIdAndDelete({_id})
        return {data:result,status:true}

    }catch(error){
        return {status:false,error}
    }
}

