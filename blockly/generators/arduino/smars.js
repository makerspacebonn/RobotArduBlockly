/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Servo library blocks.
 *     The Arduino Servo library docs: http://arduino.cc/en/reference/servo
 *
 * TODO: If angle selector added to blocks edit code here.
 */
'use strict';

goog.provide('Blockly.Arduino.smars');

goog.require('Blockly.Arduino');


/**
 * Code generator to set an angle (Y) value to a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.write(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
// Blockly.Arduino['servo_write'] = function(block) {
//   var pinKey = block.getFieldValue('SERVO_PIN');
//   var servoAngle = Blockly.Arduino.valueToCode(
//       block, 'SERVO_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
//   var servoName = 'myServo' + pinKey;

//   Blockly.Arduino.reservePin(
//       block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');

//   Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
//   Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

//   var setupCode = servoName + '.attach(' + pinKey + ');';
//   Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);

//   var code = servoName + '.write(' + servoAngle + ');\n';
//   return code;
// };

/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.read();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['smars_motor'] = function (block) {
  var motorNr = block.getFieldValue('MOTOR_NR');
  var motorDir = block.getFieldValue('MOTOR_DIRECTION');

  Blockly.Arduino.addInclude('smars', '#include <AFMotor.h>\n');
  Blockly.Arduino.addDeclaration('smars_motor_' + motorNr, 'AF_DCMotor motor_' + motorNr + '(' + motorNr + ');\n');

  var setupCode = '//setupcode;';
  Blockly.Arduino.addSetup('smars_motor:' + motorNr, 'motor_' + motorNr + '.setSpeed(100);\n', true);

  var code = 'motor_' + motorNr + '.run(' + motorDir + ');\n';
  return code;
};

Blockly.Arduino['smars_speed'] = function (block) {
  var motorNr = block.getFieldValue('MOTOR_NR');
  var speed = block.getFieldValue("Geschwindigkeit");

  Blockly.Arduino.addInclude('smars', '#include <AFMotor.h>\n');
  Blockly.Arduino.addDeclaration('smars_motor_' + motorNr, 'AF_DCMotor motor_' + motorNr + '(' + motorNr + ');\n');

  //var setupCode = '//setupcode;';
  //Blockly.Arduino.addSetup('smars_motor:' + motorNr, 'motor_' + motorNr + '.setSpeed(100);\n', true);

  var code = 'motor_' + motorNr + '.setSpeed(' + speed + ');\n';
  return code;
};

Blockly.Arduino['smars_ultrasonic'] = function (block) {

  Blockly.Arduino.addInclude('smars_ultrasonic', '#include <Ultrasonic.h>\n');
  Blockly.Arduino.addDeclaration('smars_ultrasonic_decl', 'Ultrasonic ultrasonic(A0, A1);\n');

  //var setupCode = '//setupcode;';
  //Blockly.Arduino.addSetup('smars_motor:' + motorNr, 'motor_' + motorNr + '.setSpeed(100);\n', true);

  var code = 'ultrasonic.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};