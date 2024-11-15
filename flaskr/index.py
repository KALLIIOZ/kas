import functools
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

bp=Blueprint('index', __name__)

@bp.route('/#', methods=("GET"))
def index():
    return render_template('index.html')