function setStudies(worldState) {
    add([
        sprite('tea1-background'),
        scale(2.5),
        pos(0, 0)
    ])
    const title = add([
        text("Formations", {
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
        pos(60, 150),
        color(10, 10, 10),
        text("Spécialisation React et projet professionnalisant en équipe. ", {
            font: "unscii",
            width: 1200,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input2 = add([
        pos(60, 190),
        color(10, 10, 10),
        text("Octobre 22 à Décembre 22, École O'Clock - Labélisée Grande École du Numérique.", {
            font: "font1",
            width: 1200,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input12 = add([
        pos(60, 300),
        color(10, 10, 10),
        text("Titre Professionnel Développeur Web et Web Mobile, Niveau V- Obtenu le 27/03/2023", {
            font: "unscii",
            width: 1200,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input22 = add([
        pos(60, 370),
        color(10, 10, 10),
        text("Mai 22 à Août 22, École O'Clock - Labélisée Grande École du Numérique.", {
            font: "font1",
            width: 1200,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input3 = add([
        pos(60, 480),
        color(10, 10, 10),
        text("Diplôme d'infirmière, obtenu en juillet 2013.", {
            font: "unscii",
            width: 1200,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input34 = add([
        pos(60, 530),
        color(10, 10, 10),
        text("2010-2013 : IFSI Ambroise Paré, Boulogne Billancourt", {
            font: "font1",
            width: 1200,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
 
    const details = add([
        pos(20, 10),
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
        worldState.playerPos = vec2(400, 270)
        go("school", worldState)
    })

}