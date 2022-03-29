const jwt = require("jsonwebtoken");




const middlewareController={
    veryfyToken:(req,res,next)=>{
        const token = req.headers.au; 
        if (token) {
          const accessToken = token.split(" ")[1];
         /*  const a=jwt.verify(accessToken,'mk') */
        jwt.verify(accessToken,"mk",(err) => {
            if (err) {
              return res.status(403).json("Token is not valid!");
            }else
            next();
          });
        } else {
          return res.status(401).json("You're not authenticated");
        }
    },
    returnId:(req,res,next)=>{
      const tokenId=req.headers.au;
      if(token){
        const tokenId=tokenId.split(" ")[1];
        const verifyId=jwt.verify(tokenId,"mk")
        return verifyId;
      }
    }
}
module.exports = middlewareController;