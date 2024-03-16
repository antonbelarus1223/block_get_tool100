const Web3 = require('web3');

class Web3Tools {
    constructor(providerUrl, timeout = 10000) {
        this._web3 = new Web3(providerUrl, { timeout });
    }

    async fetchTransactionReceipt(txHash) {
        return this._web3.eth.getTransactionReceipt(txHash);
    }

    async fetchBlockDetails(blockNumber) {
        return this._web3.eth.getBlock(blockNumber);
    }

    async estimateGasUsage(txObject) {
        return this._web3.eth.estimateGas(txObject);
    }

    async fetchGasPrice() {
        return this._web3.eth.getGasPrice();
    }

    async fetchUserAccounts() {
        return this._web3.eth.getAccounts();
    }

    async deployContract(abi, bytecode, from, gas) {
        const contract = new this._web3.eth.Contract(abi);
        const deployment = contract.deploy({ data: bytecode });
        return deployment.send({ from, gas });
    }

    async fetchNetworkId() {
        return this._web3.eth.net.getId();
    }

    async fetchLatestBlockNumber() {
        return this._web3.eth.getBlockNumber();
    }

    async fetchBlockTransactionCount(blockNumber) {
        return this._web3.eth.getBlockTransactionCount(blockNumber);
    }

    async getBalance(address) {
        return this._web3.eth.getBalance(address);
    }

    async getTransactionCount(address) {
        return this._web3.eth.getTransactionCount(address);
    }

    async getCode(address) {
        return this._web3.eth.getCode(address);
    }

    async getTransaction(txHash) {
        return this._web3.eth.getTransaction(txHash);
    }

    async getPastLogs(filterOptions) {
        return this._web3.eth.getPastLogs(filterOptions);
    }
}

module.exports = Web3Tools;
