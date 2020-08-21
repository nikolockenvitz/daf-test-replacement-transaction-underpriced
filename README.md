# daf-test-replacement-transaction-underpriced

## setup

```
npm install
```

```js
// config.js - Example content
module.exports = {
  infuraProjectId: "<put your Infura project id here>",

  // did: "did:ethr:rinkeby:0x617b5dcb90555b92af2ea0ef89cc5e450108d776",
  // optional - if not specified, a new did will be created
  // if you specify a did here, you need to have created it by yourself -> you need the private key
};
```

If you don't have a DID already, leave it blank in the config and run the script once.
You will see a did logged to console, put that into your config and get some ether on https://faucet.rinkeby.io/.

## start

```
npm run start
```

```
npm run debug
```

## error

```
daf:ethr-did:identity-controller [ethjs-query] while formatting outputs from RPC '{"value":{"code":-32000,"message":"replacement transaction underpriced"}}'
```
