let toogleSwitch = document.getElementById("toggle");
let message = document.getElementById("message");

toogleSwitch.addEventListener('click', () => {
    if(toogleSwitch.checked){
        document.body.style.backgroundColor = "black";
        message.style.color = "white";
    }
    else{
        document.body.style.backgroundColor = "white";
        message.style.color = "black";
    }
})

// let toggleSwitch = document.getElementById("toggle");
// let message = document.getElementById("message");

// toggleSwitch.addEventListener('click', () => {
//     let videoElement = document.getElementById("background-video");

//     if (!videoElement) {
//         // Create video element if it doesn't exist
//         createVideoElement(toggleSwitch.checked ? "https://www.pexels.com/video/captivating-sunset-with-orange-sky-29014377/" : "https://www.pexels.com/video/time-lapse-video-of-sunrise-4731823/");
//     } else {
//         // Switch the video source between day and night
//         videoElement.src = toggleSwitch.checked ? "https://www.pexels.com/video/captivating-sunset-with-orange-sky-29014377/" : "https://www.pexels.com/video/time-lapse-video-of-sunrise-4731823/";
//         videoElement.load();  // Reload the video to apply the new source
//     }

//     // Update message text color based on the mode
//     if (toggleSwitch.checked) {
//         message.style.color = "white";  // Night mode: white text
//     } else {
//         message.style.color = "black";  // Day mode: black text
//     }
// });

// // Function to create a video element and set its initial source
// function createVideoElement(source) {
//     let video = document.createElement("video");
//     video.id = "background-video";
//     video.src = source;  // Set the initial video source
//     video.autoplay = true;
//     video.muted = true;
//     video.loop = true;
//     video.style.position = "fixed";
//     video.style.top = "0";
//     video.style.left = "0";
//     video.style.width = "100%";
//     video.style.height = "100%";
//     video.style.objectFit = "cover";
//     video.style.zIndex = "-1";  // Ensures video is behind the content
//     document.body.appendChild(video);
// }


