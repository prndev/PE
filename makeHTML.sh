#!/bin/bash

echo "TODO: Generate ImagePack"
#pushd .\Images\ImagePacks
#call RebuildImagePack.cmd
#popd

# [Game] Basic Compiler - Linux

# Run the compiler
tweego/tweego_nix64 -o "PE.html" "src"

echo Done
