from django.shortcuts import render

def index(request):
    return render(request, "index.html", {})


def group_detail_view(request, id):
    return render(request, 'index.html', {})    



def student_detail_view(request, id):
    return render(request, 'index.html', {})    