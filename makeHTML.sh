#!/bin/bash

echo "Generate ImagePack…"
make -C Images/ImagePacks

echo "Compiling with tweego…"
tweego/tweego_nix64 -o "PE.html" "src"

echo "Done"
