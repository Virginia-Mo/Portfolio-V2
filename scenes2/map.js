import { handleQuit } from "../utils/handleQuit"

export function setMap(worldState) {
    add([
        sprite('villagezoom'),
        scale(1.1),
        pos()
    ])
    const title = add([
        text("La carte du monde", {
            font: "title",
            width: 900,
            size: 38,
            lineSpacing: 8,
            letterSpacing: 2,
        }),
        pos(310, 10),
        color(10, 10, 10)
    ])
    const title2 = add([
        text("- Behind the scenes -", {
            font: "unscii",
            width: 900,
            size: 38,
            lineSpacing: 8,
            letterSpacing: 2,
        }),
        pos(340, 680),
        color(10, 10, 10)
    ])
    handleQuit(worldState, 530, 230, 'relax2')

}