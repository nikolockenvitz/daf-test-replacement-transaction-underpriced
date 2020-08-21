const localConfig = require("./config");

// We will be using 'did:ethr' identities
const { IdentityProvider } = require("daf-ethr-did");

// Storing serialized key pairs
const { KeyStore } = require("daf-fs");
const keyStore = new KeyStore("./key-store.json");

// KeyManagementSystem is responsible for managing encryption and signing keys
const { KeyManagementSystem } = require("daf-libsodium");
const kms = new KeyManagementSystem(keyStore);

// Storing serialized identities
const { IdentityStore } = require("daf-fs");
const identityStore = new IdentityStore("./identity-store.json");

// Infura is being used to access Ethereum blockchain. https://infura.io
const infuraProjectId = localConfig.infuraProjectId;

// Injecting required dependencies, and specifying which blockchain to use and how to access it
const rinkebyIdentityProvider = new IdentityProvider({
  kms,
  identityStore,
  network: "rinkeby",
  rpcUrl: "https://rinkeby.infura.io/v3/" + infuraProjectId,
});

// Using local DID Document resolver. It is being used internally to
/// validate messages and to get information about service endpoints
const { DafResolver } = require("daf-resolver");
const didResolver = new DafResolver({ infuraProjectId });

// Initializing the Core by injecting dependencies
const { Agent } = require("daf-core");
const core = new Agent({
  didResolver,
  identityProviders: [rinkebyIdentityProvider],
});
module.exports.core = core;
