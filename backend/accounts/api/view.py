

from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import permissions, status
# from .serializers import UserSerializer;

User = get_user_model()


class SignUpView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        try:
            data = self.request.data
            email = data['email']
            name = data['name']
            password = data['password']
            re_password = data['re_password']

            if password == re_password:
                if len(password) < 8:
                    return Response(
                        {'error': 'Password must be 8 character long'},
                        status=status.HTTP_400_BAD_REQUEST
                        )
                else:
                    if User.objects.filter(email=email).exists():
                        return Response({'error': 'User already exists'},
                        status=status.HTTP_400_BAD_REQUEST)
                    else:
                        user = User.objects.create_user(
                            email=email, name=name, password=password)
                        user.save()
                        if User.objects.filter(email=email).exists():
                            return Response({'success': 'New User created successfully'},status=status.HTTP_201_CREATED)
                        else:
                            return Response({'error': 'User creation fail'},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            else:
                return Response({'error': 'Password do not match'},
                status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'error': 'Server is not responding'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


# class LoadUserView(APIView):
#     def get(self, request, format=None):

#         try:
#             user = request.user
#             serialize = UserSerializer(user, many=True)
#             return Response({'user': serialize.data},
#             status=status.HTTP_200_OK) 
            
#         except:
#             return Response({'error': 'Error while retrieving user data'},
#             status=status.HTTP_500_INTERNAL_SERVER_ERROR)