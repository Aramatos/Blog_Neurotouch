---
title: Analog Blog 4
tags: Analog-Neuromorphic-Design
layout: layouts/parent-post
hide-title: true
---
# Part 2: Create an AXON 
For the first design, we are going to create a 5-transistor operational amplifier. This amplifier will be at the heart of our first analog neuron in part 3. I will also make a part 3.5, for those who want to fo more thoroughly through the equations to design this subsystem. 

This design will be based on the one done by Steffan Schnippers (The creator of xschem for this YouTube video). In an attempt to improve the overall learning process, I will be more thorough than the video. It will hopefully be more thorough for the beginners and also be a faster alternative to a video for those who just want a quick introduction to the xschem-skywater process. 

## Essential Xshcem Shortcuts

1. add new components: **cltr+i**
2. move objects: **left click,m,move_coursor",left click**
3. horizontally mirror objects:**shift+f**
4. add a wire: **w** then **left click**
   


## Set up the ports
We are going to be creating a comparator op-amp block and a symbol corresponding to it. Meaning that after designing this op-amp we will be able to replicate it infinitely as any other component in our library (like a resistor or a capacitor). To do this we also need to define the input, output, power, and bias ports (if we grabbed a premade op-amp it would already have those).

press ctrl+i to insert a new component.

General modeling elements that are not etched in the silicon fabric (the ports, parasitic modeling, ammeters, and us 


## Amplifier stage 

From the devices tab 

### Editing values

We need to edit the values of the width and length of the transistor channels to fit the diagram above.
To do so you can click a transitor and press the 'q' key. You will then see the following window where you can edit the values.
Left-click the ok button or outside the edit attributes window to save your changes and close the window.


## First Amplifier stage 
First 

## Second Amplifier Stage

Note that we are adding a parax_cap from the **devices **library to simulate the cable parasitic capacitance at the output node.
It's not a capacitor designed into the device but one that models effects from the already existing internal wires. 

## Common Mode Inverter

We will now add an inverter to bias the common mode voltage in 

## Setting up the testbench
We can now create a symbol that will represent our amplifier. This will allow us to place it in our other designs


## Simulating
Now that the test bench is complete we can set up our simulation to characterize the design of our comparator


Add two graph windows and one load waves
### Xschem Simulating shortcuts
-graph the transisent of the elected net:**alt+G**
-fit x axis: **f** while cursos is inside graph
-zooming: shfit key and drag
-iisolate a single run **t**


