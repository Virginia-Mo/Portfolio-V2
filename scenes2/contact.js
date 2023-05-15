function setContact(worldState) {
    add([
        sprite('tea2-background'),
        scale(2.5),
        pos(0, 0)
    ])
    const title = add([
        text("Contact", {
            font: "title",
            width: 900,
            size: 40,
            lineSpacing: 8,
            letterSpacing: 2,
            transform: (idx, ch) => ({
                pos: vec2(0, wave(-2, 2, time() * 4 + idx * 0.5)),
                scale: wave(1, 1.2, time() * 3 + idx),
            }),

        }),
        pos(450, 30),
        color(10, 10, 10)
    ])
    const input = add([
        pos(100, 150),
        color(10, 10, 10),
        text("Tel : 06.73.31.48.88", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input2 = add([
        pos(100, 230),
        color(10, 10, 10),
        text("@ : antonio.vir@hotmail.com", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input3 = add([
        pos(100, 310),
        color(10, 10, 10),
        text("GitHub => https://github.com/Virginia-Mo", {
            font: "unscii",
            width: 900,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,

        }),
        area({ cursor: "pointer" })
    ])
    input3.onClick( () => {
        window.open(
            'https://github.com/Virginia-Mo',
            '_blank'
        );
    })
    const input4 = add([
        pos(100, 400),
        color(10, 10, 10),
        text("LinkedIn => https://www.linkedin.com/in/virginia-mo/", {
            font: "unscii",
            width: 900,
            size: 30,
            lineSpacing: 8,
            letterSpacing: 2,
        }),
        area({ cursor: "pointer" })
    ])
    input4.onClick( () => {
        window.open(
            'https://www.linkedin.com/in/virginia-mo/',
            '_blank'
        );
    })
    const details = add([
        pos(0, 10),
        color(245, 67, 54),
        text("ESC pour quitter", {
            font: "unscii",
            width: 900,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    if (!worldState){
        worldState = {
            playerPos : (850,500),
        }
    }
    onKeyPress("escape", () => {
        worldState.playerPos = vec2(720, 300)
        go("myhouse", worldState)
    })
}