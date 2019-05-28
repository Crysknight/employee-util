# Update packages
sudo apt-get update

# Install Node.js and NPM
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm

# Install MongoDB
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start and enable the Mongo service so that it automatically starts every time you start the machine
sudo systemctl start mongod.service
sudo systemctl enable mongod.service

# Install initial database
sudo mongorestore --db admin /vagrant/db/admin
sudo mongorestore --db employeeUtil /vagrant/db/employeeUtil
sudo cp /vagrant/db/mongod.conf /etc

# Restarting mongod
sudo systemctl stop mongod.service
sudo systemctl start mongod.service

sudo npm i -g pm2
