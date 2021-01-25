class AClass {
  constructor(data){
    this.id = data.id;
    this.name = data.name;
 
  }
}

function f2(data) {
  console.log('f2')
  return data
}

function f1(data) {
  console.log('f1')
  const transformedData = new AClass(data)
  this.f2(transformedData)
}


module.exports = { AClass, f1, f2 }