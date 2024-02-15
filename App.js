// console.log("one");
// console.log("two");
// console.log("three");
// function hello() {
//     console.log("Hello!");
// }
// setTimeout(hello,2000); //time out: 2s = 2000ms
// setTimeout(()=>{
//    console.log("Hello!");
// },4000)
// console.log("four");
// console.log("five");


// function sum(a,b){
//     console.log(a+b);
// }
// function calculater(a,b,sumCallback){
// sumCallback(a,b)
// }
// calculater(10,30,sum);


// const Hello = () => {
//     console.log("Hello!");
// }
// setTimeout(Hello, 3000)
// let age = 19;
// if (age > 18) {
//     if (age > 60) {
//         console.log("Seniour");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("children");
// }
// //nested loop
// for (let i = 0; i < 5; i++) {
//     let str = "";
//     for (let j = 0; j < 5; j++) {
//         console.log(" ", j);
//         str += j;

//     }
//     console.log(i, str);
// }

function getData(dataid, getNextData) {
    setTimeout(() => {
        console.log("Data ID", dataid);
        if (getNextData) {
            getNextData();
        }
    }, 3000)
}

this.getData(1, () => {
    this.getData(2, () => {
      this.getData(3, () => {
        this.getData(4, () => {
           getData(4)
        });
      });
    });
  });

// getData(1, () => {
//     getData(2), () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });
