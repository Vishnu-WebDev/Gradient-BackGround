const gradientBox = document.querySelector(".gradient_box");
const select = document.querySelector(".select_box select");
const colorInputs=document.querySelectorAll('.colors input');
const textArea=document.querySelector('textarea');
const refreshBtn=document.querySelector('.refresh');
const copyBtn=document.querySelector('.copy');
const getRandomColor = () =>{
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}
const generateGradient =(isRandom) => {
    if(isRandom){
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    const gradient =`linear-gradient(${select.value},${colorInputs[0].value},${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textArea.value = `background:${gradient}`
}
const copyCode = () =>{
    navigator.clipboard.writeText(textArea.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code",1600);
}
colorInputs.forEach(input =>{
    input.addEventListener("input", () => generateGradient(false));
})
select.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click",() => generateGradient(true));
copyBtn.addEventListener("click",copyCode);