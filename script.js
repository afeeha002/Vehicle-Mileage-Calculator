document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("MileageBtn").addEventListener('click', calculateMileage);
    document.getElementById('priceBtn').addEventListener('click', spentPrice);
});

function calculateMileage() {
    let totalDistance = parseFloat(document.getElementById('distanceDriven').value);
    let petrolPriceperLiter = parseFloat(document.getElementById('petrolPrice').value);
    let totalAmount = parseFloat(document.getElementById('amountSpend').value);

    if (petrolPriceperLiter === 0) {
        alert("Petrol price per liter cannot be zero.");
        return;
    }

    let literUsed1 = totalAmount / petrolPriceperLiter;
    
    if (literUsed1 === 0) {
        alert("Amount spent cannot be zero.");
        return;
    }

    let totalMileage = totalDistance / literUsed1;
    document.getElementById('mileageOutput').innerText = "Mileage: " + totalMileage.toFixed(2) + " km/litre";
}

function spentPrice() {
    let totalDistance1 = parseFloat(document.getElementById('distanceDriven1').value);
    let avgFualPrice = parseFloat(document.getElementById('fualPrice').value);
    let avarageMileage = parseFloat(document.getElementById('mileage').value);

    if (avarageMileage === 0) {
        alert("Average mileage cannot be zero.");
        return;
    }

    let literUsed = totalDistance1 / avarageMileage;
    let fualSpentPrice = literUsed * avgFualPrice;

    document.getElementById('priceOutput').innerText = 'Price: ' + fualSpentPrice.toFixed(2) + ' Rs';
}
