class Actors {
    constructor(heroName, heroineName) {//keyword constructor is used
        this.heroName = heroName;
        this.heroineName = heroineName;
    }
    get getheroName() {// we have keyword get,set not int,float etc...
        return this.heroName;//return this
    }
    set setHeroName(heroName) {
        this.heroName = heroName;
    }
    get getHeroineName() {
        return this.heroineName;
    }
    set setHeroineName(heroineName) {
        this.heroineName = heroineName;
    }
}
let a = new Actors("joel", "idk");
console.log(a);
console.log(a.getheroName + " " + a.getHeroineName)// we dont use() function symbol because the function
// in js is different. 


//OOPS concepts can be use here just like java
class Movie extends Actors {
    constructor(heroName, heroineName, director, musicD) {
        super(heroName, heroineName);
        this.director = director;
        this.musicD = musicD;
    }
    get getDirector() {
        return this.director;
    }
    set setDirector(director) {
        this.director = director;
    }
    get getMusicD() {
        return this.musicD;
    }
    set setMusicD(musicD) {
        this.musicD = musicD;
    }
}

let m = new Movie("FaFa", "Nazriya", "Nelson", "Anirudh");
console.log(m);
console.log(m.heroName + " " + m.heroineName + " " + m.director + " " + m.musicD);