let assert = require('assert');
let passPhrase = "testing"
import service from "../src/service/encryption";

describe(`1. create public and private key pairs`, async function () {
  it('keys contains public and private key', async function () {
    let keys = await service.createPublicAndPrivateKey(passPhrase);
    if (keys.publicKey && keys.privateKey) {
      assert.ok(true)
    } else {
      assert.ok(false)
    }
  })
})


describe(`2. validate encrypted and decrypted key`, async function () {
  it('orignal key and decrypted keys are same', async function () {
    let keys = await service.createPublicAndPrivateKey(passPhrase);
    let orignalKey = "hello world";
    let encKey = await service.encryptStringWithRsaPublicKey(orignalKey, keys.publicKey);
    let decKey = await service.decryptStringWithRsaPrivateKey(encKey, keys.privateKey, passPhrase);
    assert.equal(orignalKey, decKey)
  })
})