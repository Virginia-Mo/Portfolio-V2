function setWork(worldState) {
    add([
        sprite('tea2-background'),
        scale(2.5),
        pos(0, 0)
    ])
    const title = add([
        text("Expériences professionnelles", {
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
        pos(300, 30),
        color(10, 10, 10)
    ])
    const input = add([
        pos(60, 150),
        color(10, 10, 10),
        text("Développeuse Web - O'Clock", {
            font: "unscii",
            width: 1200,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input2 = add([
        pos(60, 180),
        color(10, 10, 10),
        text("Novembre 22 à Décembre 22", {
            font: "font1",
            width: 1200,
            size: 28,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input12 = add([
        pos(60, 230),
        color(10, 10, 10),
        text(" ~> Projet de fin d'études : Développement front-end en React, equipe de 5 développeurs, site de e-commerce.", {
            font: "unscii",
            width: 1200,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input22 = add([
        pos(60, 350),
        color(10, 10, 10),
        text("Infirmière en laboratoire - Biogroup, Puteaux", {
            font: "unscii",
            width: 1200,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input3 = add([
        pos(60, 380),
        color(10, 10, 10),
        text("Octobre 21 à Avril 22 - Janvier 2019 à Novembre 2020", {
            font: "font1",
            width: 1200,
            size: 28,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input34 = add([
        pos(60, 430),
        color(10, 10, 10),
        text(" ~> Prélèvements sanguins, bactériologiques et mycologiques. Aide techique", {
            font: "unscii",
            width: 1200,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input23 = add([
        pos(60, 520),
        color(10, 10, 10),
        text("Infirmière en pédiatrie - Hôpital A.Paré, Boulogne-Billancourt", {
            font: "unscii",
            width: 1200,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input24 = add([
        pos(60, 560),
        color(10, 10, 10),
        text("Septembre 2013 à Décembre 2018.", {
            font: "font1",
            width: 1200,
            size: 28,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input25 = add([
        pos(60, 600),
        color(10, 10, 10),
        text(" ~> Service de pédiatrie hospitalisations bébés/enfants, urgences pédiatriques et psychiatrie adolescents.", {
            font: "unscii",
            width: 1200,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const details = add([
        pos(20, 20),
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
        worldState.playerPos = vec2(640, 260)
        go("school", worldState)
    })

}