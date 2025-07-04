let editButton = document.getElementById('edit-button')
let bioText = document.getElementById('bio-text')
let editModal = document.getElementById('edit-modal')
let editInput = document.getElementById('edit-input')
let cancelButton = document.getElementById('cancel-button')
let saveButton = document.getElementById('save-button')
let overLay = document.getElementById('overlay')

function triggerEditModal() {
    editModal.style.display = 'block'
    overLay.style.display = 'block'
    editInput.value = bioText.innerText
}

function closeEditModal() {
    editModal.style.display = 'none'
    overLay.style.display = 'none'
}

function saveBio() {
    closeEditModal()
    bioText.innerText = editInput.value
    overLay.style.display = 'none'
}

editButton.addEventListener('click', () => {
    triggerEditModal()
})

cancelButton.addEventListener('click', () => {
    closeEditModal()
})

saveButton.addEventListener('click', () => {
    saveBio()
})

const fileInput = document.getElementById('file-upload');
const profileImg = document.querySelector('.dp');

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});