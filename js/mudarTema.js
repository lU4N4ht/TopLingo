const backgroundTheme = document.getElementById('mudarTema');
const inputInfo = document.getElementById('input');
const inputInfo2 = document.getElementById('input2');

backgroundTheme.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = '#FFFFFF'; 
        document.querySelector('.barra').style.backgroundColor = '#003366'; 
        document.querySelector('h1').style.color = '#003366'; 
        inputInfo.classList.toggle('border');
        inputInfo2.classList.toggle('border');
        document.querySelector('.from-text').style.color = '#18181a'; 
        document.querySelector('.to-text').style.color = '#18181a'; 
        document.querySelector('p').style.color = '#18181a'; 
        document.querySelector('.c-button--gooey').style.color = '#ffffff'; 
        document.querySelector('.c-button--gooey').style.borderColor = '#003366'; 
        document.querySelector('.c-button--gooey').style.backgroundColor = 'transparent';
        const blobsDivs = document.querySelectorAll('.c-button--gooey .c-button__blobs div');
        blobsDivs.forEach(div => {
            div.style.backgroundColor = '#003366';
        });

    } else {
        document.body.style.backgroundColor = '#18181a'; 
        document.querySelector('.barra').style.backgroundColor = '#98CCE4'; 
        document.querySelector('h1').style.color = '#98CCE4';
        inputInfo.classList.remove('border') 
        inputInfo2.classList.remove('border') 
        document.querySelector('.from-text').style.color = '#FFFFFF'; 
        document.querySelector('.to-text').style.color = '#FFFFFF'; 
        document.querySelector('p').style.color = '#FFFFFF'; 
        document.querySelector('.c-button--gooey').style.color = '#18181a'; 
        document.querySelector('.c-button--gooey').style.borderColor = '#98CCE4'; 
        document.querySelector('.c-button--gooey').style.backgroundColor = 'transparent'; 
        const blobsDivs = document.querySelectorAll('.c-button--gooey .c-button__blobs div');
        blobsDivs.forEach(div => {
            div.style.backgroundColor = '#98CCE4';
        });
    }
});

