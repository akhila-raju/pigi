pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

/* External Imports */
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

/* Internal Imports */
import { Aggregator } from "./Aggregator.sol";
import { PlasmaRegistry } from "./PlasmaRegistry.sol";

contract AggregatorWithIPCreationProxy {

  constructor(PlasmaRegistry _plasmaRegistry, address _authenticationAddress, string memory data) public {
    // this doesn't work properly
    if (PlasmaRegistry(_plasmaRegistry).getAggregatorCount() == 0) {
      _plasmaRegistry = new PlasmaRegistry();
    }
    // Aggregator newAggregator = _plasmaRegistry.newAggregator(_authenticationAddress);
    // newAggregator.setMetadata("ip", data);

    // This is not working properly....
    // selfdestruct(msg.sender);
  }
}
