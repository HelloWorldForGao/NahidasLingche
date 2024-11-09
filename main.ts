function zuoyi () {
    if (chedao != 1) {
        chedao += -1
    }
}
function xinchedao (jihao: number) {
    if (jihao == 1) {
        mySprite.setPosition(60, 80)
    } else if (jihao == 2) {
        mySprite.setPosition(80, 80)
    } else {
        mySprite.setPosition(100, 80)
    }
}
function tanshe () {
    suijishu = randint(1, 5)
    if (suijishu == 1) {
    	
    } else if (suijishu == 2) {
    	
    } else if (suijishu == 3) {
    	
    } else if (suijishu == 4) {
    	
    } else {
    	
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    youyi()
})
function youyi () {
    if (chedao != 3) {
        chedao += 1
    }
}
function bushitanshewu (chedao: number, shibushihua: boolean) {
    if (chedao == 1) {
    	
    } else if (chedao == 2) {
    	
    } else {
    	
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    zuoyi()
})
let suijishu = 0
let mySprite: Sprite = null
let chedao = 0
chedao = 2
mySprite = sprites.create(assets.image`灵车`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`beijing`)
info.setLife(4)
game.onUpdateInterval(1000, function () {
	
})
forever(function () {
    xinchedao(chedao)
})
