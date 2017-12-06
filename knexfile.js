module.exports = {
  
    development: {
      client: 'pg',
      connection: 'postgres://localhost/bigBangTheory',
    },
  
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
    },
  
  };
  