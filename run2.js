#!/bin/sh
UUID=${UUID:-'ca972a18-a71d-41d7-b8c0-ce12bb4158f7'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
