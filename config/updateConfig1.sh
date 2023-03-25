#!/bin/sh
####################
#   
#   script: %updateConfig.sh%
#   description: % updateConfig Files %
#
####################

############### NodeJs Configuration update ############
#echo "nodejs Conf update........"
#sudo npm install react-scripts -g
cd /data/source/MyNote
#sudo npm start 

#echo "ngnix Conf update........"
sudo adduser -D -g 'www' www


mkdir /www
chown -R www:www /var/lib/nginx
chown -R www:www /www
sudo mkdir ~/bkp
sudo cp /etc/nginx/nginx.conf ~/bkp
cp /home/vagrant/conf/ngnix.conf /etc/nginx/nginx.conf 
cd /data/source/MyNote
#sudo npm stop
sudo rc-service nginx start

