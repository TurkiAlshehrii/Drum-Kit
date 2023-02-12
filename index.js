let lenghtOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < lenghtOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;

        check(buttonInnerHTML, buttonInnerHTML)


    });

}

document.addEventListener("keypress", function (event) {

    check(event.key, event.key)

});


const makeSound = function (src) {

    let audio = new Audio(src);
    audio.play()
}

const buttonAnimation = function (currentKey) {

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}

const check = function (ex, input) {

    switch (ex) {

        case "w":
            makeSound("sounds/tom-1.mp3");
            buttonAnimation(input)

            break;

        case "a":
            makeSound("sounds/tom-2.mp3");
            buttonAnimation(input)

            break;

        case "s":
            makeSound("sounds/tom-3.mp3");
            buttonAnimation(input)

            break;

        case "d":
            makeSound("sounds/tom-4.mp3");
            buttonAnimation(input)

            break;

        case "j":
            makeSound("sounds/snare.mp3");
            buttonAnimation(input)

            break;

        case "k":
            makeSound("sounds/crash.mp3");
            buttonAnimation(input)

            break;

        case "l":
            makeSound("sounds/kick-bass.mp3");
            buttonAnimation(input)

            break;
    }
}


