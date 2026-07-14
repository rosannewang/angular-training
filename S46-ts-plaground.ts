/**
 * ============================================
 * PRIMITIVE TYPES - numbers, strings, booleans
 * ============================================
 */

// Primitives
let age: number; // Declare a variable with  let var_name: type;
age = 12;

let year = 2026
let userName: string = "Bob";
let isInstructor = true

/**
 * ============================================
 * COMPLEX TYPES - Arrays and Objects
 * ============================================
 */

// Arrays
let hobbies: string[] = ['Sports', 'Cooking']; // Array of strings
let grades: number[] = [5, 5.2]; // Array of numbers

// Objects
let person: { // Being clear about what kind of object we expect
    name: string; 
    age: number 
}; 
person = { // Object with properties
    name: 'Max',
    age: 30
};

// person = { // This will cause an error because isEmployee is not defined in the person type
//     isEmployee: true;
// }

// Array of objects
let people: {
    name: string;
    age: number;
}[]; 

/**
 * ============================================
 * TYPE INFERENCE - TypeScript can infer the type of a variable from its value
 * ============================================
 */

let course = 'Angular - The Complete Guide'; 
// TypeScript can infer the type of course from the value assigned to it; ut's better to let TypeScript infer the type
// course = 123; // This will cause an error because course is inferred to be a string

/**
 * ============================================
 * UNION TYPES - Allows for more flexible typing
 * ============================================
 */

// Suppose we want the course to be either a course ID or name
let unionCourse: string | number = 'Angular - The Complete Guide'; 
unionCourse = 123;
// unionCourse = true; // This will cause an error because unionCourse is inferred to be a string or number

/**
 * ============================================
 * TYPE ALIASES - Define custom base type names in which a more complex type can be reused; allows for repeating the same type definition in multiple places
 * ============================================
 */

type Dog = { // Syntax: type TypeName = { ... }
    name: string;
    age: number;
};

let dog: Dog;
dog = {
    name: 'Max',
    age: 3
};

let dogArray: Dog[] = [ // For all instances of Dog, we can use the Dog type
    {
        name: 'Max',
        age: 3
    }
];

/**
 * ============================================
 * COMBIINING FUNCTIONS & TYPES
 * ============================================
 */

// Type inference
function add(a: number, b: number){
    return a + b; // Infers the return type as number (shows on hover of the function name)
}

// Type annotation
function add_with_type_annotation(a: number, b: number): number{ // Explicitly states the return type as number
    return a + b; 
}

function add_with_multiple_annotations(a: number, b: number): number | string { // Explicitly states the return type as number or string, but better to avoid when possible
    return a + b; 
}

function print(value: any){ // Errors out because it conflicts with the built-in print JS function?
    console.log(value); // Void return type means the function doesn't return anything
}

/**
 * ============================================
 * GENERICS
 * ============================================
 */

function insertAtBeginning(array: any[], value: any){ // Create a function that can work with any type of array and value
    const newArray = [value, ...array]; // Spread operator to refer to the existing array and add the new value at the beginning
    return newArray;
}
const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, 0);

// TS only knows the return type is any[], not numbers[], which removes type safety
updatedArray[0].split(''); // This will not show a runtime error when it regularly would beacuse any[] was used



function insertAtBeginningBetter<T>(array: T[], value: T){ // T is a type parameter that represents the type of the array and value, TS now knows to use the same type for both parameters
    const newArray = [value, ...array];
    return newArray;
}
const betterUpdatedArray = insertAtBeginningBetter(demoArray, 0);
// TS now knows the return type is numbers[], which maintains type safety
// betterUpdatedArray[0].split(''); // This will show a runtime error when it regularly would


/**
 * ============================================
 * CLASSES
 * ============================================
 */

/*
 * Properties
 * public properties are accessible from outside the class (default behavior)
 * private properties are only accessible within the class 
 * protected properties are accessible within the class and its subclasses
 * readonly properties are immutable
 */

class Student{
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];
    
    constructor(firstName: string, lastName: string, age: number, courses: string[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }

    enroll(courseName: string){ // Syntax: methodName(parameterType): returnType
        this.courses.push(courseName); // Adds the course to the courses array
    }

    listCourses(){
        return this.courses.slice(); // slice()
    }
}

const student1 = new Student('John', 'Doe', 20, ['Math', 'Science']);
student1.enroll('Physics');
// Alternatively, you can also define all the properties/types for the class in advance


/*
 *
 * ============================================
 * INTERFACES - Objects that define the structure of an object (no data)
 * ============================================
 */

type Person = {
    firstName: string;
    age: number;
    greet: () => void;
}

interface Human { // Alternative to using type, where they can be implemented by classes
    firstName: string;
    age: number;

    greet: () => void; // Method that returns void
}

let sarah: Human = {
    firstName: 'sarah',
    age: 25,
    greet: () => {
        console.log('Hello!');
    }
}


class Instructor implements Human{
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!');
    }
    constructor(firstName: string, age: number){
        this.firstName = firstName;
        this.age = age;
    }
}
    
    
/*
 * ============================================
 * COMPILER CONFIGURATION
 * ============================================
 */

/*
 * 
 */

