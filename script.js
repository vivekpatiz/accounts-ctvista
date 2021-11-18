const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
const shortid = require('shortid')
const bodyParser = require('body-parser')
const rndm = require('random-simple')
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(process.env.PORT);

let users = []
let urls = []
let shorturl;
app.post("/createuser", function (req, res) {
    users.push(req.body)
})

app.get("/login", function (req, res) {
    res.json(users);
})

app.get("/user/:id", function (req, res) {
    let username = req.params.id;
    console.log(username)
    res.json(username)
})
app.get('/language/:id', function (req, res) {
  var val = [
  {
    "name": "Burbank Water and Power",
    "id": 1520,
    "level": 1,
    "owner": 1,
    "type": "account",
    "access_mode": "techstaff",
    "children": [
      {
        "name": "Burbank Water and Power",
        "id": 4820,
        "level": 2,
        "owner": 1520,
        "type": "facility",
        "access_mode": "techstaff",
        "children": [
          {
            "displayorder": 0,
            "name": "Zero Liquid Discharge",
            "id": 9217,
            "status": 0,
            "owner": 4820,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "MPP Open Cooling",
            "id": 9218,
            "status": 0,
            "owner": 4820,
            "access_mode": "techstaff",
            "type": "system"
          }
        ]
      }
    ]
  },
  {
    "name": "Demo Account (READ ONLY)",
    "id": 6928,
    "level": 1,
    "owner": 1,
    "type": "account",
    "access_mode": "techstaff",
    "children": [
      {
        "name": "Demo Facility - Plant A",
        "id": 6929,
        "level": 2,
        "owner": 6928,
        "type": "facility",
        "access_mode": "techstaff",
        "children": [
          {
            "displayorder": 0,
            "name": "Cooling - Plant A Tower 1",
            "id": 12773,
            "status": 0,
            "owner": 6929,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Cooling - Plant A Tower 2",
            "id": 12774,
            "status": 0,
            "owner": 6929,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Inventory",
            "id": 12775,
            "status": 0,
            "owner": 6929,
            "access_mode": "techstaff",
            "type": "system"
          }
        ]
      },
      {
        "name": "Demo Facility - Plant B",
        "id": 6931,
        "level": 2,
        "owner": 6928,
        "type": "facility",
        "access_mode": "techstaff",
        "children": [
          {
            "displayorder": 0,
            "name": "Cooling - Plant B Tower 1",
            "id": 12776,
            "status": 0,
            "owner": 6931,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Cooling - Plant B Tower 2",
            "id": 12777,
            "status": 0,
            "owner": 6931,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Inventory",
            "id": 12778,
            "status": 0,
            "owner": 6931,
            "access_mode": "techstaff",
            "type": "system"
          }
        ]
      }
    ]
  },
  {
    "name": "Plum Point Energy",
    "id": 66,
    "level": 1,
    "owner": 1,
    "type": "account",
    "access_mode": "techstaff",
    "children": [
      {
        "name": "Plum Point NRG",
        "id": 596,
        "level": 2,
        "owner": 66,
        "type": "facility",
        "access_mode": "techstaff",
        "children": [
          {
            "displayorder": 0,
            "name": "Plant Water Systems",
            "id": 409,
            "status": 0,
            "owner": 596,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Plum Drawdowns",
            "id": 5401,
            "status": 0,
            "owner": 596,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Projects & Services",
            "id": 7594,
            "status": 0,
            "owner": 596,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Cooling Tower Performance",
            "id": 12678,
            "status": 0,
            "owner": 596,
            "access_mode": "techstaff",
            "type": "system"
          }
        ]
      }
    ]
  },
  {
    "name": "Springdale Energy Center",
    "id": 2652,
    "level": 1,
    "owner": 1,
    "type": "account",
    "access_mode": "techstaff",
    "children": [
      {
        "name": "Chambersburg Plant",
        "id": 3420,
        "level": 2,
        "owner": 2652,
        "type": "facility",
        "access_mode": "techstaff",
        "children": [
          {
            "displayorder": 0,
            "name": "Cooling Water",
            "id": 6932,
            "status": 0,
            "owner": 3420,
            "access_mode": "techstaff",
            "type": "system"
          }
        ]
      },
      {
        "name": "Cloned Examples",
        "id": 2653,
        "level": 2,
        "owner": 2652,
        "type": "facility",
        "access_mode": "techstaff",
        "children": [
          {
            "displayorder": 0,
            "name": "Boiler",
            "id": 5309,
            "status": 0,
            "owner": 2653,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Probe Maintenance",
            "id": 5310,
            "status": 0,
            "owner": 2653,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Cooling",
            "id": 5311,
            "status": 0,
            "owner": 2653,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Tank Levels",
            "id": 5312,
            "status": 0,
            "owner": 2653,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Waste Water",
            "id": 5313,
            "status": 0,
            "owner": 2653,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Bacteria Testing",
            "id": 5314,
            "status": 0,
            "owner": 2653,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Demineralizer",
            "id": 5315,
            "status": 0,
            "owner": 2653,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Auxiliary boiler",
            "id": 5316,
            "status": 0,
            "owner": 2653,
            "access_mode": "techstaff",
            "type": "system"
          }
        ]
      },
      {
        "name": "Gans Plant",
        "id": 3419,
        "level": 2,
        "owner": 2652,
        "type": "facility",
        "access_mode": "techstaff",
        "children": [
          {
            "displayorder": 0,
            "name": "Cooling Water",
            "id": 6931,
            "status": 0,
            "owner": 3419,
            "access_mode": "techstaff",
            "type": "system"
          }
        ]
      },
      {
        "name": "Springdale 1 & 2",
        "id": 3418,
        "level": 2,
        "owner": 2652,
        "type": "facility",
        "access_mode": "techstaff",
        "children": [
          {
            "displayorder": 0,
            "name": "Cooling Water",
            "id": 6930,
            "status": 0,
            "owner": 3418,
            "access_mode": "techstaff",
            "type": "system"
          }
        ]
      },
      {
        "name": "Springdale Power Plant",
        "id": 2659,
        "level": 2,
        "owner": 2652,
        "type": "facility",
        "access_mode": "techstaff",
        "children": [
          {
            "displayorder": 0,
            "name": "HRSG3",
            "id": 5345,
            "status": 0,
            "owner": 2659,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "HRSG4",
            "id": 5346,
            "status": 0,
            "owner": 2659,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "RO/Demin/Condensate",
            "id": 5347,
            "status": 0,
            "owner": 2659,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Cooling Water",
            "id": 5402,
            "status": 0,
            "owner": 2659,
            "access_mode": "techstaff",
            "type": "system"
          },
          {
            "displayorder": 0,
            "name": "Clarifier",
            "id": 5403,
            "status": 0,
            "owner": 2659,
            "access_mode": "techstaff",
            "type": "system"
          }
        ]
      }
    ]
  },
  {
    "name": "Vivekanandan R K Personal Account",
    "id": -90021797,
    "access_mode": "master",
    "type": "account",
    "children": [
      {
        "name": "Vivekanandan R K Personal Facility",
        "id": -91021797,
        "type": "facility",
        "readonly": false
      }
    ],
    "readonly": false
  }
]
  res.send(val)
})
app.post("/url", function (req, res) {

    var short = require('node-url-shortener');

    short.short(req.body, function (err, url) {
        shorturl = url
        console.log(shorturl)
        res.json(url)
    });

})
const tokenGenerator = require('generate-token');
app.get("/random", function (req, res) {
    let token = tokenGenerator.generate(5);
    console.log(token);
    res.json(token)
})
