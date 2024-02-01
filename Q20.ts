//q20 
function withCallback(value: number, callback: (result: number) => void): void {
    const result = value * 2;
    callback(result);
  }
  
  // Example usage
  withCallback(5, (result) => {
    console.log(`Result: ${result}`);
  });