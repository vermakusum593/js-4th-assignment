function generateRandomArray(length) {
    
    const randomArray = [];
  
    
    for (let i = 0; i < length; i++) {
      
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      randomArray.push(randomNumber);
    }
  

    return randomArray;
  }
  const randomArray = generateRandomArray(5);
  console.log(randomArray); 
