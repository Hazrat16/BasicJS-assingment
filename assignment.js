// https://github.com/Hazrat16/BasicJS-assingment


function kilometerToMeter(kilometer) {
    var result = kilometer * 1000; //1 kilometer = 1000 meter
    if (result > 0) {
        return result;
    }
    else {
        return "Distance cannot be negative.Put a positive value.";
    }
}

var input = kilometerToMeter(-.3);
console.log(input);


function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0) {
        return "You can't buy a negative number of product.Please enter a positive value."
    }
    else {
        var budgetForWatch = 50 * numberOfWatch;   //every watch costs 50
        var budgetForPhone = 100 * numberOfPhone;   //every phone costs 100
        var budgetForLaptop = 500 * numberOfLaptop;   //every laptop costs 500
        var totalBudget = budgetForWatch + budgetForPhone + budgetForLaptop;
        return totalBudget;
    }
}

var budget = budgetCalculator(-6, -4, -2);
console.log(budget);


function hotelCost(dayStaying){
    // if anyone stay more than 20days then he/she has to pay 50 for everydays after 20th days of staying and 80 for 11th to 20th day total 10 days also for 1st to 10th day he has to pay 100 for everyday.
    if(dayStaying>=20){
        var remainig = dayStaying - 20;
        cost = remainig*50 + 10*80 + 10*100;
    }
    // if anyone stay more than 10days then he/she has to pay 80 for everydays after 10th day and for 1st to 10th day he has to pay 100 for everyday.
    else if(dayStaying>=10){
        var remainig = dayStaying - 10;
        cost = remainig*80 + 10*100;
    }
    // if anyone stay less or equal 10days he has to pay 100 for everyday.
    else{
        cost = dayStaying*100;
    }
    return cost;
}


for(i=0;i<=33;i++){
    var input = hotelCost(i);
    console.log(input);
}


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
        return "Name's length can't be zero.Please enter a real name."
    }
}

var input = ([ '', '']);
var result = megaFriend(input);

console.log(result);
// console.log(megaFriend(['ali', 'monir', 'tanvir', 'shanto', 'mamunur', 'zayedislam']));

