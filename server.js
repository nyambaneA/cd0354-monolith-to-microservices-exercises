const docker_password = process.env.DOCKER_PASSWORD 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    await sleep(5000);
    console.log(`My Environmental variable is ${docker_password}`)
  }
}



main();
