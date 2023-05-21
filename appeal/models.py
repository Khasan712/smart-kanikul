from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from appeal.managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    phone_number = models.CharField(max_length=13, unique=True)
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    objects = UserManager()

    USERNAME_FIELD = "phone_number"
    REQUIRED_FIELDS = ["name",]
    
    def clean(self):
        if self.phone_number.startswith('+'):
            self.phone_number = self.phone_number.replace('+', '')
        
    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)


class Appeal(models.Model):
    phone_number = models.CharField(max_length=13, unique=True)
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def clean(self):
        if self.phone_number.startswith('+'):
            self.phone_number = self.phone_number.replace('+', '')
        
    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)
