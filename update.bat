@echo off
set /p var=������������ݣ�

git add ./

git commit -m "%var%"

git push
timeout -t 10
