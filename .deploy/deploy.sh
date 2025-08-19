cd ~/Employees
npm run build:prod

rm -rf ~/../var/www/Employees/html
mv ~/Employees/build ~/../var/www/Employees/html
