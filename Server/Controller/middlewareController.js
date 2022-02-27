const jwt = require("jsonwebtoken");




const middlewareController={
    veryfyToken:(req,res,next)=>{
        const token = req.headers.au;
          console.log("token1",req.headers)
        if (token) {
        
          const accessToken = token.split(" ")[1];
          jwt.verify(accessToken,"mk",(err) => {
            if (err) {
              return res.status(403).json("Token is not valid!");
            }
          
            next();
          });
        } else {
          return res.status(401).json("You're not authenticated");
        }
    }
}
module.exports = middlewareController;