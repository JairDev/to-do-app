import iconNight from "../assets/img/icon-moon.svg";
import iconDay from "../assets/img/icon-sun.svg";

export function changeMode(mode) {
  const app = document.querySelector(".App");
  const task = document.querySelector(".App-todo-list");
  const action = document.querySelector(".App-content-actions");
  const iconThemeMode = document.querySelector(".icon-mode img");
  const input = document.querySelector(".content-input-user-task");
  console.log(task);
  if (mode) {
    iconThemeMode.setAttribute("src", iconNight);
    app.classList.remove("light");
    input.classList.remove("light");
    // task.classList.remove("light");
    action.classList.remove("light");
  } else {
    iconThemeMode.setAttribute("src", iconDay);
    app.classList.add("light");
    input.classList.add("light");
    // task.classList.add("light");
    action.classList.add("light");
  }
}
