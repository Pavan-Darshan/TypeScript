var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(empId, first, last) {
        this.empId = empId;
        this.first = first;
        this.last = last;
    }
    Employee.prototype.getFullname = function () {
        return this.first + this.last;
    };
    ;
    Employee.prototype.set = function (Fname) {
        this.first = Fname;
    };
    Employee.getAge = function () {
        return this.age;
    };
    Employee.age = 29;
    return Employee;
}());
var employee = new Employee(101, "abc", "***");
// employee.first="ccbjh"; first private
console.log(employee.getFullname());
// employee.empId=105;  cnt reassign value because of readonly property
console.log(employee.empId);
employee.set("###");
console.log(employee.getFullname());
var Emp1 = /** @class */ (function (_super) {
    __extends(Emp1, _super);
    function Emp1(last) {
        var _this = _super.call(this, employee.empId, employee.first, last) || this;
        _this.last = last;
        return _this;
    }
    Emp1.prototype.getFullname = function () {
        return _super.prototype.getFullname.call(this); // return "child class";
    };
    ;
    return Emp1;
}(Employee));
var emp1 = new Emp1("gtgt");
console.log(emp1.getFullname());
//static------------------>
console.log(Employee.age); // static variable
console.log(Employee.getAge()); // static method 
// abstract----------------------->
var Model = /** @class */ (function () {
    function Model() {
    }
    return Model;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(carName) {
        var _this = _super.call(this) || this;
        _this.carName = carName;
        return _this;
    }
    ;
    Child.prototype.getName = function () {
        throw new Error("Method not implemented.");
    };
    return Child;
}(Model));
var Big = /** @class */ (function (_super) {
    __extends(Big, _super);
    function Big(carName) {
        var _this = _super.call(this) || this;
        _this.carName = carName;
        return _this;
    }
    ;
    Big.prototype.getName = function () {
        throw new Error("Big class Method .");
    };
    return Big;
}(Model));
var child = new Child("tata");
function personDetails(person) {
    return person.fname;
}
var person1 = {
    fname: "aaa",
    lname: "bbb"
};
console.log(personDetails(person1));
var funExm;
funExm = function (a, b) {
    return a + b;
};
console.log(funExm(5, 8));
var NewClass = /** @class */ (function () {
    function NewClass() {
    }
    //   private id:number=101;
    NewClass.prototype.a = function () {
        console.log("Newclass A method");
    };
    return NewClass;
}());
var NewClass1 = /** @class */ (function () {
    function NewClass1() {
    }
    NewClass1.prototype.b = function () {
        console.log("NewClass1 B method");
    };
    NewClass1.prototype.a = function () {
        console.log("A Method.");
    };
    return NewClass1;
}());
var obj = new NewClass1();
obj.a();
var emp = {
    id: 106,
    name: "aaa",
    email: "@gmail.com",
    phone: 123456789,
};
console.log(emp);
var ele = document.querySelectorAll('input["type="text"]');
console.log(ele);
