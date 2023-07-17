class car{
    constructor(make, model,year){
        this.make = make
        this.model = model
        this.year = year
        this.engineStatus = 'off'
    }

    startEngine(){
        if (this.engineStatus==='off'){
            this.engineStatus = 'on'
            console.log('Engine turned on!')
        }else{
            console.log('Engine is already running.')
        }
    }

    stopEngine(){
        if (this.engineStatus=='on'){
            this.engineStatus='off'
            console.log('Turned off the engine')
        }else{
            console.log('Engine is already off')
        }
    }

    drive(){
        if(this.engineStatus='on'){
            console.log('Driving the car')
        }else{
            console.log('Cannot drive. Engine is off!')
        }
    }
}


const myCar = new car('toyota', 'corolla altis', '2023')
console.log(myCar.make)
console.log(myCar.model)
myCar.startEngine()
myCar.drive()
myCar.startEngine()
myCar.drive()
myCar.stopEngine()