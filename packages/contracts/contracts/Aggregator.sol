pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

/* External Imports */
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

/* Internal Imports */
import { CommitmentChain } from "./CommitmentChain.sol";
import { Deposit } from "./Deposit.sol";

contract Aggregator {
  address public authenticationAddress;
  CommitmentChain public commitmentChain;
  mapping(address => Deposit) public depositContracts;
  uint public id;
  mapping(string => string) public metadata;

  constructor(address _authenticationAddress, uint _id) public {
    // authenticationAddress = _authenticationAddress;
    // commitmentChain = CommitmentChain(_authenticationAddress);
    // id = _id;
    // require(false == true, "false != true");
  }

  function addDepositContract(ERC20 _erc20, address _walletAddress) public returns (Deposit depositContract) {
    require(msg.sender == authenticationAddress, "addDepositContract can only be called by authenticated address.");
    Deposit depositContract = new Deposit(_erc20, commitmentChain);
    depositContracts[_walletAddress] = depositContract;
    return depositContract;
  }

  function setMetadata(string memory _ip, string memory _data) public {
    require(msg.sender == authenticationAddress, "setMetadata can only be called by authenticated address.");
    metadata[_ip] = _data;
  }

  function deleteMetadata(string memory _ip) public {
    require(msg.sender == authenticationAddress, "deleteMetadata can only be called by authenticated address.");
    delete metadata[_ip];
  }
}