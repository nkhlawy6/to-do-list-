let checkBtn = document.getElementById("checkBtn");
let tasks = document.getElementById("tasks");
let input1 = document.getElementById("input1");
let form = document.querySelector("form");

tasks.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash-o icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry icon") {
    eo.target.classList.add("dn");
    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("finish");
    let heartIcon = `<span class="icon-heart"></span>`;
    eo.target.parentElement.innerHTML += heartIcon;
  }
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  let task = `      
  <div class="task">
        <span class="icon-star icon"></span>
        <p class='task-text'>${input1.value}</p>
        <div>
          <span class="icon-trash-o icon"></span>
         
          <span class="icon-angry icon"></span>
        </div>
    </div>`;
  tasks.innerHTML += task;
  input1.value = "";
});
