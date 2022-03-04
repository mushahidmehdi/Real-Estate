
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import permissions

User = get_user_model()


class SignUpView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = request.data

        email = data['email']
        name = data['name']
        password = data['password']
        confirm_password = data['confirm_password']

        if password == confirm_password:
            if len(password) < 6:
                return Response({'error': 'Password must be 6 character long'})
            else:
                if User.objects.filter(email=email).exists():
                    return Response({'error': 'User already exists'})
                else:
                    user = User.objects.create_user(
                        email=email, name=name, password=password)
                    user.save()
                    return Response({'success': 'New User created successfully'})
        else:
            return Response({'error': 'Password do not match'})
