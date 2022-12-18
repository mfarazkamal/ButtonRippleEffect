const bttnEl = document.querySelector(".bttn");

bttnEl.addEventListener("mouseover", (event)=>
{
   const x = (event.pageX  - bttnEl.offsetLeft);
   const y = (event.pageY  - bttnEl.offsetTop);

   bttnEl.style.setProperty("--xPos", x + "px");
   bttnEl.style.setProperty("--yPos", y + "px");
});