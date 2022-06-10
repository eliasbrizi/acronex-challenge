from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from machines.models import Machine
from machines.serializers import MachineSerializer
from rest_framework.decorators import api_view

from rest_framework.response import Response


@api_view(['GET', 'POST', 'DELETE'])
def machine_list(request):
    if request.method == 'GET':
        # machines = Machine.objects.all()

        # title = request.query_params.get('title', None)
        # if title is not None:
        #     machines = machines.filter(title__icontains=title)

        # machines_serializer = MachineSerializer(machines, many=True)
        # return JsonResponse(machines_serializer.data, safe=False)
        # # 'safe=False' for objects serialization
        return Response('not yet implemented', status=status.HTTP_501_NOT_IMPLEMENTED)
    elif request.method == 'POST':
        machine_data = JSONParser().parse(request)
        machine_serializer = MachineSerializer(data=machine_data)
        if machine_serializer.is_valid():
            machine_serializer.save()
            return JsonResponse(machine_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(machine_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        # count = Machine.objects.all().delete()
        # return JsonResponse({'message': '{} Machines were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
        return Response('not yet implemented', status=status.HTTP_501_NOT_IMPLEMENTED)
