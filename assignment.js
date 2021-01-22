// https://github.com/Hazrat16/BasicJS-assingment

//a program that converts kilometers to meters.
function kilometerToMeter(kilometer) {
    var result = kilometer * 1000; //1 kilometer = 1000 meter
    if (result > 0) {
        return result;
    }
    else {
        return "Distance cannot be negative.Put a positive value.";
    }
}


// a program that read number of products and calculates total budget
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    // number of product should be greater than 0
    if (numberOfWatch <= 0 || numberOfPhone <= 0 || numberOfLaptop <= 0) {
        return "Please enter a positive value."
    }
    else if (Math.floor(numberOfWatch) != numberOfWatch || Math.floor(numberOfPhone) != numberOfPhone || Math.floor(numberOfLaptop) != numberOfLaptop) {
        return "Enter a valid number of product."  // number of product should be an integer.
    }
    else {
        var budgetForWatch = 50 * numberOfWatch;   //every watch costs 50
        var budgetForPhone = 100 * numberOfPhone;   //every phone costs 100
        var budgetForLaptop = 500 * numberOfLaptop;   //every laptop costs 500
        var totalBudget = budgetForWatch + budgetForPhone + budgetForLaptop;
        return totalBudget;
    }
}


// a program that reads total days and calculates total cost
function hotelCost(dayStaying) {
    // if anyone stay more than 20days then he/she has to pay 50 for everydays after 20th days of staying and 80 for 11th to 20th day total 10 days also for 1st to 10th day he has to pay 100 for everyday.
    if (Math.floor(dayStaying) != dayStaying || dayStaying <= 0) {
        return "Enter a valid integer."
    }
    else if (dayStaying >= 20) {
        var remainig = dayStaying - 20;
        cost = remainig * 50 + 10 * 80 + 10 * 100;
    }
    // if anyone stay more than 10days then he/she has to pay 80 for everydays after 10th day and for 1st to 10th day he has to pay 100 for everyday.
    else if (dayStaying >= 10) {
        var remainig = dayStaying - 10;
        cost = remainig * 80 + 10 * 100;
    }
    // if anyone stay less or equal 10days he has to pay 100 for everyday.
    else {
        cost = dayStaying * 100;
    }
    return cost;
}



// a program that finds largest string from an array
function megaFriend(arrayOfName) {
    var largestName = arrayOfName[0];
    for (i = 1; i < arrayOfName.length; i++) {
        if (arrayOfName[i].length > largestName.length) {
            largestName = arrayOfName[i];
        }
    }
    if(largestName.length>0){
        return largestName;
    }
    else{
        return "Please enter a valid name."
    }
}

