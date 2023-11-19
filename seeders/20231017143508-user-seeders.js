'use strict';

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        name: 'Widada',
        profession: "Admin Micro",
        role:"admin",
        email:"ekysambora@gmail.com",
        password:await bcrypt.hash("rahasia",10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Yein',
        profession: "Frontend Developer",
        role:"student",
        email:"yein@gmail.com",
        password:await bcrypt.hash("rahasia123",10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Zein',
        profession: "Frontend Developer",
        role:"student",
        email:"zein@gmail.com",
        password:await bcrypt.hash("secretcode",10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  }
};
