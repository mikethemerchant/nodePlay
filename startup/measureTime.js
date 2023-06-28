const DoSomething = () => {
    console.log('Doing something...');
}
const MeasureTime = () => {
    console.time('doSomething()');
    // Do something, and measure the time it takes
    DoSomething();
    console.timeEnd('doSomething()');
}
MeasureTime();