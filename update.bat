@echo off
set /p var=������������ݣ�

git add ./
timeout -t 5
git commit -m "%var%"
timeout -t 5
git push
timeout -t 10
