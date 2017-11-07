module.exports = {
  
    development: {
      client: 'pg',
      connection: 'postgres://localhost/nerdom',
    },
  
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
    },
  
  };
  