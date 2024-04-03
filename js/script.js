const fromText = document.querySelector(".from-text"),
    toText = document.querySelector(".to-text"),
    selectTag = document.querySelectorAll("select"),
    translateBtn = document.querySelector(".c-button--gooey"),
    fromVoiceBtn = document.querySelector(".from");

selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id == 0 ? country_code == "pt-BR" ? "selected" : "" : country_code == "en-GB" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

fromVoiceBtn.addEventListener('click', function() {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = selectTag[0].value;
    recognition.start();
    recognition.onresult = function(event) {
        fromText.value = event.results[0][0].transcript;
    };
});

let toVoice = document.querySelector('.to');
toVoice.addEventListener('click', function() {
    let toTalk;
    toTalk = new SpeechSynthesisUtterance(toText.value)
    toTalk.lang = selectTag[1].value;
    speechSynthesis.speak(toTalk)
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(),
        translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;
    if (!text) return;
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        data.matches.forEach(data => {
            if (data.id === 0) {
                toText.value = data.translation;
            }
        });
        toText.setAttribute("placeholder", "Translation");
    });
});
