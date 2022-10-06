import {User} from "./userModel.js"
export const user = ("/", async (req, res) => {
    console.log(req.body)
    let user = await User.create(req.body)
    res.status(200).json({
        user:user
    })
})
export const getuser=("/",async(req,res)=>{
    let user=await User.find()
    res.status(200).json({
        user:user
    })
})


