'use strict';

function wait(duration) {
    return new Promise((resolve, reject) => {
        if(duration < 0){
            reject(new Error('Time travel not yet supported'));
            console.log('entra qui');
        }
        else{
            setTimeout(resolve, duration);
        }
    });
}

wait(-1).then(() => {
    console.log('Success!');
}).catch(() => console.log('male'));
console.log('********************************');
