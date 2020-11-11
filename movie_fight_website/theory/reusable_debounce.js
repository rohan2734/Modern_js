/**
 * To put it succinctly, Stephen's version of debounce
 *  function has two key parts - 
 * the first part evolves around the func parameter 
 *  - this refers to a function (definition | expression)
 *  you wish to throttle  by  certain amount of time.
 * 
 * the second part  deals with a closure that the 
 * debounce function initially returns.
 * 
 * The purpose of the closure is to pass off 
 * potential arguments to  our original function 
 *  and invoke it when the specified amount of time 
 * has passed .
 * 
 * Let's walk step by step through the actual 
 * implementation : 
 * 
 * const debounce = (func)=>{
 * let timeoutId = null;
 *  return (...args)=>{
 *  if(timeoutId){
 *     clearTimeout(timeoutId);
 *    }
 *    timeoutId = setTimeout(()=>{
 *      func.apply(null,args);
 *    },1000)
 *  }
 * }
 * 
 * Key points
 * -   debounce is a function that accepts a 
 * function(definition | expression) as its 
 * sole argument -FUNC  parameter, as defined above
 * - .This   function will delay its execution by 
 * certain amount of time .
 * 
 * BUT !, you are NOT actually invoking the
 *  function just yet ! 
 * const onInput= (function(event){
 *  fetchData(event.target.value);
 * });
 * 
 * - debounce function returns another function -
 *  a closure-. The closure, when invoked, is 
 * the one that actually  initiates the timer 
 * and invokes your own, throttled function 
 * after the time has passed .
 * 
 * In the example above, the onInput variable
 *  holds a reference to that closure.
 * 
 * Subsequently, you use the onInput as a callback
 *  function to your event listener.
 * 
 * input.addEventListener('input', onInput)
 * Due to nature of how event listeners work 
 * inside the browser, each callback function
 *  receives "event" argument automatically.
 *  Additionally, each callback gets automatically
 *  invoked when the event it is attached to occurs.
 * 
 * Also, as discussed earlier, closure is responsible 
 * for passing off ALL arguments that our function
 *  might need !
 * 
 * Since, you can pass multitude of
 *  different function (definitions | expressions) 
 * into our debounce function,  we do not know how 
 * many arguments each such  function might require.
 * 
 * Hence you do this :  
 * 
 * return (...args)=>{...
 * ...code...
 * }
 * 
 * In the above code, you are spreading 
 * function arguments into   args  array . 
 * This essentially covers  function arguments 
 * of variadic length.
 * 
 * Subsequently, you invoke your  throttled 
 * function with the arguments array 
 * 
 * func.apply(null,args);
 *
 */