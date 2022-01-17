// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if (typeof mass==="number" && typeof height==="number" && mass>0 && height>0 ){
        return mass/(height*height)
    }else{
        return "INVALID INPUT"
    }
}

module.exports = BMICalculator;
