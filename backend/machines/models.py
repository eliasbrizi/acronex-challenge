from django.db import models


class MachineType(models.Model):
    name = models.CharField(max_length=50, blank=False, default='')


class Machine(models.Model):
    description = models.CharField(max_length=200, blank=False, default='')
    company = models.CharField(max_length=60, blank=False, default='')
    machineType = models.ForeignKey(MachineType, on_delete=models.CASCADE)
