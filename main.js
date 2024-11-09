const familiya = prompt("Familiyangizni kiriting");
const ism = prompt("Ismingizni kiriting");
const yosh = prompt("Yoshingizni kiriting");
const yil = prompt("Yilingizni kiriting");

const isim = [familiya, ism, yosh, yil];
const userAge = prompt("1) Boshidan qo'shish\n2) Boshidan olish\n3) Oxiridan qo'shish\n4) Oxiridan olish");

if (userAge === "1") {
    const zero = prompt("Qanday so'z qo'shasiz?");
    isim.unshift(zero);
}
if (userAge === "2") {
    isim.shift();
}
if (userAge === "3") {
    const hero = prompt("Oxiriga qanday so'z qo'shasiz?");
    isim.push(hero);
}
if (userAge === "4") {
    isim.pop();
}

console.log(isim);


