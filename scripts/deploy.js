// scripts/deploy.js
async function main() {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory("ZinUru");
  console.log("Deploying ZinUru...");
  const box = await Box.deploy();
  await box.deployed();
  console.log("ZinUru deployed to:", box.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
