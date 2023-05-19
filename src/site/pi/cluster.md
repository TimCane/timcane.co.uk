---
title: PI Cluster
---
## Hardware

| **Hostname** | **Role** | **IP Address**               | **MAC Address**   | **Serial Number** | **Boot Mode** | **HAT**                                                                                                               |
| ------------ | -------- | ---------------------------- | ----------------- | ----------------- | ------------- | --------------------------------------------------------------------------------------------------------------------- |
| pi-grey      | HEAD     | 192.168.0.3</br>192.168.50.1 | DC:A6:32:7D:8B:2A | e7a04c41          | USB           | [USB 3.2 Hub & Gigabit Ethernet HAT](https://thepihut.com/products/usb-3-2-hub-gigabit-ethernet-hat-for-raspberry-pi) |
| pi-orange    | CLUSTER  | 192.168.50.11                | DC:A6:32:31:39:61 | 60c90130          | NET           | [Raspberry Pi PoE+ HAT](https://thepihut.com/products/raspberry-pi-poe-plus-hat)                                      |
| pi-red       | CLUSTER  | 192.168.50.12                | E4:5F:01:63:8C:02 | 1862a49b          | NET           | [Raspberry Pi PoE+ HAT](https://thepihut.com/products/raspberry-pi-poe-plus-hat)                                      |
| pi-yellow    | CLUSTER  | 192.168.50.13                | XX:XX:XX:XX:XX:XX | XXXXXXXX          | NET           | [Raspberry Pi PoE+ HAT](https://thepihut.com/products/raspberry-pi-poe-plus-hat)                                      |

## Head Node

### Setting up eth interfaces

```shell
tim@pi-grey:~ $ sudo nano /etc/network/interfaces.d/eth1
```

```ini
# /etc/network/interfaces.d/eth1
auto eth1
allow-hotplug eth1
iface eth1 inet static
    address 192.168.0.3
    netmask 255.255.255.0
    gateway 192.168.0.1
```

```shell
tim@pi-grey:~ $ sudo nano /etc/network/interfaces.d/eth0
```

```ini
# /etc/network/interfaces.d/eth0
auto eth0
allow-hotplug eth0
iface eth0 inet static
    address 192.168.50.1
    netmask 255.255.255.0
    network 192.168.50.0
    broadcast 192.168.50.255
```

```shell
tim@pi-grey:~ $ sudo shutdown -h now
```

Plug `router` into `eth1` & `switch` into `eth0`.

### Setting up DHCP Server

```shell
tim@pi-grey:~ $ sudo apt install isc-dhcp-server
tim@pi-grey:~ $ sudo nano /etc/dhcp/dhcpd.conf
```

```ini
# /etc/dhcp/dhcpd.conf
ddns-update-style none;
authoritative;
log-facility local7;
option option-43 code 43 = text;
option option-66 code 66 = text;

# No service will be given on this subnet
subnet 192.168.1.0 netmask 255.255.255.0 {
}

# The internal cluster network
group {
    option broadcast-address 192.168.50.255;
    option routers 192.168.50.1;
    default-lease-time 600;
    max-lease-time 7200;
    option domain-name "pi-grey";
    option domain-name-servers 8.8.8.8, 8.8.4.4;
    subnet 192.168.50.0 netmask 255.255.255.0 {
        range 192.168.50.20 192.168.50.250;

        host pi-grey {
            hardware ethernet DC:A6:32:7D:8B:2A;
            fixed-address 192.168.50.1;
        }

        host pi-orange {
            option root-path "/network-boot/tftp/";
            hardware ethernet DC:A6:32:31:39:61;
            option option-43 "Raspberry Pi Boot";
            option option-66 "192.168.50.1";
            next-server 192.168.50.1;
            fixed-address 192.168.50.11;
            option host-name "pi-orange";
        }

        host pi-red {
            option root-path "/network-boot/tftp/";
            hardware ethernet e4:5f:01:63:8c:02;
            option option-43 "Raspberry Pi Boot";
            option option-66 "192.168.50.1";
            next-server 192.168.50.1;
            fixed-address 192.168.50.12;
            option host-name "pi-red";
        }

        host pi-yellow {
            option root-path "/network-boot/tftp/";
            hardware ethernet XX:XX:XX:XX:XX:XX;
            option option-43 "Raspberry Pi Boot";
            option option-66 "192.168.50.1";
            next-server 192.168.50.1;
            fixed-address 192.168.50.13;
            option host-name "pi-yellow";
        }

    }
}
```

```shell
tim@pi-grey:~ $ sudo nano /etc/default/isc-dhcp-server
```

```ini
# /etc/default/isc-dhcp-server
DHCPDv4_CONF=/etc/dhcp/dhcpd.conf
DHCPDv4_PID=/var/run/dhcpd.pid
INTERFACESv4="eth0"
```

```shell
tim@pi-grey:~ $ sudo nano /etc/hosts
```

```ini
# /etc/hosts
127.0.0.1       localhost
::1             localhost ip6-localhost ip6-loopback
ff02::1         ip6-allnodes
ff02::2         ip6-allrouters

127.0.1.1       pi-grey
192.168.50.1	pi-grey

192.168.50.11	pi-orange
192.168.50.12	pi-red
192.168.50.13	pi-yellow
```

```shell
tim@pi-grey:~ $ sudo reboot
```

### Allowing access to the disk over the network

```shell
tim@pi-grey:~ $ sudo apt install nfs-kernel-server
tim@pi-grey:~ $ sudo mkdir /network-share
tim@pi-grey:~ $ sudo chown tim:tim /network-share
tim@pi-grey:~ $ sudo nano /etc/exports
```

```ini
#/etc/exports
/network-share 192.168.50.0/24(rw,sync)
/network-boot/pi-orange 192.168.50.0/24(rw,sync,no_subtree_check,no_root_squash)
/network-boot/pi-red 192.168.50.0/24(rw,sync,no_subtree_check,no_root_squash)
/network-boot/pi-yellow 192.168.50.0/24(rw,sync,no_subtree_check,no_root_squash)
```

```shell
tim@pi-grey:~ $ sudo systemctl enable rpcbind.service
tim@pi-grey:~ $ sudo systemctl start rpcbind.service
tim@pi-grey:~ $ sudo systemctl enable nfs-server.service
tim@pi-grey:~ $ sudo systemctl start nfs-server.service
tim@pi-grey:~ $ sudo reboot
```

### Setting up the boot server

#### tftp server

```shell
tim@pi-grey:~ $ sudo apt install tftpd-hpa
tim@pi-grey:~ $ sudo apt install kpartx
tim@pi-grey:~ $ sudo mkdir /network-boot
tim@pi-grey:~ $ sudo mkdir /network-boot/tftp
tim@pi-grey:~ $ sudo chown tftp:tftp /network-boot/tftp
tim@pi-grey:~ $ sudo nano /etc/default/tftpd-hpa
```

```ini
# /etc/default/tftpd-hpa
TFTP_USERNAME="tftp"
TFTP_DIRECTORY="/network-boot/tftp"
TFTP_ADDRESS=":69"
TFTP_OPTIONS="--secure --create"
```

```shell
tim@pi-grey:~ $ sudo systemctl restart tftpd-hpa
```

#### give compute nodes internet access

```shell
tim@pi-grey:~ $ sudo nano /etc/sysctl.conf
```

```ini
# /etc/sysctl.conf
# UNCOMMENT FOLLOWING LINES
net.ipv4.ip_forward=1
```

```shell
tim@pi-grey:~ $ sudo apt install iptables
tim@pi-grey:~ $ sudo iptables -t nat -A POSTROUTING -o eth1 -j MASQUERADE
tim@pi-grey:~ $ sudo iptables -A FORWARD -i eth1 -o eth0 -m state --state RELATED,ESTABLISHED -j ACCEPT
tim@pi-grey:~ $ sudo iptables -A FORWARD -i eth0 -o eth1 -j ACCEPT
tim@pi-grey:~ $ sudo sh -c "iptables-save > /etc/iptables.ipv4.nat"
tim@pi-grey:~ $ sudo nano /etc/rc.local
```

```ini
# /etc/rc.local
# ADD JUST BEFORE 'exit 0'
iptables-restore < /etc/iptables.ipv4.nat
```

```shell
tim@pi-grey:~ $ sudo reboot
```

#### boot image

```shell
tim@pi-grey:~ $ sudo su
```

```shell
root@pi-grey:~ # mkdir /network-boot/image
root@pi-grey:~ # cd /network-boot/image
root@pi-grey:/network-boot/image # wget -O raspios_lite_arm64.img.xz https://downloads.raspberrypi.org/raspios_lite_arm64/images/raspios_lite_arm64-2023-05-03/2023-05-03-raspios-bullseye-arm64-lite.img.xz
root@pi-grey:/network-boot/image # xz --decompress raspios_lite_arm64.img.xz
root@pi-grey:/network-boot/image # kpartx -a -v *.img
root@pi-grey:/network-boot/image # mkdir bootmnt
root@pi-grey:/network-boot/image # mkdir rootmnt
root@pi-grey:/network-boot/image # mount /dev/mapper/loop0p1 bootmnt/
root@pi-grey:/network-boot/image # mount /dev/mapper/loop0p2 rootmnt/
root@pi-grey:/network-boot/image # mkdir -p /network-boot/pi-orange
root@pi-grey:/network-boot/image # mkdir -p /network-boot/tftp/60c90130
root@pi-grey:/network-boot/image # cp -a rootmnt/* /network-boot/pi-orange
root@pi-grey:/network-boot/image # cp -a bootmnt/* /network-boot/pi-orange/boot
```

```shell
root@pi-grey:/network-boot/image # touch /network-boot/pi-orange/boot/ssh
root@pi-grey:/network-boot/image # nano /network-boot/pi-orange/boot/userconf
```

```ini
# /network-boot/pi-orange/boot/userconf
# echo 'mypassword' | openssl passwd -6 -stdin
tim:$6$Pp1bRRnPBm3wcbG.$LYUGp3j7olEbbIdPAD/1Btfg3QOIOVnUzjFTKag2Jb0p84zLCHBfD5kokmEUMCG6Fcyu4Y8oh3T94vzuj4ama0
```

```shell
root@pi-grey:/network-boot/image # sed -i /UUID/d /network-boot/pi-orange/etc/fstab
root@pi-grey:/network-boot/image # nano /network-boot/pi-orange/etc/fstab
```

```ini
# /network-boot/pi-orange/etc/fstab
192.168.50.1:/network-boot/tftp /boot nfs defaults,vers=4.1,proto=tcp 0 0
192.168.50.1:/network-share /network-share nfs defaults 0 0
```

```shell
root@pi-grey:/network-boot/image # nano /network-boot/pi-orange/boot/cmdline.txt
```

```ini
#/network-boot/pi-orange/boot/cmdline.txt
console=serial0,115200 console=tty root=/dev/nfs nfsroot=192.168.50.1:/network-boot/pi-orange,vers=4.1,proto=tcp rw ip=dhcp rootwait
```

```shell
root@pi-grey:/network-boot/image # nano /etc/fstab
```

```ini
# /etc/fstab
/network-boot/pi-orange/boot /network-boot/tftp/60c90130 none defaults,bind 0 0
/network-boot/pi-red/boot /network-boot/tftp/1862a49b none defaults,bind 0 0
/network-boot/pi-yellow/boot /network-boot/tftp/XXXXXXXX none defaults,bind 0 0
```

```shell
root@pi-grey:/network-boot/image # systemctl restart rpcbind
root@pi-grey:/network-boot/image # systemctl restart nfs-server
root@pi-grey:/network-boot/image # umount bootmnt/
root@pi-grey:/network-boot/image # umount rootmnt/
root@pi-grey:/network-boot/image # cd /network-boot; rm -rf image
root@pi-grey:/network-boot # exit
tim@pi-grey:/network-boot/image $ sudo reboot
```

## Compute Node

### Network booting compute node

#### setup

```shell
tim@pi-orange:~ $ sudo systemctl disable resize2fs_once.service
tim@pi-orange:~ $ sudo apt remove dphys-swapfile
tim@pi-orange:~ $ sudo nano /etc/hosts
```

```ini
# /etc/hosts
127.0.0.1       localhost
::1             localhost ip6-localhost ip6-loopback
ff02::1         ip6-allnodes
ff02::2         ip6-allrouters

127.0.1.1       pi-orange
192.168.50.1	pi-grey

192.168.50.11	pi-orange
192.168.50.12	pi-red
192.168.50.13	pi-yellow
```

```shell
tim@pi-orange:~ $ sudo nano /etc/hostname
```

```ini
# /etc/hostname
pi-orange
```

```shell
tim@pi-orange:~ $ sudo mkdir /network-share
tim@pi-orange:~ $ sudo chown tim:tim /network-share
```

#### enable passwordless login

```shell
tim@pi-orange:~ $ sudo nano /etc/ssh/sshd_config
```

```ini
# /etc/ssh/sshd_config
# UNCOMMENT FOLLOWING LINES

PubkeyAuthentication yes
PasswordAuthentication yes
PermitEmptyPasswords no
```

```shell
tim@pi-orange:~ $ sudo systemctl restart ssh
tim@pi-orange:~ $ sudo shutdown -h now
```

```shell
tim@pi-grey:~ $ sudo ssh-keygen -t rsa -b 4096 -C "tim@pi-grey"
```

_use blank password_

```shell
tim@pi-grey:~ $ ssh-copy-id -i /home/pi/.ssh/id_rsa.pub tim@pi-orange
```

### Add remaining compute nodes

```shell
tim@pi-grey:~ $ sudo su
root@pi-grey:~ # mkdir -p /network-boot/pi-red
root@pi-grey:~ # mkdir -p /network-boot/pi-yellow
root@pi-grey:~ # cp -a /network-boot/pi-orange/* /network-boot/pi-red
root@pi-grey:~ # cp -a /network-boot/pi-orange/* /network-boot/pi-yellow
root@pi-grey:~ # mkdir -p /network-boot/tftp/1862a49b
root@pi-grey:~ # mkdir -p /network-boot/tftp/XXXXXXXX
root@pi-grey:~ # exit
```

```shell
tim@pi-grey:~ $ sudo su nano /network-boot/pi-red/boot/cmdline.txt
```

```ini
# /network-boot/pi-red/boot/cmdline.txt
console=serial0,115200 console=tty root=/dev/nfs nfsroot=192.168.50.1:/network-boot/pi-red,vers=4.1,proto=tcp rw ip=dhcp rootwait
```

```shell
tim@pi-grey:~ $ sudo su nano /network-boot/pi-red/etc/hostname
```

```ini
# /network-boot/pi-red/etc/hostname
pi-red
```

```shell
tim@pi-grey:~ $ sudo su nano /network-boot/pi-red/etc/hosts
```

```ini
# /network-boot/pi-red/etc/hosts
127.0.0.1       localhost
::1             localhost ip6-localhost ip6-loopback
ff02::1         ip6-allnodes
ff02::2         ip6-allrouters

127.0.1.1       pi-red
192.168.50.1	pi-grey

192.168.50.11	pi-orange
192.168.50.12	pi-red
192.168.50.13	pi-yellow
```

```shell
tim@pi-grey:~ $ sudo su nano /network-boot/pi-yellow/boot/cmdline.txt
```

```ini
# /network-boot/pi-yellow/boot/cmdline.txt
console=serial0,115200 console=tty root=/dev/nfs nfsroot=192.168.50.1:/network-boot/pi-yellow,vers=4.1,proto=tcp rw ip=dhcp rootwait
```

```shell
tim@pi-grey:~ $ sudo su nano /network-boot/pi-yellow/etc/hostname
```

```ini
# /network-boot/pi-yellow/etc/hostname
pi-yellow
```

```shell
tim@pi-grey:~ $ sudo su nano /network-boot/pi-red/etc/hosts
```

```ini
# /network-boot/pi-red/etc/hosts
127.0.0.1       localhost
::1             localhost ip6-localhost ip6-loopback
ff02::1         ip6-allnodes
ff02::2         ip6-allrouters

127.0.1.1       pi-yellow
192.168.50.1	pi-grey

192.168.50.11	pi-orange
192.168.50.12	pi-red
192.168.50.13	pi-yellow
```

```shell
tim@pi-grey:~ $ sudo reboot
```
