#! /bin/bash

# generate a webp file from a png and write it to the same directory

png=$1
cwebp -quiet -q 60 $png -o "${png%.*}.webp"
