const soundString = 'asdfghjASDFGHJwetyuWETYU';

document.body.addEventListener("keydown",
    function (e) {
        if (soundString.includes(e.key)) {
            new Audio(`white_keys/${e.key.toUpperCase()}.mp3`).play();
        } else {
            console.log('Warning! Wrong key!');
        }
    });