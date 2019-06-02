Vagrant.configure("2") do |config|
	config.vm.box = "ubuntu/xenial64"
	config.vm.provision :shell, path: "bootstrap.sh"
	config.vm.network :forwarded_port, guest: 3000, host: 8080
	config.vm.network :forwarded_port, guest: 8080, host: 8081
	config.vm.network :forwarded_port, guest: 9229, host: 9229
end
