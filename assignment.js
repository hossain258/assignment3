
1.// kilometerToMeter
// decalare the function
function kilometerToMeter(km) {

    var meter = (km * 1000);
    return meter;

}

//calling the function

var result = kilometerToMeter(2);
console.log(result);
// outpur :2000


2.// budgetCalculator

function budgetCalculator(price1, price2, price3) {
    var totalcost = price1 + price2 + price3;
    return totalcost;

}

result = budgetCalculator(50, 60, 80);
console.log(result);
// output 190


3.//hotelCost
// variable declaration

var hotel_prices = new Array();
hotel_prices["Hotel sonargon"] = 50;
hotel_prices["Dahaka Regency"] = 75;
hotel_prices["westin Hotel"] = 100;

function hotelBudget() {
    var HotelSizePrice = 0;

    for (var i = 0; i < selectedHotel.length; i++) {

        if (selectedHotel[i].checked) {
            HotelSizePrice = hotel_prices[selectedHotel[i].value];

            break;
        }
    }
    return HotelSizePrice;

    function getNights() {

        var quantity = elements["Nights"];
        var duration = 0;

        if (quantity.value != "") {
            duration = parseInt(quantity.value);
        }
        return duration;
    }
}

var HotelPrice = hotelBudget() + getNights();


console.log(HotelPrice);

4.//megaFriend

function megaFriend(array) {
    var longestWord = "";

    array.forEach(function (word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

var word = megaFriend(["karim", "rahima", "Mohammad", "Emon", "Aslam"]);
console.log(word);
  // Output: "Mohammad"
