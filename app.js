const button = document.getElementById('btn');

function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
        .then(data => {
            const joke = data.setup + '\n' + data.punchline;
            const robotShowText = document.getElementById('text-container');
            // robotShowText.innerHTML = `<span>${joke}</span>`     ⬅︎【!】\n はhtml内では無効。
            robotShowText.innerHTML = `<span>${data.setup}<br>${data.punchline}</span>`
            setRobotSpeakText(joke);
            speakText();
        })
}

button.addEventListener('click', getJoke); //⬅︎ 【!】getJoke()じゃない。


/* ---------------------- */
/* functions for SPEAKING */
/* ---------------------- */
const robotSpeakText = new SpeechSynthesisUtterance();

function setRobotSpeakText(text){
    robotSpeakText.text = text;
}

function speakText(){
    speechSynthesis.speak(robotSpeakText);
}