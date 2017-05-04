var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
{
  name: "Telus",
  province: "BC",
  sales: [ 100, 200, 400 ]
},
{
  name: "Bombardier",
  province: "AB",
  sales: [ 80, 20, 10, 100, 90, 500 ]
},
{
  name: "Telus",
  province: "SK",
  sales: [ 500, 100 ]
}
]

function add (x1,x2){
    return x1 + x2;
  }

  function multiply (y1,y2){
    return y1 * y2;
  }




function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var output = {};

  for (var company in salesData) {
    var companyData = salesData[company];
    var totalSales = companyData.sales.reduce(add,0);

    for (var prov in taxRates) {
      var provTax = taxRates[prov];
      if (prov === companyData.province) {
        var salesTaxed = multiply(totalSales,provTax);
      }
    }

     if (!output[companyData.name]) {
        output[companyData.name] = {
          totalSales: 0,
          totalTaxes: 0
        }
     }
     output[companyData.name].totalSales += totalSales;
     output[companyData.name].totalTaxes += salesTaxed;
  }

  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

