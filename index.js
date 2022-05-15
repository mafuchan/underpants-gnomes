function displayPlan() {
  const step1 = document.querySelector("#step-1")
  step1.textContent = "Collect underpants."

  const step2 = document.querySelector("#step-2")
  step2.textContent = "???"

  const step3 = document.querySelector("#step-3")
  step3.textContent = "Profit!"

  step1.append(step1)
  step2.append(step2)
  step3.append(step3)
}

const button = document.querySelector("button")
button.addEventListener("submit", event => {
  displayPlan()
})
