

## Process for installing
Various software packages and data packages are necessary to create our own analog circuit designs. 
In this tutorial, we are going to explain how to install all necessary packages and provide additional 
knowledge for those unfamiliar with Linux installations and all the software tools needed to design 
analog circuits.

We are going to install 5 things in toal:
2 graphical design programs (Xschem & Magic VLSI)
1 simulator program (nGspice)
1 data package (Skywater PDK 130) 
1 program that cross-checks the design at the schematic and layout level (Ngnet).

![Image Description](../Figures_Analog_Tutorial/diagram.png)


### Installing Xschem

```bash
git clone https://github.com/StefanSchippers/xschem.git xschem-src
```
```bash
./configure
```
```bash
make
```
```bash
sudo make install
```
### Installing Magic
```bash
git clone https://github.com/StefanSchippers/xschem.git xschem-src
```
```bash
./configure
```
```bash
make
```
```bash
sudo make install
```

### Installing Ng Spice
```bash
git clone https://github.com/StefanSchippers/xschem.git xschem-src
```
```bash
./configure
```
```bash
make
```
```bash
sudo make install
```

### Installing Nnet
```bash
git clone https://github.com/StefanSchippers/xschem.git xschem-src
```
```bash
./configure
```
```bash
make
```
```bash
sudo make install
```


### Installing the GAW
```bash
git clone https://github.com/StefanSchippers/xschem.git xschem-src
```
```bash
./configure
```
```bash
make
```
```bash
sudo make install
```

### Installing the PDK
```bash
git clone git://opencircuitdesign.com/open_pdks
cd open_pdks
```
Now that you have copied the directory run each line separately
```bash
./configure --enable-sky130-pdk
```
```
make
```
```
sudo make install
```

