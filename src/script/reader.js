var reader=class Reader
{
    readWrite(inputFile){

        const fs=require('fs');

        const o2x = require('object-to-xml');

        const converter=require('./converter');
        
        let fileContents = fs.readFileSync(inputFile);
        
        let ordersObj = new converter().convert2Object(fileContents.toString());
   
        let objPurchaseOrders=o2x({ PurchaseOrders:ordersObj});
        
        console.log(objPurchaseOrders) // converted to xml

        return objPurchaseOrders;
    }
}
module.exports=reader;