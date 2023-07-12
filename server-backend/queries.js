const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'Letsdoit!',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  const createUser = (request, response) => {
    const { firstname, lastname, contactno, email } = request.body
  
    pool.query('INSERT INTO users (firstname, lastname, contactno, email) VALUES ($1, $2, $3, $4) RETURNING *', [firstname, lastname, contactno, email], (error, results) => {
      if (error) {
        console.log("this", error);
        throw error
      }
      const responseBody = { message: `Student added with ID: ${results.rows[0].id}` };
      response.status(201).json(responseBody)
    })
  }


  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { firstname, lastname, contactno, email } = request.body
  
    pool.query(
      'UPDATE users SET firstname = $1, lastname = $2, contactno = $3 email = $4 WHERE id = $5',
      [firstname, lastname, contactno, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }


  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }

  // const getMentors = (request, response) => {
  //   pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
  //     if (error) {
  //       throw error
  //     }
  //     response.status(200).json(results.rows)
  //   })
  // }








//   // This Controller Will Be Used For User Authentication

// const config = require("../config/auth.config");
// const db = require("../models");
// const User = db.user;
// const Role = db.role;


// // Generate A Token Using Jsonwebtoken
// var jwt = require("jsonwebtoken");

// // Compare Password With Password In Database Using Bcrypt
// var bcrypt = require("bcryptjs");

// // 
// exports.signup = (req, res) => {
//   const user = new User({
//     username: req.body.username,
//     email: req.body.email,
//     // This Will Hash / Encrypt The Password Input
//     password: bcrypt.hashSync(req.body.password, 8)
//   });

//   user.save((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }

//     // This Will Be Used To Assign A Specific Role To The User
//     if (req.body.roles) {
//       Role.find(
//         {
//           name: { $in: req.body.roles }
//         },
//         (err, roles) => {
//           if (err) {
//             res.status(500).send({ message: err });
//             return;
//           }

//           user.roles = roles.map(role => role._id);
//           user.save(err => {
//             if (err) {
//               res.status(500).send({ message: err });
//               return;
//             }

//             res.send({ message: "User was registered successfully!" });
//           });
//         }
//       );
//       //If A Role Is Not Assigned A Default User Role Will Be Assigned
//     } else {
//       Role.findOne({ name: "user" }, (err, role) => {
//         if (err) {
//           res.status(500).send({ message: err });
//           return;
//         }

//         user.roles = [role._id];
//         user.save(err => {
//           if (err) {
//             res.status(500).send({ message: err });
//             return;
//           }

//           res.send({ message: "User was registered successfully!" });
//         });
//       });
//     }
//   });
// };

// //
// exports.signin = (req, res) => {
//   User.findOne({
//     username: req.body.username
//   })
//     .populate("roles", "-__v")
//     .exec((err, user) => {
//       if (err) {
//         res.status(500).send({ message: err });
//         return;
//       }
//       // If Username Doesn't Exist In Database
//       if (!user) {
//         return res.status(404).send({ message: "User Not found." });
//       }

//       var passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//       );
//       // If The Password Doesn't Match With Username
//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "Wrong Login Username Or Password!"
//         });
//       }
      
//       var token = jwt.sign({ id: user.id }, config.secret, {
//         expiresIn: 86400 // 24 hours
//       });

//       var authorities = [];
//       // After Login This Will Display The Role the User Is Logged In As
//       for (let i = 0; i < user.roles.length; i++) {
//         authorities.push(user.roles[i].name.toUpperCase());
//       }
//       res.status(200).send({
//         id: user._id,
//         username: user.username,
//         email: user.email,
//         roles: authorities,
//         accessToken: token
//       });
//     });
// };