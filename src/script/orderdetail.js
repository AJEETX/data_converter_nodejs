module.exports=class OrderDetail
{
    convertOrderDetail(odetails,orderNo){
    
        let orderDetails=[];
    
        let PurchaseOrderLine=require('../model/purchaseOrderLine');
    
        odetails.forEach(el=>{
            
            let od=el.match(orderNo);
    
            if(od){
    
                let arrOd=el.split(',');
    
                let orderdetail=new PurchaseOrderLine(arrOd[2],arrOd[3],arrOd[4]);
    
                orderDetails.push({
                    
                    purchaseOrderLine:orderdetail}
                );
            }
        });
    
        return orderDetails;
    }
}