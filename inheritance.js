
class TeamMember {
    name;
  
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember{
   groupSupportTime;
   designation = 'Support Web Dev';
   constructor(name, address, time){
       super(name, address)
       this.groupSupportTime = time;
   }
    startSession (){
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember{
    designation = 'Care Web Dev';
    buildARoutine(student){
        console.log(this.name, 'Build a routine for', student);
    }
}


class NeptuneDev extends TeamMember{
   codeEditor;
   designation = 'Neptune Web Dev';
   constructor(name, address, editor){
       super(name, address);
    this.codeEditor = editor;
   }
   
    realeseApp(version){
        console.log(this.name, 'realese app version', version);
    }
}

const aamir = new Support('Amir Khan', 'India', 11);
const salman = new Support('Salman Khan', 'BD', 12);
const aksay = new Support('Aksay Kumar', 'China', 1);
const sharuk = new Support('Sharuk Khan', 'dubai', 2);


const alia = new 
StudentCare( 'Alia Bhatt', 'Mumbai');
const ash = new NeptuneDev('Ash', 'delli', 'andriod studio');
ash.realeseApp('1.4.5');
//console.log(aamir, salman, aksay, sharuk);
 //console.log(alia);
 //console.log(ash.name);


 function min(nums) {  return Math.min(nums) }
 //console.log(min( [1,3,2 ])); 
 const cube=x=> x*x*x; 
 //console.log(cube(2))
 const [a, b] = [1,2,3,4,45,5]; //console.log(a+b);
 const {x, y, z} = {x: 1, y1: 2, z: 3};
 //console.log(y)
 const nums = [1,2,3,4,5]; let output = nums.filter(n => n%2); 
 //console.log(output);
 const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
   const F = friends.find(friend => friend.length == 5);
  
  //console.log(F);
