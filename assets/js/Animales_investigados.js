import {Animal} from "./Animal.js"

/* class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Rugir(){

    }
} */
// puedo no escribir constructor y super si los argumentos son los mismos. 
class Leon extends Animal{
    constructor(...args){  //empaqueto los argumentos, y luego en super los desempaqueto
        super(...args)
    }

    Rugir(player){
        console.log("roooar")
        player.src=`./assets/sounds/${this.Sonido}`
        player.load();
        player.play();
    }
}
class Lobo extends Animal{
    constructor(...args){  //empaqueto los argumentos, y luego en super los desempaqueto
        super(...args)
    }

    Aullar(){
        console.log("auuu")
        player.src=`./assets/sounds/${this.Sonido}`
        player.load();
        player.play();
    }
}
class Oso extends Animal{
    constructor(...args){  //empaqueto los argumentos, y luego en super los desempaqueto
        super(...args)
    }

    Gruñir(){
        console.log("grr")
        player.src=`./assets/sounds/${this.Sonido}`
        player.load();
        player.play();
    }
}
class Serpiente extends Animal{
    constructor(...args){  //empaqueto los argumentos, y luego en super los desempaqueto
        super(...args)
    }

    Sisear(){
        console.log("zzzz")
        player.src=`./assets/sounds/${this.Sonido}`
        player.load();
        player.play();
    }
}
class Aguila extends Animal{
    constructor(...args){  //empaqueto los argumentos, y luego en super los desempaqueto
        super(...args)
    }

    Chillar(){
        console.log("ñiii")
        player.src=`./assets/sounds/${this.Sonido}`
        player.load();
        player.play();
    }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };