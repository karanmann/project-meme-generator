// Update image onto the screen

const updateImage = () => {
    let img = document.querySelector('img'); //This returns the first img element.
    let file = document.querySelector('input[type=file').files[0]; // Returns the first file element found.
    img.src = window.URL.createObjectURL(file);
}

// Write the test onto the meme

const updateText = () => {
    let userText = document.getElementById('userText');
    let memeText = document.getElementById('memeText');
    memeText.innerHTML = userText.nodeValue;
}