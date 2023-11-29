let pantalla = document.querySelector(".pantalla");
const btn = document.querySelectorAll(".botones");

btn.forEach(boton => {
    boton.addEventListener("click" , () => {

       const BotonApretado = boton.textContent; 

       if (boton.id === "AC"){
          pantalla.textContent = "0"
          return;
         }
     
       if (boton.id === "C"){
          if(pantalla.textContent.length === 1 || pantalla.textContent === "Sintax Error"){
               pantalla.textContent = "0";
          }else{
               pantalla.textContent = pantalla.textContent.slice (0, -1);
          }
          return;
       }

       if (boton.id === "igual"){
          try {
               pantalla.textContent = eval(pantalla.textContent);
          } catch {
               pantalla.textContent = "Sintax Error"
          }
         
          return;
     }
       if (pantalla.textContent === "0" || pantalla.textContent === "Sintax Error") {
            pantalla.textContent = BotonApretado;
       }else{
            pantalla.textContent += BotonApretado;
       }
       
      
    })
})