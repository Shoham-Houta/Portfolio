import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'default_secret_key')
    DEBUG = os.getenv('DEBUG', 'False') == 'True'
    PORTFOLIO_OWNER = os.getenv('PORTFOLIO_OWNER', 'Shoham Houta')
    CONTACT_EMAIL = os.getenv('CONTACT_EMAIL', 'houta.shoham@gmail.com')


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
