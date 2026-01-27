const modal = document.getElementById('editModal');
const editBtn = document.getElementById('editBtn');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');
const editAddressBtn = document.getElementById('editAddressBtn');
const addressModal = document.getElementById('alamatModal');
const closeAlamat = document.getElementById('closeAlamat');
const cancelAlamat = document.getElementById('cancelAlamat');
const saveAlamat = document.getElementById('saveAlamat');

const kotaText = document.getElementById('kotaText');
const provinsiText = document.getElementById('provinsiText');
const kodePosText = document.getElementById('kodePosText');

const editKota = document.getElementById('editKota');
const editProvinsi = document.getElementById('editProvinsi');
const editKodePos = document.getElementById('editKodePos');
editBtn.onclick = () => {
    modal.classList.add('show');

    editFirstName.value = firstName.textContent;
    editLastName.value = lastName.textContent;
    editBirthDate.value = birthDate.textContent;
    editEmail.value = email.textContent;
    editPhone.value = phone.textContent;
    editStatus.value = infoStatus.textContent;
};

closeModal.onclick = cancelBtn.onclick = () => {
    modal.classList.remove('show');
};

saveBtn.onclick = () => {
    firstName.textContent = editFirstName.value;
    lastName.textContent = editLastName.value;
    birthDate.textContent = editBirthDate.value;
    email.textContent = editEmail.value;
    phone.textContent = editPhone.value;

    infoStatus.textContent = editStatus.value || "Mahasiswa";
    profileStatus.textContent = editStatus.value || "Mahasiswa";
    fullName.textContent = `${editFirstName.value} ${editLastName.value}`;

    modal.classList.remove('show');
};

menuToggle.onclick = () => {
    document.querySelector('.sidebar').classList.toggle('collapsed');
};

editAddressBtn.onclick = () => {
  addressModal.classList.add('show');

  editKota.value = kotaText.textContent;
  editProvinsi.value = provinsiText.textContent;
  editKodePos.value = kodePosText.textContent;
};

closeAlamat.onclick = cancelAlamat.onclick = () => {
  addressModal.classList.remove('show');
};




