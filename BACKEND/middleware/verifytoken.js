export function verification(req,res,next)  {
    //token verification logic
    let signedToken = req.cookies.Token;
    if(!signedToken){
        return res.status(401).json({message:"Unauthorized user"})
    }
    
    let decodedToke= jwt.verify(signedToken,'abcdef');
    console.log("decode token:",decodedToekn);

}