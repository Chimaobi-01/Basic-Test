
const [menu, extraNav, helpArrow, helpNav, helpBack] = document.querySelectorAll("#menu, #extraNav, #help-arrow, #help, #help-back")

console.log(menu);
let isHidden = true

const toggleNav = () => {
    extraNav.classList.toggle("hidden")
    helpNav.classList.toggle("hidden")
}
helpArrow.addEventListener("click", toggleNav )
helpBack.addEventListener("click", toggleNav )

menu.addEventListener('click', ()=> {
    if(isHidden) {
        extraNav.classList.remove("hidden")
        isHidden = !isHidden
    } else {
        extraNav.classList.add("hidden")
        helpNav.classList.add("hidden")
        isHidden = !isHidden
    }
})