from django.db import models


class Group(models.Model):
    number = models.CharField(max_length = 3, verbose_name = "Номер группы")
    faculty = models.CharField(max_length = 2, verbose_name = "Номер факультета (цифра)")
    course = models.CharField(max_length = 1, verbose_name = "Курс обучения (цифра)")

    def __str__(self):
        return self.number



class Student(models.Model):
    surname = models.CharField(max_length = 20, verbose_name = "Фамилия")
    name = models.CharField(max_length = 20, verbose_name = "Имя студента")
    fathersname = models.CharField(max_length = 20, verbose_name = "Отчество")
    number = models.ForeignKey(Group, verbose_name = "Номер группы", on_delete = models.CASCADE)

    def __str__(self):
        return f"{self.name} {self.fathersname}  {self.surname}, группa {self.number}"