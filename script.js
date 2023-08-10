let qrContentInput = document.getElementById("qr-content");
let qrGenerationForm =
    document.getElementById("qr-generation-form");
let qrCode;

function generateQrCode(qrContent) {
    return new QRCode("qr-code", {
        text: qrContent,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
}

qrGenerationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let qrContent = qrContentInput.value;
    if (qrCode == null) {
        qrCode = generateQrCode(qrContent);
    } else {
        qrCode.makeCode(qrContent);
    }

    // Create a download link for the QR code
    const qrCanvas = document.querySelector("#qr-code canvas");
    const downloadLink = document.getElementById("download-link");
    downloadLink.style.display = "block";
    downloadLink.href = qrCanvas.toDataURL("image/png");
});
