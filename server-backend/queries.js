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
