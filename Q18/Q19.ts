let guestList: string[] = ["Madiha", "Komal", "Manal", "Khazina", "Tasbiha", "Fatima"];

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

console.log(`Number of people invited to dinner: ${guestList.length}`);
``