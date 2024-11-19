"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = ["Madiha", "Komal", "Tasbiha"];
console.log(`Dear ${guestList[0]}, you are cordially invited to dinner.`);
console.log(`Dear ${guestList[1]}, you are cordially invited to dinner.`);
console.log(`Dear ${guestList[2]}, you are cordially invited to dinner.`);
// Someone can't make it.
let unableToAttend = guestList[1];
console.log(`${unableToAttend} can't make it to the dinner.`);
// Replace with a new guest
guestList[1] = "Fatima";
console.log(`Dear ${guestList[0]}, you are cordially invited to dinner.`);
console.log(`Dear ${guestList[1]}, you are cordially invited to dinner.`);
console.log(`Dear ${guestList[2]}, you are cordially invited to dinner.`);
// Found a bigger dinner table
console.log("We found a bigger dinner table!");
// Add more guests
guestList.unshift("Khazina");
guestList.splice(2, 0, "Manal");
guestList.push("Jiya");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});
