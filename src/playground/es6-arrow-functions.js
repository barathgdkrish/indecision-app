const fullName = "Barath G D Krishnan";

const getFirstName = (fullName) =>{
    return fullName.split(" ",1)[0];
};

console.log(getFirstName(fullName));

const arrowFirstName = (fullName) => fullName.split(" ",1)[0];

console.log(arrowFirstName(fullName));

