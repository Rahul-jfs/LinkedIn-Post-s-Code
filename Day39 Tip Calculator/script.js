const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value);
  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercentage = Number(tipInput.value / 100);
  // get the total tip amount
  const tipAmount = bill * tipPercentage;
  // calculate the total (tip amount + bill)
  const total = bill + tipAmount;
  // calculate the per person total (total divided by number of people)
  const perPersonTotal = total / numberOfPeople;
  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `₹ ${perPersonTotal.toFixed(2)}`;
};

const increasePeople = () => {
  numberOfPeople += 1;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return;
  }
  numberOfPeople -= 1;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};
