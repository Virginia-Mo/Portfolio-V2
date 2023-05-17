export function handleQuit(worldState, x, y, place){
    const details = add([
        pos(20, 20),
        color(245, 67, 54),
        text("Quitter (ou 'ESC')", {
            font: "unscii",
            width: 900,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        }),
        area()
    ])
    if (!worldState){
        worldState = {
            playerPos : (850,500),
        }
    }
    details.onClick(() => {
        worldState.playerPos = vec2(x, y)
        go(place, worldState)
    })
    onKeyPress("escape", () => {
        worldState.playerPos = vec2(x, y)
        go(place, worldState)
    })

}