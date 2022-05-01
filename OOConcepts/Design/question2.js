var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code


class User {
      constructor(username) {
         this.username = username;
      }
      get getName() {
         return this.username;
      }
      
      checkNameLength(){
         if(this.username.length>4){
            console.log(`${this.username}`);
         }else{
            console.log(`Name is too short`);
         }
      }
   }

   let obj1 = new User(input[0]);
   obj1.checkNameLength();
