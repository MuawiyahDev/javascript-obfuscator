let form = document.getElementById("form");
let form2 = document.getElementById("form2");
let javascriptCode = document.getElementById("javascriptCode");
let lockDomains = document.getElementById("lockDomains");
let output = document.getElementById("output");
let obfuscateAnotherCode = document.getElementById("obfuscateAnotherCode");
let copyBtn = document.getElementById("copyBtn");

form.onsubmit = function (event) {
  event.preventDefault();

  let domainLockArray = lockDomains.value.split(",");

  var obfuscationResult = JavaScriptObfuscator.obfuscate(javascriptCode.value, {
    domainLock: domainLockArray,
  });

  output.value = obfuscationResult.getObfuscatedCode();

  form2.classList.remove("d-none");
  this.classList.add("d-none");

  javascriptCode.value = "";
  lockDomains.value = "";
};

obfuscateAnotherCode.onclick = function () {
  form2.classList.add("d-none");
  form.classList.remove("d-none");
};

copyBtn.onclick = function () {
  navigator.clipboard.writeText(output.value);
  alert("The output has been copied!");
};
