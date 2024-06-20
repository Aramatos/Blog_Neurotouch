# Part 2: Create a Simple Amplifier

Let's start by creating the 5-transistor operational amplifier. For this design, we will utilize 5 transistors: 3 NMOS and 2 PMOS. The upper 2 PMOS transistors are part of a structure called a current mirror, while the lower three include a differential pair and the last transistor at the bottom can be considered a current source.

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


