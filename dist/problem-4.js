"use strict";
{
    const calculateShapeArea = (obj) => {
        if ('radius' in obj && 'shape' in obj) {
            return parseFloat((Math.PI * obj.radius * obj.radius).toFixed(2));
        }
        else if ('width' in obj && 'height' in obj && 'shape' in obj) {
            return obj.width * obj.height;
        }
        else {
            return 'Give me a valid object of circle or rectangle';
        }
    };
    // Sample Input 1:
    //   const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // console.log(circleArea);
    // Sample Output 1:
    // 78.54;
    // Sample Input 2:
    //   const rectangleArea = calculateShapeArea({
    //     shape: "rectangle",
    //     width: 4,
    //     height: 6,
    //   });
    // console.log(rectangleArea);
    // Sample Output 2:
    // 24;
    //
}
