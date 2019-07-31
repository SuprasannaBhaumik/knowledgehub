const fs = require('fs')
const bodyParser =  require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')


const server = jsonServer.create()

const router = jsonServer.router('./db.json')

const json = JSON.parse(fs.readFileSync('./db.json', 'UTF-8'))

const userJSON = json.employees


server.use(jsonServer.defaults());
// server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

const SECRET_KEY = 'everyoneinbangaloreisajavadeveloper'
const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token 
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database
function isAuthenticated({username, password}){
  return userJSON.findIndex(user => user.first_name === username && user.password === password) !== -1
}


// POST request to validate if the user exists in the database and send back the JWT
server.post('/auth/login', (req, res) => {
  const {username, password} = req.body
  if (isAuthenticated({username, password}) === false) {
    const status = 401
    const message = 'Incorrect First Name or password'
    res.status(status).json({status, message})
    return
  }
  const access_token = createToken({username, password})
  res.status(200).json({access_token})
})


server.use(/^(?!\/auth).*$/,  (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Bad authorization header'
    res.status(status).json({status, message})
    return
  }
  try {
     verifyToken(req.headers.authorization.split(' ')[1])
     next()
  } catch (err) {
    const status = 401
    const message = 'Error: access_token is not valid'
    res.status(status).json({status, message})
  }
})


// now we mount the json-server
server.use(router)

server.listen(3001, () => {
  console.log('Run Auth API Server')
})
