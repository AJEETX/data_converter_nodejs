module.exports=class FormatData
{
    doFormat(arrOrder){

        const sc01='SHANGHAI FURNITURE COMPANY'

        const tin='YANTIAN INDUSTRIAL PRODUCTS'

        const dateFormat=require('dateformat');
            
        //strategy design pattern can be applied here

        if(arrOrder[2]==sc01){
            
            arrOrder[2]='SFC01'
            
            if(arrOrder[4]==null || arrOrder[4]==''){

                arrOrder[4]='AUMEL'
            }
        }
        else if(arrOrder[2]==tin){
            
            arrOrder[2]='YIP-1'
            
            if(arrOrder[4]==null|| arrOrder[4]==''){

                arrOrder[4]='AUSYD'
            }
        }
        
        arrOrder[5]=dateFormat( Date.parse(arrOrder[5]),'yyyy-mm-dd')
        
        return arrOrder;
    }
}