
import { renderNotes } from "./app.js";

let arrayOfNotes = JSON.parse(localStorage.getItem('notes')) || [];

let showArchivedNotes = document.querySelector(".archive-notes-container");

showArchivedNotes.addEventListener('click', (event) => {
    let type = event.target.dataset.type;
    let noteId = event.target.dataset.id;
    switch(type) {
        case "del":
            arrayOfNotes = arrayOfNotes.filter(({id}) => id.toString() !== noteId);
            showArchivedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isArchived}) => !isArchived));
            localStorage.setItem("notes",JSON.stringify(arrayOfNotes));
            break;
        case 'archived':
            arrayOfNotes = arrayOfNotes.map(note =>
                    note.id.toString() === noteId ? {...note, isArchived: !note.isArchived}: note);
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isArchived}) => !isArchived));
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            break;
        default :
            console.log('none');
    }
})

showArchivedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isArchived}) => isArchived));