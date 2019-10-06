/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for the Servo library.
 *     The Arduino Servo functions can be found in
 *     http://arduino.cc/en/reference/servo
 *
 * TODO: Add angle selector instead of block input.
 */
'use strict';

goog.provide('Blockly.Blocks.smars');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.smars.HUE = 60;

/** Common HSV hue for all blocks in this category. */
//Blockly.Blocks.smars_motor.HUE = 60;

// Blockly.Blocks['smars_motor_write'] = {
//   /**
//    * Block for writing an angle value into a servo pin.
//    * @this Blockly.Block
//    */
//   init: function () {
//     this.setHelpUrl('http://arduino.cc/en/Reference/ServoWrite');
//     this.setColour(Blockly.Block.smars_motor_write.HUE);
//     this.appendDummyInput()
//       .appendField("Hallo Welt")
//       .appendField(new Blockly.FieldDropdown(
//         Blockly.Arduino.Boards.selected.digitalPins), 'SERVO_PIN');
//     this.setInputsInline(false);
//     this.appendValueInput('SERVO_ANGLE')
//       .setCheck(Blockly.Types.NUMBER.checkList)
//       .appendField(Blockly.Msg.ARD_SERVO_WRITE_TO);
//     this.appendDummyInput()
//       .appendField(Blockly.Msg.ARD_SERVO_WRITE_DEG_180);
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip(Blockly.Msg.ARD_SERVO_WRITE_TIP);
//   },
//   /**
//    * Updates the content of the the pin related fields.
//    * @this Blockly.Block
//    */
//   updateFields: function () {
//     Blockly.Arduino.Boards.refreshBlockFieldDropdown(
//       this, 'SERVO_PIN', 'digitalPins');
//   }
// };

Blockly.Blocks['smars_motor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Move motor")
      .appendField(new Blockly.FieldDropdown([["Motor 1", "1"], ["Motor 2", "2"], ["Motor 3", "3"], ["Motor 4", "4"]]), "MOTOR_NR")
      .appendField(new Blockly.FieldDropdown([["forward", "FORWARD"], ["backward", "BACKWARD"], ["stop", "RELEASE"]]), "MOTOR_DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("SMARS motor control");
    this.setHelpUrl("");
  }
};