import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'default_secret_key')
    DEBUG = os.getenv('DEBUG', 'False') == 'True'
    PORTFOLIO_OWNER = os.getenv('PORTFOLIO_OWNER', 'Shoham Houta')
    CONTACT_EMAIL = os.getenv('CONTACT_EMAIL', 'houta.shoham@gmail.com')
    MAIL_SERVER = "smtp.gmail.com"  # Change this if using Outlook, Yahoo, etc.
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False
    MAIL_USERNAME = os.getenv("MAIL_USERNAME")  # Your email
    MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")  # Your email app password
    MAIL_DEFAULT_SENDER = os.getenv("CONTACT_MAIL")


class DevelopmentConfig(Config):
    """Configuration for development"""
    DEBUG = True


class ProductionConfig(Config):
    """Configuration for production"""
    DEBUG = False


# Dictionary to select configurations
config_options = {
    'development': DevelopmentConfig,
    'production': ProductionConfig
}
