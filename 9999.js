function unlockPage() {
    const validKeys = ["dcTulen1bg", "KnTurbo8b9"];
    const inputKey = document.getElementById("key-input").value;
    const errorMessage = document.getElementById("error-message");

    if (validKeys.includes(inputKey)) {
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        errorMessage.style.display = "block";
    }
}