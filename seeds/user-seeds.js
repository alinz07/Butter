const { User } = require("../models");

const userData = [
    {
        username: "LindseyD",
        password: "password",
        email: "lindsey@mail.com",
        phone: "123-456-7777",
    },
    {
        username: "HeatherL",
        password: "password",
        email: "heather@mail.com",
        phone: "777-456-1111",
    },
    {
        username: "TonyL",
        password: "password",
        email: "tony@mail.com",
        phone: "888-456-9999",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
