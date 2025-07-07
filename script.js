function toggleMode() {
  //pegando html
  const html = document.documentElement;
  //Document é o nosso HTML como objeto, sempre que adicionar um "." estamos acessando propriedades e funcionalidades
  //troca das class
  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#profile img");

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add a img light.
    img.setAttribute("src", "./assets/profile2.jpeg");
  } else {
    // e sem light mode mantém a normal
    img.setAttribute("src", "./assets/profile.jpeg");
  }
}

//   if (html.classList.contains('light')) {
//     html.classList.remove('light');
//   } else {
//     html.classList.add('light');
//   }
