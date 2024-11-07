let bank = {
    name: "Bank",
    CEO:'Soros',
    clients:[],
    capital: 999999999999999999999999999,
}

function User(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let user1 = new User('John', 'Doe');
let user2 = new User('Jane', 'Doe');
let user3 = new User('Shrek', 'Swamp');

function Account(amount, owner, isClosed){
    this.amount = amount;
    this.owner = owner;
    this.isClosed = isClosed;
}

function Deposit(account, amount){
    account.amount += amount;
}
function Withdraw(account, amount){
    if(amount > account.amount) return false;
    account.amount -= amount;
    return true;
}
function DisplayAmount(account){
    return `votre solde est ${account.amount}`;
}
function Wire(accountFrom, accountToWireTo, amount){
    if(Withdraw(accountFrom, amount)) Deposit(accountToWireTo, amount);
}
function CloseAccount(account){ account.isClosed = !account.isClosed; }

let account1 = new Account(0, user1, false);
let account2 = new Account(150, user2, false);
let account3 = new Account(0, user3, false);

Deposit(account1, 150);
Wire(account2, account1, 25);
Wire(account2, account3, 50);

bank.clients.push(account1.owner);
bank.clients.push(account2.owner);

console.log(DisplayAmount(account1));
console.log(DisplayAmount(account2));
CloseAccount(account3);
console.log(account3.isClosed);

bank.clients.forEach(person => {console.log(person.firstName)});

