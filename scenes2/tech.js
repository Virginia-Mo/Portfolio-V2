export function setTech(worldState) {
    add([
        sprite('tea3-background'),
        scale(2.5),
        pos(0, 0)
    ])
    const title = add([
        text("Compétences techniques", {
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
        pos(350, 30),
        color(10, 10, 10)
    ])
    const input = add([
        pos(300, 150),
        color(10, 10, 10),
        text("Front-end", {
            font: "unscii",
            width: 900,
            size: 38,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input2 = add([
        pos(100, 230),
        color(10, 10, 10),
        text("HTML5 , CSS, SASS ", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input12 = add([
        pos(100, 300),
        color(10, 10, 10),
        text("Vanilla Javascript", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input22 = add([
        pos(100, 370),
        color(10, 10, 10),
        text("Typescript( en cours)", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input3 = add([
        pos(100, 440),
        color(10, 10, 10),
        text("React :", {
            font: "unscii",
            width: 900,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input34 = add([
        pos(230, 438),
        color(10, 10, 10),
        text("React Redux,React Routeur", {
            font: "font1",
            width: 900,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input32 = add([
        pos(100, 510),
        color(10, 10, 10),
        text("Vue.js : ", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input33 = add([
        pos(230, 510),
        color(10, 10, 10),
        text("Pinia,Vue Router", {
            font: "font1",
            width: 900,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input4 = add([
        pos(800, 150),
        color(10, 10, 10),
        text("Back-end", {
            font: "unscii",
            width: 900,
            size: 39,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const input6 = add([
        pos(700, 230),
        color(10, 10, 10),
        text("NodeJS, Express", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const input7 = add([
        pos(700, 300),
        color(10, 10, 10),
        text("PostgreSQL", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const input8 = add([
        pos(700, 370),
        color(10, 10, 10),
        text("Architecture MVC, POO, API REST", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const input9 = add([
        pos(700, 440),
        color(10, 10, 10),
        text("CMS : Strapi", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
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
        worldState.playerPos = vec2(520, 300)
        go("skills", worldState)
    })

}