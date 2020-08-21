const { core } = require("./daf-setup");
const localConfig = require("./config");

async function main() {
  const identity = await getOrCreateIdentity();
  console.log(identity.did);

  for (let i = 0; i < 2; i++) {
    const result = await identity.identityController.addService({
      id: "",
      type: "TestService",
      serviceEndpoint: `https://${i}.testservice.example.com`,
    });
    console.log("\x1b[93madded service", i, "?", Boolean(result), `${result ? `txHash: ${result}` : ""}\x1b[0m`);
  }
}
main();

async function getOrCreateIdentity() {
  if (localConfig.did) {
    return await core.identityManager.getIdentity(localConfig.did);
  } else {
    return await core.identityManager.createIdentity();
  }
}
