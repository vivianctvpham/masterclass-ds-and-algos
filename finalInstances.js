function finalInstances(instances, averageUtil) {
    if (instances == 0 || averageUtil.length == 0 || !averageUtil) return 0;
    let limit = 2 * Math.pow(10, 8)
    for (let i = 0; i < averageUtil.length; i++) {
      let doubleCheck = instances * 2;
      if (averageUtil[i] > 60 && doubleCheck <= limit) {
        instances = instances * 2;
        i = i + 10;
      } else if (averageUtil[i] < 25 && instances > 1) {
        instances = Math.ceil(instances/2);
        i = i + 10;
      }
    }
  
    return instances;
  }
  

  function main() {
      // const instances = 13; expected outcome: 52
      // const averageUtil = [40, 89,79,76,66,60,9,90,19,39,53,30,93]
      
      const instances = 94; //expected outcome: 376
      const averageUtil = [59,81,28,83,91,24,43,10,6,75,92,57,12,3,20,63,99,32,51,96,63,29,25,5,55,95,25,45,52,88,54,82,30,30,32,80,92,44,64,4,7,48,53,19,86,66,48,64,49,84,55,44,21,2,11,49,46,43,88]
      
      console.log(finalInstances(instances, averageUtil));

  }

  main()