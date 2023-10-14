const btn = document.getElementById('btn');
const radioButton = document.querySelectorAll('input[name="size"]');
const output = document.getElementById('result');

btn.addEventListener('click', () => {
    let selectedSize;
    for(const x of radioButton){
        if(x.checked){
            selectedSize = x.value;
            break;
        }
    }

    output.innerText = selectedSize ? `You Selected:  ${selectedSize}` : `You haven't select any size!`
})