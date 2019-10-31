module.exports = {
    get Rock(){return "Rock";},
    get Jazz(){ return "Jazz";},
    get Pop(){ return "Pop";},
    get Rap(){return "Rap";},
    get RYB(){return "R&B";},
    get Blues(){return "Blues";},
    get Electronico(){return "Electronico";},
    get Metal(){return "Metal";},
    get Reggaeton(){return "Reggaeton";},
    get Reggae(){return "Reggae";},
    get Lofi(){return "Lo-fi";},
    get memeMusic(){return "Musica meme";},
    get Banda(){return "Banda";},
    get Norteño(){return "Norteño";},
    get Corridos(){return "Corridos";},
    get Soundtracks(){ return "Soundtracks";},
    get Ska(){return "Ska";},
    get Baladas(){ return "Baladas";},
    getAll(){
        return [this.Rock,this.Jazz,this.Rap,
            this.RYB,this.Blues,this.Electronico,this.Metal,this.Reggaeton,
            this.Reggae,this.Lofi,this.memeMusic,this.Banda,this.Norteño,
            this.Corridos,this.Ska,this.Pop,this.Soundtracks,this.Baladas]
    }
    };