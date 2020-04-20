echo "Starting rsync of Search Service files..."
rsync -av — progress -e "ssh -i ~/.ssh/amazon.pem" ~/Documents/Programming/SearchProject.nosync/search-project/search ec2-user@searchproducts.alex-lindsay.com:/var/www/api/
echo "Finished rsync of Search Service files."

echo "Starting setting Search Service environment file to dev..."
ssh -v -i ~/.ssh/amazon.pem ec2-user@searchproducts.alex-lindsay.com cp /var/www/api/search/.env.dev /var/www/api/search/.env
echo "Finished setting Search Service environment file to dev."
