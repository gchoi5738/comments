from rest_framework import viewsets
from .models import Comment
from .serializers import CommentSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_update(self, serializer):
        comment = self.get_object()
        serializer.save(author=comment.author)

    def perform_destroy(self, instance):
        instance.delete()