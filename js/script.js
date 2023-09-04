


const handlesubmit = (event) => {

    addloading();

    event.preventDefault(); 
    const name = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    fetch('https://api.sheetmonkey.io/form/jbMnutDA8ck1U3AF46YAEB', {

        method: 'post' ,
        headers : {
            'Accept': 'application/json',
             'Content-Type': 'application/json',
        },
            body: JSON.stringify({ name , email }),

    });

}

document.querySelector('form').addEventListener('submit' , handlesubmit);





const addloading = () => {
   
    const button = document.querySelector('button');
    button.innerHTML = ' <img class="loading" src="img/loading-arrow.png"> ';
    setTimeout(() => {
        window.location.href = "obrigado.html";
    }, 2000);
}