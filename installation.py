import subprocess
import os

initialDir = os.getcwd() + '/server/flask/'
os.chdir(initialDir)

# TODO
subprocess.run('python -m venv python_venv/venv', shell=True)

result = subprocess.run('pip install -r requirements.txt', shell=True)


