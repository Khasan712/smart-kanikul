from django.core.signing import Signer

def my_password_validator(password):
    return Signer().sign(password)