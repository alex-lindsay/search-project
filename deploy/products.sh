rsync -av — progress -e "ssh -i ~/.ssh/amazon.pem" ~/Documents/Programming/SearchProject.nosync/search-project/products ec2-user@searchproject.remote:/var/www/api/

ssh -i ~/.ssh/amazon.pem ec2-user@searchproject.remote cp /var/www/api/products/.env.dev /var/www/api/products/.env
