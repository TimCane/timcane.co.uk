---
title: PI Cluster
---

# How to build a Raspberry Pi cluster

This page is a customised version of the [official raspberry pi tutorial](https://www.raspberrypi.com/tutorials/cluster-raspberry-pi-tutorial/).

## Hardware

| **Hostname**                         | **IP Address**               | **MAC Address**   | **Serial Number** | **Boot Mode** | **HAT**                                                                                           |
| ------------------------------------ | ---------------------------- | ----------------- | ----------------- | ------------- | ------------------------------------------------------------------------------------------------- |
| pi-grey</br><small>HEAD</small>      | 192.168.0.3</br>192.168.50.1 | DC:A6:32:7D:8B:2A | e7a04c41          | USB           | [USB & Ethernet](https://thepihut.com/products/usb-3-2-hub-gigabit-ethernet-hat-for-raspberry-pi) |
| pi-orange</br><small>CLUSTER</small> | 192.168.50.11                | DC:A6:32:31:39:61 | 60c90130          | NET           | [PoE+](https://thepihut.com/products/raspberry-pi-poe-plus-hat)                                   |
| pi-red</br><small>CLUSTER</small>    | 192.168.50.12                | E4:5F:01:63:8C:02 | 1862a49b          | NET           | [PoE+](https://thepihut.com/products/raspberry-pi-poe-plus-hat)                                   |
| pi-yellow</br><small>CLUSTER</small> | 192.168.50.13                | E4:5F:01:1F:58:56 | 2f9942e8          | NET           | [PoE+](https://thepihut.com/products/raspberry-pi-poe-plus-hat)                                   |

## Configuring ethernet ports

Create a new file called `/etc/network/interfaces.d/eth1` which should like this:

```
auto eth1
allow-hotplug eth1
iface eth1 inet static
    address 192.168.0.3
    netmask 255.255.255.0
    gateway 192.168.0.1
```

Create a new file called `/etc/network/interfaces.d/eth0` which should like this:

```
auto eth0
allow-hotplug eth0
iface eth0 inet static
    address 192.168.50.1
    netmask 255.255.255.0
    network 192.168.50.0
    broadcast 192.168.50.255
```

Afterwards, reboot. The network configuration should look like this:

```shellsession
tim@pi-grey:~ $ ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.50.1  netmask 255.255.255.0  broadcast 192.168.50.255
        inet6 fe80::2a91:c6ed:4b45:fbf1  prefixlen 64  scopeid 0x20<link>
        ether DC:A6:32:7D:8B:2A  txqueuelen 1000  (Ethernet)
        RX packets 87139  bytes 46275028 (44.1 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 135373  bytes 168721338 (160.9 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

eth1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.0.3  netmask 255.255.255.0  broadcast 192.168.0.255
        inet6 fe80::2e0:4cff:fe68:24a  prefixlen 64  scopeid 0x20<link>
        ether 00:E0:4C:68:02:4A  txqueuelen 1000  (Ethernet)
        RX packets 87  bytes 7891 (7.7 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 89  bytes 12428 (12.1 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 16  bytes 3273 (3.1 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 16  bytes 3273 (3.1 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether DC:A6:32:7D:8B:2C  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

#### Configuring the DHCP server

Now we have a second Gigabit Ethernet connection out to the world via `eth1`, and our onboard Ethernet is configured with a static IP address, it’s time to make our Raspberry Pi into a DHCP server for our cluster on `eth0`.

Start by installing the DHCP server itself

```shellsession
tim@pi-grey:~ $ sudo apt install isc-dhcp-server
```

and then edit the `/etc/dhcp/dhcpd.conf` file as follows:

```
ddns-update-style none;
authoritative;
log-facility local7;

# No service will be given on this subnet
subnet 192.168.1.0 netmask 255.255.255.0 {
}

# The internal cluster network
group {
    option broadcast-address 192.168.50.255;
    option routers 192.168.50.1;
    default-lease-time 600;
    max-lease-time 7200;
    option domain-name "pi-cluster";
    option domain-name-servers 8.8.8.8, 8.8.4.4;
    subnet 192.168.50.0 netmask 255.255.255.0 {
        range 192.168.50.20 192.168.50.250;

        # Head Node
        host pi-grey {
            hardware ethernet DC:A6:32:7D:8B:2A;
            fixed-address 192.168.50.1;
        }

    }
}
```

Then edit the `/etc/default/isc-dhcp-server` file to reflect our new server setup

```
DHCPDv4_CONF=/etc/dhcp/dhcpd.conf
DHCPDv4_PID=/var/run/dhcpd.pid
INTERFACESv4="eth0"
```

as well as the `/etc/hosts` file

```
127.0.0.1       localhost
::1             localhost ip6-localhost ip6-loopback
ff02::1         ip6-allnodes
ff02::2         ip6-allrouters

127.0.1.1       pi-grey

192.168.50.1    pi-grey
```

and then you can reboot the head node to start the DHCP service.

We’ve set things up so that known hosts that aren’t known are allocated an IP address starting from `192.168.50.20`. Once we know the MAC addresses of our compute nodes we can add them to the `/etc/dhcp/dhcpd.conf` file so they grab static IP addresses going forward rather than getting a random one as they come up.

#### Making the disk available to the cluster

We’re going to want to make the disk available across the cluster. You’ll need to install the NFS server software,

```shellsession
tim@pi-grey:~ $ sudo apt install nfs-kernel-server
```

create a mount point which we can share,

```shellsession
tim@pi-grey:~ $ sudo mkdir /network-share
tim@pi-grey:~ $ sudo chown tim:tim /network-share
```

and then edit the `/etc/exports` file to add a list of IP addresses from which you want to be able to mount your disk.

```
/network-share 192.168.50.0/24(rw,sync)
```

Here we’re exporting it to `192.168.50.0/24` which is shorthand for “_…all the IP addresses between `192.168.50.0` and `192.168.50.254`._”

After doing this you should enable, and then start, both the `rpcbind` and `nfs-server` services,

```shellsession
tim@pi-grey:~ $ sudo systemctl enable rpcbind.service
tim@pi-grey:~ $ sudo systemctl start rpcbind.service
tim@pi-grey:~ $ sudo systemctl enable nfs-server.service
tim@pi-grey:~ $ sudo systemctl start nfs-server.service
```

and then reboot.

```shellsession
tim@pi-grey:~ $ sudo reboot
```

---

## Adding the first node

We’re going to set up our compute node to network boot from our head node. To do that you will have to configure our nodes for network boot.

#### Setting up the head node as a boot server

We now need to configure our head node to act as a boot server. There are several options here, but we’re going to use our existing DHCP server, along with a standalone TFTP server. You should create a mount point for the server, and install it:

```shellsession
tim@pi-grey:~ $ sudo apt install tftpd-hpa
tim@pi-grey:~ $ sudo apt install kpartx
tim@pi-grey:~ $ sudo mkdir /network-boot/tftp
tim@pi-grey:~ $ sudo chown tftp:tftp /network-boot/tftp
```

edit the `/etc/default/tftpd-hpa` file:

```
TFTP_USERNAME="tftp"
TFTP_DIRECTORY="/network-boot/tftp"
TFTP_ADDRESS=":69"
TFTP_OPTIONS="--secure --create"
```

and restart the service.

```shellsession
tim@pi-grey:~ $ sudo systemctl restart tftpd-hpa
```

We then need to set up our boot image, and we’re going to need to create one image per client. The first step is to grab the latest image from the web and mount it so we can make some changes, and then mount the partitions inside the image so we can copy the contents to our disk.

```shellsession
tim@pi-grey:~ $ sudo su
root@pi-grey:~ # mkdir /tmp/image
root@pi-grey:/tmp/image # cd /tmp/image
root@pi-grey:/tmp/image # wget -O raspios_lite_arm64.img.xz https://downloads.raspberrypi.org/raspios_lite_arm64/images/raspios_lite_arm64-2023-05-03/2023-05-03-raspios-bullseye-arm64-lite.img.xz
root@pi-grey:/tmp/image # xz --decompress raspios_lite_arm64.img.xz
root@pi-grey:/tmp/image # kpartx -a -v *.img
root@pi-grey:/tmp/image # mkdir bootmnt
root@pi-grey:/tmp/image # mkdir rootmnt
root@pi-grey:/tmp/image # mount /dev/mapper/loop0p1 bootmnt/
root@pi-grey:/tmp/image # mount /dev/mapper/loop0p2 rootmnt/
root@pi-grey:/tmp/image # mkdir -p /network-boot/pi-orange
root@pi-grey:/tmp/image # mkdir -p /network-boot/tftp/60c90130
root@pi-grey:/tmp/image # cp -a rootmnt/* /network-boot/pi-orange
root@pi-grey:/tmp/image # cp -a bootmnt/* /network-boot/pi-orange/boot
```

Afterwards, we can customise the root file system:

```shellsession
root@pi-grey:/tmp/image # touch /network-boot/pi-orange/boot/ssh
root@pi-grey:/tmp/image # sed -i /UUID/d /network-boot/pi-orange/etc/fstab
root@pi-grey:/tmp/image # echo "192.168.50.1:/network-boot/tftp /boot nfs defaults,vers=4.1,proto=tcp 0 0" >> /network-boot/pi-orange/etc/fstab
root@pi-grey:/tmp/image # echo "console=serial0,115200 console=tty root=/dev/nfs nfsroot=192.168.50.1:/network-boot/pi-orange,vers=4.1,proto=tcp rw ip=dhcp rootwait" > /network-boot/pi-orange/boot/cmdline.txt
```

create a new file here containing your user name and encrypted password `/network-boot/pi-orange/boot/userconf`. See Headless setup [here](https://www.raspberrypi.com/news/raspberry-pi-bullseye-update-april-2022/)

```
tim:$6$Pp1bRRnPBm3wcbG.$LYUGp3j7olEbbIdPAD/1Btfg3QOIOVnUzjFTKag2Jb0p84zLCHBfD5kokmEUMCG6Fcyu4Y8oh3T94vzuj4ama0
```

add it to the `/etc/fstab` and `/etc/exports` files on the head node:

```shellsession
root@pi-grey:/tmp/image # echo "/network-boot/pi-orange/boot /network-boot/tftp/60c90130 none defaults,bind 0 0" >> /etc/fstab
root@pi-grey:/tmp/image # echo "/network-boot/pi-orange 192.168.50.0/24(rw,sync,no_subtree_check,no_root_squash)" >> /etc/exports
```

and then clean up after ourselves.

```shellsession
root@pi-grey:/tmp/image # systemctl restart rpcbind
root@pi-grey:/tmp/image # systemctl restart nfs-server
root@pi-grey:/tmp/image # umount bootmnt/
root@pi-grey:/tmp/image # umount rootmnt/
root@pi-grey:/tmp # cd /tmp; rm -rf image
root@pi-grey: # exit
```

Finally, we need to edit the `/etc/dhcp/dhcpd.conf` file as follows:

```
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
    option domain-name "pi-cluster";
    option domain-name-servers 8.8.8.8, 8.8.4.4;
    subnet 192.168.50.0 netmask 255.255.255.0 {
        range 192.168.50.20 192.168.50.250;

        # Head Node
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

    }
}
```

and reboot our Raspberry Pi.

```shellsession
tim@pi-grey:~ $ sudo reboot
```

#### Network booting our node

Make sure you’ve removed the SD card from the compute node, and plug the Raspberry Pi back into your switch. If you’ve got a spare monitor handy it might be a good idea to plug it into the HDMI port so you can watch the diagnostics screen as the node boots.

If all goes to plan the board should boot up without incident. Although there are a few things we will need to tidy up, you should now be able to SSH directly into the compute node.

```shellsession
tim@pi-grey:~ $ ssh 192.168.50.11
pi@192.168.50.11's password:
tim@pi-orange:~ $
```

If you were watching the boot messages on a monitor, or if you check in the logs, you can see that our image didn’t come up entirely cleanly. If you log back into the compute node you can make sure that doesn’t happen in future by turning off the feature where the Raspberry Pi tries to resize its filesystem on the first boot, and also by uninstalling the swap daemon.

```shellsession
tim@pi-orange:~ $ sudo systemctl disable resize2fs_once.service
tim@pi-orange:~ $ sudo apt remove dphys-swapfile
```

Next, we can make things slightly easier on ourselves, so that we don’t have to use the IP address of our compute and head nodes every time, by adding our current and future compute nodes to the `/etc/hosts` file on both our head and compute nodes.

```
127.0.0.1	localhost
::1		localhost ip6-localhost ip6-loopback
ff02::1		ip6-allnodes
ff02::2		ip6-allrouters

127.0.1.1	pi-grey

192.168.50.1	pi-grey

192.168.50.11	pi-orange
192.168.50.12	pi-red
192.168.50.13	pi-yellow
```

Finally, we should change the hostname from the default `raspberrypi` to `pi-orange` using the `raspi-config` command-line tool.

```shellsession
tim@pi-orange:~ $ sudo raspi-config
```

Select “Network Options,” then “Hostname” to change the hostname of the compute node, and select “Yes” to reboot.

#### Mounting the network share

Normally if we were mounting a network disk we’d make use `autofs` rather than adding it as an entry directly into the `/etc/fstab` file. However here, with our entire root filesystem mounted via the network, that seems like unnecessary effort.

After it reboots log back into your compute node, add a mount point:

```shellsession
tim@pi-orange:~ $ sudo mkdir /network-share
tim@pi-orange:~ $ sudo chown tim:tim /network-share
```

and edit the `/etc/fstab` file there to add the network share.

```
192.168.50.1:/network-share /network-share nfs defaults 0 0
```

Then reboot the compute node.

```shellsession
tim@pi-orange:~ $ sudo reboot
```

#### Secure shell without a password

It’s going to get pretty tiresome secure-shelling between the cluster head node and the compute nodes and having to type your password each time. So let’s enable secure shell without a password by generating a public/private key pair.

On the compute node you should edit the `/etc/ssh/sshd_config` file to enable public key login:

```
PubkeyAuthentication yes
PasswordAuthentication yes
PermitEmptyPasswords no
```

and then restart the `sshd` server.

```shellsession
tim@pi-orange:~ $ sudo systemctl restart ssh
```

Then going back to the head node we need to generate our public/private key pair and distribute the public key to the compute node. Use a blank passphrase when asked.

```shellsession
tim@pi-grey:~ $ ssh-keygen -t rsa -b 4096 -C "tim@pi-cluster"
Generating public/private rsa key pair.
Enter file in which to save the key (/home/pi/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/pi/.ssh/id_rsa
Your public key has been saved in /home/pi/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:XdaHog/sAf1QbFiZj7sS9kkFhCJU9tLN0yt8OvZ52gA tim@pi-cluster
The key's randomart image is:
+---[RSA 4096]----+
|     ...o  *+o   |
|      ...+o+*o . |
|       .o.=.B++ .|
|         = B.ooo |
|        S * Eoo  |
|         .o+o=   |
|         ..+=o.  |
|          ..+o +.|
|           .  +o.|
+----[SHA256]-----+
tim@pi-grey:~ $ ssh-copy-id -i /home/pi/.ssh/id_rsa.pub pi@pi-orange
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/pi/.ssh/id_rsa.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
pi@pi-orange's password:

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'pi@pi-orange'"
and check to make sure that only the key(s) you wanted were added.
```

Afterwards, you should be able to login to the compute node without having to type your password.

#### Access to the outside world

One thing our compute node doesn’t have right now is access to the LAN. Right now the compute node can only see the head node and eventually, once we add them, the rest of the compute nodes. But we can fix that! On the head node go and edit the `/etc/sysctl.conf` file by uncommenting the line saying,

```
net.ipv4.ip_forward=1
```

After activating forwarding we’ll need to configure `iptables`:

```shellsession
tim@pi-grey:~ $ apt install iptables
tim@pi-grey:~ $ sudo iptables -t nat -A POSTROUTING -o eth1 -j MASQUERADE
tim@pi-grey:~ $ sudo iptables -A FORWARD -i eth1 -o eth0 -m state --state RELATED,ESTABLISHED -j ACCEPT
tim@pi-grey:~ $ sudo iptables -A FORWARD -i eth0 -o eth1 -j ACCEPT
tim@pi-grey:~ $ sudo sh -c "iptables-save > /etc/iptables.ipv4.nat"
```

and then add a line — just above the `exit 0` line — in the `/etc/rc.local` file a line to load the tables on boot:

```
_IP=$(hostname -I) || true
if [ "$_IP" ]; then
    printf "My IP address is %s\n" "$_IP"
fi

iptables-restore < /etc/iptables.ipv4.nat

exit 0
```

and reboot.

```shellsession
tim@pi-grey:~ $ sudo reboot
```

Note that if you still have the compute node running, you should log on to that first and shut it down, as the root filesystem for that lives on a disk attached to our head node.

---

## Adding the additional compute nodes

Adding the rest of the compute nodes is going to be much more straightforward than adding our first node as we can now use our customised image and avoid some of the heavy lifting we did for the first compute node. Configure the remaining nodes for network boot.

### pi-red

On the head node we can use our already configured image as the basis of the operating system for the compute node.

```shellsession
tim@pi-grey:~ $ sudo su
root@pi-grey:~ # mkdir -p /network-boot/pi-red
root@pi-grey:~ # cp -a /network-boot/pi-orange/* /network-boot/pi-red
root@pi-grey:~ # mkdir -p /network-boot/tftp/1862a49b
root@pi-grey:~ # echo "/network-boot/pi-red/boot /network-boot/tftp/1862a49b none defaults,bind 0 0" >> /etc/fstab
root@pi-grey:~ # echo "/network-boot/pi-red 192.168.50.0/24(rw,sync,no_subtree_check,no_root_squash)" >> /etc/exports
root@pi-grey:~ # exit
```

Then we need to edit the `/network-boot/pi-red/boot/cmdline.txt`, replacing “`pi-orange`” with “`pi-red`“:

```
console=serial0,115200 console=tty root=/dev/nfs nfsroot=192.168.50.1:/network-boot/pi-red,vers=4.1,proto=tcp rw ip=dhcp rootwait
```

and similarly for `/network-boot/pi-red/etc/hostname`.

```
pi-red
```

Finally, we need to edit the `/etc/dhcp/dhcpd.conf` file on the head node:

```
host pi-red {
    option root-path "/network-boot/tftp/";
    hardware ethernet E4:5F:01:63:8C:02;
    option option-43 "Raspberry Pi Boot";
    option option-66 "192.168.50.1";
    next-server 192.168.50.1;
    fixed-address 192.168.50.12;
    option host-name "pi-red";
}
```

### pi-yellow

Now repeat the same steps as above but for the final compute node

```
tim@pi-grey:~ $ sudo su
root@pi-grey:~ # mkdir -p /network-boot/pi-yellow
root@pi-grey:~ # cp -a /network-boot/pi-orange/* /network-boot/pi-yellow
root@pi-grey:~ # mkdir -p /network-boot/tftp/2f9942e8
root@pi-grey:~ # echo "/network-boot/pi-yellow/boot /network-boot/tftp/2f9942e8 none defaults,bind 0 0" >> /etc/fstab
root@pi-grey:~ # echo "/network-boot/pi-yellow 192.168.50.0/24(rw,sync,no_subtree_check,no_root_squash)" >> /etc/exports
root@pi-grey:~ # exit
```

Then we need to edit the `/network-boot/pi-yellow/boot/cmdline.txt`, replacing “`pi-orange`” with “`pi-yellow`“:

```
console=serial0,115200 console=tty root=/dev/nfs nfsroot=192.168.50.1:/network-boot/pi-yellow,vers=4.1,proto=tcp rw ip=dhcp rootwait
```

and similarly for `/network-boot/pi-yellow/etc/hostname`.

```
pi-yellow
```

Finally, we need to edit the `/etc/dhcp/dhcpd.conf` file on the head node:

```
host pi-yellow {
    option root-path "/network-boot/tftp/";
    hardware ethernet E4:5F:01:1F:58:56;
    option option-43 "Raspberry Pi Boot";
    option option-66 "192.168.50.1";
    next-server 192.168.50.1;
    fixed-address 192.168.50.13;
    option host-name "pi-yellow";
}
```

and reboot our head node.

```
    $ sudo reboot
```

Afterwards, you should see both `pi-orange`, `pi-red` and `pi-yellow` are up and running. If you’re interested, we can get a better look at our cluster network by installing `nmap` on the head node.

```shellsession
tim@pi-grey:~ $ nmap 192.168.50.0/24
Starting Nmap 7.80 ( https://nmap.org ) at 2023-05-21 16:52 BST
Nmap scan report for pi-grey (192.168.50.1)
Host is up (0.0015s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
111/tcp  open  rpcbind
2049/tcp open  nfs

Nmap scan report for pi-orange (192.168.50.11)
Host is up (0.0016s latency).
Not shown: 999 closed ports
PORT   STATE SERVICE
22/tcp open  ssh

Nmap scan report for pi-red (192.168.50.12)
Host is up (0.0017s latency).
Not shown: 999 closed ports
PORT   STATE SERVICE
22/tcp open  ssh

Nmap scan report for pi-yellow (192.168.50.12)
Host is up (0.0014s latency).
Not shown: 999 closed ports
PORT   STATE SERVICE
22/tcp open  ssh

Nmap done: 256 IP addresses (4 hosts up) scanned in 3.07 seconds

```
