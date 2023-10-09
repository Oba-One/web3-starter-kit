const { ethers, upgrades } = require("hardhat");

// address constant OP_GOERLI_HIGHLIGHT_MINT_MANAGER_ADDRESS = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
// address constant BASE_GOERLI_HIGHLIGHT_MINT_MANAGER_ADDRESS = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
// address constant ZORA_GOERLI_HIGHLIGHT_MINT_MANAGER_ADDRESS = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
// address constant MODE_SEPOLIA_HIGHLIGHT_MINT_MANAGER_ADDRESS = 0x5FbDB2315678afecb367f032d93F642f64180aa3;

const easMap = {
  10: "0x4200000000000000000000000000000000000021",
  // 8453: "0x2d0E95bd4795d7ADc7dF6D6E7e0f6179A7dCDb6A",
  // 7777777: "0x7b1eD6EEC7488E6f2DfcbD2Cf966a9e08a8fDa10",
  420: "0x4200000000000000000000000000000000000021",
  84531: "0xAcfE09Fd03f7812F022FBf636700AdEA18Fd2A7A",
  999: "0x086B4803d486a56bbdFAB10b839954A7542F17C0",
  919: "0x2FC89594E0FeDE3faB22089F815e7371e7fF289B",
};

async function main() {
  // Deploying
  await ethers.provider.getSigner(0);
  const network = await ethers.provider.getNetwork();

  // 1. Wave Resolver
  // const WaveResolver = await ethers.getContractFactory("WaveResolver");
  // const WaveResolverContract = await upgrades.forceImport(
  //   "0x001D95850b5197E5613804c714166ea94d0352c0",
  //   WaveResolver,
  // );
  // const waveResolver = await upgrades.upgradeProxy(
  //   WaveResolverContract,
  //   WaveResolver,
  //   {
  //     unsafeAllow: ["state-variable-immutable", "constructor"],
  //     constructorArgs: [easMap[network.chainId]],
  //   },
  // );

  // const waveResolverAddress = await waveResolver.getAddress();

  // console.log("WaveResolver upgraded", waveResolverAddress);

  // 2. Wave Registry
  // const WaveRegistry = await ethers.getContractFactory("WaveRegistry");
  // const WaveContract = await upgrades.forceImport(
  //   "0x61d4F4D4a1fab9f1ba3e5e193bfDa9C89B8c3D0E",
  //   WaveRegistry,
  // );
  // const waveRegistry = await upgrades.upgradeProxy(WaveContract, WaveRegistry, {
  //   kind: "uups",
  // });
  // const waveRegistryAddress = await waveRegistry.getAddress();

  // console.log("WaveRegistry upgraded", waveRegistryAddress);

  // // 3. Synth Account (ERC-6551)
  // const SynthAccount = await ethers.getContractFactory("SynthAccount");
  // const SynthAccountContract = await upgrades.forceImport(
  //   "0xAa0675ccC4B64446d05487888db9203a851B94d3",
  //   SynthAccount,
  // );

  // const synthAccount = await upgrades.upgradeProxy(
  //   SynthAccountContract,
  //   SynthAccount,
  // );
  // const synthAccountAddress = await synthAccount.getAddress();

  // const synthImplAddress = await upgrades.erc1967.getImplementationAddress(
  //   synthAccountAddress,
  // );

  // console.log("SynthAccount deployed to:", synthAccountAddress);
  // console.log("SynthAccount implementation deployed to:", synthImplAddress);

  // 4. Synth Registry
  const SynthRegistry = await ethers.getContractFactory("SynthRegistry");
  const SynthRegistryContract = await upgrades.forceImport(
    "0xCd571Fd48ea82bc8F4CFeF7bc1EB325464B4abA6",
    SynthRegistry,
  );
  const synthRegistry = await upgrades.deployProxy(
    SynthRegistryContract,
    SynthRegistry,
    {
      kind: "uups",
      // call: { fn: "initialize", args: [synthImplAddress] },
    },
  );
  const synthRegistryAddress = await synthRegistry.getAddress();

  console.log("SynthRegistry upgraded", synthRegistryAddress);

  // 5. Graph Protocol update Wave Registry
  // const graphWaveRegistryCmd = `graph protocol update ${waveRegistryAddress} --node http://localhost:8020`;

  // 6. Graph Protocol update Synth Registry
  // const graphSynthRegistryCmd = `graph protocol update ${synthRegistryAddress} --node http://localhost:8020`;
}

main();
