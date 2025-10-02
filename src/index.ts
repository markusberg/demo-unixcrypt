import { encrypt, verify } from "unixcrypt";

const plaintextPassword = "password";

// without providing salt, random salt is used, and default number of rounds
const pwHash = encrypt(plaintextPassword);

// verify password with generated hash
console.log(verify(plaintextPassword, pwHash));
// true

// specify number of rounds
const moreRounds = encrypt(plaintextPassword, "$6$rounds=10000");
console.log(verify(plaintextPassword, moreRounds));
// true

// provide custom salt
const customSalt = encrypt(plaintextPassword, "$6$salt");
console.log(verify(plaintextPassword, customSalt));
// true

// or provide both rounds and salt
const customRoundsAndSalt = encrypt(plaintextPassword, "$6$rounds=10000$salt");
console.log(verify(plaintextPassword, customRoundsAndSalt));
// true

// you can also use SHA-256
const sha256 = encrypt(plaintextPassword, "$5");
console.log(verify(plaintextPassword, sha256));
// true
