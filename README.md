# Acronex Challenge

## Backend:

Para correr la aplicación backend, se debe tener instalado Django, ademas de 'rest_framework' y 'corsheaders':

```
	pip install djangorestframework
	pip install django-cors-headers
```

Las rutas aceptan los siguientes metodos:
'api/machines':
	- GET: devuelve un listado de las maquinas registradas en el sistema
	- POST: crea una nueva maquina en el sistema

'api/machines/<int:id>':
	- GET: devuelve el detalle de la maquina con el id consultado
	- PUT: actualiza la maquina
	- DELETE: da de baja la maquina

'api/machines/last/<int:id>'
	- GET: devuelve los ultimos datos conocidos de la maquina

## Frontend:

Para levantar el front-end, dentro del directorio 'frontend', correr los siguientes comandos:

```	
	npm install
	npm start
```
	