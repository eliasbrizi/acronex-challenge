import requests
from django.db.models import Q
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from machines.models import Machine
from machines.serializers import MachineSerializer


@api_view(['GET', 'POST'])
def machine_list(request):
    if request.method == 'GET':
        machines = Machine.objects.all()

        description = request.query_params.get('description', None)
        machineType = request.query_params.get('machineType', None)
        working = request.query_params.get('working', None)
        # Filter machines
        filterQuery = Q()
        if description is not None:
            filterQuery = Q(description__icontains=description)
        if machineType is not None:
            filterQuery = filterQuery | Q(machineType__exact=machineType)

        machines_filtered = machines.filter(filterQuery)

        if working is not None:
            for m in machines:
                apiResponse = requests.get(
                    'https://wrk.acronex.com/api/challenge/last/' + str(m.id))
                if ((int(apiResponse.json()['Operación']['Velocidad'].split('.')[0]) > 0) == working):
                    print(True)
                    if (not machines_filtered.contains(m)):
                        print('agreganding')
                        machines_filtered.aggregate(m)

        machines_serializer = MachineSerializer(machines_filtered, many=True)
        return JsonResponse(machines_serializer.data, safe=False)
        # 'safe=False' for objects serialization
    elif request.method == 'POST':
        machine_data = JSONParser().parse(request)
        machine_serializer = MachineSerializer(data=machine_data)
        if machine_serializer.is_valid():
            machine_serializer.save()
            return JsonResponse(machine_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(machine_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def machine_detail(request, id):
    try:
        machine = Machine.objects.get(id=id)
    except Machine.DoesNotExist:
        return JsonResponse({'message': 'La maquina no existe'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        machine_serializer = MachineSerializer(machine)
        return JsonResponse(machine_serializer.data)

    elif request.method == 'PUT':
        machine_data = JSONParser().parse(request)
        machine_serializer = MachineSerializer(machine, data=machine_data)
        if machine_serializer.is_valid():
            machine_serializer.save()
            return JsonResponse(machine_serializer.data)
        return JsonResponse(machine_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        machine.isBaja = True
        machine.save()
        return JsonResponse({'message': 'La maquina se dio de baja correctamente'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def machine_last(request, id):
    response = requests.get(
        'https://wrk.acronex.com/api/challenge/last/' + str(id))
    return Response(response.json())
