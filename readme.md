# edes

## Requirements

### Ubuntu

version: 14.04 x64

	Install packages

		sudo apt-get update
		sudo apt-get upgrade
		
		sudo apt-get install git
		sudo apt-get install python
		sudo apt-get install build-essential

		sudo add-apt-repository ppa:chris-lea/nginx-devel

		sudo apt-get update
		sudo apt-get install nginx

	Set up local account

		sudo adduser <username>
		sudo usermod -a -G sudo <username>

### Node.js

version: 0.10.35

	Install using local account

		curl https://raw.githubusercontent.com/creationix/nvm/v0.23.2/install.sh | bash
		nvm install 0.10.35
		nvm alias default 0.10.35

### Global packages

	Install using local account

		npm -g install pm2
		npm -g install gulp
		npm -g install harp
		npm -g install bower
		npm -g install nodemon

## Server management

	Development environment

		~/edes
			harp server

	Production environment

		~/edes
			NODE_ENV=production harp server
