function Translate(word, language) {
    this.apikey = "ae84a2c9ddmshb983277dd7a8748p16c17djsnc0b94ba70afa";
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function (callback) {

    const data = `q=${this.word}&source=az&target=${this.language}`;

    this.xhr.withCredentials = true;
   
    this.xhr.onload = function(){
        if (this.readyState === this.DONE) {
            const json = JSON.parse(this.responseText);

            // const text = json.text[0];
 
            callback(null,json.data.translations[0].translatedText);

        }else{
            callback("Error" , null);
        }
    };

    // this.xhr.addEventListener("readystatechange", function () {
    //     if (this.readyState === this.DONE) {
    //         const json = JSON.parse(this.responseText);

    //         // const text = json.text[0];
 
    //         callback(null,json.data.translations[0].translatedText);

    //     }else{
    //         callback("Error" , null);
    //     }
    // });

    this.xhr.open("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");
    this.xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    // this.xhr.setRequestHeader("accept-encoding", "application/gzip");
    this.xhr.setRequestHeader("x-rapidapi-key", "ae84a2c9ddmshb983277dd7a8748p16c17djsnc0b94ba70afa");
    this.xhr.setRequestHeader("x-rapidapi-host", "google-translate1.p.rapidapi.com");

    this.xhr.send(data);

};

Translate.prototype.changeParameters= function(newWord , newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}