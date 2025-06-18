let StartFunc = () => {
    LocalFuncShowModal();

    // Prefer camera resolution nearest to 1280x720.
    const constraints = {
        audio: false,
        video: { width: 700, height: 500 },
    };
    // debugger
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then((mediaStream) => {
            const video = document.querySelector("video");
            video.srcObject = mediaStream;
            video.play();
        })
        .catch((err) => {
            // always check for errors at the end.
            console.error(`${err.name}: ${err.message}`);
        });


};

const LocalFuncShowModal = () => {
    const myModal = new bootstrap.Modal('#cameraModal', {
        keyboard: false
    });

    myModal.show();
};

export { StartFunc };