//q21 Build a promise that resolves with a message after a delay. Use the async and await keywords for asynchronous operations.
function buildpromise(){ 
   return new Promise((resolves)=>{ 
        setTimeout(()=>{ 
            
            resolves("delay message resolve")
            
        },5000);
        
    })
    
} 
buildpromise().then((message)=>{ 
    console.log("resolve:",message)
})
