let checkBtn = document.getElementById("checkBtn");
let tasks = document.getElementById("tasks");
let input1=document.getElementById('input1');
let form=document.querySelector('form');
form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  let task = `      
  <div class="task">
        <span class="icon-star icon"></span>
        <p>${input1.value}</p>
        <div>
          <span class="icon-trash-o icon"></span>
          <!-- <span class="icon-heart"></span> -->
          <span class="icon-angry icon"></span>
        </div>
    </div>`;
  tasks.innerHTML+=task;
  input1.value='';
  console.log(eo);
});

tasks.addEventListener('click',(eo) => { 
  if(eo.target.className=='icon-trash-o icon'){
     eo.target.parentElement.parentElement.remove()
  }else{
    console.log('first')
  }
  
 })