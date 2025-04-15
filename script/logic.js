// Question:1

const students=[
    {name:"Alice",scores:[90,85,92]},
    {name:"Bob",scores:[70,68,72]},
    {name:"Charlie",scores:[100,100,100]},
];

const result=[];

for(let i=0;i<students.length;i++){
    const  student=students[i];
    const scores=student.scores;
    let sum=0;
    for(let j=0;j<scores.length;j++){
        sum+=scores[j];
    }

    const average=sum/scores.length;
    let grade="";
    if(average>=90){
        grade="A";
    }
    else if(average>=80){
        grade="B";
    }
    else if(average>=70){
        grade="C";
    }
    else if(average>=60){
        grade="D";
    }
    else{
        grade="F";
    }
    result.push({name:student.name,average:average,grade:grade});
}
console.log(result);



// Question:2
class BankAccount {
   
    // Time Complexity: O(1) (only assigns values)
    constructor(ownerName, initialBalance) {
      this.ownerName = ownerName;    
      this.balance = initialBalance; 
      this.history = [];             
    }
  
    
    // Time Complexity: O(1) - Constant time arithmetic and array push.
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        this.history.push(`Deposited $${amount}`);
      }
    }
  
    
    // Time Complexity: O(1) - Constant time arithmetic and array push.
    withdraw(amount) {
      if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        this.history.push(`Withdrew $${amount}`);
      }
    }
  
    
    // Time Complexity: O(1) - Constant time operations, assuming deposit and withdraw are O(1).
    transferTo(anotherAccount, amount) {
      if (amount > 0 && this.balance >= amount) {
        
        this.withdraw(amount); // O(1)
        anotherAccount.deposit(amount); // O(1)
        
        this.history.push(`Transferred $${amount} to ${anotherAccount.ownerName}`);
        anotherAccount.history.push(`Received $${amount} from ${this.ownerName}`);
      }
    }
  
    
    // Time Complexity: O(1) - Reads properties and formats a string.
    getSummary() {
      return `${this.ownerName}'s balance is $${this.balance}`;
    }
  
    // Time Complexity: O(n) - n is the number of history entries (linear time to iterate over the array).
    printHistory() {
      for (let i = 0; i < this.history.length; i++) {
        console.log(this.history[i]);
      }
    }
  }
  
  // Example usage:
  const acc1 = new BankAccount("Taha", 500);
  const acc2 = new BankAccount("Karim", 300);
  
  acc1.transferTo(acc2, 200);
  
  console.log(acc1.getSummary()); // "John's balance is $300"
  console.log(acc2.getSummary()); // "Sara's balance is $500"
  
  acc1.printHistory();
 
  
//Question:3
const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

addBtn.addEventListener('click', function() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function() {
      li.classList.toggle('done');
    });
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
