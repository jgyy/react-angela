function test() {
    var a = "3";
    var b = "8";
    [a, b] = [b, a];
    console.log("a is " + a);
    console.log("b is " + b);
}

test();