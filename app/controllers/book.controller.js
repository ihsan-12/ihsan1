//app/controllers/book.controller.js
constBook=require("../models/book.model");
//Mengambilsemuadatabuku
exports.findAll=(req,res)=>{
    Book.getAll((err,data)=>{
        if(err){
            res.status(500).send({
                message:
                 err.message||"Terjadi kesalahan"
                });
        }elseres.send(data);
    });
};