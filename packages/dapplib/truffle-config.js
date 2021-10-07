require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet rice stereo modify inflict clog army genre'; 
let testAccounts = [
"0xb24b840a271bfbac2c70f877a1c63c6bf38939fd560ba41c255612fc2cc8a40d",
"0x3de9991fe6135e6c93b72de0a6871356e64efda50b6e4790e9904b3561f5bd5f",
"0x815746813ac64ed4286ea7e9e434a86a15db5c5f2b38b64ec6fa9ddc28bd62be",
"0x6d126db225de405e5009c32a7e6b81c56faff4c6cc2c32c65852544e36264501",
"0xbc46ee8cfd71d60f2d66b3210e8a754b45192dbb66e8cdf6d4a9548671873303",
"0xa5cc9f0d93e7fe4da3b2402ebf674163dc1a8298853038861ded47c02994bcef",
"0x5eab0426865d030f4fe532c89753efa0aea1b9ecb862f330e60ebefd31827c54",
"0x9bc528ca6172dfe9ec5554d95254f9bcaa826359c52cafeba1c0ad947c4ba5dd",
"0x9ae36e42e450ae644d3e039f958a9ec678b064641763ccc7ac15b623c0342a12",
"0xb11f5f05ab7a422392d4958c47af77e87570cb6698cc318ce76bde9b87c0a0e8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

