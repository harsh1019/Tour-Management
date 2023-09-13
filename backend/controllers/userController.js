import User from "../models/User.js";

// create new User
export const createUser = async (req,res) => {
   const newUser = new User(req.body);
//    console.log(req.body);
   try{
    // saving data in database
      const savedUser = await newUser.save();
      res.status(200).json({
         success:true,
         message:'successfully created',
         data:savedUser
      })

   }catch(err){
    res.status(500).json({
        success:false,
        message:'Failed to create. Try again'
     })
   }
};

// update User
// create new User
export const updateUser = async (req,res) => {
    
    const id = req.params.id;

    try{
     const updatedUser = await User.findByIdAndUpdate(id,{
        $set : req.body
     },{new:true});

     res.status(200).json({
        success:true,
        message:'successfully updated',
        data:updatedUser,
     })

    } catch{
        res.status(500).json({
            success:false,
            message:'Failed to update. Try again'
        })
    }
 };
// delete
 export const deleteUser = async (req,res) => {

    const id = req.params.id;

    try{
     await User.findByIdAndDelete(id);

     res.status(200).json({
        success:true,
        message:'successfully deleted',
     })

    } catch{
        res.status(500).json({
            success:false,
            message:'Failed to delete. Try again'
        })
    }
 };

// getsingleUser
 export const getSingleUser = async (req,res) => {

   
    const id = req.params.id;

    try{
     const user = await User.findById(id);

     res.status(200).json({
        success:true,
        message:'success',
        data:user,
     })

    } catch{
        res.status(404).json({
            success:false,
            message:'Not found'
        })
    }
 };


//  getAll User
export const getAllUser = async (req,res) => {


     try{
        const users = await User.find({});
        res.status(200).json({
            success:true,
            message:"success",
            data:users,
        });

    } catch{
        res.status(404).json({
            success:false,
            message:"not found",
        });
    }
 };
