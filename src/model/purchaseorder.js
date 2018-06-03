module.exports=function purchaseOrder(customerPo, supplier, origin,destination,cargoReady,odetails) {

    this.CustomerPo = customerPo; 
    
    this.Supplier = supplier; 
    
    this.Origin = origin;
    
    this.Destination=destination;
    
    this.CargoReady=cargoReady;
    
    this.Lines=odetails;
};