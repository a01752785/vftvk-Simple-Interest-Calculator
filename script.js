function computeInterest(amount, interestRate, years)
{
    var result = amount * years * interestRate;
    return result;
}

function generateOutput() {
    var amount = Number(document.getElementById("amount").value);
    var interestRate = Number(document.getElementById("rate").value) / 100;
    var years = Number(document.getElementById("years").value);
    var result = computeInterest(amount, interestRate, years);
    var futureYear = new Date().getFullYear() + parseInt(years);

    if (amount <= 0) {
        alert("Enter a positive number");
        return;
    }

    var outputStr = "If you deposit " + "<span class=\"numeric-result\">" + amount + "<\/span> <br\/>"
        + "at an interest rate of " + "<span class=\"numeric-result\">" + (interestRate * 100) + "%<\/span>. <br\/>"
        + "You will receive an amount of " + "<span class=\"numeric-result\">" + result + "<\/span>, <br\/>"
        + "in the year " + "<span class=\"numeric-result\">" + futureYear + "<\/span> <br\/>";
    document.getElementById("result").innerHTML = outputStr;
}



function updateRateText(value) {
    document.getElementById("rate-text").innerHTML = value + "%";
}