kaboom({
    width: 1280,
    height: 720,
   stretch: true
})

setBackground(Color.fromHex("#065694"))

loadFont("font1", "./fonts/font1.ttf", 8, 8)
loadFont("unscii", "./fonts/Pixellari.ttf", 8, 8)
loadFont("title", "./fonts/upheavtt.ttf", 14, 14)
loadAssets()
loadAssets2()

scene('world', (worldState) => setWorld(worldState))
scene('myhouse', (worldState) => setMyHouse(worldState))
scene('skills', (worldState) => setSkills(worldState))
scene('school', (worldState) => setSchool(worldState))
scene('projects', (worldState) => setProjects(worldState))
scene('aboutme', (worldState) => setAboutMe(worldState))
scene('contact', (worldState) => setContact(worldState))
scene('tech', (worldState) => setTech(worldState))
scene('soft', (worldState) => setSoft(worldState))
scene('kdc', (worldState) => setKDC(worldState))
scene('madji', (worldState) => setMadji(worldState))
scene('pnb', (worldState) => setPnb(worldState))
scene('pokedex', (worldState) => setPokedex(worldState))
scene('todo', (worldState) => setTodo(worldState))
scene('studies', (worldState) => setStudies(worldState))
scene('work', (worldState) => setWork(worldState))

go('world')

