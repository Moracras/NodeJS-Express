class person {
    constructor(name){
        this.name = name
    }
    sayName(){
        console.log("Hi" + this.name);
    }
}

class bankAccount extends person{
    #balance=0;
    constructor(name,balance){
        super(name)
        this.#balance = balance
    }
    deposit(amount){
        this.#balance += amount
    }
    withdraw(money){
        if(money>this.#balance){
            console.log("Not enough balance!");
        }else{
            this.#balance-=money
        }
    }
    balance(){
        return this.#balance;
    }

}
const balanceCalc = new bankAccount("Tarkan",50000);
console.log(balanceCalc.balance());
balanceCalc.deposit(50000)
console.log(balanceCalc.balance());