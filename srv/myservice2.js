    

module.exports = async(srv) =>
{
    srv.on('Product',(req,res)=>{
        return req.data.i1*req.data.i2;
    })
}