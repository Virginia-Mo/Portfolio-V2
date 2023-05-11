function setAboutMe(worldState) {
    add([
        sprite('tea1-background'),
        scale(2.5),
        pos(0, 0)
    ])
    const title = add([
        text("A propos de moi", {
            font: "title",
            width: 900,
            size: 35,
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
        pos(100, 130),
        color(10, 10, 10),
        text("Bonjour! Je suis Virginia Mo et je viens d'une petite ville près de Versailles.Après avoir travaillé près de 8 ans en tant qu'infirmière, principalement en pédiatrie, j'ai décidé de changer de voie.", {
            font: "unscii",
            width: 900,
            size: 26,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input2 = add([
        pos(100, 290),
        color(10, 10, 10),
        text("Je suis désormais développeuse web fullstack avec une spécialisation en ReactJS.", {
            font: "unscii",
            width: 900,
            size: 26,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input3 = add([
        pos(100, 390),
        color(10, 10, 10),
        text("Mes expériences professionnelles m'ont permis de développer des soft skills telles que la rigueur, la gestion du stress et l'esprit d'équipe. J'ai pour habitude de m'investir pleinement dans les tâches qui me sont confiées afin de rendre un travail sérieux et bien fait.Je  Si vous voulez en savoir plus sur mes compétences, je vous invite à visiter les différentes maisons.", {
            font: "unscii",
            width: 900,
            size: 26,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input4 = add([
        pos(100, 630),
        color(10, 10, 10),
        text("A bientôt!", {
            font: "unscii",
            width: 900,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    const details = add([
        pos(0, 10),
        color(245, 67, 54),
        text("ESC ou ESPACE pour quitter", {
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
    onKeyPress("space", () => {
        worldState.playerPos = vec2(500, 300)
        go("myhouse", worldState)
    })

    onKeyPress("escape", () => {
        worldState.playerPos = vec2(500, 300)
        go("myhouse", worldState)
    })

    function updateDialog() {

    }
}