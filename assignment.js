




// kilometerToMeter_Section----------------


function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        console.log("Distance Can't be Negative.");
    }
    else {
        var meter = kilometer * 1000;
    }
    return meter;
}



// budgetCalculator_Section------------------

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {
    if (numberOfWatch < 0 || numberOfMobile < 0 || numberOfLaptop < 0) {
        console.log("Value Can't Be empty or Negative");
    }
    else {
        var totalBudget = numberOfWatch * 50 + numberOfMobile * 100 + numberOfLaptop * 500;

    }
    return totalBudget;
}


// hotelCost_Section------------------------


function hotelCost(estimatedDays) {
    var totalBill = 0;
    if (estimatedDays < 0) {
        console.log("This Value Can't Be Negative or Empty")
    }
    else if (estimatedDays <= 10) {
        totalBill = estimatedDays * 100;
    } else if (estimatedDays <= 20) {
        var firstPart = 10 * 100;
        var remaining = estimatedDays - 10;
        var secondPart = remaining * 80;
        totalBill = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = estimatedDays - 20;
        var thirdPart = remaining * 50;
        totalBill = firstPart + secondPart + thirdPart;
    }
    return totalBill;
}



// megaFriend_Section-----------------------

function megaFriend(list) {
    var bigWord = list[0];
    for (i = 0; i < list.length; i++) {
        var element = list[i];
        if (element.length > bigWord.length) {
            bigWord = element;
        }
    }
    return bigWord;
}
var result = megaFriend(["rana", "rahim", "rafsan", "abdullah"]);
console.log(result);


