pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

/* External Imports */
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

/* Internal Imports */
import { CommitmentChain } from "./CommitmentChain.sol";
import { DepositContract } from "./DepositContract.sol";

contract Aggregator {
  address public authenticationAddress;
  CommitmentChain public commitmentContract;
  mapping(address => DepositContract) depositContracts;
  uint public id;
  mapping(string => string) metadata;

  constructor(address _authenticationAddress, uint _id) public {
    authenticationAddress = _authenticationAddress;
    commitmentContract = new CommitmentChain();
    id = _id;
  }

  function addDepositContract(ERC20 _erc20, address _walletAddress) public returns (DepositContract depositContract) {
    require(msg.sender == authenticationAddress, "addDepositContract can only be called by authenticated address.");
    // Deposit depositContract = new DepositContract(address(_erc20), address(commitmentContract));
    DepositContract depositContract = new DepositContract();
    depositContracts[_walletAddress] = depositContract;
    return depositContract;
  }

  // function setMetadata(string memory _ip, string memory _data) public {
  //   require(msg.sender == authenticationAddress, "setMetadata can only be called by authenticated address.");
  //   metadata[_ip] = _data;
  // }

  // function deleteMetadata(string memory _ip) public {
  //   require(msg.sender == authenticationAddress, "deleteMetadata can only be called by authenticated address.");
  //   delete metadata[_ip];
  // }
}
