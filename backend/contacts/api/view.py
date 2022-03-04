from rest_framework import permissions
from rest_framework.views import APIView
from contacts.models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response
from .serializers import ContactSerializer


class ContactView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ContactSerializer

    def post(self, request, format=None):
        data = request.data

        try:
            send_mail(
                data['subject'],
                'Name: '
                + data['name']
                + '\nEmail: '
                + data['email']
                + '\n\nMessage: \n'
                + data['message'],
                'mushahidmehdi0@gmail.com',
                ['mushahidmehdi0@gmail.com'],
                fail_silently=False
            )
            contact = Contact(name=data['name'], email=data['email'], subject=data['subject'], message=data['message']
                              )
            contact.save()

            return Response({'success': 'Message sent successfully'})

        except:
            return Response({'error': 'Message failed to sent'})
