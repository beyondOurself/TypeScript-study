interface Alarm{

    alert():void;
}
interface Light {

    lightOn() : void; 
    lightOf() : void; 
}

class Door {

}

class SecurityDoor extends Door implements  Alarm {

    alert (){

        console.log('SecurityDoor alert'); 
    }
}

class Car implements Alarm , Light {

    alert(){

        console.log(' Car alert');
        
    }

    lightOn(){

        console.log(` Car light on`);
        
    }

    lightOf(){

        console.log('Car light off');
        
    }
}

// 接口继承接口
 
interface Alarm {

    alert():void; 
}

interface LightableAlarm extends Alarm {

    lihtOn() : void; 
    lightOff() : void ; 
    
}