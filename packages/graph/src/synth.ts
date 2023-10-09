import { store } from "@graphprotocol/graph-ts";

import {
  SynthMinted as SynthMintedEvent,
  WaveAdded as WaveAddedEvent,
  WaveRemoved as WaveRemovedEvent,
  ArtWhitelistAdded as ArtWhitelistAddedEvent,
  ArtWhitelistRemoved as ArtWhitelistRemovedEvent,
  NFTWhitelistAdded as NFTWhitelistAddedEvent,
  NFTWhitelistRemoved as NFTWhitelistRemovedEvent,
  NFTOwnershipToMintSet as NFTOwnershipToMintSetEvent,
} from "../generated/templates/Synth/Synth";
import { SynthAccount } from "../generated/templates";
import { Synth, SynthNFT, SynthWaveNFT } from "../generated/schema";

export function handleSynthMinted(event: SynthMintedEvent): void {
  let entity = new Synth(event.params.synthAccount);

  entity.owner = event.params.owner;
  // entity.account = event.params.synthAccount;
  entity.contract = event.params.synth;
  entity.tokenId = event.params.synthId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  SynthAccount.create(event.params.synthAccount);

  entity.save();
}

export function handleNftOwnershipToMintUpdated(
  event: NFTOwnershipToMintSetEvent
): void {
  // const entity = store.get(
  //   "SynthNFT",
  //   event.address.toHexString()
  // ) as SynthNFT | null;
  // if (!entity) {
  //   return;
  // }
  // entity.nftOwnershipRequired = event.params.nftOwnershipToMint;
  // entity.save();
}

export function handleWaveAdded(event: WaveAddedEvent): void {
  let entity = new SynthWaveNFT(event.address.concat(event.params.wave));

  entity.synthNft = event.address;
  entity.waveNft = event.params.wave;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleWaveRemoved(event: WaveRemovedEvent): void {
  // store.remove("SynthWaveNFT", event.address.concat(event.params.wave).toHex());
}

export function handleWhitelistNftAdded(event: NFTWhitelistAddedEvent): void {
  // const entity = store.get(
  //   "SynthNFT",
  //   event.address.toHexString()
  // ) as SynthNFT | null;
  // if (!entity) {
  //   return;
  // }
  // if (!entity.nftWhitelist) {
  //   entity.nftWhitelist = [];
  // }
  // entity.nftWhitelist = entity.nftWhitelist.concat([event.params.nft]);
  // store.set("SynthNFT", event.address.toHexString(), entity);
}

export function handleWhitelistNftRemoved(
  event: NFTWhitelistRemovedEvent
): void {
  // const entity = store.get(
  //   "SynthNFT",
  //   event.address.toHexString()
  // ) as SynthNFT | null;
  // if (!entity) {
  //   return;
  // }
  // const nft = event.params.nft;
  // entity.nftWhitelist = entity.nftWhitelist.filter((data) => data !== nft);
  // store.set("SynthNFT", event.address.toHexString(), entity);
}

export function handleWhitelistArtAdded(event: ArtWhitelistAddedEvent): void {
  // const entity = store.get(
  //   "SynthNFT",
  //   event.address.toHexString()
  // ) as SynthNFT | null;
  // if (!entity) {
  //   return;
  // }
  // if (!entity.artWhitelist) {
  //   entity.artWhitelist = [];
  // }
  // entity.artWhitelist = entity.artWhitelist.concat([event.params.art]);
}

export function handleWhitelistArtRemoved(
  event: ArtWhitelistRemovedEvent
): void {
  // const entity = store.get(
  //   "SynthNFT",
  //   event.address.toHexString()
  // ) as SynthNFT | null;
  // if (!entity) {
  //   return;
  // }
  // const art = event.params.art;
  // entity.artWhitelist = entity.artWhitelist.filter((data) => data !== art);
}
