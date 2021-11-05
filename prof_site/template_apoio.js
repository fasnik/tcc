var nav = document.createElement('nav');

var button =document.createElement('button');
button.setAttribute('class',"btn btn-primary");
button.setAttribute('onclick',"location.href='index.html'");
button.innerText = "Página Inicial";
nav.appendChild(button);

var header =document.createElement('header');
header.setAttribute('aria-label', 'Professor Felipe Foto');

var main =document.createElement('main');
main.setAttribute('role',"main") ;
main.setAttribute('aria-label',"Conteúdos: Navegue pelas tabelas usando a tecla t") ;
main.setAttribute('id','conteudo');
main.setAttribute('class','container');

var footer = document.createElement('footer');
var footerText = document.createElement('p');
footerText.innerText = 'Desenvolvido por Felipe Augusto - 2019';

document.body.appendChild(nav);
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);
footer.appendChild(footerText);

function fill_content(file){
	document.getElementById('conteudo').innerHTML=file;

}
  

