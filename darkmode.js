let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('button-switch')

// Apply theme on page load if active
if (darkmode === "active") {
    document.body.classList.add('darkmode')
}

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode') // <-- Update the variable on click
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})