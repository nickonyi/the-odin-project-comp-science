let company = { // the same object, compressed for brevity
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: {
            siteA: [{
                    name: 'Bruce',
                    salary: 4300
                },
                {
                    name: 'Meg',
                    salary: 2300
                }
            ],
            siteB: [{
                    name: 'Jackie',
                    salary: 5300
                },
                {
                    name: 'Mary',
                    salary: 1300
                }
            ]
        },
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};


function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((acc, curr) => acc + curr.salary, 0);
    } else {
        let sum = 0;
        for (const subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}

console.log(Object.values(company));
console.log(sumSalaries(company));
//function sumTo(n) {
//    let result = 0;
//    for (let i = 0; i <= n; i++) {
//        result += i;
//    }
//    return result;
//}

//recursive loop
function sumTo(n) {
    if (n === 1) {
        return n;
    } else {
        return n + sumTo(n - 1);
    }
}

function factorial(n) {
    if (n === 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

function power(n, x) {
    if (n == 1 || x === 0) {
        return 1;
    } else {
        return n * power(n, x - 1);
    }
}

function productOfArray(array) {

    if (array.length == 0) {
        return 1;
    } else {
        return array.shift() * productOfArray(array);
    }
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

const moreStuff = {
    magicNumber: 44,
    something: 'foo2'
}
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
}

function findValue(nestedObject, item) {
    for (const key in nestedObject) {
        if (nestedObject.hasOwnProperty(key)) {
            const value = nestedObject[key]

            if (value === item) {
                return true;
            }

            if (typeof value === "object") {
                const found = contains(nestedObject[key], item);
                if (found) {
                    return true;
                }
            }
        }
    }
}

function contains(obj, value) {
    for (const key in obj) {
        if (typeof obj[key] === "object") {
            return contains(obj[key], value);
        }
        if (obj[key] === value) {
            return true;
        }
    }
    return false;
}



console.log(contains(nestedObject, 44));
console.log(Object.values(moreStuff));