let tab = document.querySelector('table');
let tdshes = document.querySelectorAll('td');
let one = [];
let complete = new Set;  
let complete2 = new Set;
let complete3 = new Set;

let firstOne = Math.round((Math.random()) * 99);
busy (firstOne);
tdshes[firstOne].classList.add('gray');

while (complete.size < 3){
  let secondOne = Math.round((Math.random()) * 99);
  if (!one.includes(secondOne)){
    complete.add(secondOne);
    tdshes[secondOne].classList.add('gray');
    busy(secondOne);
  }
}
/*trhrthrthrthtr*/
while (complete2.size < 3){
  let firstTwo = Math.round((Math.random()) * 99);
  let secondTwo = secondBort(firstTwo);  
  if (!one.includes(firstTwo) && 
  !one.includes(secondTwo)){
    complete2.add(firstTwo);
    busy(firstTwo);
    busy(secondTwo);
    tdshes[firstTwo].classList.add('gray');
    tdshes[secondTwo].classList.add('gray');
  }
}

while (complete3.size < 2){
  let firstThird = Math.round((Math.random()) * 99);
  let secondThird = thirdBort(firstThird);
  if (!one.includes(firstThird) && 
  !one.includes(secondThird[0]) && 
  !one.includes(secondThird[1])){
    complete3.add(firstThird);
    busy(firstThird);
    busy(secondThird[0]);
    busy(secondThird[1]);
    tdshes[firstThird].classList.add('gray');
    tdshes[secondThird[0]].classList.add('gray');
    tdshes[secondThird[1]].classList.add('gray');
  }
}

let foursFirst = Math.round((Math.random()) * 99);
  let secondFours = fourthBort(foursFirst);
  if (!one.includes(foursFirst) && 
  !one.includes(secondFours[0]) && 
  !one.includes(secondFours[1]) &&
  !one.includes(secondFours[2])){    
    tdshes[foursFirst].classList.add('gray');
    tdshes[secondFours[0]].classList.add('gray');
    tdshes[secondFours[1]].classList.add('gray');
    tdshes[secondFours[2]].classList.add('gray');
  }

function busy (num){
  one.push(num);
  if (Number(String(num).slice(-1)) != 0 && num > 10){  
    one.push(num - 11);    
  }
  if (num > 10){
    one.push(num - 10);    
  }
  if (num > 10 && Number(String(num).slice(-1)) != 9){
    one.push(num - 9);
  }
  if (Number(String(num).slice(-1)) != 0){
    one.push(num - 1);
  }
  if (num < 90 && Number(String(num).slice(-1)) != 9){  
    one.push(num + 11);  
  }  
  if (num < 90){
    one.push(num + 10);    
  }
  if (num < 90 && Number(String(num).slice(-1)) != 0){
    one.push(num + 9);
  }
  if (Number(String(num).slice(-1)) != 9){
    one.push(num + 1);
  }
}

function secondBort (num){
  let bort = [];  
  if (Number(String(num).slice(-1)) != 9){
    bort.push(num + 1);
  }
  if (Number(String(num).slice(-1)) != 0){
    bort.push(num - 1);
  }
  if (num > 9){
    bort.push(num - 10);
  }
  if (num < 90){
    bort.push(num + 10);
  }
  let randBort = Math.round(Math.random() * 3);
  return bort[randBort];
}

function thirdBort (num){
  let newbort = [];
    newbort[0] = [];
    newbort[1] = [];
    newbort[2] = [];
    newbort[3] = [];
    if (Number(String(num).slice(-1)) != 9 &&
        Number(String(num).slice(-1)) != 8){
      newbort[0].push(num + 1);
      newbort[0].push(num + 2);   
    }
    if (Number(String(num).slice(-1)) != 0 && 
    Number(String(num).slice(-1)) != 1){
      newbort[1].push(num - 1);
      newbort[1].push(num - 2);
    }
    if (num > 19){
      newbort[2].push(num - 10);
      newbort[2].push(num - 20);
    }
    if (num < 80){
      newbort[3].push(num + 10);
      newbort[3].push(num + 20);
    }
    let rand3Bort = Math.round(Math.random() * 3);
  return newbort[rand3Bort];
}

function fourthBort (num){
  let newbort = [];
    newbort[0] = [];
    newbort[1] = [];
    newbort[2] = [];
    newbort[3] = [];
    if (Number(String(num).slice(-1)) != 9 &&
        Number(String(num).slice(-1)) != 8 &&
        Number(String(num).slice(-1)) != 7){
      newbort[0].push(num + 1);
      newbort[0].push(num + 2); 
      newbort[0].push(num + 3);  
    }
    if (Number(String(num).slice(-1)) != 0 && 
    Number(String(num).slice(-1)) != 1 &&
    Number(String(num).slice(-1)) != 2){
      newbort[1].push(num - 1);
      newbort[1].push(num - 2);
      newbort[1].push(num - 3);
    }
    if (num > 29){
      newbort[2].push(num - 10);
      newbort[2].push(num - 20);
      newbort[2].push(num - 30);
    }
    if (num < 70){
      newbort[3].push(num + 10);
      newbort[3].push(num + 20);
      newbort[3].push(num + 30);
    }
    let rand4Bort = Math.round(Math.random() * 3);    
  return newbort[rand4Bort];
}
