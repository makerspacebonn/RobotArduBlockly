# RobotArduBlockly
Das hier ist ein Fork von Blockly für senseBox. Dieser Fork enthält die nötigen Bausteine um das Adafruit MotorShield V1 anzusetuern. Ein Roboter welcher dieses benutzt ist zum Beispiel der [SMARS](https://www.thingiverse.com/thing:2662828). Alles hier ist WIP und keinesfalls bugfrei :-)

## Installation
* git clone https://github.com/makerspacebonn/RobotArduBlockly.git
* cd RobotArduBlockly
* git submodule update --init --recursive
* python start.py 


# Über Blockly for senseBox
Blockly für senseBox ist eine visuelle Programmiersprache für die senseBox:edu. Sie basiert auf Google's [Blockly](https://developers.google.com/blockly/) und carlosperates [Ardublockly](https://github.com/carlosperate/ardublockly), welches geforked wurde.

## Features
* erstellt Arduino-Code mit visuellen Drag-and-Drop Blöcken
* online Compiler für die senseBox MCU
* nützliche "code block warnings"
* funktioniert online ohne Installation

Wenn du Errors findest, Verbesserungsvorschläge hast oder neue Features vorschlagen willst dann erstelle bitte eine neue [Issue](https://github.com/sensebox/ardublockly-1/issues).

#### Blockly for senseBox
![Screenshot](https://github.com/sensebox/ardublockly-1/blob/master/assets/img/screenshot.png)


## Documentation
Die Dokumentation kann sowohl auf Deutsch als auch auf Englisch gefunden werden: [Blockly Book](https://sensebox.github.io/books-v2/blockly/)


## Credits
Dieses Projekt wurde inspiriert von [BlocklyDuino](https://github.com/BlocklyDuino/BlocklyDuino) und ist ein Fork von [Ardublockly](https://github.com/carlosperate/ardublockly)

Blockly's eigentliche Quelle ist [Copyright of Google Inc.](https://developers.google.com/blockly/).

Für die schicken Lade-Animationen:
[Loading.io](https://loading.io/button/)


## Lizenz (Englisch)


Based on the work by carlosperate https://github.com/carlosperate/ and his Ardublockly https://github.com/carlosperate/ardublockly

Unless stated otherwise, the source code of this projects is
licensed under the Apache License, Version 2.0 (the "License");
you may not use any of the licensed files within this project
except in compliance with the License.

The full document can be found in the [LICENSE](https://github.com/sensebox/ardublockly-1/blob/master/LICENSE) file.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
