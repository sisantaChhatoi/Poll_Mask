from rest_framework import serializers
from .models import Voter

class VoterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voter
        fields = ['first_name', 'last_name', 'email']




