const service = {
   getJson: (req, res)=>{
     res.json(require('./data.json'));
   }
  
 
 };
 
 module.exports = service;