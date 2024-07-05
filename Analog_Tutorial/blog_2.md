
# Create an Axon Hillock Neuron 
Now that we have our software installed we are going to start with the neuron that started it all, the Axon Hillock circuit developed by .. in .
It is the most basic neuron we can make and it only takes a few components so it's the perfect beginners example. 
In this part, we are going to create a schematic of the neuron, learn how to select the components of the skywater family and set up a simulation. 

## Essential Xshcem Shortcuts

1. add component: **cltr+i**
2. copy component: select, **c, drag, left click**
3. move objects: **left click,m,move_coursor",left click**
4. mirror selected object horizontally:**shift+f**
5. add a wire: **w** then **left click**
6. recenter drawing: **f**

# Schematic

#if at any point you see your wires and pins turning into various colors of the rainbow, don't worry, you probably clicked Netlist (n).
Press shift+k to return everything to their normal colors, the only thing that happened was that opened nets were selected. 

We want to create the following circuit:



# Simulation

We need to create two files to simulate this circuit
- **tt** : which specifies at which corner we are going to be working (that is, at which temperature and pressure state we are working at)
- **STIMULI** : where we define how our simulation is going to go
- 
## writing stimuli file
Open the stimuli file to write the code 


 .save all tells SPICE to save all node voltages and branch currents.
.op performs an operating point analysis.
.tran 10n 2000u uic sets up a transient analysis from 0 to 2000 microseconds, with a step size of 10 nanoseconds. 'uic' means "use initial conditions".
The .control ... .endc block contains commands for ngspice's interactive interpreter.
run executes the analyses defined above (both .op and .tran).
write test_comparator.raw saves the results to a file.


# Analysis
The above circuit works as it is, but let's analyze the circuit elements behind it. As mentioned before we have the neuron architecture, a double inverter amplifier, and a current mirror serving as a current source. Fortunately for us, the inverter is one of the first structures analyzed in the Rehzavi Analog Integrated Circuits book, which if you should take a look if its

1. NMOS Current Equation (saturation region):

   $$I_{D_n} = \frac{1}{2} \mu_n C_{ox} \frac{W_n}{L_n} (V_{GS_n} - V_{th_n})^2$$

2. PMOS Current Equation (saturation region):

   $$I_{D_p} = \frac{1}{2} \mu_p C_{ox} \frac{W_p}{L_p} (V_{GS_p} - V_{th_p})^2$$

3. Saturation Current Matching:

   $$\mu_n C_{ox} \frac{W_n}{L_n} (V_{GS_n} - V_{th_n})^2 = \mu_p C_{ox} \frac{W_p}{L_p} (V_{GS_p} - V_{th_p})^2$$

4. Width Ratio:

   $$\frac{W_n}{L_n} = k \cdot \frac{W_p}{L_p}$$

5. Length:

   $$L_n = L_p = 130 \, \text{nm}$$

6. Width Example:

   $$W_n = 390 \, \text{nm}$$

   $$W_p = \frac{W_n}{k} = \frac{390 \, \text{nm}}{2.5} = 156 \, \text{nm}$$

Switching Speed: Minimizing 
𝐿
L reduces the channel resistance, enhancing switching speed.
Drive Strength Matching: Matching the drive strengths of NMOS and PMOS ensures balanced rise and fall times, improving signal integrity.
Power Efficiency: Optimizing 
𝑊
W reduces short-circuit power during switching and ensures proper logic levels with minimal static power consumption.


## Equations
Quick reminder of the equations governing the behavior of a transistor:

- **Drain current (I_D) for NMOS**: 
    - When `V_GS > V_th` and `V_DS > V_GS - V_th`, the drain current is given by:
    - `$I_D = \mu_n Cox \frac{W}{L} (V_{GS} - V_{th})^2 (1 + \lambda V_{DS})$`

- **Drain current (I_D) for PMOS**: 
    - When `V_SG > V_th` and `V_SD > V_SG - V_th`, the drain current is given by:
    - `$I_D = \mu_p Cox \frac{W}{L} (V_{SG} - V_{th})^2 (1 + \lambda V_{SD})$`
Where:
- `μn` and `μp` are the mobility for electrons and holes, respectively.
- `Cox` is the gate oxide capacitance per unit area.
- `W` and `L` are the width and length of the transistor channel.
- `V_GS`, `V_SG`, `V_DS`, and `V_SD` are the gate-source and drain-source voltages for NMOS and PMOS, respectively.
- `V_th` is the threshold voltage.
- `λ` is the channel-length modulation parameter.


