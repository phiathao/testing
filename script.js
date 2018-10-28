console.log("Hello World!")

// bit you have
let bitSet = [ 'Slot drive', 'Cross', 'Square', 'Phillip', 'Hex'] ;

// project need this bit
let bitNeeded = ' Square';

// putting stuff together / drilling
let drilling = 'Clockwise';

// drill class
class ofDrill {
	constructor( bit, status, rotation ) {
		this.bit = bit;
		this.status = status;
		this.rotation = rotation;
	}
}

// function checkDrill(drill0) {
// 	if ( ableDrill(drill0) === false ) {
// 	return false; //cannot be use if and will return false
// 	}
// 	changeBit(drill0); // change the bit
//     drillDrilling(drill0); // change direction
//     return true; 
// } //function call function

// function ableDrill(drill0) {
// 	if ( drill0.status != 'idling') {
// 		return false;
// 	} //in use, lost, out of power,
// 	else {
// 	return true;
// 	}
// }

// function changeBit(drill0) {
// 	if ( drill0.bit != bitNeeded ) {
// 	// change bit
// 		drill0.bit = bitNeeded;
// 	}
// }

// function drillDrilling(drill0) {
// 	if ( drill0.rotation === 'Counterclockwise' ) {
// 		drill0.rotation = 'Clockwise';
//     }
// }

 function checkDrill(drill0) {
	if ( drill0.status === 'idling' || drill0.status === 'charging') {
        drill0.bit = bitNeeded;
        drill0.rotation = 'Clockwise';
        return true;
    }
    else {
        return false;
    }
}

let drill1 = new ofDrill ('Hex', 'missing', 'Counterclockwise'); // should return false
let drill2 = new ofDrill ('Phillip', 'charging', 'Clockwise'); // should return use and change the bit and rotation if need to
let drill3 = new ofDrill ('Slot drive', 'being use', 'Counterclockwise');// should return false
let drill4 = new ofDrill ('Hex', 'idling', 'Counterclockwise');// should return use and change the bit and rotation if need to