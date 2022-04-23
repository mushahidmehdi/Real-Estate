from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from realtors.models import Realtor
from .serializers import RealtorSerializer


class RealtorListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = RealtorSerializer
    pagination_class = None
    queryset = Realtor.objects.all()


class RealorView(RetrieveAPIView):
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer
