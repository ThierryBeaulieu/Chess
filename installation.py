import subprocess
import os

currentPat = os.getcwd()

os.chdir(currentPat + '/server/flask/')

subprocess.run('python -m venv python_venv/venv', shell=True)
subprocess.run('python_venv/venv/Scripts/activate', shell=True)
subprocess.run('pip install -r requirements.txt', shell=True)