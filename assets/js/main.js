import Typewriter from 'typewriter-effect/dist/core';

var typewriter = new Typewriter("#main-text");

typewriter
	.pauseFor(500)
	.changeDelay(75)
	.typeString('Setaur takes care of your Discord music needs')
	.pauseFor(2500)
	.deleteAll()
	.changeDelay(75)
	.typeString('Premium quality sound for FREE')
	.pauseFor(2500)
	.deleteAll()
	.changeDelay(500)
	.typeString("Setaur")
	// .pauseFor(1000)
	// .deleteAll()
	// .typeString("REZO")
	.start();
