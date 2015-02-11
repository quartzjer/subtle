var subtle = require('./index');

subtle.generateKey({
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]), // 24 bit representation of 65537
    hash: {
      name: "SHA-256"
    }
  },
  false, // Cannot extract new key
  ["encrypt", "decrypt"]
).
then(function(keyPair) {
  console.log("generated keypair",keyPair);
});
