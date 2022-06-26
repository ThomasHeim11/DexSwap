import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { MetaMaskContext } from "../contexts/MetaMask";

const PoolABI = require('../abi/Pool.json');

const getEvents = (poolContract, setEvents) => {
  const mintFilter = poolContract.filters.Mint();

  poolContract.queryFilter(mintFilter, "earliest", "latest")
    .then((events) => {
      setEvents(events);
    });
}

const renderAmount = (amount) => {
  return ethers.utils.formatUnits(amount);
}

const renderMint = (args) => {
  return (
    <span>
      <strong>Mint</strong>
      [range: [{args.tickLower}-{args.tickUpper}], amounts: [{renderAmount(args.amount0)}, {renderAmount(args.amount1)}]]
    </span>
  );
}

const renderEvent = (event, i) => {
  return (
    <li key={i}>{renderMint(event.args)}</li>
  )
}

const onlyMints = (event) => {
  return event.event === "Mint";
}

const EventsFeed = (props) => {
  const metamaskContext = useContext(MetaMaskContext);
  const [events, setEvents] = useState([]);
  let poolContract;

  useEffect(() => {
    if (metamaskContext.status !== 'connected') {
      return;
    }

    if (!poolContract) {
      poolContract = new ethers.Contract(
        props.config.poolAddress,
        PoolABI,
        new ethers.providers.Web3Provider(window.ethereum)
      );
    }

    if (events.length === 0) {
      getEvents(poolContract, setEvents);
    }
  });

  return (
    <ul>{events.reverse().filter(onlyMints).map(renderEvent)}</ul>
  );
}

export default EventsFeed;