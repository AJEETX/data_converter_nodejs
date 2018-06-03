module.exports=class Reader
{
    readWrite(inputFile){

        const fs=require('fs');

        const o2x = require('object-to-xml');

        const converter=require('./converter');
        
        let fileContents = fs.readFileSync(inputFile);
        
        let ordersObj = new converter().convert2Object(fileContents.toString());
   
        console.log(o2x({ PurchaseOrders:ordersObj})) // converted to xml

    return o2x({ PurchaseOrders:ordersObj});
    }
}