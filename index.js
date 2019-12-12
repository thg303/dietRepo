require('./src/globals/global')
require('dotenv').config()
const app = require('./src/app')

const port = process.env.PORT
app.listen(port, () => print('Server is up on port ' + port))