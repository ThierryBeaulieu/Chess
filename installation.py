import subprocess
import sys
import os

# verify that the python version is at least 3
pythonVersion = sys.version
if pythonVersion[0] != '3':

    print("Your python version should be at least 3.x.x")
    exit()

# adds the dependcy of the submodules from git
subprocess.run('git submodule init', shell=True)
subprocess.run('git submodule update', shell=True)

initialDir = os.getcwd()
os.chdir(initialDir + '/server/flask/')

# if pip3 doesn't work, you might want to change this to pip
result = subprocess.run('pip3 install -r requirements.txt', shell=True)

# installation the front end libraries
print(initialDir)
os.chdir(initialDir + '/client/')
subprocess.check_call('npm install', shell=True)
