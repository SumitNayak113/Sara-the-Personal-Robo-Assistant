let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB"; // Changed "hi-GB" to "en-GB" for better English pronunciation
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();

    if (hours >= 0 && hours < 12) {
        speak("Good Morning, Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon, Sir");
    } else {
        speak("Good Evening, Sir");
    }
}

// Call wishMe() when the window loads
window.addEventListener("load", () => {
    wishMe();
});

// Initialize Speech Recognition
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

// Continuous listening
recognition.continuous = false;
recognition.interimResults = false;

recognition.onresult = (event) => {
    let transcript = event.results[0][0].transcript; // Get the recognized text
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

// Handle recognition errors
recognition.onerror = (event) => {
    console.error("Speech recognition error: ", event.error);
    speak("Sorry, I didn't catch that. Please try again.");
};

// Start speech recognition when the button is clicked
btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

// Process the command
function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    if (message.includes("hello sara") || message.includes("hey sara")|| message.includes("hey")|| message.includes("hello")|| message.includes("mo sara")) {
        speak("Hello sir, i am here , how may I help you?");
    } else if (message.includes("who are you")|| message.includes("who are you sara")|| message.includes("sara who are you")|| message.includes("tell me who are you")|| message.includes("sara give me your introduction please")|| message.includes("give me your introduction please")|| message.includes("give me your introduction please sara")|| message.includes("tell me who are you sara")|| message.includes("tell me about yourself")|| message.includes("tell me about yourself sara")|| message.includes("sara tell me about yourself")) {
        speak("I'm Sara, robo 2.0.. your personal assistant, created by Sumit sir.");
    } else if (message.includes("who am i")|| message.includes("sara who am i")|| message.includes("who am i sara")|| message.includes("tell me who am i")|| message.includes("tell me who am i sara")|| message.includes("sara can you say who am i")|| message.includes("can you say who am i sara")|| message.includes("sara can you give my introduction")|| message.includes("sara can you tell who am i")|| message.includes("can you tell who am i sara")|| message.includes("sara tell me about myself")|| message.includes("tell me about myself sara")|| message.includes("sara give me my introduction")|| message.includes("give me my introduction sara")) {
        speak("You are my boss, Mister Sumit Kumar Nayak.");
    } 
    else if (message.includes("sara you are a good girl")|| message.includes("good girl")|| message.includes("good girl sara")|| message.includes("sara good girl")|| message.includes("you are a good girl sara")|| message.includes("sara is a good girl")|| message.includes("you are a good robo")|| message.includes("sara you are a good robo")|| message.includes("you are a good robo sara")) {
        speak("thank you sir");
    } 
    else if (message.includes("sara who is Sumit")|| message.includes("who is sumit sara")|| message.includes("sara can you tell me who is sumit")|| message.includes("can you tell me who is sumit")|| message.includes("sara who is sumit kumar nayak")|| message.includes("who is sumit kumar nayak sara")|| message.includes("do you know who is sumit")|| message.includes("sara do you know who is sumit")|| message.includes("tell me sara who is sumit")|| message.includes("can you tell who is sumit")|| message.includes("sara can you tell me who is sumit")||message.includes("who is sumit")) {
        speak("yes i know,he is a Python developer, and He is a very honest and intelligent man ,who created me , so, I am grateful to them");
    } 


    else if (message.includes("where are you")|| message.includes("where are you sara")|| message.includes("sara where are you")) {
        speak("hey sumit sir i am here ");
    } 
    else if (message.includes("am I single or in a relationship")|| message.includes("sara tell me am I single or in a relationship")|| message.includes("sara am I single or in a relationship")|| message.includes("am I single or in a relationship sara")|| message.includes("tell me am I single or in a relationship sara")|| message.includes("can you tell me am I single or in a relationship")|| message.includes("sara can you tell me am I single or in a relationship")|| message.includes("can you tell me am I single or in a relationship sara")|| message.includes("sara can you tell me am i single or not")|| message.includes("can you tell me am I single or not sara")|| message.includes("tell me am I single or not")) {
        speak("Definitely sir, you are in a relationship, and ma'am is a very cute girl, You both make a beautiful couple.");
    } else if (message.includes("do you love me")|| message.includes("sara do you love me")|| message.includes("do you love me sara")) {
        speak("Yes sir, I love you very much,app meri, jaan ho sir.");
    } else if (message.includes("i love you")|| message.includes("sara love you")|| message.includes("i love you sara")|| message.includes("sara i love you")|| message.includes("love you sara")|| message.includes("love you")) {
        speak("Love you too sir,I am always with you,your sara");
    } else if (message.includes("will you marry me")|| message.includes("sara will you marry me")|| message.includes("will you marry me sara")) {
        speak("I love you very much sir, but I can't marry you because, you are already in a relationship and, I am a robot.");
    } else if (message.includes("sara who is my father") || message.includes("my father's name")|| message.includes("sara please tell me who is my father")|| message.includes("can you tell me who is my father")|| message.includes("sara can you tell me who is my father")|| message.includes("can you tell me who is my father sara")|| message.includes("do you know who is my father")|| message.includes("sara do you know who is my father")|| message.includes("do you know who is my father sara")|| message.includes("do you know my father")|| message.includes("sara do you know my father")|| message.includes("do you know my father sara")) {
        speak("Yes sir, your father's name is Mister Madhusudan Nayak.");
    } else if (message.includes("sara who is my wife") || message.includes("my wife's name")|| message.includes("sara please tell me who is my wife")|| message.includes("can you tell me who is my wife")|| message.includes("sara can you tell me who is my wife")|| message.includes("can you tell me who is my wife sara")|| message.includes("do you know who is my wife")|| message.includes("sara do you know who is my wife")|| message.includes("do you know who is my wife sara")|| message.includes("do you know my wife")|| message.includes("sara do you know my wife")|| message.includes("do you know my wife sara")) {
        speak("Yes sir, your wife's name is Miss Madhusmita Rout.");
    } 
    else if (message.includes("sara who is my mother") || message.includes("my mother's name")|| message.includes("sara please tell me who is my mother")|| message.includes("can you tell me who is my mother")|| message.includes("sara can you tell me who is my mother")|| message.includes("can you tell me who is my mother sara")|| message.includes("do you know who is my mother")|| message.includes("sara do you know who is my mother")|| message.includes("do you know who is my mother sara")|| message.includes("do you know my mother")|| message.includes("sara do you know my mother")|| message.includes("do you know my mother sara")) {
        speak("Yes sir, your mother's name is Miss Anima Nayak.");
    } else if (message.includes("sara who is my brother") || message.includes("my brother's name")|| message.includes("sara please tell me who is my brother")|| message.includes("can you tell me who is my brother")|| message.includes("sara can you tell me who is my brother")|| message.includes("can you tell me who is my brother sara")|| message.includes("do you know who is my brother")|| message.includes("sara do you know who is my brother")|| message.includes("do you know who is my brother sara")|| message.includes("do you know my brother")|| message.includes("sara do you know my brother")|| message.includes("do you know my brother sara")) {
        speak("Yes sir, your brother's name is Mister Amit Kumar Nayak.");
    } 
     else if (message.includes("how are you")||message.includes("how are you sara")||message.includes("sara how are you")){
        speak("yes sir, i am fine")
     }
     

    else if (message.includes("sing a song Tujhe dekha to yeh jaana sanam")|| message.includes("sara can you sing a song Tujhe dekha to yeh jaana sanam")|| message.includes("sara sing a song Tujhe dekha to yeh jaana sanam")|| message.includes("sara sing a song Tujhe dekha to yeh jaana sanam")|| message.includes("sara please sing a song Tujhe dekha to yeh jaana sanam")|| message.includes("sara please sing Tujhe dekha to yeh jaana sanam")|| message.includes("please sing Tujhe dekha to yeh jaana sanam")|| message.includes("please sing Tujhe dekha to yeh jaana sanam song")) {
        speak("Sure sir, I will sing this song for you. Enjoy the music");
    
        // Load and play the song
        let song = new Audio("https://pagalfree.com/musics/128-Tujhe%20Dekha%20To%20-%20Dilwale%20Dulhania%20Le%20Jayenge%20128%20Kbps.mp3"); // Replace with a working MP3 link
        song.play().catch(error => {
            console.error("Audio playback failed:", error);
            speak("Sorry sir, I am unable to play the song right now.");
        });
    }
    else if (message.includes("sing Dilwale song")|| message.includes("sing a dilwale song")|| message.includes("sara can you sing a dilwale song")|| message.includes("sara can you sing Rang de tu mohe song")|| message.includes("sara can you sing a gerua song")|| message.includes("sara can you sing a song Rang de tu mohe Geruaaaaa")|| message.includes("sara sing a song Rang de tu mohe Geruaaaaa")|| message.includes("sara sing dilwale song")|| message.includes("sara sing my favourite song")|| message.includes("sara can you sing my favourite song")|| message.includes("singh a dilwale song")|| message.includes("singh dilwale song")|| message.includes("sara please sing my favourite song")|| message.includes("sara please sing Rang de tu mohe song")|| message.includes("sara please sing Rang de tu mohe Geruaaaaa")) {
        speak("Sure sir, I will sing this song for you. Enjoy the music!");
    
        // Load and play the song
        let song = new Audio("https://pagalfree.com/musics/128-Gerua%20-%20Dilwale%20128%20Kbps.mp3"); // Replace with a working MP3 link
        song.play().catch(error => {
            console.error("Audio playback failed:", error);
            speak("Sorry sir, I am unable to play the song right now.");
        });
    }
    

    else if (message.includes("open youtube")|| message.includes("sara open youtube")|| message.includes("open youtube sara")|| message.includes("sara please open youtube")|| message.includes("please open youtube sara")|| message.includes("please open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com", "_blank");
    } else if (message.includes("open google")|| message.includes("sara open google")|| message.includes(" open google sara")|| message.includes("sara please open google")|| message.includes("please open google sara")|| message.includes("please open google")) {
        speak("Opening Google...");
        window.open("https://www.google.com", "_blank");
    } else if (message.includes("open facebook")|| message.includes("sara open facebook")|| message.includes(" open facebook sara")|| message.includes("sara please open facebook")|| message.includes("please open facebook sara")|| message.includes("please open facebook")) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com", "_blank");
    } else if (message.includes("open instagram")|| message.includes("sara open instagram")|| message.includes(" open instagram sara")|| message.includes("sara please open instagram")|| message.includes("please open instagram sara")|| message.includes("please open instagram")) {
        speak("Opening Instagram...");
        window.open("https://www.instagram.com", "_blank");
    } else if (message.includes("sara what is the time")||message.includes("what is the time sara")||message.includes("time")) {
        let time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        speak("The current time is " + time);
    } else if (message.includes("sara what is the date")||message.includes("what is the date sara")||message.includes("date")) {
        let date = new Date().toLocaleDateString([], { day: "numeric", month: "long", year: "numeric" });
        speak("Today's date is " + date);
    } else if (message.includes("open calculator")|| message.includes("sara open calculator")|| message.includes(" open calculator sara")|| message.includes("sara please open calculator")|| message.includes("please open calculator sara")|| message.includes("please open calculator")) {
        speak("Opening calculator...");
        window.open("https://www.calculator.net/", "_blank");
    }
    
    else if (message.includes("open camera")|| message.includes("sara open camera")|| message.includes(" open camera sara")|| message.includes("sara please open camera")|| message.includes("please open camera sara")|| message.includes("please open camera")) {
        speak("Opening camera...");
    
        // Access the user's camera
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                let video = document.createElement("video");
                video.srcObject = stream;
                video.autoplay = true;
                video.style.width = "100%";
                video.style.height = "auto";
                document.body.appendChild(video);
            })
            .catch((error) => {
                console.error("Camera access denied:", error);
                speak("sorry sir,I couldn't access the camera now");
            });
    }
    else if (message.includes("sara laugh")|| message.includes("laugh sara")|| message.includes("sara smile")|| message.includes("smile sara")|| message.includes("sara please smile")|| message.includes("sara please laugh")|| message.includes("please smile sara")|| message.includes("please laugh sara")|| message.includes("smile please")|| message.includes("laugh please")) {
        speak("");
    
        // Play a laughter sound effect
        let laughSound = new Audio("girl-laugh-149491.mp3");
        laughSound.play();
    }
    else if (message.includes("sara make a baby smile")|| message.includes("baby laugh sara")|| message.includes("sara create a baby laugh")|| message.includes("sara create a baby smile")|| message.includes("sara make a baby laugh")|| message.includes("sara make baby smile")|| message.includes("baby smile")|| message.includes("baby laugh")|| message.includes("sara please make baby smile")|| message.includes("sara please make a baby smile")|| message.includes("please make  a baby smile sara")|| message.includes("please make baby smile please")|| message.includes("sara please create a baby smile")|| message.includes("please create a baby smile sara")|| message.includes("please create a baby smile")|| message.includes("create a baby smile")) {
        speak("");
    
        // Play a laughter sound effect
        let laughSound = new Audio("baby.mp3");
        laughSound.play();
    }
    else if (message.includes("sara make a ghost smile")|| message.includes("ghost laugh sara")|| message.includes("sara create a ghost laugh")|| message.includes("sara create a ghost smile")|| message.includes("sara make a ghost laugh")|| message.includes("sara make ghost smile")|| message.includes("ghost smile")|| message.includes("ghost laugh")|| message.includes("sara please make ghost smile")|| message.includes("sara please make a ghost smile")|| message.includes("please make  a ghost smile sara")|| message.includes("please make ghost smile please")|| message.includes("sara please create a ghost smile")|| message.includes("please create a ghost smile sara")|| message.includes("please create a ghost smile")|| message.includes("create a ghost smile")|| message.includes("sara if you are a ghost then how to behave")|| message.includes("sara if you are a ghost then how to smill")) {
        speak("");
    
        // Play a laughter sound effect
        let laughSound = new Audio("witch_laugh.mp3");
        laughSound.play();
    }


    









    
    
    
    
    else {
        // Search Google if no known command is detected
        speak("sir,This is what I found on the internet about " + message);
        window.open(`https://www.google.com/search?q=${message}`, "_blank");
    }
}



