module.exports=class Converter
{
    convert2Object(lines){

        const purchaseOrder=require('../model/purchaseorder');
        
        const detail=require('./orderdetail');

        const formatData=require('./formatdata');
        
        let orders = [];
        
        const odetails=lines.match(/^D\,(.*)$/gmi);       
        
        lines.match(/^H\,(.*)$/gmi).forEach((element) => {
        
            let arrOrder=element.split(',')
        
            let orderNo=element.match(/po\d+\-\d+/i)
        
            let orderDetails=[]
        
            orderDetails=new detail().convertOrderDetail(odetails,orderNo[0]);
            let arrOrders=new formatData().doFormat(arrOrder)
            orders.push({  PurchaseOrder:new purchaseOrder(
                                    arrOrders[1],
                                    arrOrders[2],
                                    arrOrders[3],
                                    arrOrders[4],
                                    arrOrders[5],
                                    orderDetails
            )})
            orderDetails=[];
        });
        
        return orders;      
    }
}