##Zetta pping driver for any platform

###Install

```
$> git clone https://github.com/zettajs/zetta-pping-driver zetta-{device}-{platform}-driver
```

###Usage

```
var zetta = require('zetta');
var PPing = require('zetta-pping-driver');

zetta()
  .use(PPing)
  .listen(1337)
```

### Hardware

* any platform

###Transitions

#####do(message)

Calls the device's log() function passing the message param.

###Design

This device driver is designed to be the pping code for other device drivers.
