import { createProduct, readProduct ,updateProduct,deleteProduct} from "../services/productService.js";


class Controls{
    async create(req,res){
        let body = req.body;
        let creation = await createProduct({...body})

        if(creation.status){
            res.send("product created successfully")
        }else{
            res.send("failed to create product")
            console.log("failed to create product")
        }

    }
    async index(req,res){
        let id= req.params.id
        let result=await readProduct(id)

        if(result.status){
            res.send(result.data)
        }else{
            res.send("failed to read data",result.error)
        }

        
    }
    async update(req,res){
        let id=req.body.id
        let newdata=req.body

        let result=await updateProduct(id,newdata)

        if(result.status){
            res.send("Update operation successful")
        }else{
            res.send({message:"failed to update data",error : result.error})
        }
        
    }
    async remove(req,res){
        let id=req.query.id
        let result=await deleteProduct(id)
        if(result.status){
            res.send("document Delete")
        }else{
            res.send({message:"failed to delete the document",error:result.error})
        }
         
    }
}

export default Controls