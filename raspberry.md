## pigpio

```

wget https://github.com/joan2937/pigpio/archive/master.zip

sudo apt-get install gcc g++
sudo apt-get install -y python-smbus python make python-pigpio python3-pigpio git

unzip master.zip
cd cd pigpio-master
make
sudo make install

git clone https://github.com/geekworm-com/x735-v2.5
cd x735-v2.5
sudo chmod +x *.sh
sudo bash install.sh
```




## x735-v2.5

```

wget -qO- https://tech.biko.pub/resource/rpi-replace-apt-source-buster.sh | sudo bash && sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y python-smbus python pigpio python-pigpio python3-pigpio git


sudo gpg --keyserver keyserver.ubuntu.com --recv 9165938D90FDDD2E

sudo gpg --export --armor 9165938D90FDDD2E | sudo apt-key add -

sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y python-smbus python && sudo apt-get install -y pigpio python-pigpio python3-pigpio git && git clone https://github.com/geekworm-com/x735-v2.5

cd x735-v2.5
sudo chmod +x *.sh
sudo bash install.sh
sudo reboot
```



## 自动挂载硬盘

```
df -lh
lsblk
sudo mkdir -p /mnt/sda1
sudo nano /boot/rc-local
sudo mount /dev/sda /mnt/sda1/
```
## debian 自动挂载硬盘
```
sudo mkdir -p /mnt/sda1
sudo nano /etc/fstab 
/dev/sda /mnt/sda1 ext4 defaults 0 0
```

## docker

```
sudo curl -sSL https://get.docker.com | sh
```
## piGPIO

```
docker run -it -p 8888:8888 --privileged zinen2/alpine-pigpiod

sudo ip link set eth0 promisc on 

sudo nano /etc/docker/daemon.json
```

## docker源

```
在/etc/docker/目录下创建daemon.json，添加如下内容：
{
"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn/"],
"data-root":"/mnt/sda1/dockers/"
}
sudo service docker restart

sudo reboot

sudo docker network create -d macvlan --subnet=192.168.1.0/24 --gateway=192.168.1.1 -o parent=eth0 macnet


```

## qbittorrent 安装

```
sudo docker run -d   --name=qbittorrent  \
--mount source=share,target=/mnt/sda1 \
-e WEBUIPORT=8989  \
-e UID=1000  \
-e GID=27  \
-e UMASK=022  \
-p 6882:6881  \
-p 6882:6881/udp \
-p 8989:8989  \
-v /mnt/sda1/downloads/ \
-v /mnt/sda1/config/qbittorrent/config:/config \
-v /mnt/sda1/downloads/:/Downloads \
--restart unless-stopped  \
johngong/qbittorrent:latest
```

## openwrt

```
sudo docker pull sulinggg/openwrt:latest


sudo docker run --restart always --name openwrt -d --network macnet --privileged=true sulinggg/openwrt:latest /sbin/init

sudo docker exec -it openwrt bash
vim /etc/config/network

       option type 'bridge'
        option ifname 'eth0'
        option proto 'static'
        option netmask '255.255.255.0'
        option ip6assign '60'
        option ipaddr '192.168.1.100'
        option gateway '192.168.1.1'
        option dns '192.168.1.1'
        option ipaddr '192.168.1.100'
        option broadcast '192.168.1.255'


/etc/init.d/network restart
```

## filebrowser

```
curl -fsSL https://raw.githubusercontent.com/filebrowser/get/master/get.sh | bash
filebrowser -r /mnt/sda1/

sudo bash filebrowser -r /mnt/sda1/ install.sh

```



## sambar 开启

```
sudo docker exec -it openwrt bash
smbpasswd  -a root
修改不同密码

```

## amule

```

sudo docker pull ngosang/amule

sudo docker run -d \
  --name=amule \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Europe/London \
  -e GUI_PWD=123456 \
  -e WEBUI_PWD=123456 \
  -p 4711:4711 \
  -p 4712:4712 \
  -p 4662:4662 \
  -p 4665:4665/udp \
  -p 4672:4672/udp \
  -v /mnt/sda1/amule/config:/home/amule/.aMule \
  -v /mnt/sda1/amule/incoming:/incoming \
  -v /mnt/sda1/amule/temp:/temp \
  --restart unless-stopped \
  --privileged=true \
  ngosang/amule
  
```
## 解决docker权限问题

```
cd /var/run
sudo chmod 666 docker.sock
```

## fileBrowser

```
sudo touch /mnt/sda1/filebrowser/filebrowser.db
sudo touch /mnt/sda1/filebrowser/.filebrowser.json

docker run -d --name fb -v /mnt/sda1/:/srv  -p 8990:80 filebrowser/filebrowser
```

## NPS


```
docker pull ffdfgdfg/nps
docker run -d --name nps --net=host -v /mnt/sda1/nps/config:/conf ffdfgdfg/nps
```

## dlna 安装
```
docker run -d \
  --net=host \
  --restart=always \
  -v /mnt/sda1:/media \
  -e MINIDLNA_MEDIA_DIR=/media \
  -e MINIDLNA_FRIENDLY_NAME=MyMini \
  vladgh/minidlna
```
  
# 支持https

```
wget https://www.openssl.org/source/openssl-1.1.1a.tar.gz

tar xvf openssl-1.1.1a.tar.gz 

cd openssl-1.1.1a

./config

make

echo ~

sudo make install

 cd curl-7.71.1/
 
./configure --prefix=$PWD/_install --with-ssl

make

make install
```

## wxedge

```

docker run \
--name=wxedge \
--restart=always \
--privileged \
--net=host \
--tmpfs /mnt/sda1/wxedge/run \
--tmpfs /mnt/sda1/wxedge/tmp \
-v /mnt/sda1/wxedge:/storage:rw \
-d \
registry.cn-hangzhou.aliyuncs.com/onething/wxedge




```

## NPC

```
docker run -d --name npc --net=host ffdfgdfg/npc -server=42.193.108.105:8024 -vkey=fyjgir97ba3h39wj
```

## jellyfin


```
docker pull jellyfin/jellyfin
sudo mkdir -p /mnt/sda1/config/jellyfin/config
sudo mkdir -p /mnt/sda1/config/jellyfin/cache
sudo chown -R pi /mnt/sda1/config/jellyfin
docker volume create jellyfin-config
docker volume create jellyfin-cache
id #查看uid:gid
sudo groupadd docker
sudo gpasswd -a $USER docker
newgrp docker
sudo systemctl restart docker

sudo docker run -d \
 --name jellyfin \
 --user 1000:27 \
 --restart=always \
 --net=host \
 --volume /mnt/sda1/config/jellyfin/config:/config \
 --volume /mnt/sda1/config/jellyfin/cache:/cache \
 --mount type=bind,source=/mnt/sda1,target=/media \
 --restart=unless-stopped \
 jellyfin/jellyfin
 
```


## Homebridge

```
docker run --net=host --name=homebridge --restart=always -e PGID=27 -e PUID=1000 -e HOMEBRIDGE_CONFIG_UI=1 -e HOMEBRIDGE_CONFIG_UI_PORT=8581 -v /mnt/sda1/homebridge:/homebridge oznu/homebridge:latest
```

## MQTT
```

docker run -d --name emqx-ee --restart=always -p 1883:1883 -p 8081:8081 -p 8083:8083 -p 8084:8084 -p 8883:8883 -p 18083:18083 emqx/emqx-ee:4.3.4
```
## aria2-pro

```
 
 docker run -d \
  --name aria2-pro \
  --restart unless-stopped \
  --log-opt max-size=1m \
  -e PUID=1000 \
  -e PGID=27 \
  -e UMASK_SET=022 \
  -e RPC_SECRET=123456 \
  -e RPC_PORT=6800 \
  -p 6800:6800 \
  -e LISTEN_PORT=6888 \
  -p 6888:6888 \
  -p 6888:6888/udp \
  -v /mnt/sda1/config/aria2/aria2-config:/config \
  -v /mnt/sda1/downloads:/downloads \
  p3terx/aria2-pro
 
docker run -d \
    --name ariang \
    --log-opt max-size=1m \
    --restart unless-stopped \
    -p 6880:6880 \
    p3terx/ariang
    
```

# samba 新
```

sudo iptables -I INPUT -p tcp --dport 139 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 445 -j ACCEPT

sudo iptables -I INPUT -p udp --dport 137 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 138 -j ACCEPT

docker run -it -p 139:139 -p 445:445 --name samba -d --rm  \
 -v /mnt/sda1:/mount \
 dperson/samba \
 -u "pi;raspberry" \
 -s "pi;/mount/;yes;no;yes;all;all;all" \
 -w "WORKGROUP" \
 -g "force user=pi" \
 -g "guest account=pi"
 
 
```
## 自启脚本
```
编辑脚本文件 "/boot/rc-local" ，在 “exit 0” 前加入自定义的脚本内容。

```


## 7inch HDMI LCD(C)
```
hdmi_group=2
hdmi_mode=87
hdmi_cvt 1024 600 60 6 0 0 0
hdmi_drive=1
```

## 交换空间

```
sudo nano /etc/dphys-swapfile
CONF_SWAPSIZE=1024

sudo /etc/init.d/dphys-swapfile stop
sudo /etc/init.d/dphys-swapfile start
```

## OpenMediaVault
```
sudo wget -O - https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install | sudo bash
```

## 安装可视化

```
sudo apt-get update   
sudo apt-get upgrade
sudo apt-get dist-upgrade
sudo apt-get clean
1、输入命令：sudo apt-get install ttf-wqy-zenhei ttf-wqy-microhei
  2、输入命令：sudo raspi-config进入配置
  3、选择Localisation Options
  4、选择Locale
  5、选择zh_CN.GBK和zh_CN.UTF-8(空格键)
  6、再次选择zh_CN.UTF-8
 sudo apt-get install --no-install-recommends xserver-xorg
  sudo apt-get install --no-install-recommends xinit
 sudo apt-get install lxde-core lxappearance
 sudo apt-get install lightdm  
 startx

选择桌面环境
sudo update-alternatives --config x-session-manager
sudo apt-get install kodi
```

## bullseye 源

```
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
```

## argon eon

```
curl https://download.argon40.com/argoneon.sh | bash
```

## Raid 0

```
sudo mdadm --create --verbose /dev/md0 --level=0 --raid-devices=2 /dev/sda /dev/sdb

```

