


class DVD {
    constructor(X){
        this._name = X.name;
        this.releaseYear = X.releaseYear;
        this.director = X.director;
    }

    get name(){
        return this._name;
    }
    get releaseYear(){
        return this._releaseYear;
    }
    get director(){
        return this._director;
    }

    get detail(){
        console.log(`${this._name} is being directed by ${this.director} in the year ${this.releaseYear}`);
    }

    static builder = class Builder {
        constructor(){
            this._name;
            this._releaseYear;
            this._director;
        }

        get name(){
            return this._name;
        }

        get releaseYear(){
            return this._releaseYear;
        }
        get director(){
            return this._director;
        }

        setName(name){
            this._name = name;
            return this;
        }
        setReleaseYear(releaseYear){
            this._releaseYear = releaseYear;
            return this;
        }

        setDirector(director){
            this._director = director;
            return this;
        }

        build(){
            let D = new DVD(this);
            console.log({D})
            return D;
        }
    }
}




let avenger = new DVD.builder().setName("Avenger").setReleaseYear(2021).setDirector("JOSS").build();

console.log(avenger.name);

avenger.detail;
