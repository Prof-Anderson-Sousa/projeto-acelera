/* Selecionando Elementos do Index */
let menu = document.querySelector(".menu-burguer");
let body = document.querySelector("body");
let container = document.querySelector("body");

/* Criando Lista */
let lista = document.createElement("ul");
lista.classList.add("lista-menu");

let item1 = document.createElement("a");
item1.setAttribute("href", "index.html");
let item2 = document.createElement("a");
item2.setAttribute("href", "#"); // Remove o link direto
item2.classList.add("submenu-toggle");
let item3 = document.createElement("a");
item3.setAttribute("href", "./pages/certificate.html");
let item4 = document.createElement("a");
item4.setAttribute("href", "./assets/pages/unidades.html");
let item5 = document.createElement("a");
item5.setAttribute("href", "./assets/pages/contatos.html");
let item6 = document.createElement("a");
item6.setAttribute("href", "./pages/teacher.html");
let item7 = document.createElement("a");
item7.setAttribute("href", "https://api.whatsapp.com/send/?phone=5581996276609&text=Ol%C3%A1%2C+Desejo+me+Matricular%21&type=phone_number&app_absent=0");

/* Criando Sublista */
let sublista = document.createElement("ul");
sublista.classList.add("sublista-menu");
sublista.style.display = "none";
sublista.style.paddingLeft = "20px";
// sublista.style.backgroundColor = "#f0f0f0";
sublista.style.borderRadius = "5px";
sublista.style.marginTop = "5px";

let subItem1 = document.createElement("a");
subItem1.setAttribute("href", "../pages/team.html");
subItem1.innerHTML = "QUEM SOMOS";
subItem1.style.display = "block";
// subItem1.style.padding = "10px";
subItem1.style.marginLeft = "10px";
subItem1.style.backgroundColor = "#e0e0e0";
// subItem1.style.borderRadius = "5px";

let subItem2 = document.createElement("a");
subItem2.setAttribute("href", "../pages/about.html");
subItem2.innerHTML = "O QUE FAZEMOS";
subItem2.style.display = "block";
// subItem2.style.padding = "8px";
subItem2.style.marginTop = "10px";
subItem2.style.marginLeft = "10px";
subItem2.style.backgroundColor = "#e0e0e0";
// subItem2.style.borderRadius = "5px";

sublista.appendChild(subItem1);
sublista.appendChild(subItem2);

/* Selecionando Imagem do X */
let containerLogo = document.createElement("figure");
let imgLogo = document.createElement("img");
imgLogo.classList.add("logo-neo");
imgLogo.setAttribute("src", "./images/logo.png");
containerLogo.appendChild(imgLogo);

/* Selecionando Botão de Fechar Menu */
let buttonClose = document.createElement("div");
buttonClose.classList.add("buttonClose");
let imgClose = document.createElement("img");
imgClose.setAttribute("src", "./images/close_menu.svg");
imgClose.classList.add("imgClose");
buttonClose.appendChild(imgClose);

/* Adicionando Nome aos Itens da Lista */
item1.innerHTML = "INÍCIO";
item2.innerHTML = "SOBRE NÓS +";
item3.innerHTML = "CERTIFICADOS";
item4.innerHTML = "EVENTOS";
item5.innerHTML = "PARCEIROS";
item6.innerHTML = "PARA PROFESSORES";
item7.innerHTML = "QUERO APOIAR";

/* Itens Sendo Adicionado a Lista */
lista.appendChild(buttonClose);
lista.appendChild(containerLogo);
lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(sublista);
lista.appendChild(item3);
lista.appendChild(item4);
lista.appendChild(item5);
lista.appendChild(item6);
lista.appendChild(item7);

/* Criando Função Adicionar Menu */
menu.addEventListener('click', adicionarMenu);

function adicionarMenu() {
    body.appendChild(lista);
}

/* Criando Função Remover Menu */
imgClose.addEventListener('click', removerMenu);

function removerMenu() {
    lista.remove();
}

/* Criando Evento para Mostrar Submenu */
item2.addEventListener('click', function (event) {
    event.preventDefault(); // Impede a navegação
    sublista.style.display = sublista.style.display === "none" ? "block" : "none";
});
