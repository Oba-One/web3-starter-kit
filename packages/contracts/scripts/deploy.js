const { ethers, upgrades } = require("hardhat");

const easMap = {
  10: "0x4200000000000000000000000000000000000021",
  // 8453: "0x2d0E95bd4795d7ADc7dF6D6E7e0f6179A7dCDb6A",
  // 7777777: "0x7b1eD6EEC7488E6f2DfcbD2Cf966a9e08a8fDa10",
  420: "0x4200000000000000000000000000000000000021",
  84531: "0xAcfE09Fd03f7812F022FBf636700AdEA18Fd2A7A",
  999: "0x086B4803d486a56bbdFAB10b839954A7542F17C0",
  919: "0x2FC89594E0FeDE3faB22089F815e7371e7fF289B",
};

// address constant OP_GOERLI_HIGHLIGHT_MINT_MANAGER_ADDRESS = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
// address constant BASE_GOERLI_HIGHLIGHT_MINT_MANAGER_ADDRESS = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
// address constant ZORA_GOERLI_HIGHLIGHT_MINT_MANAGER_ADDRESS = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
// address constant MODE_SEPOLIA_HIGHLIGHT_MINT_MANAGER_ADDRESS = 0x5FbDB2315678afecb367f032d93F642f64180aa3;

async function main() {
  // Deploying
  await ethers.provider.getSigner(0);
  const network = await ethers.provider.getNetwork();

  // 1. Wave Resolver
  const WaveResolver = await ethers.getContractFactory("WaveResolver");
  const waveResolver = await upgrades.deployProxy(WaveResolver, [], {
    unsafeAllow: ["state-variable-immutable", "constructor"],
    constructorArgs: [easMap[network.chainId]],
  });

  const waveResolverAddress = await waveResolver.getAddress();

  console.log("WaveResolver deployed to:", waveResolverAddress);

  // 2. Wave Registry
  const WaveRegistry = await ethers.getContractFactory("WaveRegistry");
  const waveRegistry = await upgrades.deployProxy(
    WaveRegistry,
    [waveResolverAddress],
    {
      kind: "uups",
    },
  );
  const waveRegistryAddress = await waveRegistry.getAddress();

  console.log("WaveRegistry deployed to:", waveRegistryAddress);

  // 3. Synth Account (ERC-6551)
  const SynthAccount = await ethers.getContractFactory("SynthAccount");
  const synthAccount = await upgrades.deployProxy(SynthAccount, [
    5,
    waveRegistryAddress,
  ]);
  const synthAccountAddress = await synthAccount.getAddress();

  const synthImplAddress = await upgrades.erc1967.getImplementationAddress(
    synthAccountAddress,
  );

  console.log("SynthAccount deployed to:", synthAccountAddress);
  console.log("SynthAccount implementation deployed to:", synthImplAddress);

  // 4. Synth Registry
  const SynthRegistry = await ethers.getContractFactory("SynthRegistry");
  const synthRegistry = await upgrades.deployProxy(
    SynthRegistry,
    [synthImplAddress],
    {
      kind: "uups",
    },
  );
  const synthRegistryAddress = await synthRegistry.getAddress();

  console.log("SynthRegistry deployed to:", synthRegistryAddress);

  // 5. Graph Protocol update Wave Registry
  // const graphWaveRegistryCmd = `graph protocol update ${waveRegistryAddress} --node http://localhost:8020`;

  // 6. Graph Protocol update Synth Registry
  // const graphSynthRegistryCmd = `graph protocol update ${synthRegistryAddress} --node http://localhost:8020`;

  // 7. Mint Synths & Waves NFTs
  // Upgrading
  // const SynthAccountV2 = await ethers.getContractFactory("SynthAccount");
  // const upgraded = await upgrades.upgradeProxy(
  //   await instance.getAddress(),
  //   SynthAccountV2,
  // );
}

main();
