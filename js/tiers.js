function random (minimo, maximo) {
    return Math.floor (Math.random() * (maximo - minimo + 1) + minimo);
}

const mascotaData = [{
    "name": "Mascota 1",
    "element": "Agua",
    "atk": random (10, 15),
    "def": 2
},
{
    "name": "Mascota 2",
    "element": "Tierra",
    "atk": random (10, 15),
    "def": 2
},
{
    "name": "Mascota 3",
    "element": "Fuego",
    "atk": random (10, 15),
    "def": 2
},
{
    "name": "Mascota 4",
    "element": "Agua y Fuego",
    "atk": random (10, 15),
    "def": 2
},
{
    "name": "Mascota 5",
    "element": "Agua y Tierra",
    "atk": random (10, 15),
    "def": 2
},
{
    "name": "Mascota 6",
    "element": "Tierra y Fuego",
    "atk": random (10, 15),
    "def": 2
}]

