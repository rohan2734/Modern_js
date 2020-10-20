const creditCardInput= document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");


const formData={};
for( let input of [creditCardInput,termsCheckbox,veggieSelect]){
  input.addEventListener("input",({target}) => {
    
    const {name,type,checked,value} = target;
    formData[name] =   type === "checked" ? checked : value;
  
    console.log(formData);
  }) 
  /**
   * here instead of input, if we mention, the event as change
   * then for the creditcard, its value is gonna be stored only when
   *  we loose focus, or we press enter, but
   * in the case of input, it will be stored for every char change of credit card
   */
}

// creditCardInput.addEventListener("input",e => {
//   console.log("credit card changed",e);
//   formData["cc"] = e.target.value;
// })

// veggieSelect.addEventListener("input",e => {
//   console.log("veggie changed",e);
//   formData["veggie"] = e.target.value;
// })

// termsCheckbox.addEventListener("input",e => {
//   console.log("checkbox",e);
//   formData['agreeToTerms'] = e.target.checked;
// })
