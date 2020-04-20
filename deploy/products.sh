echo "Starting rsync of Products Service files..."
rsync -av — progress -e "ssh -i ~/.ssh/amazon.pem" ~/Documents/Programming/SearchProject.nosync/search-project/products ec2-user@searchproducts.alex-lindsay.com:/var/www/api/
echo "Finished rsync of Products Service files."

echo "Starting setting service environment file to dev..."
ssh -v -i ~/.ssh/amazon.pem ec2-user@searchproducts.alex-lindsay.com cp /var/www/api/products/.env.dev /var/www/api/products/.env
echo "Finished setting service environment file to dev."
