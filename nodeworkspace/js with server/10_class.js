function User(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;

  this.getInfo = function () {
    return `${this.name}, ${this.age}, ${this.city}`;
  };
}

class Emp {
  constructor(id, name, dept) {
    this._id = id;
    this._name = name;
    this._dept = dept;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get dept() {
    return this._dept;
  }
}

let user1 = new User('Hong', 30, 'Daegu');
console.log(user1.getInfo());

let user2 = new User('Kim', 40, 'Seoul');
console.log(user2.getInfo());

let emp1 = new Emp(1, 'Park', 'CEO');
console.log(emp1.id, emp1.name, emp1.dept);

emp1.id = 2;
emp1.name = 'Lee';
emp1.dept = 'Developer';

console.log(emp1.id, emp1.name, emp1.dept);