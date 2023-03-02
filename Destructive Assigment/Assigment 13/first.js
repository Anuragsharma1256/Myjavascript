

//value and reference 
//problem 1

const person = {
    name: "Akash",
    mobile: 999999999,
    address: {
        pincode: 1234,
        city: "gurgaon",
        state: "haryana",
        emails: ["asd@gmail.com", "abc@yahoo.com", "rty@hotmail.com"],
    },
};

const newPerson = { ...person };

newPerson.name = "Rahul";

newPerson.address = { ...person.address, pincode: 4567 };

newPerson.address.emails = [ "asd@outlook.com", ...person.address.emails.slice(1) ];

console.log(person);
console.log(newPerson);



