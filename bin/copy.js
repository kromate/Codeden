const fs = require('fs')

const envFormattedEntries = 'VITE_API_KEY = AIzaSyBsicgPD2HkD0fndVdKhuB2-2-xqlZG_oY'

fs.writeFileSync('.env', envFormattedEntries)