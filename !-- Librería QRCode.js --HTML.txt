<!-- Librería QRCode.js -->
<script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>

<script>
  const qrButton = document.querySelector('button');
  const qrInput = document.querySelector('input[type="text"]');
  const qrResultado = document.getElementById('qrResultado');

  qrButton.addEventListener('click', () => {
    const texto = qrInput.value;
    qrResultado.innerHTML = ""; // Limpia QR anterior
    if (texto) {
      QRCode.toCanvas(document.createElement("canvas"), texto, function (err, canvas) {
        if (!err) qrResultado.appendChild(canvas);
      });
    } else {
      qrResultado.innerHTML = "<p style='color: yellow;'>Escribe algo para generar tu QR 🙏</p>";
    }
  });

  // Mostrar nombres de archivos seleccionados
  const fileInput = document.querySelector('input[type="file"]');
  fileInput.addEventListener('change', () => {
    const archivos = Array.from(fileInput.files).map(file => file.name);
    alert("Has subido:\n" + archivos.join("\n"));
  });
</script>