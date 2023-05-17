export function setWelcome(worldState) {
 
 setBackground(Color.fromHex("#000000"))
    const welcomeText = add([
        text("Bienvenue sur mon Portfolio",{
         font: "title",  
         width: 700, 
         size: 40,
         transform: (idx, ch) => ({
            color: hsl2rgb((time() * 0.2 + idx * 0.1) % 1, 0.7, 0.8),
        }),
        }),
        pos(350 , 110),
        color(255,255,255),
        fixed(),
    ])
    const welcomeText2 = add([
        text("Quelle version souhaitez-vous visiter ?",{ 
         width: 900, 
         size: 26,
        }),
        pos(370 , 240),
        color(255,255,255),
        fixed(),
        area()
    ])
    const classique = "Version Classique (recommandée pour les mobiles et tablettes)"
    const rpg = "Version RPG"
    const urlClassique = "https://movirginia.netlify.app/"

        const dialogueBoxFixedContainer = add([fixed()])
        const dialogueBox = dialogueBoxFixedContainer.add([
            rect(300, 130),
            outline(3),
            pos(300, 400),
            fixed(),
            color(225, 247, 237),
        ])
    
        const content = dialogueBox.add([
            text(classique, {
                size: 23,
                width: 300,
                lineSpacing: 15,
            }),
            color(10, 10, 10),
            pos(20, 20),
            fixed(),
            area({ cursor: "pointer" })
        ])

        content.onClick(() => {
           window.location.href = urlClassique
        })
        const dialogueBox2 = dialogueBoxFixedContainer.add([
            rect(300, 130),
            outline(3),
            pos(700, 400),
            fixed(),
            color(247, 228, 245),
        ])
        const content2 = dialogueBox2.add([
            text(rpg, {
                size: 23,
                width: 300,
                height: 130,
                lineSpacing: 15,
            }),
            color(10, 10, 10),
            pos(70,50),
            fixed(),
            area({ cursor: "pointer" })
        ])
        content2.onClick(() => {
            go("world", worldState)
        })

}