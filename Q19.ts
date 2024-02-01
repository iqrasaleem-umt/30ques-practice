//q19 Implement a callback function within a setTimeout to log a message after a delay. Be aware of the asynchronous nature of setTimeout.

function delayedMessage(callback: () => void): void {
    setTimeout(callback, 1000);
  }
  
  // Example usage
  delayedMessage(() => {
    console.log("Delayed message");
  });