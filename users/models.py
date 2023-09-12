from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, PermissionsMixin
)


# Create your models here.

class UserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        # Normalizing the email address by lowercasing the domain part of it.
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        # Hashing the password with the set_password method.
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        # Creating a superuser with the creates_user method we created above.
        user = self.create_user(email, password)

        # Setting the user as admin.
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_staff = models.BooleanField(default=False)  # Admin
    is_active = models.BooleanField(default=True)  # Active

    objects = UserManager()

    USERNAME_FIELD = 'email'