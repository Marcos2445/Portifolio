emailjs.init("hNOeBE6ps5_CUaYke");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_portf";
  const templateID = "template_e1gt3fa";

  let buttonSubmit = document.querySelector("#form-submit");

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      buttonSubmit.innerHTML = "Enviado com Sucesso!";
      buttonSubmit.style.backgroundColor = "#00FA9A";

      setTimeout(() => {
        document.querySelector("#user_name").value = "";
        document.querySelector("#user_email").value = "";
        document.querySelector("#message").value = "";

        buttonSubmit.innerHTML = "Enviar";
        buttonSubmit.style.backgroundColor = "#016266";
      }, 2000);
    },
    (err) => {
      buttonSubmit.innerHTML = "Por favor, tente novamente!";
      buttonSubmit.style.backgroundColor = "#FF0000";
      console.log(JSON.stringify(err));
    }
  );
});

function trocaCon1(){
  let img = document.getElementById('con1') 
  img.setAttribute('src', 'images/conhecimento1.gif');
}
function voltaCon1(){
  let img = document.getElementById('con1') 
  img.setAttribute('src', 'images/conhecimento1.png');
}

function trocaCon(){
  let img = document.getElementById('con') 
  img.setAttribute('src', 'images/Conhecimento.gif');
}
function voltaCon(){
  let img = document.getElementById('con') 
  img.setAttribute('src', 'images/Conhecimento.png');
}

//animação icones conhecimento
function cresceIconeHt(){
      let icone = document.getElementById('html_icon') 
      icone.style.width='50px'
}
function diminuiIconeHt(){
  let icone = document.getElementById('html_icon') 
  icone.style.width='0px'
}

function cresceIconeJs(){
  let icone = document.getElementById('js_icon') 
  icone.style.width='50px'
}
function diminuiIconeJs(){
let icone = document.getElementById('js_icon') 
icone.style.width='0px'
}

function cresceIconeCs(){
  let icone = document.getElementById('css_icon') 
  icone.style.width='50px'
}
function diminuiIconeCs(){
let icone = document.getElementById('css_icon') 
icone.style.width='0px'
}

function cresceIconejV(){
  let icone = document.getElementById('jV_icon') 
  icone.style.width='50px'
}
function diminuiIconejV(){
let icone = document.getElementById('jV_icon') 
icone.style.width='0px'
}

function cresceIconeoC(){
  let icone = document.getElementById('oracle_icon') 
  icone.style.width='50px'
}
function diminuiIconeoC(){
let icone = document.getElementById('oracle_icon') 
icone.style.width='0px'
}

function cresceIconemy(){
  let icone = document.getElementById('my_icon') 
  icone.style.width='50px'
}
function diminuiIconemy(){
let icone = document.getElementById('my_icon') 
icone.style.width='0px'
}