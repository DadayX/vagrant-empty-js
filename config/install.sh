#!/bin/sh
####################
#   
#   script: %install.sh%
#   description: % install all dependecies and packages %
#
####################

########## Install LAMP ########
echo "update package and repository ... "
sudo apk update && apk upgrade
sudo mkdir ~/bkp/
echo "Install nodeJs..."
apk add nodejs npm

echo "Install ngnix...."
sudo apk add nginx


########## Install GIT ##########
echo "Install GIT........"
sudo apk add git



