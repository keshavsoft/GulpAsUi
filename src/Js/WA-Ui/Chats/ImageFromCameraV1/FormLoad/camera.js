const StartFunc = () => {
    let video = document.getElementById("video");
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (err) {
            console.log("Error accessing camera: ", err);
        });
};

export { StartFunc };
