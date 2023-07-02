@echo off
git add ./
timeout -t 5
git commit -m "增添修补"
timeout -t 5
git push
timeout -t 10
