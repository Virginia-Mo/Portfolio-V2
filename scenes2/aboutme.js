import { handleQuit } from "../utils/handleQuit"
export function setAboutMe(worldState) {
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
        }),
        pos(450, 30),
        color(10, 10, 10)
    ])
    const input = add([
        pos(100, 130),
        color(10, 10, 10),
        text("Bonjour! Je suis Virginia Mo et je viens d'une petite ville près de Versailles.Après avoir travaillé près de 8 ans en tant qu'infirmière, principalement en pédiatrie, j'ai décidé de changer de voie.", {
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
            width: 900,
            size: 26,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input3 = add([
        pos(100, 370),
        color(10, 10, 10),
        text("Mes expériences professionnelles m'ont permis de développer des soft skills telles que la rigueur, la gestion du stress et l'esprit d'équipe. J'ai pour habitude de m'investir pleinement dans les tâches qui me sont confiées afin de rendre un travail sérieux et appliqué. Si vous voulez en savoir plus sur mes compétences, je vous invite à visiter les différentes maisons.", {
            width: 900,
            size: 26,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input4 = add([
        pos(100, 660),
        color(10, 10, 10),
        text("A bientôt!", {
            width: 900,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    handleQuit(worldState, 500, 300, "myhouse")
}