require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan raise place evil include drive fresh gauge'; 
let testAccounts = [
"0xf03e63f4b19765cf359ff13356d8f39e3ff7480d3fa93533a4fc795cbdd0dd2f",
"0xd237fe2592f74871a527207b70126aa69eb0ca0cb75f2fd1661dbc3f3bc7c3f4",
"0x3c062f4422984c72ca003a7d952498bec7de696cbba34765da7f5c7074298e87",
"0x2688d0d2a1051a441aad90f52d498800bbc637fa4889663a315bb31e5df0ffb4",
"0x0bb1aa058ff5e722001ee7367ccaad10f242a1a34d84bcebe2cf6ddda41507f7",
"0x1437ee2b8c1b0a2b31264a40d427b5f5fdfded375659b04b7e4712f20fb51e51",
"0x428234561b518157b34106cc25bb96bce4bf99c0e75d7de73f7bb16df8b38648",
"0xe5588545949a117f81db0b6173758332f10b8fec5440ecb27ae81b481cdd1998",
"0xf8ca2b9235fd1c903510f5d3513532f6d7950abf517cea144baf4821798de024",
"0x524ef155cd67f014452893daf7dcfae5b64468002e063fcdead0a71e7ee481be"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


