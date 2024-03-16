// index.js

const Web3 = require('web3');

class EthereumTools {
    /**
     * Initializes EthereumTools with the provided Web3 instance.
     * @param {Web3} web3Instance - An instance of Web3 connected to an Ethereum provider.
     */
    constructor(web3Instance) {
        this._web3 = web3Instance;
    }

    /**
     * Fetches transaction receipt by transaction hash.
     * @param {string} txHash - The hash of the transaction.
     * @returns {Promise<Object|null>} - A promise that resolves with the transaction receipt object or null if not found.
     */
    async fetchTransactionReceipt(txHash) {
        try {
            return await this._web3.eth.getTransactionReceipt(txHash);
        } catch (error) {
            console.error('Error fetching transaction receipt:', error);
            throw error;
        }
    }

    /**
     * Fetches block details by block number.
     * @param {number|string} blockNumber - The number or hash of the block.
     * @returns {Promise<Object|null>} - A promise that resolves with the block object or null if not found.
     */
    async fetchBlockDetails(blockNumber) {
        try {
            return await this._web3.eth.getBlock(blockNumber);
        } catch (error) {
            console.error('Error fetching block details:', error);
            throw error;
        }
    }

    /**
     * Estimates gas usage for a transaction object.
     * @param {Object} txObject - The transaction object.
     * @returns {Promise<number>} - A promise that resolves with the estimated gas value.
     */
    async estimateGasUsage(txObject) {
        try {
            return await this._web3.eth.estimateGas(txObject);
        } catch (error) {
            console.error('Error estimating gas usage:', error);
            throw error;
        }
    }

    /**
     * Fetches current gas price.
     * @returns {Promise<BigNumber>} - A promise that resolves with the current gas price.
     */
    async fetchGasPrice() {
        try {
            return await this._web3.eth.getGasPrice();
        } catch (error) {
            console.error('Error fetching gas price:', error);
            throw error;
        }
    }

    /**
     * Fetches user accounts.
     * @returns {Promise<string[]>} - A promise that resolves with an array of user accounts.
     */
    async fetchUserAccounts() {
        try {
            return await this._web3.eth.getAccounts();
        } catch (error) {
            console.error('Error fetching user accounts:', error);
            throw error;
        }
    }

    /**
     * Deploys a contract with given ABI, bytecode, from address, and gas.
     * @param {Array} abi - The ABI (Application Binary Interface) of the contract.
     * @param {string} bytecode - The bytecode of the contract.
     * @param {string} from - The address from which the contract deployment transaction originates.
     * @param {number} gas - The gas limit for the contract deployment transaction.
     * @returns {Promise<Object>} - A promise that resolves with the deployed contract instance.
     */
    async deployContract(abi, bytecode, from, gas) {
        try {
            const contract = new this._web3.eth.Contract(abi);
            const deployment = contract.deploy({ data: bytecode });
            return await deployment.send({ from, gas });
        } catch (error) {
            console.error('Error deploying contract:', error);
            throw error;
        }
    }

    /**
     * Fetches network ID.
     * @returns {Promise<number>} - A promise that resolves with the network ID.
     */
    async fetchNetworkId() {
        try {
            return await this._web3.eth.net.getId();
        } catch (error) {
            console.error('Error fetching network ID:', error);
            throw error;
        }
    }

    /**
     * Fetches the latest block number.
     * @returns {Promise<number>} - A promise that resolves with the latest block number.
     */
    async fetchLatestBlockNumber() {
        try {
            return await this._web3.eth.getBlockNumber();
        } catch (error) {
            console.error('Error fetching latest block number:', error);
            throw error;
        }
    }

    /**
     * Fetches transaction count for a given block number.
     * @param {number|string} blockNumber - The number or hash of the block.
     * @returns {Promise<number>} - A promise that resolves with the transaction count for the block.
     */
    async fetchBlockTransactionCount(blockNumber) {
        try {
            return await this._web3.eth.getBlockTransactionCount(blockNumber);
        } catch (error) {
            console.error('Error fetching transaction count for block:', error);
            throw error;
        }
    }

    /**
     * Retrieves the balance of the specified address.
     * @param {string} address - The Ethereum address.
     * @returns {Promise
