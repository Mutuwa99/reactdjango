from django.db import models

class Task(models.Model):
    STATUS_CHOICES = (
        ('Assigned', 'Assigned'),
        ('InProgress', 'InProgress'),
        ('Complete', 'Complete'),
    )

    name = models.CharField(max_length=250)
    description = models.TextField(max_length=250)  
    storypoint = models.IntegerField() 
    created_at = models.DateField(auto_now_add=True)  
    updated_at = models.DateField(auto_now=True)  
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Assigned') 

    def __str__(self):
        return self.name

