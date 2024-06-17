

## Process for installing


Steps for installing

To create our own analog designs we are going to need to download and set up the following:




### Installing Xschem

### Installing Magic

### Installing Ng Spice

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

