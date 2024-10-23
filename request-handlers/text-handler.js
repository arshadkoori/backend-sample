import testModel from "./model/test-model.js";



export async function test(req, res){
    res.status(400).json({msg : "error"});
}
    export async function write(req , res) {
        
        try{
            let data = req.body;
            let result = await testModel.create ({name : data.name , age : data.age});
            console.log(result);
            res.status(201).json({msg : "write successfully "})
            
        }
        catch (error){
console.log(error);
res.status(500).json({msg : "write error"})


        }
    }
