export function FareCalculator(distance,time,rateDetails){   
    let baseCalculated =  (parseFloat(rateDetails.rate_per_unit_distance) * parseFloat(distance)) + (parseFloat(rateDetails.rate_per_hour) * (parseFloat(time) / 3600));
    if(rateDetails.base_fare>0){
        baseCalculated = baseCalculated + rateDetails.base_fare;
    }
    let total = baseCalculated > parseFloat(rateDetails.min_fare) ? baseCalculated : parseFloat(rateDetails.min_fare);
    let convenienceFee = 0;
    if(rateDetails.convenience_fee_type && rateDetails.convenience_fee_type === 'flat'){
        convenienceFee = rateDetails.convenience_fees;
    }else{
        convenienceFee = (total*parseFloat(rateDetails.convenience_fees)/100);
    }
    let grand = total + convenienceFee;

    const getTaxiPrice = 2.5;
    const oneKmPrice = 0.6;
    const totalPrice = getTaxiPrice + (oneKmPrice * distance);
        
    return {
        totalCost:parseFloat(totalPrice.toFixed(2)),
        grandTotal:parseFloat(totalPrice.toFixed(2)),
        convenience_fees: 0
    }
}
