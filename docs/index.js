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
                        src: "./images/paillettes/PAILLETTES_1.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_2.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_3.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_4.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_5.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_6.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_7.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_8.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_9.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_10.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_11.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_12.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_13.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_14.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_15.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_16.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_17.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_18.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_19.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src: "./images/paillettes/PAILLETTES_20.png",
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