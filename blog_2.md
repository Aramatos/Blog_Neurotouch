# Part 2: Create a Simple Amplifier

Let's start by creating the 5-transistor operational amplifier. For this design, we will utilize 5 transistors: 3 NMOS and 2 PMOS. The upper 2 PMOS transistors are part of a structure called a current mirror, while the lower three include a differential pair and the last transistor at the bottom can be considered a current source.

## Equations

Quick reminder of the equations governing the behavior of a transistor:

- **Drain current (I_D) for NMOS**: `I_D = μn Cox (W/L) (V_GS - V_th)^2 (1 + λ V_DS)` when `V_GS > V_th` and `V_DS > V_GS - V_th`.
- **Drain current (I_D) for PMOS**: `I_D = μp Cox (W/L) (V_SG - V_th)^2 (1 + λ V_SD)` when `V_SG > V_th` and `V_SD > V_SG - V_th`.

Where:
- `μn` and `μp` are the mobility for electrons and holes, respectively.
- `Cox` is the gate oxide capacitance per unit area.
- `W` and `L` are the width and length of the transistor channel.
- `V_GS`, `V_SG`, `V_DS`, and `V_SD` are the gate-source and drain-source voltages for NMOS and PMOS, respectively.
- `V_th` is the threshold voltage.
- `λ` is the channel-length modulation parameter.

## Simulation

To validate the behavior of this amplifier, proceed to the Analog Primitives Validation area of the GoogleSkywater design platform. There, you can use SPICE simulations to analyze the performance of your circuit under different conditions. It's essential to check for parameters like gain, bandwidth, and power consumption to ensure the amplifier meets the required specifications.

1. **Setup the Environment**: Ensure that all the necessary libraries and tools are installed. GoogleSkywater typically requires specific versions of SPICE simulators.
2. **Circuit Layout**: Draft your layout using the provided schematic editor. Place all components according to the design rules for GoogleSkywater technology.
3. **Run Simulations**: Execute the simulation scripts, focusing on DC, AC, and transient analyses. Look for any discrepancies in the expected output and refine the design as needed.
4. **Validation**: Once the simulations yield satisfactory results, validate the design through the GoogleSkywater toolkit to ensure it meets all technological and operational standards.
