from flask import Flask, render_template, request, flash, redirect, url_for
from config import config_options
import os
from flask_mail import Message, Mail
from forms import ContactForm
import bleach


app = Flask(__name__)
app.config.from_object(config_options["development"])

mail = Mail(app)

ALLOWED_TAGS = ['b', 'i', 'u', 'strong', 'em',
                'p', 'br', 'ul', 'ol', 'li', 'a', 'blockquote']


def sanitize_message(message):
    return bleach.clean(message, tags=ALLOWED_TAGS, strip=True)


@app.context_processor
def inject_request():
    return dict(request=request)


@app.route("/")
def home():
    form = ContactForm()
    return render_template("index.html", form=form)


@app.route("/Projects")
def projects():
    form = ContactForm()
    return render_template("projects.html", form=form)


@app.route("/About")
def about():
    form = ContactForm()
    return render_template("about.html", form=form)


@app.route("/Contact", methods=["POST"])
def contact():
    form = ContactForm()
    if form.validate_on_submit():
        fullname = form.fullname.data
        email = form.email.data
        subject = form.subject.data
        message_content = sanitize_message(form.message.data)

        # Render HTML email content
        html_content = render_template(
            "email_template.html", fullname=fullname, email=email, subject=subject, message=message_content)

        msg = Message(
            subject=f"New Contact: {subject}",
            sender=email,
            recipients=[os.getenv("CONTACT_EMAIL")],
            html=html_content
        )
        try:
            mail.send(msg)
            flash("Your message has been sent successfully!", "success")
        except Exception as e:
            flash("Error sending message. Please try again later.", "danger")
            print(f"Error: {e}")

    flash("There were errors in your form. Please correct them.", "danger")
    return render_template("index.html", form=form)


if __name__ == "__main__":
    app.run(debug=app.config["DEBUG"])
