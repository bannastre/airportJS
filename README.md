# Airport.JS

## A model of an airport written in JavaScript

### What is this cool thing?
It's a simple exercise to model a domain in a new language. I am learning JavaScript but this can be done in any language.

### How do I get it up and running?
1. Clone or download the repo
2. Run the tests by opening ```SpecRunner.html``` in your browser
3. If all is green, from the console you can:
  - Create a new airport:
  ```
  > airport = new Airport([capacity], [planes])
  ```
  - Create a new plane:
  ```
  > plane = new Plane([plane name])
  ```
  - The Airport can ```.landPlane('planeName')``` or ```.clearPlane('planeName')``` as you wish or up until the airport's capacity.  

  - Change the Airport's capacity by running ```.updateCapacity(newCapacity)```

  - Beware of stormy weather though - the Gods will determine your fate ... well, randomly stop you landing/clearing planes anyway.

#### User Stories  
```
As an Air Traffic Controller
So I can get passengers to a destination
I want to instruct a plane to landPlane
```
```
As an Air Traffic Controller
So I can get passengers to a destination
I want to instruct a plane to take off
```
```
As an Air Traffic Controller
So I can ensure safety
I want to prevent landing when the weather is stormy
```
```
As an Air Traffic Controller
So I can ensure safety
I want to prevent take off when the weather is stormy
```
```
As an Air Traffic Controller
So I can ensure safety
I want to prevent take off when the airport is at capacity
```
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

#### Development Methodology
- JavaScript
- Jasmine v2.6.2 tested
