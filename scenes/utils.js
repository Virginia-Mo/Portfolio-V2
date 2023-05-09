export default function utils(){
    onUpdate(() => {
        camPos(player.pos)
    })
    
    function setSprite(player, spriteName){
        if (player.currentSprite !== spriteName){
            player.use(sprite(spriteName))
            player.currentSprite = spriteName
        }
    }
    
    onKeyDown('down', () => {
        if (player.isInDialogue){ 
            return
        }
        if (player.curAnim() !== 'godown'){
            setSprite(player, 'player-down')
            player.play('godown')
        }
        player.move(0,player.speed)
    })
    onKeyDown('up', () => {
        if (player.isInDialogue){ 
            return
        }
        if (player.curAnim() !== 'goup'){
            setSprite(player, 'player-up')
            player.play('goup')
        }
        player.move(0,-player.speed)
    })
    
    onKeyDown('left', () => {
        if (player.isInDialogue){ 
            return
        }
        player.flipX = false
        if (player.curAnim() !== 'walk'){
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(-player.speed, 0)
    })
    onKeyDown('right', () => {
        if (player.isInDialogue){ 
            return
        }
        player.flipX = true
        if (player.curAnim() !== 'walk'){
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(player.speed, 0)
    })
    
    onKeyRelease('left', () => {
        player.stop()
    })
    onKeyRelease('right', () => {
        player.stop()
    })
    onKeyRelease('up', () => {
        player.stop()
    })
    onKeyRelease('down', () => {
        player.stop()
    })
}