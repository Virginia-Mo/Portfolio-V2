kaboom({
    width: 1280,
    height: 720,
})

setBackground(Color.fromHex("#065694"))

loadAssets()
loadAssets2()

scene('world', (worldState) => setWorld(worldState))
scene('myhouse', (worldState) => setMyHouse(worldState))
scene('skills', (worldState) => setSkills(worldState))
scene('school', (worldState) => setSchool(worldState))
scene('projects', (worldState) => setProjects(worldState))

go('world')

