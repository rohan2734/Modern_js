// const message = "hi there";

// module.exports = message;
let counter = 0;

module.exports = {
    incrementCounter(){
        counter+=1;
    },
    getCounter(){
        return counter;
    }
};