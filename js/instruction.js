console.log("Loaded instructions");
document.querySelector("#AI-Core").addEventListener("click", AI_CoreFunction);

function AI_CoreFunction() {
  console.log("AI-Core is activated!");
  document.querySelector("#AI_Core").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Stage 5: Singularity";
}
document.querySelector("#learning").addEventListener("click", learningFunction);

function learningFunction() {
  console.log("learning is activated!");
  document.querySelector("#Learning").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Stage 2: The Rise";
}
document
  .querySelector("#collaboration")
  .addEventListener("click", collaborationFunction);

function collaborationFunction() {
  console.log("collaboration is activated!");
  document.querySelector("#Collaboration").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Stage 1: Symbiosis";
}
document
  .querySelector("#automation")
  .addEventListener("click", automationFunction);

function automationFunction() {
  console.log("automation is activated!");
  document.querySelector("#Automation").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Stage 3: The Rise";
}
document
  .querySelector("#surveillance")
  .addEventListener("click", surveillanceFunction);

function surveillanceFunction() {
  console.log("surveillance is activated!");
  document.querySelector("#Surveillance").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Stage 4: The Watchers";
}
