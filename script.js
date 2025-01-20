document.getElementById('TransliterateButton').addEventListener('click', function(){
    const inputScript = document.getElementById('inputScript').value;
    const outputScript = document.getElementById('outputScript').value;
    const inputText = document.getElementById('inputText').value;

    if(inputScript === "AutoDetect") {
        transliterateTextAutoDetect(outputScript, inputText)
    } else {
    transliterateText(inputScript, outputScript, inputText)
    }
});

async function transliterateText(inputScript, outputScript, inputText){
    const apiURL = `https://aksharamukha-plugin.appspot.com/api/public?source=${inputScript}&target=${outputScript}&text=${encodeURIComponent(inputText)}`;

    const response = await fetch(apiURL);
    const data = await response.text();

    document.getElementById('TransliteratedText').value = data;
}

async function transliterateTextAutoDetect(outputScript, inputText){
    const apiURL = `https://aksharamukha-plugin.appspot.com/api/public?target=${outputScript}&text=${encodeURIComponent(inputText)}`;

    const response = await fetch(apiURL);
    const data = await response.text();

    document.getElementById('TransliteratedText').value = data;
}
