import {loadAssets} from "./assetsLoader.js";
import {loadAssets2} from "./assetsLoader2.js";
import { setWelcome } from "./scenes/welcome.js";
import { setWorld } from "./scenes/world.js";
import { setMyHouse } from "./scenes/myhouse.js";
import { setSkills } from "./scenes/skills.js";
import { setSchool } from "./scenes/school.js";
import { setProjects } from "./scenes/projects.js";
import { setAboutMe } from "./scenes2/aboutme.js";
import { setContact } from "./scenes2/contact.js";
import { setTech } from "./scenes2/tech.js";
import { setSoft } from "./scenes2/soft.js";
import { setKDC } from "./scenes2/kdc.js";
import { setMadji } from "./scenes2/madji.js";
import { setPnb } from "./scenes2/pnb.js";
import { setPokedex } from "./scenes2/pokedex.js";
import { setTodo } from "./scenes2/todo.js";
import { setStudies } from "./scenes2/studies.js";
import { setWork } from "./scenes2/work.js";
import { setRelax } from "./scenes/relax.js";
import { setRelax2 } from "./scenes/relax2.js";
import { setCopyrights } from "./scenes2/copyrights.js";
import { setMap } from "./scenes2/map.js";

kaboom({
    width: 1280,
    height: 720,
   stretch: true
})    

loadFont("font1", "assets/fonts/font1.ttf", 8, 8)
loadFont("unscii", "assets/fonts/Pixellari.ttf", 8, 8)
loadFont("title", "assets/fonts/upheavtt.ttf", 14, 14)
loadSound("banana", "assets/audio/putABanana.mp3")
loadAssets()
loadAssets2()

scene('welcome', (worldState) => setWelcome(worldState))
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
scene('relax', (worldState) => setRelax(worldState))
scene('relax2', (worldState) => setRelax2(worldState))
scene('copyrights', (worldState) => setCopyrights(worldState))
scene('map', (worldState) => setMap(worldState))

go('welcome')

