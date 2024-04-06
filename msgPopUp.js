chrome.extension.onRequest.addListener(
    function(prediction){
    if (prediction == 1){
        alert("Warning: Spam Site Destected");
    }
    else if (prediction == -1){
        alert("No phishing detected");
    }
}
);
