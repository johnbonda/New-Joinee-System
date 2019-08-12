function funWitRest(p1, pTitle, extras) {
    if (pTitle === void 0) { pTitle = "In Function funWithRest"; }
    var members = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        members[_i - 3] = arguments[_i];
    }
    console.log("p1: " + p1);
    console.log("pTitle: " + pTitle);
    console.log("extras: " + extras);
    console.log("Printing members");
    for (var index = 0; index < members.length; index++) {
        console.log(members[index]);
    }
}
funWitRest("Hello", "world", ["how"], "are", "you");
