const vehicleService = 'VEHICLE_SERVICE';
const inputForm = document.getElementById('inputForm');

function CheckForStorage() {
  return typeof Storage !== 'undefined';
}

function PutUserList(data) {
  if (CheckForStorage()) {
    let userData = [];

    if (localStorage.getItem(vehicleService) !== null) {
      userData = JSON.parse(localStorage.getItem(vehicleService));
    }

    userData.push(data);
    localStorage.setItem(vehicleService, JSON.stringify(userData));
  }
}

function GetUserList() {
  if (CheckForStorage()) {
    return JSON.parse(localStorage.getItem(vehicleService)) || [];
  } else {
    return [];
  }
}

// Menampilkan data dari user
function RenderUserList(userData) {
  if (userData === null) {
    return;
  }

  const containerCash = document.getElementById('complateServiceCash');
  const containertransfer = document.getElementById('complateServiceTransfer');

  containerCash.innerHTML = '';
  containertransfer.innerHTML = '';
  for (let user of userData) {
    const id = user.id;
    const name = user.name;
    const email = user.email;
    const vehicle = user.vehicle;
    const vehicleMerk = user.vehicleMerk;
    const address = user.address;
    const messageForm = user.messageForm;
    const transfer = user.transfer;

    let userData = document.createElement('article');
    userData.classList.add('user-item');
    userData.innerHTML = '<h3 name = ' + id + '>' + name + '</h3>';
    userData.innerHTML += '<p>Email : ' + email + '</p>';
    userData.innerHTML += '<p>Kendaraan : ' + vehicle + '</p>';
    userData.innerHTML += '<p>Merk Kendaraan : ' + vehicleMerk + '</p>';
    userData.innerHTML += '<p>Alamat : ' + address + '</p>';
    userData.innerHTML += '<p>Yang ingin di perbaiki : ' + messageForm + '</p>';

    if (transfer === false) {
      containerCash.append(userData);
      userData.childNodes[0].addEventListener('click', function (event) {
        UpdateItem(event.target.parentElement);
      });

      continue;
    }

    containertransfer.append(userData);
  }
}

// Menangkap data inputan dari user
inputForm.addEventListener('submit', function (event) {
  // Mencegah halaman untuk refresh
  event.preventDefault();
  // Menampilkan SweetAlert
  Swal.fire({
    icon: 'question',
    title: 'Apakah datamu sudah benar ?',
    text: 'Klik simpan apabila datamu sudah benar',
    confirmButtonText: 'Simpan',
    confirmButtonColor: '#3085d6',
  }).then(function (result) {
    // Jika data sudah benar maka akan di simpan
    const inputName = document.getElementById('inputFormName').value; // Nama Lengkap
    const inputEmail = document.getElementById('inputFormEmail').value; // Email
    const inputVehicle = document.getElementById('inputFormVehicle').value; // Jenis Kendaraan
    const inputVehicleMerk = document.getElementById(
      'inputFormVehicleMerk'
    ).value; // Merk Kendaraan
    const inputFormAddress = document.getElementById('inputFormAddress').value; // Alamat
    const messageFormService =
      document.getElementById('messageFormService').value; // Pesan
    const inputTransfer = document.getElementById('inputTransfer').checked; // Transfer

    const idTemp = document.getElementById('inputFormName').name;
    if (idTemp !== '') {
      const userData = GetUserList();
      for (let index = 0; index < userData.length; index++) {
        if (userData[index].id == idTemp) {
          userData[index].inputName = inputName;
          userData[index].inputEmail = inputEmail;
          userData[index].inputVehicle = inputVehicle;
          userData[index].inputVehicleMerk = inputVehicleMerk;
          userData[index].inputFormAddress = inputFormAddress;
          userData[index].messageFormService = messageFormService;
          userData[index].inputTransfer = inputTransfer;
        }
      }
      localStorage.setItem(vehicleService, JSON.stringify(userData));
      RenderUserList(userData);
      return;
    }

    const id =
      JSON.parse(localStorage.getItem(vehicleService)) === null
        ? 0 + Date.now()
        : JSON.parse(localStorage.getItem(vehicleService)).length + Date.now();
    const newUser = {
      id: id,
      name: inputName,
      email: inputEmail,
      vehicle: inputVehicle,
      vehicleMerk: inputVehicleMerk,
      address: inputFormAddress,
      messageForm: messageFormService,
      transfer: inputTransfer,
    };

    PutUserList(newUser);

    // Memastikan kembali apakah data sudah benar dengan SweetAlert
    const userData = GetUserList();
    if (result.isConfirmed) {
      Swal.fire('Tersimpan!', 'Datamu sudah tersimpan.', 'success');
    }

    RenderUserList(userData);
    ResetAllForm();
  });
});

// Reset Form
function ResetAllForm() {
  document.getElementById('inputFormName').value = '';
  document.getElementById('inputFormEmail').value = '';
  document.getElementById('inputFormVehicle').value = '';
  document.getElementById('inputFormVehicleMerk').value = '';
  document.getElementById('inputFormAddress').value = '';
  document.getElementById('messageFormService').value = '';
  document.getElementById('inputTransfer').checked = false;
}

// Melempar data yang sudah di isi kedalam local storage
window.addEventListener('load', function () {
  if (CheckForStorage) {
    if (localStorage.getItem(vehicleService) !== null) {
      const userData = GetUserList();
      RenderUserList(userData);
    }
  } else {
    alert('Browser Tidak Mendukung Web Storage');
  }
});
