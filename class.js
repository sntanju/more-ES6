class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession (){
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Amir Khan', 'India');
const salman = new Support('Salman Khan', 'BD');
const aksay = new Support('Aksay Kumar', 'China');
const sharuk = new Support('Sharuk Khan', '/dubai');
aamir.startSession();
salman.startSession();
aksay.startSession();
sharuk.startSession();
console.log(aamir, salman, aksay, sharuk);