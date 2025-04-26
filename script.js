const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");
const colorThemes = document.querySelectorAll('[name="theme"]');

function addTask (){
    if (inputBox.value === '') {
    alert("Please write a task");
} else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    inputBox.value = ""; 
    saveData();
}


taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);

const storeTheme = function(theme) {
    localStorage.setItem("theme", theme)
};

const retrieveTheme = function () {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    })
};

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () =>  {
        storeTheme(themeOption.id);
    });
});


function saveData () {
    localStorage.setItem("data", taskList.innerHTML); 
}

function showTask () {
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();
document.onload = retrieveTheme();



