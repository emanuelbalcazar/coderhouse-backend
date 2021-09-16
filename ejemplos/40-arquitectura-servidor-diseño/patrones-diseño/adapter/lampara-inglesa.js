class LamparaInglesa {

    constructor() {
        this.isOn = false;
    }

    on() {
        this.isOn = true;
        console.log('Lampara inglesa encendida?:', this.isOn);
    }

    off() {
        this.isOn = false;
        console.log('Lampara inglesa encendida?:', this.isOn);
    }
}

module.exports = new LamparaInglesa();