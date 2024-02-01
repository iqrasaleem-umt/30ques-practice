//q22 Chain two promises to perform sequential asynchronous operations. Ensure that the second operation depends on the result of the first one.
function asyncFun1(){ 
    return new Promise((resolve,reject)=>{ 
      setTimeout(()=>{ 
     console.log("data1")
     resolve("success")
    },3000);
    
    })
  }
   function asyncFun2(){ 
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{ 
          console.log("data2")
          resolve("success")
         },3000);
         
         })
       }
       console.log("fetching data one")
       let p3=asyncFun1()
       p3.then((value)=>{ 
        console.log(value)
        console.log("fetching data two")
        let p4=asyncFun2()
        p4.then((res)=>{ 
        console.log(res)
        })
        })
        
       
    
            
        