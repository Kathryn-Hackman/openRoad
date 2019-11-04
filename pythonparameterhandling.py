#takes user-inputted parameters start and end point (as adresses), then hits the google maps api to calculate how far they are away from each other (driving time), then returns that as a 'Journey' object of type JSON to the front end, where it is displayed as start address, end address, and driving time
import googlemaps
from datetime import datetime

gmaps = googlemaps.Client(key= 'our api key')
#generates driving directions by default
#value of start and end address should be imported from textinput.js
directions_result = gmaps.directions(start_address, end_address)