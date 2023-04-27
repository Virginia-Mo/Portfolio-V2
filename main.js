kaboom({
    width: 1280,
    height: 720,
    stretch: true,
})

setBackground(Color.fromHex("#065694"))

loadAssets()

scene('world', (worldState) => setWorld(worldState))
scene('battle', (worldState) => setBattle(worldState))

go('world')

