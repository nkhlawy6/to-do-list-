let checkBtn = document.getElementById("checkBtn");
let tasks = document.getElementById("tasks");
let input1 = document.getElementById("input1");
let form = document.querySelector("form");

tasks.addEventListener("click", (eo) => {
switch (eo.target.className) {
  case "icon-trash-o icon":
    eo.target.parentElement.parentElement.remove();
    break;

  case "icon-angry icon":
    eo.target.classList.add("dn");
    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("finish");
    eo.target.parentElement.innerHTML += `<span class="icon-heart"></span>`;
    break;

  case "icon-heart":
    eo.target.classList.add("dn");
    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("finish");
    eo.target.parentElement.innerHTML += `<span class="icon-angry icon"></span>`;
    break;

  case "icon-star icon":
    eo.target.classList.add("orange");
    eo.target.parentElement.parentElement.prepend(eo.target.parentElement);
    break;

  case "icon-star icon orange":
    eo.target.classList.remove("orange");
    eo.target.parentElement.parentElement.append(eo.target.parentElement);
    break;

  default:
    console.log('first')
    break;
}

});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  let task = `      
  <div class="task">
        <span class="icon-star icon"></span>
        <p lang='ar' class='task-text'>${input1.value}</p>
        <div>
          <span class="icon-trash-o icon"></span>
         
          <span class="icon-angry icon"></span>
        </div>
    </div>`;
  tasks.innerHTML += task;
  input1.value = "";
});
