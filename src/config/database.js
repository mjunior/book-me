module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  password: 'docker',
  username: 'docker',
  database: 'book_me',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    unserscoreAll: true
  }
}
