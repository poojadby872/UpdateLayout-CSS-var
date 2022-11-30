const inputs = document.querySelector(".update")
const updates = inputs.querySelectorAll("input")
const textStyle = document.querySelector(".active")
const para = document.querySelector('p')

function handleChange(){
    const pixel = this.dataset.sizzing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + pixel)
    para.classList.add("active")
    para.textContent = ` changed ${this.name}`


}

updates.forEach(update=>update.addEventListener('change',handleChange))
updates.forEach(update=>update.addEventListener('mousemove',handleChange))
