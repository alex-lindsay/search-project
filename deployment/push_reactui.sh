rsync -av — progress -e "ssh -i ~/.ssh/amazon.pem" ~/Documents/Programming/SearchProject/search-project/reactui/build/* ec2-user@searchproject.remote:/var/www/html/reactui/