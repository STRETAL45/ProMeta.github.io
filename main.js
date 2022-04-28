
let form = document.getElementsByClassName('form-body')[0]
let FIO = form.querySelector('input[name="FIO"]')
let mail = form.querySelector('input[name="mail"]')
let comment = form.querySelector('textarea')
let submit = form.querySelector('input[type="submit"]')

submit.addEventListener('click',sendForm)
async function sendForm(){
    let formData = {FIO:FIO.value,mail:mail.value,comment:comment.value}
    response = await fetch('http://katrinz7.beget.tech/mail.php', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch(response=>{console.log(response)});
}
