function setSoft(worldState) {
    add([
        sprite('tea3-background'),
        scale(2.5),
        pos(0, 0)
    ])
    const title = add([
        text("Autres compétences", {
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
        text("Gestion de projet", {
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
        text("Rédaction d'un cahier des charges ", {
            font: "unscii",
            width: 700,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input12 = add([
        pos(100, 300),
        color(10, 10, 10),
        text("Création de wireframes et userstories", {
            font: "unscii",
            width: 700,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input22 = add([
        pos(100, 370),
        color(10, 10, 10),
        text("Méthodes Agile (Scrum), Git, Trello", {
            font: "unscii",
            width: 700,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input3 = add([
        pos(100, 440),
        color(10, 10, 10),
        text("Langues :", {
            font: "unscii",
            width: 700,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input34 = add([
        pos(200, 480),
        color(10, 10, 10),
        text("Français (natif), Anglais B2, Portugais B1", {
            font: "font1",
            width: 400,
            size: 25,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input4 = add([
        pos(900, 150),
        color(10, 10, 10),
        text("Soft Skills", {
            font: "unscii",
            width: 900,
            size: 39,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const input6 = add([
        pos(800, 230),
        color(10, 10, 10),
        text("Rigeur", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const input7 = add([
        pos(800, 300),
        color(10, 10, 10),
        text("Gestion du stress", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const input8 = add([
        pos(800, 370),
        color(10, 10, 10),
        text("Empathie", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const input9 = add([
        pos(800, 440),
        color(10, 10, 10),
        text("Auto-apprentissage", {
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