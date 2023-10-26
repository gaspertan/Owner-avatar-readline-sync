const calculateDiscount = (price, discountPercentage) => {
return price - (price *(discountPercentage * 0.01));
};
console.log(calculateDiscount(5500,50));