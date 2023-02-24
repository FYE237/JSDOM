#!/bin/bash

rm -r -f ./build


mkdir -p build/

for f in Exercice*.{html,css,js} ; do 
     npx minify "$f" > "build/$f" ; 
done
