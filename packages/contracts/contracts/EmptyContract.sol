pragma solidity ^0.5.0;

import { CommitmentChain } from "./CommitmentChain.sol";
import { Deposit } from "./Deposit.sol";


contract EmptyContract {
  address public authenticationAddress;
  address public commitmentChain;
  mapping(address => address) public depositContracts;
  // mapping (bytes32 => uint256)  exitRedeemableAfter;

  uint public id;
  // mapping(string => string) public metadata;

  constructor() public {
  }
}