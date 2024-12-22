const scriptURL = 'https://script.google.com/macros/s/AKfycbxcVtO6x5p-gZMf6Mb5_leHn2pDx6qXdXtx_cL-ily7XYnfAmnW_MX-QZ9M-sPnela5Bg/exec';
const form = document.forms['contact-kami'];
const alert = document.querySelector('section#kontak .alert');
const btnClose = document.querySelector('section#kontak .btn-close');

btnClose.addEventListener('click', function(){
  alert.classList.toggle('d-none');
})


form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // tampilkan form
      alert.classList.toggle('d-none')
      // reset form
      form.reset();
      console.log('Success!', response);

    })
    .catch(error => console.error('Error!', error.message))
})