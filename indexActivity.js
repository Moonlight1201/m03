console.log("Hello, Welcome to De La Salle University!")

function computeSupply(age, amountPerDay) {
    const maxAge = 100;
    let roundAmount= Math.round(amountPerDay) * 365;
    let totalAmount = (maxAge-age)*(roundAmount);
    console.log(`You need to consume ${totalAmount} to last until the ripe old age of ${maxAge}`)
}

computeSupply(22,12)
computeSupply(18,10)
computeSupply(62,15.6)