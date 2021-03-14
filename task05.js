'use-strict'

areaOfTriangle = (side1, side2, side3) => {
    let semiPerimeter = (1/2) * (side1 + side2 + side3);  // using heron's formula
    let area = Math.sqrt( semiPerimeter *
                    (semiPerimeter - side1) *
                    (semiPerimeter - side2) *
                    (semiPerimeter - side3)
    );
    return area;
}
