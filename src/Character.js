/* ? */ class Character {

    constructor(name, x = 0, y = 0, imgPath= 'green-character'){

        this.name = name

        this.ASSET_ROOT = `https://raw.githubusercontent.com/Joshua-Miles/web-game-curriculum/master/module-1/assets/${imgPath}`

        this.element = document.createElement('div')
        this.element.style.position = 'absolute'
        this.element.style.left = x + 'px'
        this.element.style.bottom = y + 'px'
    
        this.label = document.createElement('span')
        this.image = document.createElement('img')

        this.element.append( this.label, this.image )
        document.body.append(this.element)

        this.label.innerText = name
        this.image.src = `${this.ASSET_ROOT}/static.gif`
        this.image.style.width = '75px'
        this.direction = null
        this.speed = 5

        Character.all.push(this)


        setInterval( () => {

            const left = parseInt(this.element.style.left)
            const bottom = parseInt(this.element.style.bottom)

            if(this.direction == 'right'){
                this.element.style.left = `${left+this.speed}px`
            }

            if(this.direction == 'left'){
                this.element.style.left = `${left-this.speed}px`
            }

            if(this.direction == 'up'){
                this.element.style.bottom = `${bottom+this.speed}px`
            }

            if(this.direction == 'down'){
                this.element.style.bottom = `${bottom-this.speed}px`
            }

            
        }, 20)
    } 

    static destroyAll(){
        // this === Character
        Character.all.forEach( character => character.element.remove() )
    }


    walkRight(){
        this.image.src = `${this.ASSET_ROOT}/walkright.gif`
        this.direction = 'right'
    }
    
    walkLeft(){
        this.image.src = `${this.ASSET_ROOT}/walkleft.gif`
        this.direction = 'left'
    }
    
    walkUp(){
        this.image.src = `${this.ASSET_ROOT}/walkup.gif`
        this.direction = 'up'
    }
    
    walkDown(){
        this.image.src = `${this.ASSET_ROOT}/walkdown.gif`
        this.direction = 'down'
    }
    
    stop(){
        this.image.src = `${this.ASSET_ROOT}/static.gif`
        this.direction = null
    }


    static all = []

}