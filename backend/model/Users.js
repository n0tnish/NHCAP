import {
    NurulHuda_connection
  } from '../config/index.js'
  import {
    generateToken
  } from '../middleware/userAuthentication.js'
  import bcrypt from 'bcryptjs'
  
  class Users {
    fetchUsers(req, res) {
      const dbQry = `
          SELECT userID, firstName, lastName,
          userAge, Gender, userRole, emailAdd, userPass, userProfile
          FROM Users;
          `
      NurulHuda_connection.query(dbQry, (error, results) => {
        if (error) throw error
        res.json({
          status: res.errorCode,
          results
        })
      })
    }
    fetchUser(req, res) {
      const dbQry = `
          SELECT userID, firstName, lastName,
          userAge, Gender, userRole, emailAdd, userPass, userProfile
          FROM Users
          WHERE userID = ${req.params.id};
          `
      NurulHuda_connection.query(dbQry, (error, result) => {
        if (error) throw error
        res.json({
          status: res.errorCode,
          result
        })
      })
    }
    async createUser(req, res) {
      // Payload
      const {
        username,
        email,
        password,
      } = req.body
      if (!username || !email || !password) {
        return res.json({
          status: res.errorCode,
          message: 'Please provide a username, email, and password.'
        })
      }
      // Check if the user already exists
      const existingUser = await user.findOne({
        where: {
          email: req.body.email
        }
      });
      if (existingUser) {
        return res.status(400).json({
          message: "Email already exists"
        });
      }
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10)
      // Create a new user
     const user = await user.create({
        username,
        email,
        password: hashedPassword,
      });
      // Return the user object
      res.status(201).json({
        user
      });
    }
    async updateUser(req, res) {
      const data = req.body
      if (data?.password) {
        data.password = await bcrypt.hash(data.password, 10)
      }
      const dbQry = `
          UPDATE Users
          SET ?
          WHERE userID = ${req.params.id};
          `
      connection.query(dbQry, [data], (error) => {
        if (error) throw error
        res.json({
          status: res.errorCode,
          message: "The user information is updated."
        })
      })
    }
    deleteUser(req, res) {
      const dbQry = `
          DELETE FROM Users
          WHERE userID = ${req.params.id};
          `
      connection.query(dbQry, (err) => {
        if (err) throw err
        res.json({
          status: res.errorCode,
          message: "User is successfully deleted"
        })
      })
    }
    login(req, res) {
      const {
        email,
        password
      } = req.body
      const dbQry = `
          SELECT userID, firstName, lastName,
          userAge, Gender, userRole, emailAdd, userPass, userProfile
          FROM Users
          WHERE emailAdd = '${email}';
          `
      connection.query(dbQry, async (error, result) => {
        if (error) throw error
        if (!result?.length) {
          res.json({
            status: res.errorCode,
            message: "Incorrect email entered. Please try again"
          })
        } else {
          // Validate password
          const validatePass = await bcrypt.compare(password, result[0].userPass)
          if (validatePass) {
            const token = generateToken({
              email,
              password
            })
           res.json({
              status: res.errorCode,
              message: "Login Successful",
              token,
              result: result[0]
            })
          } else {
            res.json({
              status: res.errorCode,
              message: "Incorrect password entered. Please try again."
            })
          }
        }
      })
    }
  }
  
  export const userController = new Users()
  export default userController