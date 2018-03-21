{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf470
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\margl1440\margr1440\vieww17100\viewh10120\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /*Written by Ron Yonker, Wednesday, March 21st 2018*/\
\
function isEven(n) \{\
  n = Math.abs(n); /*No need to juggle a negative number, if the behavior should be unchanged*/ \
    if (n===0)\
      return true; /*Don\'92t use modulus. We\'92re not performing arithmetic, we\'92re using recursion. Applying recursion, we should only have two end cases*/\
    else if (n===1)\
      return false;\
    else\
      return isEven(n-2); /*If we haven\'92t reduced the problem to one of two end cases, continue recursing*/\
\}\
\
console.log(isEven(50), isEven(75), isEven(-1));}