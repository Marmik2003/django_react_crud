from rest_framework import generics
from .models import Student
from .serializers import StudentSerializer

class CreateStudentView(generics.CreateAPIView):
    """Create a new student"""
    serializer_class = StudentSerializer

class ListStudentsView(generics.ListAPIView):
    """List all students"""
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

class RetrieveUpdateDeleteStudents(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, Update and Delete Student"""
    serializer_class = StudentSerializer

    def get_object(self):
        """Retrieve and return student"""
        if 'pk' in self.kwargs:
            self.lookup_field = 'pk'
        return super(RetrieveUpdateDeleteStudents, self).get_object()
