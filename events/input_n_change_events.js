const creditCardInput= document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");


const formData={};

creditCardInput.addEventListener("input",e => {
  console.log("credit card changed",e);
  formData["cc"] = e.target.value;
})

veggieSelect.addEventListener("input",e => {
  console.log("veggie changed",e);
  formData["veggie"] = e.target.value;
})

termsCheckbox.addEventListener("input",e => {
  console.log("checkbox",e);
  formData['agreeToTerms'] = e.target.checked;
})
