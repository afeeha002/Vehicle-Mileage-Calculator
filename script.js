function calculateMileage() {

    let totalDistance = (document.getElementById('distanceDriven').value);
    let petrolPriceperLiter = (document.getElementById('petrolPrice').value);
    let totalAmount = (document.getElementById('amountSpend').value);
    // console.log(totalDistance);


    let literUsed = totalAmount / petrolPriceperLiter;

    let totalMileage = totalDistance / literUsed;
    console.log(totalMileage)
    // document.getElementById('mileageOutput').innerText = totalMileage.toFixed(2); 
    document.getElementById('mileageOutput').innerText = "Mileage: " + totalMileage.toFixed(2) + " km/litre";

}

document.getElementById('MileageBtn').addEventListener('click', calculateMileage());




function spentPrice() {

    let totalDistance = document.getElementById('distanceDriven').value;
    let avgFualPrice = document.getElementById('fualPrice').value;
    let avarageMileage = document.getElementById('mileage').value;


    let literUsed = totalDistance / avarageMileage;
    let fualSpentPrice = literUsed * avgFualPrice;

    document.getElementById('priceOutput').innerText = 'Price: ' + fualSpentPrice + '0 Rs';

}
document.getElementById('priceBtn').addEventListener('click', spentPrice());

