import { createPool } from "mysql";
import { config } from "dotenv";
config()

const NurulHuda_connection = createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_Name,
    user: process.env.DB_UserName,
    password: process.env.DB_UserPass,
    multipleStatements: true,
    connectionLimit: 30
})

module.exports = {
  NurulHuda_connection,
  devServer: {
    client: {
      webSocketURL: 'https://vigilant-rotary-phone-569pxrg44w6cqrj.github.dev/', // Change this to your GitHub Pages URL when deploying
    },
  },
};