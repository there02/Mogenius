#!/bin/sh
UUID=${UUID:-'e0e17bc8-8986-4e78-9e9a-09a0f5cc5133'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
