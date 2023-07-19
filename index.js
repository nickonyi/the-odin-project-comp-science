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