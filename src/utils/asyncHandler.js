const asyncHandler =(func)=>async (req,res,next)=>{
  try{
    await func(req,res,next);
  }catch(error){
    res.status(500).json({
        success:false,
        mssage:error.mssage
    })
  }
}

export {asyncHandler};