console.log("Using person.js")

export const isAdult = (age) => age>=18? true:false;

export const canDrink = (age) => age>=21? true:false;

export default (age) => age>=65;
// export {isAdult,canDrink}