echo "Starting rsync of Carts Service files..."
rsync -av — progress -e "ssh -i ~/.ssh/amazon.pem" ~/Documents/Programming/SearchProject.nosync/search-project/carts ec2-user@searchproducts.alex-lindsay.com:/var/www/api/
echo "Finished rsync of Products Service files."

echo "Starting setting service environment file to dev..."
ssh -v -i ~/.ssh/amazon.pem ec2-user@searchproducts.alex-lindsay.com cp /var/www/api/carts/.env.dev /var/www/api/carts/.env
echo "Finished setting service environment file to dev."
