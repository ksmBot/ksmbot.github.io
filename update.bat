@echo off
set /p var=请输入更新内容：

git add ./
timeout -t 5
git commit -m "%var%"
timeout -t 5
git push
timeout -t 10
