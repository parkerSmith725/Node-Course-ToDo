const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10,(e,salt) => {
//     bcrypt.hash(password,salt,(err, hash) => {
//         console.log(hash); 
//     });
// });

var hashedPassword = '$2a$10$RuzpByIBRiS9e7cAP6WAwOZXFbtaTZ7ptwt1U1GNptRc5NRX2Xm5m';

bcrypt.compare('123',hashedPassword,(e,result) => {
    console.log(result);
});



// var data = {
//     id:10
// };

// var token = jwt.sign(data,'123abc');
// console.log("Token",token);

// var decoded = jwt.verify(token,'123abc');
// console.log("Decoded",decoded);