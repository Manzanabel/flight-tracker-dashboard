## Flight Tracker

This flight tracker allows you to monitor flights in real-time.
![image](https://github.com/Manzanabel/flight-tracker-dashboard/assets/128307128/a26d4c20-a447-4ed0-8ec8-536146e4d869)


### Key Features:

- Integrated map highlighting the current positions of all flights.
- Search bar enabling users to look up flights by either flight number or company name.
- Interactive chart illustrating the number of live flights by company.
- Detailed information sheet providing additional insights into each flight.

### How to run this project locally

First, clone this project:
`https://github.com/Manzanabel/flight-tracker-dashboard.git`

And the server (follow the installation and launching instructions before continuing):
[Flight Tracker Server](https://github.com/Manzanabel/flight-tracker-server)

Secondly, create an `.env` file with the following keys:

```
VITE_GOOGLE_MAPS_API_KEY='your key'
VITE_AVIATION_STACK_API_KEY='your key' //(not mandatory)
VITE_PEXELS_API_KEY='your key'
```

To do this, you need to register to the following sites to get a private key:

- [Google Cloud API](https://cloud.google.com/).
- [Aviation Stack API](https://aviationstack.com/)
- [Pexels API](https://www.pexels.com/api/)

Then, follow this commands:
`npm i`

`npm dev start`
