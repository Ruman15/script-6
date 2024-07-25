//const arr_1 = [101, 202, 303, 404, 505];
//const arr_2 = [606, 707, 808, 909];

//const superArr = arr_1.concat(arr_2);

//console.log('superArr =', superArr);

const arr_1 = [101, 202, 303, 404, 505];
const arr_2 = [606, 707, 808, 909];


const superArr = arr_1.concat(arr_2);


const minVal = Math.min(...superArr);

console.log('superArr =', superArr);
console.log('Минимальное значение =', minVal);

const obj = {
    width: 300,
    height: 550
};

const newObj = {
    ...obj,
    area() {
        return this.width * this.height;
    }
};

console.log(newObj); 
console.log('Площадь =', newObj.area()); 


function sum(...args) {
    return args.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7)); 
console.log(sum(10));
console.log(sum()); 



const htmlNode = document.documentElement;

document.body.style.backgroundColor = 'blue';

const boldNode = document.body.querySelector('b');
const italicNode = document.body.querySelector('i');

boldNode.textContent = 'Новый жирный текст';
italicNode.textContent = 'Новый курсивный текст';

boldNode.classList.add('bold');
italicNode.classList.add('cursive');

const titleNode = document.querySelector('title');
titleNode.textContent = 'Lincode';

boldNode.remove();


//const getRandomNumber = new Promise((resolve, reject) => {
 //   const randomNumber = Math.floor(Math.random() * 10) + 1;
 //   resolve(randomNumber);
//});

//getRandomNumber.then((number) => {
 //   console.log('Случайное число:', number);
//}).catch((error) => {
 //   console.error('Ошибка:', error);
//});



//function checkNumber(number) {
 //   return new Promise((resolve, reject) => {
 //       if (number < 10) {
 //           resolve('Успех!');
 //       } else {
  //          reject('Ошибка!');
   //     }
  //  });
//}

//checkNumber(5)
//    .then(result => {
//        console.log(result); 
  // })
  //  .catch(error => {
   //     console.error(error); 
   // });

//checkNumber(15)
 //   .then(result => {
 //       console.log(result); 
 //   })
 //   .catch(error => {
 //       console.error(error); 
 //   });




const resolvedPromise = Promise.resolve('Промис выполнен успешно!');

resolvedPromise.then(result => {
    console.log(result); })


    function asyncOperation() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Асинхронная операция выполнена успешно!');
            }, 2000); 
        });
    }
    
  
    asyncOperation().then(result => {
        console.log(result); 
    });
      
    function asyncOperation() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Асинхронная операция выполнена успешно!');
            }, 2000); 
        });
    }
    
  
    asyncOperation().then(result => {
        console.log(result); 
    });
    

  
//const promise1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('Промис 1 выполнен успешно!');
//    }, 2000); 
//});


//const promise2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
  //      resolve('Промис 2 выполнен успешно!');
 //   }, 3000); 
//});


//promise1.then(result => {
//    console.log(result); 
//});

//promise2.then(result => {
//    console.log(result); 
//});



//const promise1 = new Promise((resolve, reject) => {
 //   setTimeout(() => {
 //       resolve('Промис 1 выполнен успешно!');
 //  }, 1000); 
//});


//const promise2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('Промис 2 выполнен успешно!');
//   }, 3000); 
//});


//promise1.then(result => {
   // console.log(result); 
//});

//promise2.then(result => {
   // console.log(result);
//});

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Промис 1 выполнен успешно!');
    }, 1000); 
});


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Промис 2 выполнен успешно!');
    }, 3000); 
});

promise1.then(result => {
    console.log(result);
});

promise2.then(result => {
    console.log(result);
});



const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Промис 3 выполнен успешно!');
    }, 1000); 
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Промис 4 выполнен успешно!');
    }, 3000); 
});

promise3.then(result => {
    console.log(result); 
});

promise4.then(result => {
    console.log(result); 
});




const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Промис 5 выполнен успешно!');
    }, 1000); 
});
const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Промис 6 выполнен успешно!');
    }, 3000);
});
Promise.all([promise5, promise6])
    .then(results => {
        console.log('Все промисы выполнены успешно!');
        console.log(results); 
    })
    .catch(error => {
        console.error('Один из промисов завершился с ошибкой:', error);
    });




const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Результат промиса 1');
    }, 1000);
});
const promise8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Результат промиса 2');
    }, 3000); 
});
Promise.all([promise7, promise8])
    .then(results => {
        console.log('Оба промиса выполнены успешно!');
        console.log('Результат промиса 1:', results[0]); 
        console.log('Результат промиса 2:', results[1]);
    })
    .catch(error => {
        console.error('Один из промисов завершился с ошибкой:', error);
    });



   
const promise9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Результат первого промиса');
    }, 1000); 
});

const promise10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Результат второго промиса');
    }, 3000); 
});


Promise.all([promise9, promise10])
    .then(results => {
        console.log('Оба промиса выполнены успешно!');
        console.log('Результат первого промиса:', results[0]); 
        console.log('Результат второго промиса:', results[1]); 
    })
    .catch(error => {
        console.error('Один из промисов завершился с ошибкой:', error);
    });



  
const promise11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Результат первого промиса');
    }, 1000); 
});

const promise12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Результат второго промиса');
    }, 3000);
});

Promise.race([promise11, promise12])
    .then(result => {
        console.log('Первый завершённый промис:', result); 
    })
    .catch(error => {
        console.error('Один из промисов завершился с ошибкой:', error);
    });


  
const numbers1 = [1, 2, 3];
console.log(numbers1);


const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); 
console.log(b); 
console.log(c); 



const person13 = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};
console.log(person13);

const person14 = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};
const { name, age, city } = person14;

console.log(name); 
console.log(age);  
console.log(city); 



const letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters); 


const letters1 = ['a', 'b', 'c', 'd', 'e'];

const [first, second, ...rest] = letters1;
console.log(first);  
console.log(second); 
console.log(rest); 



const student = {
    name: 'Alice Johnson',
    age: 22,
    address: {
        city: 'San Francisco',
        country: 'USA'
    }
};
console.log(student);



const student1 = {
    name: 'Alice Johnson',
    age: 22,
    address: {
        city: 'San Francisco',
        country: 'USA'
    }
};
const { name1, age1, address: { city1, country } } = student1;

console.log('name:', name1);    
console.log('age:', age1);      
console.log('city:', city1);   
console.log('country:', country); 
