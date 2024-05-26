from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User 
        flieds =["id", "username", "password"]
        extra_kwargs = {"password":{"write_only": True}}
        
    def create(self, validate_data):
        user = User.objects.create_user(**validate_data)
        return user
    
    