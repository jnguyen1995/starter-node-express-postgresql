const knex = require("../connection");

function list() {
  return knex("categories").select("*");
}

module.exports = {
  list,
};
