const stepTitle = document.getElementById("stepTitle");
const asideNumbers = document.querySelectorAll(".aside__number")
const step1 = document.getElementById("step1")
const step1FieldRequired = document.querySelectorAll(".step1__fieldRequired")
const step1Inputs = document.querySelectorAll(".step1__input")

const nameInput = step1.children[3].children[1]
const emailInput = step1.children[3].children[3]
const phoneInput = step1.children[3].children[5]
const fieldRequiredName = document.getElementById("fieldRequiredName")
const fieldRequiredEmail = document.getElementById("fieldRequiredEmail")
const fieldRequiredPhone = document.getElementById("fieldRequiredPhone")
const nextButton = document.getElementById("nextButton")

let hiddenIndicator = document.getElementById("hiddenIndicator")

let totalRes = 0

step1Inputs.forEach((input) => {
    input.addEventListener("mouseenter", () => {
        input.classList.add("step1__input-hover")
    })
    input.addEventListener("mouseleave", () => {
        input.classList.remove("step1__input-hover")
    })
    input.addEventListener("focus", () => {
        input.classList.add("step1__input-focus")
    })
    input.addEventListener("blur", () => {
        input.classList.remove("step1__input-focus")
    })
})

nameInput.addEventListener("input", (e) => {
    if (e.target.value != "") {
        e.target.classList.remove("step1__input-required")
        fieldRequiredName.classList.remove("step1__fieldRequired-active")

    }
})
emailInput.addEventListener("input", (e) => {
    if (e.target.value != "") {
        e.target.classList.remove("step1__input-required")
        fieldRequiredEmail.classList.remove("step1__fieldRequired-active")

    }
})
phoneInput.addEventListener("input", (e) => {
    if (e.target.value != "") {
        e.target.classList.remove("step1__input-required")
        fieldRequiredPhone.classList.remove("step1__fieldRequired-active")

    }
})

asideNumbers.forEach(el => {
    if (el.textContent == "1") {
        el.classList.add("aside__number-active")
    }
});

const asideNumber1 = document.getElementById("asideNumber1")
const asideNumber2 = document.getElementById("asideNumber2")
const asideNumber3 = document.getElementById("asideNumber3")
const asideNumber4 = document.getElementById("asideNumber4")

nextButton.addEventListener("click", () => {
    if (hiddenIndicator.textContent == "1") {
        step1Inputs.forEach((input) => {
            if (input.name == "name__input" && input.value == "") {
                step1FieldRequired.forEach((label) => {
                    if (label.htmlFor == input.name) {
                        label.classList.add("step1__fieldRequired-active")
                        nameInput.classList.add("step1__input-required")
                    }
                })
            } else if (input.name == "email__input" && input.value == "") {
                step1FieldRequired.forEach((label) => {
                    if (label.htmlFor == input.name) {
                        label.classList.add("step1__fieldRequired-active")
                        emailInput.classList.add("step1__input-required")
                    }
                })
            } else if (input.name == "phone__input" && input.value == "") {
                step1FieldRequired.forEach((label) => {
                    if (label.htmlFor == input.name) {
                        label.classList.add("step1__fieldRequired-active")
                        phoneInput.classList.add("step1__input-required")
                    }
                })
            }

            if (nameInput.value != "" && emailInput.value != "" && phoneInput.value != "") {
                hiddenIndicator.textContent = "2"

                asideNumber1.classList.remove("aside__number-active")
                asideNumber3.classList.remove("aside__number-active")
                asideNumber2.classList.add("aside__number-active")

                step1.classList.add("hide__step")
                step2.style.display = "flex"
            }
        })
    }
})

const planTextArcade = document.getElementById("planTextArcade")
const planTextAdvanced = document.getElementById("planTextAdvanced")
const planTextPro = document.getElementById("planTextPro")


const planItemArcade = document.getElementById("planItemArcade")
const planItemAdvanced = document.getElementById("planItemAdvanced")
const planItemPro = document.getElementById("planItemPro")

planItemArcade.classList.add("plan__item-active")

planItemArcade.addEventListener("click", () => {
    planItemPro.classList.remove("plan__item-active")
    planItemAdvanced.classList.remove("plan__item-active")
    planItemArcade.classList.add("plan__item-active")
})
planItemAdvanced.addEventListener("click", () => {
    planItemPro.classList.remove("plan__item-active")
    planItemArcade.classList.remove("plan__item-active")
    planItemAdvanced.classList.add("plan__item-active")
})
planItemPro.addEventListener("click", () => {
    planItemAdvanced.classList.remove("plan__item-active")
    planItemArcade.classList.remove("plan__item-active")
    planItemPro.classList.add("plan__item-active")
})

const monthlyText = document.getElementById("monthlyText")
const yearlyText = document.getElementById("yearlyText")
const selectPlanBtn = document.getElementById("selectPlanBtn")
const planPrices = document.querySelectorAll(".plan__price")

const discount1 = document.createElement("P")
discount1.textContent = "2 months free"
discount1.classList.add("discount__style")

const discount2 = document.createElement("P")
discount2.textContent = "2 months free"
discount2.classList.add("discount__style")

const discount3 = document.createElement("P")
discount3.textContent = "2 months free"
discount3.classList.add("discount__style")

selectPlanBtn.addEventListener("click", () => {
    selectPlanBtn.classList.toggle("selectPlanBtn-active")
    monthlyText.classList.toggle("plan__off")
    yearlyText.classList.toggle("plan__off")

    if (monthlyText.classList.contains("plan__off")) {
        planPrices.forEach((planPrice) => {
            if (planPrice.textContent == "$9/mo") {
                planPrice.textContent = "$90/yr"
            } else if (planPrice.textContent == "$12/mo") {
                planPrice.textContent = "$120/yr"
            } else if (planPrice.textContent == "$15/mo") {
                planPrice.textContent = "$150/yr"
            }
        })
    } else {
        planPrices.forEach((planPrice) => {
            if (planPrice.textContent == "$90/yr") {
                planPrice.textContent = "$9/mo"
            } else if (planPrice.textContent == "$120/yr") {
                planPrice.textContent = "$12/mo"
            } else if (planPrice.textContent == "$150/yr") {
                planPrice.textContent = "$15/mo"
            }
        })

    }

    if (selectPlanBtn.classList.contains("selectPlanBtn-active")) {
        planTextArcade.appendChild(discount1)
        planTextAdvanced.appendChild(discount2)
        planTextPro.appendChild(discount3)
    } else {
        planTextArcade.removeChild(discount1)
        planTextAdvanced.removeChild(discount2)
        planTextPro.removeChild(discount3)
    }
})

const step2 = document.getElementById("step2")
const step2BackBtn = document.getElementById("step2BackBtn")
const nextBtn2 = document.getElementById("nextBtn2")
const addonsPrice1 = document.getElementById("addonsPrice1")
const addonsPrice2 = document.getElementById("addonsPrice2")
const addonsPrice3 = document.getElementById("addonsPrice3")

step2BackBtn.addEventListener("click", () => {
    asideNumber2.classList.remove("aside__number-active")
    asideNumber1.classList.add("aside__number-active")
    hiddenIndicator.textContent = "1"
    step2.style.display = "none"
    step1.classList.remove("hide__step")
})

nextBtn2.addEventListener("click", () => {
    asideNumber2.classList.remove("aside__number-active")
    asideNumber3.classList.add("aside__number-active")

    step2.style.display = "none"
    step3.style.display = "flex"

    if (yearlyText.classList.contains("plan__off")) {
        addonsPrice1.textContent = "+$1/mo"
        addonsPrice2.textContent = "+$2/mo"
        addonsPrice3.textContent = "+$2/mo"
    } else if (monthlyText.classList.contains("plan__off")) {
        addonsPrice1.textContent = "+$10/yr"
        addonsPrice2.textContent = "+$20/yr"
        addonsPrice3.textContent = "+$20/yr"
    }
})


const step3 = document.getElementById("step3")
const nextBtn3 = document.getElementById("nextBtn3")
const step3BackBtn = document.getElementById("step3BackBtn")

const addonsItem1 = document.getElementById("addonsItem1")
const addonsItem2 = document.getElementById("addonsItem2")
const addonsItem3 = document.getElementById("addonsItem3")

addonsItem1.addEventListener("click", () => {
    addonsItem1.classList.toggle("addons__item--active")
    const addonsCheck = addonsItem1.children[0]
    if (addonsCheck.checked == false) {
        addonsCheck.checked = true
    } else {
        addonsCheck.checked = false
    }
})
addonsItem2.addEventListener("click", () => {
    addonsItem2.classList.toggle("addons__item--active")
    const addonsCheck = addonsItem2.children[0]

    if (addonsCheck.checked == false) {
        addonsCheck.checked = true
    } else {
        addonsCheck.checked = false
    }
})
addonsItem3.addEventListener("click", () => {
    addonsItem3.classList.toggle("addons__item--active")
    const addonsCheck = addonsItem3.children[0]
    if (addonsCheck.checked == false) {
        addonsCheck.checked = true
    } else {
        addonsCheck.checked = false
    }
})

const step4 = document.getElementById("step4")
const step4BackBtn = document.getElementById("step4BackBtn")
const selectedPlan = document.getElementById("selectedPlan")
const selectedPrice = document.getElementById("selectedPrice")

const addonsCheck1 = document.getElementById("addonsCheck1")
const addonsCheck2 = document.getElementById("addonsCheck2")
const addonsCheck3 = document.getElementById("addonsCheck3")

const confirmTotalText = document.getElementById("confirmTotalText")

nextBtn3.addEventListener("click", () => {
    asideNumber3.classList.remove("aside__number-active")
    asideNumber4.classList.add("aside__number-active")
    hiddenIndicator.textContent = "4"
    step3.style.display = "none"
    step4.style.display = "flex"



    if (yearlyText.classList.contains("plan__off")) {
        confirmTotalText.textContent = "Total (per month)"
        if (planItemArcade.classList.contains("plan__item-active")) {
            selectedPlan.textContent = "Arcade " + "(Monthly)"
            selectedPrice.textContent = planItemArcade.children[1].children[1].textContent
        } else if (planItemAdvanced.classList.contains("plan__item-active")) {
            selectedPlan.textContent = "Advanced " + "(Monthly)"
            selectedPrice.textContent = planItemAdvanced.children[1].children[1].textContent
        } else if (planItemPro.classList.contains("plan__item-active")) {
            selectedPlan.textContent = "Pro " + "(Monthly)"
            selectedPrice.textContent = planItemPro.children[1].children[1].textContent
        }
    } else if (monthlyText.classList.contains("plan__off")) {
        confirmTotalText.textContent = "Total (per year)"
        if (planItemArcade.classList.contains("plan__item-active")) {
            selectedPlan.textContent = "Arcade " + "(Yearly)"
            selectedPrice.textContent = planItemArcade.children[1].children[1].textContent
        } else if (planItemAdvanced.classList.contains("plan__item-active")) {
            selectedPlan.textContent = "Advanced " + "(Yearly)"
            selectedPrice.textContent = planItemAdvanced.children[1].children[1].textContent
        } else if (planItemPro.classList.contains("plan__item-active")) {
            selectedPlan.textContent = "Pro " + "(Yearly)"
            selectedPrice.textContent = planItemPro.children[1].children[1].textContent
        }
    }
    const confirmAddonContainer = document.querySelectorAll(".confirm__addon__container")

    const confirmNameAddon = document.createElement("DIV")
    confirmNameAddon.classList.add("confirm__name__addon")
    const confirmPriceAddon = document.createElement("DIV")
    confirmPriceAddon.classList.add("confirm__price__addon")

    const selectedAddonPrice1 = addonsItem1.children[2].textContent
    const selectedAddonPrice2 = addonsItem2.children[2].textContent
    const selectedAddonPrice3 = addonsItem3.children[2].textContent

    const totalPrice = document.getElementById("totalPrice")

    confirmAddonContainer.forEach((addonContainer) => {
        addonContainer.textContent = ""
        if (addonsCheck1.checked == true) {
            const newAddon1 = document.createElement("H4")
            newAddon1.classList.add("confirm__addon")
            newAddon1.textContent = "Online service"
            confirmNameAddon.appendChild(newAddon1)

            const newPrice1 = document.createElement("P")
            newPrice1.classList.add("confirm__price")
            newPrice1.textContent = selectedAddonPrice1
            confirmPriceAddon.appendChild(newPrice1)

            if (newPrice1.textContent == "+$1/mo") {
                totalRes += 1
            } else if (newPrice1.textContent == "+$10/yr") {
                totalRes += 10
            }

            addonContainer.appendChild(confirmNameAddon)
            addonContainer.appendChild(confirmPriceAddon)
        }
        if (addonsCheck2.checked == true) {
            const newAddon2 = document.createElement("H4")
            newAddon2.classList.add("confirm__addon")
            newAddon2.textContent = "Larger storage"
            confirmNameAddon.appendChild(newAddon2)

            const newPrice2 = document.createElement("P")
            newPrice2.classList.add("confirm__price")
            newPrice2.textContent = selectedAddonPrice2
            confirmPriceAddon.appendChild(newPrice2)

            if (newPrice2.textContent == "+$2/mo") {
                totalRes += 2
            } else if (newPrice2.textContent == "+$20/yr") {
                totalRes += 20
            }

            addonContainer.appendChild(confirmNameAddon)
            addonContainer.appendChild(confirmPriceAddon)
        }
        if (addonsCheck3.checked == true) {
            const newAddon3 = document.createElement("H4")
            newAddon3.classList.add("confirm__addon")
            newAddon3.textContent = "Customizable profile"
            confirmNameAddon.appendChild(newAddon3)

            const newPrice3 = document.createElement("P")
            newPrice3.classList.add("confirm__price")
            newPrice3.textContent = selectedAddonPrice3
            confirmPriceAddon.appendChild(newPrice3)

            if (newPrice3.textContent == "+$2/mo") {
                totalRes += 2
            } else if (newPrice3.textContent == "+$20/yr") {
                totalRes += 20
            }

            addonContainer.appendChild(confirmNameAddon)
            addonContainer.appendChild(confirmPriceAddon)
        }

    })

    if (selectedPrice.textContent == "$9/mo") {
        totalRes += 9
    } else if (selectedPrice.textContent == "$12/mo") {
        totalRes += 12
    } else if (selectedPrice.textContent == "$15/mo") {
        totalRes += 15
    } else if (selectedPrice.textContent == "$90/yr") {
        totalRes += 90
    } else if (selectedPrice.textContent == "$120/yr") {
        totalRes += 120
    } else if (selectedPrice.textContent == "$150/yr") {
        totalRes += 150
    }

    if (yearlyText.classList.contains("plan__off")) {
        totalPrice.textContent = `$${totalRes}/mo`
    } else if (monthlyText.classList.contains("plan__off")) {
        totalPrice.textContent = `$${totalRes}/yr`
    }

})

const confirmChange = document.getElementById("confirmChange")

step3BackBtn.addEventListener("click", () => {
    asideNumber3.classList.remove("aside__number-active")
    asideNumber2.classList.add("aside__number-active")
    hiddenIndicator.textContent = "2"
    step3.style.display = "none"
    step2.style.display = "flex"
})

step4BackBtn.addEventListener("click", () => {
    asideNumber4.classList.remove("aside__number-active")
    asideNumber3.classList.add("aside__number-active")
    hiddenIndicator.textContent = "3"
    step4.style.display = "none"
    step3.style.display = "flex"
    totalRes = 0
})

confirmChange.addEventListener("click", () => {
    asideNumber4.classList.remove("aside__number-active")
    asideNumber2.classList.add("aside__number-active")
    hiddenIndicator.textContent = "2"
    step4.style.display = "none"
    step2.style.display = "flex"
    totalRes = 0
})

const nextBtn4 = document.getElementById("nextBtn4")
const step5 = document.getElementById("step5")

nextBtn4.addEventListener("click", () => {
    asideNumber4.classList.add("aside__number-active")
    step4.style.display = "none"
    step5.style.display = "flex"
    totalRes = 0
})