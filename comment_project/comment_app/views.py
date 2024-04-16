from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions
from .models import Comment
from .serializers import CommentSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user.username)

    def perform_update(self, serializer):
        comment = self.get_object()
        if not self.request.user.is_superuser and comment.author != self.request.user.username:
            raise permissions.PermissionDenied("You can only edit your own comments.")
        serializer.save()

    def perform_destroy(self, instance):
        if not self.request.user.is_superuser and instance.author != self.request.user.username:
            raise permissions.PermissionDenied("You can only delete your own comments.")
        instance.delete()
