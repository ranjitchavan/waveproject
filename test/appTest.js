const assert = require('chai').assert;
const Module = require('./fib.js');
const wasm = Module({wasmBinaryFile: 'fib.wasm'});




describe ('App', function(){

   
    it('fib of 5 should be 55',function(){
    
        assert.equal(wasm._fib(10),55);
        
        })
    
    it('fib function sho2uld return integer',function(){
    
        assert.typeOf(wasm._fib(5),'Number')
    
    });
   
   
    it('fib of 5 should be equal to 55',function(){
    
        assert.equal(wasm._fib(10),55);
        
        })
    
});
    
