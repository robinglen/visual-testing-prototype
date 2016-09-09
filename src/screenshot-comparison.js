const resemble = require('node-resemble-js');
const fs = require('fs');

resemble.outputSettings({
  largeImageThreshold: 0
});

const diff = resemble('./benchmark/snapshot.png').compareTo('./snapshots/snapshot.png').onComplete((data) =>{
    data.getDiffImage().pack().pipe(fs.createWriteStream('./snapshots/diff.png'));
    const percentageDifference = parseFloat(data.misMatchPercentage);

    if (percentageDifference > 0) {
      console.log('DIFFERENCE!', data);
    }

});
