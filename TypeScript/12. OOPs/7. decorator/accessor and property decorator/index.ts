// accessor and property decorator
function ReadOnly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
  });
}

class Cars {
  // Now can not update the value
  @ReadOnly
  brand: string = "Tesla";
}

const my_car = new Cars();
console.log(my_car.brand);
