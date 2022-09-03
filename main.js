navigator.mediaDevices.getUserMedia({audio: false, video: true}).then((stream) => {
    
    console.log(stream);
    let video = document.getElementById('video');
    if(!stream){
        document.documentElement.innerHTML= '<h3>Camara no detectada</h3>';
    }
    video.srcObject = stream;
    video.onloadeddata = (ev) => video.play();


}).catch((err) => {
    console.log(err);
    document.getElementById("nocamara").innerHTML = "Camara no detectada, asegurese de dar permisos.";
    document.getElementById("errnocamara").style.display = "block";
});