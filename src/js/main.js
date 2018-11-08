let bandeiras = document.querySelectorAll('#bandeira')
let legendaFlag = document.querySelector('#texto-flag')
let menuSlider = document.querySelector('#menuCidades')
menuSlider.style.display = 'none'
function MudarCor(){
    bandeiras[0].onclick = () =>{
        legendaFlag.style.display = 'none'
        bandeiras[1].classList.add('grayscale')
        bandeiras[2].classList.add('grayscale')
        bandeiras[3].classList.add('grayscale')
        bandeiras[4].classList.add('grayscale')
        if (menuSlider.style.display === "none") {
            menuSlider.style.display = "block";
        } else {
            legendaFlag.style.display = 'block'
            menuSlider.style.display = "none";
            bandeiras[1].classList.replace('grayscale', 'cor')
            bandeiras[2].classList.replace('grayscale', 'cor')
            bandeiras[3].classList.replace('grayscale', 'cor')
            bandeiras[4].classList.replace('grayscale', 'cor')
        }
}
}


MudarCor()