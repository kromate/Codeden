const fs = require('fs')

const envFormattedEntries = 'VITE_API_KEY = Generate_a_random_key'

fs.writeFileSync('.env', envFormattedEntries)