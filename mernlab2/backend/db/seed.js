
const Mern = require('../models/Mern');

const mernData = require('./mern');


Mern.deleteMany({}).then(() => {
  Mern.collection.insert(mernData)
  .then(myMern => {
    console.log(mernData)
  })
  .catch(err => {
    console.log(err)
  })
})
 