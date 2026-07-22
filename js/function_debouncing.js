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