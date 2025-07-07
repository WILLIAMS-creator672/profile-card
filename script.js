
window.addEventListener('DOMContentLoaded', () => {
    let savedName = localStorage.getItem('profileName');
    let savedOccupation = localStorage.getItem('occupation');
    let savedBio = localStorage.getItem('newbio');
    let savedDp = localStorage.getItem('newdp');

    const profileCard = document.getElementById('card');
    const form = document.getElementById('form');
    const profileName = document.getElementById('profile-name');
    const profileOccupation = document.getElementById('occupation-text');
    const bioText = document.getElementById('bio-text');
    const profileImg = document.querySelector('.dp');

    if (savedName && savedOccupation) {
        form.style.display = 'none';
        profileCard.style.display = 'block';

        profileName.innerText = savedName;
        profileOccupation.innerText = savedOccupation;
    }

    if (savedBio) {
        bioText.innerText = savedBio;
    }

    if (savedDp) {
        profileImg.src = savedDp;
    }
});


let registerAccount = (event) => {
    event.preventDefault();
    let allValid = true;
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let occupation = document.getElementById('occupation');
    let fnameError = document.getElementById('fname-error');
    let lnameError = document.getElementById('lname-error');
    let occupationError = document.getElementById('work-error');
    const submitButton = document.getElementById('submit');

    if (!firstName.value.trim()) {
        fnameError.innerHTML = 'First name is required';
        allValid = false;
    } else {
        fnameError.innerHTML = '';
    }

    if (!lastName.value.trim()) {
        lnameError.innerHTML = 'Last name is required';
        allValid = false;
    } else {
        lnameError.innerHTML = '';
    }

    if (!occupation.value.trim()) {
        occupationError.innerHTML = 'Occupation is required';
        allValid = false;
    } else {
        occupationError.innerHTML = '';
    }

    if (allValid) {
        submitButton.disabled = true;
        submitButton.classList.add('grey-bg');
        submitButton.innerHTML = 'Creating Profile...';

        let fullName = firstName.value + ' ' + lastName.value;
        let occupationText = occupation.value;

        document.getElementById('profile-name').textContent = fullName;
        document.getElementById('occupation-text').textContent = occupationText;

        localStorage.setItem('profileName', fullName);
        localStorage.setItem('occupation', occupationText);

        setTimeout(() => {
            document.getElementById('form').style.display = 'none';
            document.getElementById('card').style.display = 'block';
        }, 1500);
    }
};


let editButton = document.getElementById('edit-button');
let bioText = document.getElementById('bio-text');
let editModal = document.getElementById('edit-modal');
let editInput = document.getElementById('edit-input');
let cancelButton = document.getElementById('cancel-button');
let saveButton = document.getElementById('save-button');
let overLay = document.getElementById('overlay');

function triggerEditModal() {
    editModal.style.display = 'block';
    overLay.style.display = 'block';
    editInput.value = bioText.innerText;
}

function closeEditModal() {
    editModal.style.display = 'none';
    overLay.style.display = 'none';
}

function saveBio() {
    closeEditModal();
    let newBio = editInput.value;
    bioText.innerText = newBio;
    localStorage.setItem('newbio', newBio);
}

editButton.addEventListener('click', triggerEditModal);
cancelButton.addEventListener('click', closeEditModal);
saveButton.addEventListener('click', saveBio);

// Profile Picture Upload
const fileInput = document.getElementById('file-upload');
const profileImg = document.querySelector('.dp');

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            let newDp = e.target.result;
            profileImg.src = newDp;
            localStorage.setItem('newdp', newDp);
        };
        reader.readAsDataURL(file);
    }
});

let logOutButton = document.getElementById('log-out')
let logoutModal = document.getElementById('logout-modal')

logOutButton.addEventListener('click', () => {
    logoutModal.style.display = 'flex'
      overLay.style.display = 'block';
      
    let logoutTrue = document.getElementById('logout-yes')
    let logoutFalse = document.getElementById('logout-no')

    logoutFalse.onclick = function(){
         logoutModal.style.display = 'none'
      overLay.style.display = 'none';
    }

    logoutTrue.onclick = function(){
        localStorage.clear()
        location.reload()

    }
})
