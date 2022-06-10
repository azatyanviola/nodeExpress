'use srtict';


const form = document.getElementById('form');
form.onsubmit = function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
       console.log(name);
    const middlename = document.getElementById('middlename').value;
       console.log(middlename);
    const lastname = document.getElementById('lastname').value;
       console.log(lastname);
    const day = document.getElementById('day').value;
       console.log(day);
    const month = document.getElementById('month').value;
       console.log(month);
    const year = document.getElementById('year').value;
       console.log(year);
    const region = document.getElementById('region').value;
       console.log(region);
     if (document.getElementById('node').checked) {
        console.log(document.getElementById('node').value);
      }
    if(document.getElementById('js').checked){
        console.log(document.getElementById('js').value);
      }
    if(document.getElementById('male').checked){
        console.log(document.getElementById('male').value);
      }else if(document.getElementById('female').checked){
        console.log(document.getElementById('female').value);
      }
    const phone = document.getElementById('phone').value;
       console.log(phone);
    const adress = document.getElementById('adress').value;
       console.log(adress);
    const email = document.getElementById('email').value;
       console.log(email);
       }
  
