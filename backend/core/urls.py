from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('students/create/', views.CreateStudentView),
    path('students/', views.ListStudentsView),
    path('students/<int:pk>/', views.RetrieveUpdateDeleteStudents),
]