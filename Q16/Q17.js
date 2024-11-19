"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestList = ["Albert Einstein", "Mahatma Gandhi", "Nelson Mandela", "Mother Teresa", "Abdul Sattar Edhi", "Rosa Parks"];
console.log(`Dear ${guestList[0]}, you are cordially invited to dinner.`);
console.log(`Dear ${guestList[1]}, you are cordially invited to dinner.`);
console.log(`Dear ${guestList[2]}, you are cordially invited to dinner.`);
console.log(`Dear ${guestList[3]}, you are cordially invited to dinner.`);
console.log(`Dear ${guestList[4]}, you are cordially invited to dinner.`);
console.log(`Dear ${guestList[5]}, you are cordially invited to dinner.`);
console.log("We just found out that the new dinner table won't arrive in time for the dinner, and we can only invite two guests.");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});
guestList.pop();
guestList.pop();
console.log("Final guest list:", guestList);
