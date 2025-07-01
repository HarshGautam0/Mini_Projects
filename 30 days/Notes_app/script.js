const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
// let notes = document.querySelectorAll(".input-box");




// Load notes from localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        const notesArray = JSON.parse(storedNotes);
        notesArray.forEach((note) => {
            const inputBox = document.createElement("p");
            const img = document.createElement("img");
            inputBox.className = "input-box";
            inputBox.setAttribute("contenteditable", "true");
            inputBox.innerText = note.content;
            img.src = "images/delete.png";
            notesContainer.appendChild(inputBox).appendChild(img);
        });
    }
});




function updateStorage() {
    const notesArray = [];
    const inputBoxes = document.querySelectorAll(".input-box");
    inputBoxes.forEach((inputBox) => {
        notesArray.push({ content: inputBox.innerText });
    });
    localStorage.setItem("notes", JSON.stringify(notesArray));
}



createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
})


notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
})
notesContainer.addEventListener("input", function (e) {
    if (e.target.tagName === "P") {
        updateStorage();
    }

    // else if (e.target.tagName === "P") {
    //     notes = document.querySelectorAll(".input-box")
    //     notes.forEach(nt => {
    //         nt.onkeyup = function () {
    //             updateStorage();
    //         }
    //     })
    // }
})


document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }

})