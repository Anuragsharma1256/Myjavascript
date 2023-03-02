                 // Method-chain-problem

const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        location: "rampur",
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        location: "gurgaon",
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        location: "gurgaon",
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        location: "alwar",
    },
    {
        firstName: "Jay",
        location: "gurgaon",
    },
];

// return the full names of the facebook users who belong to guragon
// HINT: use higher order functions and chain them



const gurgaonUsers = facebookProfiles.filter(user => user.location === "gurgaon");
const fullNames = gurgaonUsers.map(user => `${user.firstName} ${user.lastName ? user.lastName : ''}`);
console.log(fullNames);