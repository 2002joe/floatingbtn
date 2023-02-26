console.log('Hello World!');
const close = document.querySelector('button')
const content = document.getElementById("content")

close.addEventListener("click", ()=>{
  if (content.style.display !='none') {
    content.style.display = 'none' ;
    close.textContent = "+";
  } else {
    content.style.display = 'block';
    close.textContent = '×';
  }
})