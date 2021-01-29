const handleSumTotal = cart => cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)

  export default handleSumTotal