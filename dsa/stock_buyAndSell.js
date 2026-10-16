// Given an array prices[] of non-negative integers,
//  representing the prices of the stocks on different days,
//  return the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed.
//  Here one transaction means 1 buy + 1 Sell. If it is not possible to make a profit then return 0.

// Note: Stock must be bought before being sold.

function maximumProfit(prices){
    let minPrice=prices[0];
    let maxProfit=0;

    for(let i=1; i<prices.length;i++){

        let profit= prices[i]-minPrice;

        if(profit > maxProfit){
            maxProfit = profit;
        }

        if(prices[i] < minPrice){
            minPrice = prices[i];
        }
    }
    return maxProfit;
}
console.log(maximumProfit([7,1,5,3,6,4]));
