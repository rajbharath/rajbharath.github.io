---
layout: post
title:  "PCB Preparation - A moment to be an Aghori"
date:   2017-05-26 01:46:00 +0530
categories: Technology
comments: true
---


#### Have you heard of Aghori? There is lot to know about [Aghori](https://en.wikipedia.org/wiki/Aghori).


![Aghori](/images/2017-05-26/aghori.jpg "Aghori")

But I am interested in one specific quality on them which is, they are most of the time being HIGH. I want to be an Aghori in that aspect and I have my own way to achieve the same too.

My approach to learn is often by doing that. An year back, I wanted to learn the buzz "what is IoT". As I surfed about IoT beginner related articles or local conference, I was always given the options of 'DOING A LINE FOLLOWER ROBOT' or 'DIY A QUADCOPTER' and above all 'THERE IS ALSO A KIT TO DO ALMOST ANYTHING' which I personally find limit the creativity or imagination of possibilities (IMHO).

To be candid, that did not interest me much since I was not aware of behind the screen. Since I was almost at zero in IoT field, first I chose to learn about basic electronics urged by my gut feel. So I get started to be familiar with the below list

  - Electron
  - Voltage
  - Current
  - Electr(onic)(ical) Components such as <a href="https://en.wikipedia.org/wiki/Resistor" target="_blank">Resistor</a> / <a href="https://en.wikipedia.org/wiki/Capacitor" target="_blank">Capacitor</a> / <a href="https://en.wikipedia.org/wiki/Transformer" target="_blank">Transformer</a> / <a href="https://en.wikipedia.org/wiki/Diode" target="_blank">Diode</a> / <a href="https://en.wikipedia.org/wiki/Transistor" target="_blank">Transistor</a> / <a href="https://en.wikipedia.org/wiki/Light-emitting_diode" target="_blank">LED</a> / <a href="https://en.wikipedia.org/wiki/Loudspeaker" target="_blank">Speaker</a> / <a href="https://en.wikipedia.org/wiki/Electret_microphone" target="_blank">Mic</a> / <a href="https://en.wikipedia.org/wiki/Photoresistor" target="_blank">Photoresistor</a> / <a href="https://en.wikipedia.org/wiki/Thermistor" target="_blank">Thermistor</a> / <a href="https://en.wikipedia.org/wiki/Inductor" target="_blank">Inductor</a> / <a href="https://en.wikipedia.org/wiki/Integrated_circuit" target="_blank">IC</a> / <a href="https://en.wikipedia.org/wiki/Microcontroller" target="_blank">MicroController</a>

  - Basic Circuits

    ####Video - Decade Counter

      <iframe width="560" height="315" src="https://www.youtube.com/embed/pvmQJDZF75I" frameborder="0" allowfullscreen></iframe>

    ####Video - Toy Organ

      <iframe width="560" height="315" src="https://www.youtube.com/embed/iM7uY6-9I64" frameborder="0" allowfullscreen></iframe>

    ![Flip Flop](/images/2017-05-26/Fliop-Flop.jpg "Flip Flop")
  - Tools - Soldering Iron, Multimeter, Hand Drill
  - I purchased components for my circuits from [electronicscomp.com](www.electronicscomp.com) / [projectpoint.in](www.projectpoint.in)

So I started to buy breadboard, few resistors, transistors, caps, diodes only required for that particular circuit which gives me full control of that circuit and I was HIGH all those moments.

Then I was interested to know how things works inside electronic devices with this new learnings, such as [Electric flyswatter](https://en.wikipedia.org/wiki/Fly-killing_device), [UPS inverter](https://en.wikipedia.org/wiki/Power_inverter), [Radio](https://en.wikipedia.org/wiki/Radio) etc. By this way, lot of new stuffs, I came across [transformerless power supply](https://circuitdigest.com/electronic-circuits/transformerless-power-supply), Generation of high frequency current with low power DC, etc.

Doing something that I am mad about ( it changes over time ;) ) often transforms me to be an Aghori. Below is one such moment.

##Building a Basic Audio Amplifier Module
After reading and understanding lot on building an [audio amplifier](https://en.wikipedia.org/wiki/Audio_power_amplifier) and [filters](https://en.wikipedia.org/wiki/Audio_filter) I tried my own circuits to achieve that. But I could not make it work due to lack of knowledge. Then, I chose this particular circuit from [here](https://circuitdigest.com/electronic-circuits/lm386-audio-amplifier-circuit). I am satisfied with this circuit since I could understand the working.

After seeing the magic on breadboard I wanted to transform that as a module in Printed Circuit Board (PCB). I have read lot of articles and watched lot of videos on making a PCB and below is my experience on it.

As a first step, I prepared my own PCB circuit. I used <a href="http://fritzing.org/home/" target="_blank">Fritzing</a> for preparing the circuit. This is one of the best free softwares to draw PCB circuits. Below is my circuit

![Circuit](/images/2017-05-26/need.svg "Circuit")


###Tools / Things I had purchased already:

  - Copper Coated PCB
  - Toner transfer paper (one sided glossy sheet)
  - Steel scrubber
  - Ferric Chloride Powder
  - Hand Drilling machine
  - Components & Wires required for the project
  - Soldering tools (lead/paste/heat rod)
  - Hand Gloves - I didn’t use but planning to use for upcoming projects

I see this process as 3 stages

###TRANSFERRING CIRCUIT TO THE BOARD:
Initially I faced lot of challenges in transferring the circuit to board. Below are some points to be careful.

  - Circuit printing should be taken in laserjet printer. For Inkjet printer, this method will not work.
  - While taking print out, there should not be any change in scale. We should select the printing options like ‘no scale’ / ‘actual size’. The wording of this option differs between various OS(OSX/Windows)
  - To start with, Toner transfer paper gives best result instead of using some magazines cover paper which is also one sided glossy paper. (IMHO)
  - Dipping in Hot/warm water gives best result

####Steps:

  - Cut the copper board to the circuit size.
  - Since copper is susceptible for tarnishing or natural oxidation, scrub the cut piece of board with steel scrubber to remove the copper oxide layer.
  - Print the circuit in toner transfer paper. It should be a laser print. I took print out here :)
  - Cut the paper to the circuit size
  - Place the circuit paper on PCB and apply heat by iron box
  - Put this board in the hot water for 5 mins.
  - After 5 mins, remove the paper gently. Circuit should have been transferred to the board.

A gif or silent video of this process

  `I call this output as 'PCB WITH CIRCUIT' `

###ETCHING PROCESS:

####Prepare etching solution:
  - Take a plastic container and put some Ferric Chloride powder on that.
  - Pour some water in effect we get copper etchant solution
  - It is good to wear hand gloves during this process. I am not sure of its poisonous intensity ;)
  - Dip the ‘PCB WITH CIRCUIT’ etching solution

`Do some other work for 20-30 mins. But I could not do so, I was shaking the container gently in sideways to see the etching happens as below :)`

Warming the etchant makes this process quicker. You can achieve that by keeping the plastic container inside hot water or If it’s a glass container, it can be warmed up with flames. Be Careful :|

####Result:
 Below should be the result after etching process is over

![Etched PCB Board](/images/2017-05-26/printed with scrubber.jpg "Etched PCB Board")

Remove the toner by scrubbing it with steel scrubber [Image after removed the toner]
![Printed Circuit Ready](/images/2017-05-26/scrubbed board.jpg "Printed Circuit Ready")


###FINISHING:

####Steps:
  - Drill holes wherever it’s required. I used hand drill for this purpose
![Drilled PCB](/images/2017-05-26/drilled board.jpg "Drilled PCB")

  - Soldering of all the required components

![Final Front PCB](/images/2017-05-26/front.jpg "Final Front PCB")
![Final Back PCB](/images/2017-05-26/back.jpg "Final Back PCB")

####Watch the steps in Action
<iframe width="560" height="315" src="https://www.youtube.com/embed/TqJTJtcLKYE" frameborder="0" allowfullscreen></iframe>

In my next blog, I am planning to fabricate a VUmeter using this module & another module for a bluetooth wireless home out of Atmega. See you there if I & you are still interested :)
