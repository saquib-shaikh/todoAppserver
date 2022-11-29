import express from "express";
import Controls from "../controller/productController.js";

const productRoute=express.Router();

const controller = new Controls

productRoute.post('/', controller.create)

productRoute.get('/:id',controller.index)

productRoute.put('/',controller.update)

productRoute.delete('/',controller.remove)


export default productRoute;