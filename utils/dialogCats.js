export function dialogCats(player, cat, dialogs){
        player.onCollide(cat, () => {
        player.isInDialogue = true
        let curDialog = 0
        const dialogueBoxFixedContainer = add([fixed()])
        const dialogueBox = dialogueBoxFixedContainer.add([
            rect(1000, 190, {
                radius: 32
            }),
            outline(4),
            pos(150, 500),
            fixed(),
            color(237, 221, 187),
        ])

        const content = dialogueBox.add([
            text('', {
                size: 42,
                width: 900,
                lineSpacing: 15,
            }),
            color(10, 10, 10),
            pos(40, 30),
            fixed()
        ])

        onKeyPress("enter", () => {
            curDialog = (curDialog + 1) % dialogs.length
            updateDialog()
            if (curDialog === 0) {
                destroy(dialogueBox)
                player.isInDialogue = false
            }
        })
        onKeyPress("space", () => {
            curDialog = (curDialog + 1) % dialogs.length
            updateDialog()
            if (curDialog === 0) {
                destroy(dialogueBox)
                player.isInDialogue = false
            }
        })
        onKeyPress("escape", () => {
            destroy(dialogueBox)
            player.isInDialogue = false
        })

        function updateDialog() {
            const [dialog] = dialogs[curDialog]
            content.text = dialog
        }
        updateDialog()
    })
}