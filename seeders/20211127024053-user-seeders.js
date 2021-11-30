'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Widada',
        profession: 'Admin Micro',
        role: 'admin',
        email:'juarakoding@mail.com',
        password: await bcrypt.hash('jawarakoding123',10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Yein',
        profession: 'FrontEnd Developer',
        role: 'student',
        email:'yein@mail.com',
        password: await bcrypt.hash('yein123',10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
