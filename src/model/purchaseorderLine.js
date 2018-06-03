module.exports=  function purchaseOrderLine(line,item,qty){ 
    
    this.LineNumber=line;
    
    this.ProductDescription=item;
    
    this.OrderQty=qty;
};