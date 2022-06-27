import subprocess
import os

initialDir = os.getcwd() + '/server/flask/'
os.chdir(initialDir)

result = subprocess.run('pip install -r requirements.txt', shell=True)
