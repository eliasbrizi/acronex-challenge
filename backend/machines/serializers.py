from rest_framework import serializers
from machines.models import Machine, MachineType


class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = '__all__'


class MachineTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MachineType
        fields = '__all__'
