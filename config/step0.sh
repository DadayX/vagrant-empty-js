#!/bin/sh
#####################
#   
#   scripts:%step0.sh%
#   description: %project initialisation%
#
#####################
cd /data/source/MyNote
sudo npm stop
cd /www
sudo cp /data/source/MyNot* ./
chown -R www:www MyNote