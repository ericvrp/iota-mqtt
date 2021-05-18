const { ClientBuilder } = require("@iota/client"); // https://client-lib.docs.iota.org/libraries/nodejs

new ClientBuilder()
  //   .network("mainnet")
  .node("https://chrysalis-nodes.iota.org")
  .build()
  .subscriber()
  .topics(["milestones/confirmed"])
  .subscribe((...params) => {
    console.log(params);
  });
