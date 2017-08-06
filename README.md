As an Air Traffic Controller
So I can get passengers to a destination
I want to instruct a plane to landPlane

As an Air Traffic Controller
So I can get passengers to a destination
I want to instruct a plane to take off

As an Air Traffic Controller
So I can ensure safety
I want to prevent landing when the weather is stormy

As an Air Traffic Controller
So I can ensure safety
I want to prevent take off when the weather is stormy

As an Air Traffic Controller
So I can ensure safety
I want to prevent take off when the airport is at capacity

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate


Objects   | Messages                        |
--------- | ------------------------------- | ---
Airport   | land_plane                      | &#10004;
Airport   | clear_plane       (for takeoff) | &#10004;
Airport   | stormy?      (prevents takeoff) | &#10004;
