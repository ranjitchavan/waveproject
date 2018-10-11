const Module = require('./test/fib.js');
const wasm = Module({wasmBinaryFile: './test/fib.wasm'});
wasm.onRuntimeInitialized = function() {
    console.log(wasm._fib(10));
    ///console.log(Object.keys(wasm))
};