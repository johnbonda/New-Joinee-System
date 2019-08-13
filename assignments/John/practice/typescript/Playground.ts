function funWitRest(p1:string,
    pTitle: string = "In Function funWithRest",
    extras?: any[], 
    ...members: string[]) {
        console.log("p1: " + p1);
        console.log("pTitle: " + pTitle);
        console.log("extras: " + extras);
        console.log("Printing members");
        for(let index = 0; index < members.length; index ++) {
            console.log(members[index]);
        }
    }

funWitRest("Hello", "world", ["how"], "are", "you");