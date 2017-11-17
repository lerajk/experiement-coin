module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rpc: {
		host: "localhost",
		gas: 4712388,
		port: 8545
	}
  }
};
