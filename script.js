document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const fileList = document.getElementById('fileList');
  const qrButton = document.getElementById('generateQR');
  const qrContainer = document.getElementById('qrCode');

  fileInput.addEventListener('change', () => {
    fileList.innerHTML = '';
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = files[i].name;
      fileList.appendChild(listItem);
    }
  });

  qrButton.addEventListener('click', () => {
    qrContainer.innerHTML = '';
    const link = window.location.href;
    new QRCode(qrContainer, {
      text: link,
      width: 180,
      height: 180
    });
  });
});