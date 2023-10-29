console.log("hello ji")

let taskList = [];
let addBtn = document.getElementById("addBtn");
let notes = document.getElementById("notes");

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    taskList.push(addTxt.value);
    addTxt.value = "";
    showNotes();
});


function showNotes() {
    let html = "";
    taskList.forEach((item, index) => {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p id="element${index}">${item}</p>
                <div class="d-flex align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox${index}" onchange="toggleCrossOut(${index})">
                        <label class="form-check-label" for="checkbox">Task Complete</label>
                    </div>
                    <button class="btn btn-primary ml-auto" id="${index}" onclick="deleteNote(this.id)">Delete</button>
                </div>
        </div>
    </div>`;
    });

    let notesElm = document.getElementById("notes");
    if (taskList.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! "Enter a note first to show".`;
    }

}


function deleteNote(index) {
    taskList.splice(index, 1);
    showNotes();
}

function toggleCrossOut(index) {
    const text = document.getElementById(`element${index}`);
    const checkbox = document.getElementById(`checkbox${index}`);

    if (checkbox.checked) {
        text.classList.add('crossed-out');
    } else {
        text.classList.remove('crossed-out');
    }
}