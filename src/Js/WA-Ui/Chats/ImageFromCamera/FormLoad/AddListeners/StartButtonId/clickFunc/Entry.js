let StartFunc = (event) => {
    takepicture();
    event.preventDefault();
    // clearphoto();
};

function takepicture() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const width = 320;    // We will scale the photo width to this
    const height = 300;
    const photo = document.getElementById("photo");

    if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        const data = canvas.toDataURL("image/png");
        photo.setAttribute("src", data);
    } else {
        clearphoto();
    }
};

function clearphoto() {
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
};

export { StartFunc };