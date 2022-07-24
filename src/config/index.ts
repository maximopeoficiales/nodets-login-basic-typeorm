export default {
    DB: {
      HOST: process.env.MYSQL_HOST || "localhost",
      PORT: process.env.MYSQL_PORT || "3306",
      USER: process.env.MYSQL_USER || "root",
      PASSWORD: process.env.MYSQL_PASSWORD || "root",
      DATABASE: process.env.MYSQL_DATABASE || "proyect_one",
    },
  };