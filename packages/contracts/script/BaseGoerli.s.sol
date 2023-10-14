// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { Script } from "forge-std/Script.sol";

/**
 * @title BaseScript
 * @notice Script for deploying Wave Collector Contracts.
 * @dev https://book.getfoundry.sh/reference/forge/forge-script
 *
 * @dev This script s used to create Waves and Synths from their repsective registry with forge script
 * example start anvil with `anvil` command and then run
 * @dev Scripts can be used for development and testing, but they are not required for production.
 */
contract BaseScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("FORGE_PRIVATE_KEY");

        // Start Broadcasting Transactions
        vm.startBroadcast(deployerPrivateKey);

        // Stop Broadcasting Transactions
        vm.stopBroadcast();
    }
}
