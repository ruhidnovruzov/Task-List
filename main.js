let tasks = [];
  
  function filterTask() {
    const tasksContainer = document.querySelector(".tasks ul");
    tasksContainer.innerHTML = "";
  
    tasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<b>${task.name}</b> taskını bitirmək - <b>${task.date}</b>`;
      tasksContainer.appendChild(listItem);
    });
  }
  
  //TAsk elave edek

  function Add() {
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("date");
  
    if (nameInput.value && dateInput.value) {
      const newTask = {
        name: nameInput.value,
        date: dateInput.value,
      };
      //Taskin melumatlarini yuxaridaki bos array-e elave edirik
      tasks.push(newTask);
      filterTask();
      //Elave etdikde temizlensin
      nameInput.value = "";
      dateInput.value = "";
    }
  }

  //Filterleyek

  function sortAZ() {
    tasks.sort((a, b) => a.name.localeCompare(b.name));
    filterTask();
  }
  
  function sortZA() {
    tasks.sort((a, b) => b.name.localeCompare(a.name));
    filterTask();
  }
  
  function sortByDate() {
    tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
    filterTask();
  }
  
  document.getElementById("az-filter").addEventListener("click", sortAZ);
  document.getElementById("za-filter").addEventListener("click", sortZA);
  document.getElementById("date-filter").addEventListener("click", sortByDate);
  
  filterTask();
  