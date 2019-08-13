var Greeter = /** @class */ (function () {
    function Greeter(pName, pContact, pPlace) {
        if (pName === void 0) { pName = ""; }
        var pExtras = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            pExtras[_i - 3] = arguments[_i];
        }
        this.Name = pName;
        this.Contact = pContact;
        this.Place = pPlace;
        this.Extras = pExtras;
    }
    Greeter.prototype.printAll = function () {
        console.log("Name: " + this.Name);
        console.log("Contact: " + this.Contact);
        console.log("Place: " + this.Place);
        console.log("Extras: " + this.Extras);
    };
    return Greeter;
}());
var obj1 = new Greeter("John", ["Hyatt, Gachibowli"]);
obj1.printAll();
