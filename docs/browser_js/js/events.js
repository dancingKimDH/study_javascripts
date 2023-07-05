let keydownObject = document.querySelector("#keydownEnter, (e)");
keydownObject.addEventListener('keydown', () => {

    if (e.code == 'Enter') {
        console.log(`key down : ${e.code}`);
    }
});