// The = Operator

let a = 10;
document.getElementById("one").innerHTML = "Value of a is: " + a;

let b = 20;
let c = b + 20;
document.getElementById("one_one").innerHTML = "Value of c is: " + c;


// The += Operator

let d = 10;
d += 20;
document.getElementById("two").innerHTML = "Value of d is: " + d;

let text = "Hello";
text += "World";
document.getElementById("two_two").innerHTML = "Value of text is: " + text;

// The -= Operator

let e = 45;
e -= 15;
document.getElementById("three").innerHTML = "Value of e is: " + e;

let number = 10;
let string = "num";
let vigesh = number -= string;
document.getElementById("three_three").innerHTML = "Value of vigesh is: " + vigesh;

// The *= Operator

let f = 10;
f *= 20;
document.getElementById("four").innerHTML = "Value of f is: " + f;

let g = 10;
g *= "Vigesh";
document.getElementById("four_four").innerHTML = "Value of g is: " + g;

// The **= Operator

let h = 10;
h **= 2;
document.getElementById("five").innerHTML = "Value of h is: " + h;

// The /= Operator

let i = 10;
i /= 5;
document.getElementById("six").innerHTML = "Value of i is: " + i;

// The %= Operator

let j = 10;
j %= 2;
document.getElementById("seven").innerHTML = "Value of j is: " + j;


// Test if its divisible by 4
let num = 20;
if (num % 4 == 0){
    document.getElementById("seven_seven").innerHTML = "True";
}

// Test for even number
if (num % 2 == 0){
    document.getElementById("seven_seven_seven").innerHTML = "True -> " + "It's an even number"
}else{
    document.getElementById("seven_seven_seven").innerHTML = "False -> " + "It's an odd number"
}

// Test for odd number
if (num % 2 == 0){
    document.getElementById("seven_seven_seven_seven").innerHTML = "True -> " + "It's an even number"
}else{
    document.getElementById("seven_seven_seven_seven").innerHTML = "False -> " + "It's an odd number"
}

// The <<= Operator

// Example 1: In this example, we will see the implementation of the left shift assignment.
let k = 7; // 00000000000000000000000000000111
k <<= 2; // 00000000000000000000000000011100
document.getElementById("eight").innerHTML = "Value of k is: " + k;

// Example 2: In this example, we will see left shift operator is not used for the negative number.
let l = 1; // 00000000000000000000000000000001
l <<= -1; // -10000000000000000000000000000000
document.getElementById("eight_eight").innerHTML = "Value of l is: " + l;

// Example 3: In this example, we will see the implementation of the left shift assignment operator.
let m = 10; // 00000000000000000000000000001010
let n = 5 // 00000000000000000000000000000101
m = m << n; // 00000000000000000000000101000000
document.getElementById("eight_eight_eight").innerHTML = "Value of m is: " + m;

// The >>= Operator

// Example 1: In this example, we will see the implementation of the right shift assignment.

let o = 7; // 00000000000000000000000000000111
o >>= 2; // 00000000000000000000000000011100
document.getElementById("nine").innerHTML = "Value of k is: " + k;

// Example 2: In this example, we will see assigning the right shift operator to the variable.

let p = 10; // 00000000000000000000000000001010
let q = 5 // 00000000000000000000000000000101
p = p >> q; // 00000000000000000000000101000000
document.getElementById("nine_nine").innerHTML = "Value of m is: " + m;

// The >>>= Operator

let r = -100;
r >>>= 5;
document.getElementById("ten").innerHTML = "Value of r is: " + r;

// The &= Operator

let s = 10;
s &= 2;
document.getElementById("eleven").innerHTML = "Value of s is: " + s;

// The |= Operator

let t = 10;
t |= 2;
document.getElementById("twelve").innerHTML = "Value of t is: " + t;

// The ^= Operator

let u = 10;
u ^= 2;
document.getElementById("thirteen").innerHTML = "Value of u is: " + u;