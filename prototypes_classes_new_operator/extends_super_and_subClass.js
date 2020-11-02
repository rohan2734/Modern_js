class Pet{
  constructor(name,age){
    console.log('pet constructor');
    this.name=name;
    this.age=age;
  }
  eat(){
    return `${this.name} is eating`;
  }
}


class Cat extends Pet{
  constructor(name,age,livesLeft = 9){
    // this.name=name;
    // this.age=age;
    console.log('cat constructor');
    super(name,age) //instead of wirting the code again, we can do super(name,age)
    this.livesLeft=livesLeft;
  }
  meow(){
    return 'meoww';
  }
}
/**
 * super is a  reference to the parent class
 */


class Dog extends Pet{
  bark(){
    return 'woof';
  }
  eat(){
    return `${this.name} scarfs`;
  }
}