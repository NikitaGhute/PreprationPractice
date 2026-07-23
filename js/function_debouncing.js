// use setTimeOut(), which is web api need to be called. it needed where function relate with time.

const search=()=>{
    console.log("searching..");

}

const debounce =(fn, delay)=>{
    let timer;
    return function (){
        clearTimeout(timer);

        timer = setTimeout (() =>{
            fn();
            
        }, delay)
    };
}
const debounceSearch= debounce(search, 2000);

    document
    .getElementById("search")
    .addEventListener("input", debounceSearch);


// throttle learning

// const callAPI =()=>{
//     console.log("call api after click button")
// } 
// let lastCall = 0;
//     const handleClick=()=>{
//         console.log("throttle click")
//         let now = Date.now()
//         console.log(now);
//         if (now - lastCall >= 1000){
//             lastCall = now;
//             callAPI ();
//         }
//     }
 
// memoize


// currying method- reduce or avoid taking repeatative value or argument
// 1. create main function 
    const applyDiscount = (discount) =>(price)=>{
        return price - (price * discount);
    }

// 2. lock 10% fixed discount for every item
    const fixedDiscount = applyDiscount(0.10);

// 3. just add the items price for getting final discount
    console.log(fixedDiscount(30))
    console.log(fixedDiscount(70))
    console.log(fixedDiscount(58))