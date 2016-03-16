"use strict"

function getName() {
    var name = prompt("What is your full name?");
    var splitName;
    name = name.replace(/\s/g, "");
    name = name.toLowerCase();
    splitName = name.split("");
    return splitName;
}
function nameIterate(Name) {
    var arr = [];
    for (var i = 0; i < Name.length; i++) {
        if (Name[i] === "a" || Name[i] === "i" || Name[i] === "o" || Name[i] === "x" || Name[i] === "f" || Name[i] === "m" || Name[i] === "n" || Name[i] === "s" || Name[i] === "w") {
            arr[i] = 8;
        } else if (Name[i] === "b" || Name[i] === "j" || Name[i] === "q" || Name[i] === "y") {
            arr[i] = 4;
        } else if (Name[i] === "c" || Name[i] === "h" || Name[i] === "t") {
            arr[i] = 6;
        } else if (Name[i] === "d" || Name[i] === "k" || Name[i] === "r" || Name[i] === "z") {
            arr[i] = 4;
        } else if (Name[i] === "g" || Name[i] === "p" || Name[i] === "u") {
            arr[i] = 3;
        } else if (Name[i] === "e" || Name[i] === "l" || Name[i] === "v") {
            arr[i] = 2;
        }
    }
    return arr;
}

function getWeight() {
    var weight = prompt("What is your weight in Lbs?");
    return weight;
}

function getDuration(name) {
    var durArr = [];
    var dur = {
        a: .8,
        b: .3,
        c: 1.5,
        d: .3,
        e: .5,
        f: .5,
        g: .3,
        h: .4,
        i: .5,
        j: .3,
        k: .7,
        l: 1,
        m: 1,
        n: 1.3,
        o: .7,
        p: .3,
        q: .5,
        r: .3,
        s: 1.5,
        t: .8,
        u: .5,
        v: .3,
        w: 1,
        x: 1,
        y: .2,
        z: .3,
    };

    for (var i = 0; i < name.length; i++) {
        for (var key in dur) {
            if (name[i] === key) {
                durArr[i] = dur[key];
            }
        }
    }
    
    return durArr;
}

function convertKgToLbs(weight) {
    return weight * 0.453592;
}
function calculateBurned(metArr, weight, duration) {
    var tempArr = [];

    for (var i = 0; i < metArr.length; i++) {
        var temp = metArr[i] * 3.5 * weight / 200;
        temp *= duration[i];
        tempArr[i] = temp;
    }
    return tempArr;
}

function bindToDocument(name, burned) {
    var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var iterate = [];
    var matches = [];

    for (var i = 0; i < name.length; i++) {
        iterate[i] = name[i];
        for (var h = 0; h < name.length; h++) {
            if (iterate[i] === name[h]) {
                matches[h] = iterate[i];
            }
        }
    }
    var counter = matches.length;
    var sum = matches[0] * counter;

    var totalOf = [];
    for (var i = 0; i < name.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (name[i] === arr[j]) {
                document.getElementById(arr[j]).innerHTML = Math.round(burned[i]) + " cals burned";
                totalOf[i] = Math.round(burned[i]);
            }
        }
    }
    return totalOf;
}

function total(bindTo) {
    var x = 1;
    var y = 0
    for (var i = 0; i < bindTo.length; i++){
        y = y + bindTo[i];
    }
    return y;
}

function Main() {
    var name = getName();
    var metArr = nameIterate(name);
    var weight = getWeight();
    var convertWeight = convertKgToLbs(weight)
    var duration = getDuration(name);
    var burned = calculateBurned(metArr, convertWeight, duration);
    var bindTo = bindToDocument(name, burned);
    var Total = total(bindTo);
    E
    console.log(Total);
    document.getElementById("total").innerHTML = Total;
}
Main();
