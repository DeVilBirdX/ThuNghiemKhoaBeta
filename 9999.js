function unlockPage() {
    const validKeys = ["404notfound", "403notfound"];
    const inputKey = document.getElementById("key-input").value.replace(/\s+/g, ''); 
    const errorMessage = document.getElementById("error-message");

    if (validKeys.map(key => key.replace(/\s+/g, '')).includes(inputKey)) {
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        errorMessage.style.display = "block";
    }
}