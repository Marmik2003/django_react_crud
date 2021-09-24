from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('students/create/', views.CreateStudentView.as_view()),
    path('students/', views.ListStudentsView.as_view()),
    path('students/<int:pk>/', views.RetrieveUpdateDeleteStudents.as_view()),
]