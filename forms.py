from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, Length


class ContactForm(FlaskForm):
    fullname = StringField("Full Name", validators=[
                           DataRequired(), Length(min=2, max=50)])
    email = StringField("Email", validators=[
                        DataRequired(), Email(message="Invalid email address.")])
    subject = StringField("Subject", validators=[
                          DataRequired(), Length(min=2, max=100)])
    message = TextAreaField("Message", validators=[
                            DataRequired(), Length(min=10, max=500)])
    submit = SubmitField("Send Message")
