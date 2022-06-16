# Acronex Challenge

## Backend:

Para correr la aplicación backend, se debe tener instalado Django, además de 'rest_framework' y 'corsheaders':

```
	pip install djangorestframework
	pip install django-cors-headers
```

La aplicación esta configurada para correr con el archivo db.sqlite3 que se encuentra en el directorio. El archivo ya contiene algunos datos de prueba.

Luego, se puede correr la aplicación mediante el script manage.py:

```
python manage.py runserver
```

### Modelo
El modelo de las máquinas tiene los siguientes atributos:
- id 
- description 
- company 
- isBaja: valor booleano que indica si la máquina se dio de baja. 
- machineType: id que se corresponde con algún valor del modelo MachineType.
El modelo MachineType se compone solo por un id y un nombre asociado. 

Las rutas aceptan los siguientes métodos:

'api/machines':
- GET: devuelve un listado de las máquinas registradas en el sistema
- POST: crea una nueva máquina en el sistema

'api/machines/<int:id>':
- GET: devuelve el detalle de la máquina con el id consultado
- PUT: actualiza la máquina
- DELETE: da de baja la máquina

'api/machines/last/<int:id>'
- GET: devuelve los últimos datos conocidos de la máquina

La consulta GET a 'api/machines' se puede realizar con parámetros. Por ejemplo:
```
http://localhost:8000/api/machines?description=ed&machineType=1
```
Devuelve:
```
[
  {
    "id": 2,
    "description": "una descripcion",
    "company": "Compania agricola",
    "isBaja": false,
    "machineType": 1
  },
  {
    "id": 3,
    "description": "una descripcion editada",
    "company": "Compania agricola 3 pero editada",
    "isBaja": true,
    "machineType": 2
  }
]
```
## Frontend:

Para levantar el front-end, dentro del directorio 'frontend', correr los siguientes comandos:

```	
	npm install
	npm start
```
	