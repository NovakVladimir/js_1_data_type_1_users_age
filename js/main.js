
function aboutAge () {
    let age = document.ageForm.ageInput.value;
    let el = document.getElementById("maine");
    
    switch(true) {
        case age < 0 || age > 140: 
        el.innerHTML="You are a big lier";
        let audio = new Audio('./audio/audio_1.mp3');
        audio.play();
        break;
        case age >= 0 && age < 12: el.innerHTML = "You are still just a child.";
        let audio_2 = new Audio('./audio/audio_2.mp3');
        audio_2.play();
        break;
        case age >= 12 && age < 18: el.innerHTML = "You are a teenager. Be proud of it.";
        let audio_3 = new Audio('./audio/audio_3.mp3');
        audio_3.play();
        break;
        case age >= 18 && age < 60: el.innerHTML = "Now you are an adult and you have to do everything  yourself";
        let audio_4 = new Audio('./audio/audio_4.mp3');
        audio_4.play();
        break;
        case age >= 60 && age < 100: el.innerHTML = "My congratulations. Your are a pensioner";
        let audio_5 = new Audio('./audio/audio_5.mp3');
        audio_5.play();
        break;
        case age >= 100 && age <= 140: el.innerHTML = "Are you still alive? RESPECT";
        let audio_6 = new Audio('./audio/audio_6.mp3');
        audio_6.play();
        break;
        default: el.innerHTML = "You entered data in the wrong format. Try to write only one number with digits.";
    }
}

let el = document.getElementById('main');
el.innerHTML = '<h1>You are a big liar</h1>';

// let userAge = prompt("Enter your age", "boo");
// aboutAge(userAge);