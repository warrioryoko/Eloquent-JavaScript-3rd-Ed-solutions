{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf470
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /*Written by Ron Yonker, Wednesday, March 21st 2018*/\
\
function countChar(input, testChar) \{\
  let count = 0; /*How many times the \'91testChar\'92 appears in the string \'91input\'92*/\
  for (let i = 0; i < input.length; i++) \{ /*Take advantage of the fact strings are also arrays to loop across the string, \'91input\'92*/\
    if (input[i] == testChar) \{\
      count += 1; /*Add to count each time the \'91testChar\'92 appears, as you loop across the string*/\
    \}\
  \}\
  return count;\
\}\
\
function countBs(string) \{\
  return countChar(string, "B"); /*Why write two functions? This is a special single case of the general function*/\
\}\
\
console.log(countBs("BBC"));\
console.log(countChar("kakkerlak", "k"));\
}