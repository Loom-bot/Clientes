document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('generateQRInput');
  const button = document.getElementById('generateQR');
  const qrContainer = document.getElementById('qrCode');

  const fileInput = document.getElementById('fileInput');
  const fileList = document.getElementById('fileList');

  fileInput.addEventListener('change', () => {
    fileList.innerHTML = '';
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
      const li = document.createElement('li');
      li.textContent = files[i].name;
      fileList.appendChild(li);
    }
  });

  button.addEventListener('click', () => {
    const texto = input.value.trim();
    qrContainer.innerHTML = '';
    if (texto !== '') {
      new QRCode(qrContainer, {
        text: texto,
        width: 180,
        height: 180
      });
    }
  });
});