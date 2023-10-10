let count = 30
const defaults = {
    origin: { y: 0.7 },
};

function fire(particleRatio, opts) {
    for (let i = 0; i < 2; i++) {
        const myX = i % 2 === 0 ? 0.1 : 0.9
        let myOrigin = { x: myX, y: 0.2 }
        setTimeout(() => {
            confetti({
                origin: myOrigin,
                spread: 270,
                ticks: 200,
                gravity: 1,
                decay: 0.94,
                startVelocity: 20,
                particleCount: count,
                scalar: 3,
                shapes: ["image"],
                shapeOptions: {
                    image: [{
                        src: "./images/fruits/apple.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/avocado.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/banana.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/berries.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/cherry.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/grapes.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/lemon.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/orange.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/peach.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/pear.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/pepper.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/plum.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/star.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/strawberry.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/watermelon.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/fruits/watermelon_slice.png",
                        width: 32,
                        height: 32,
                    },
                    ],
                },
            });
        }, 300 * i)
    }
}

window.addEventListener('pointerdown', () => {
    fire(0.25, {
        spread: 26,
        startVelocity: 10,
    });

    // fire(0.2, {
    //     spread: 60,
    // });

    // fire(0.35, {
    //     spread: 100,
    //     decay: 0.91,
    //     scalar: 0.8,
    // });

    // fire(0.1, {
    //     spread: 120,
    //     startVelocity: 25,
    //     decay: 0.92,
    //     scalar: 1.2,
    // });

    // fire(0.1, {
    //     spread: 120,
    //     startVelocity: 45,
    // });
})