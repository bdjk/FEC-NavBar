const path = require('path');
const fs = require('fs');
const perf = require('execution-time')();
const faker = require('faker');
const dataWriteStream = fs.createWriteStream('./newData/data.tsv', {
  flags: 'a',
  encoding: 'utf8',
});

let times = 10000000;
let row = 1;
console.log('Writing data...');

function writeData() {
  let ok = true;
  do {
    row++;
    if (row === times) {
      // see if should continue or wait for backpressure
      let location = faker.commerce.productAdjective();
      let size = faker.database.column();
      let brand = faker.company.companyName();
      let season = faker.lorem.word();
      let url = faker.image.fashion();

      // last time to write
      // dataWriteStream.write(`${row}\t${faker.commerce.productAdjective()}\t${faker.database.column()}\t${faker.company.companyName()}\t${faker.lorem.word()}\t${faker.image.fashion()}\n`,'utf8');
      dataWriteStream.write(`${row}\t${location}\t${size}\t${brand}\t${season}\t${url}\n`,'utf8');
      const results = perf.stop();
      console.log('writeData execution time: ' + (results.time / 1000).toFixed(5)); 
    } else {
      // see if should continue or wait for backpressure
      let location = faker.commerce.productAdjective();
      let size = faker.database.column();
      let brand = faker.company.companyName();
      let season = faker.lorem.word();
      let url = faker.image.fashion();
      ok = dataWriteStream.write(`${row}\t${location}\t${size}\t${brand}\t${season}\t${url}\n`,'utf8');
      if (row % 1000000 === 0) {
        console.log(`Wrote ${row} of 10,000,000 rows`);
      }
    }
    // while still have entires and no backpressure
  } while (row <= times && ok) {
    if (row <= times) {
      // had to stop early
      dataWriteStream.once('drain', writeData);
    }
  }
}

perf.start();
writeData();