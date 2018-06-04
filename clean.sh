# reference from https://github.com/vibertthio/portfolio

cd public/

if [[ $PWD != /**/public ]]; then
  echo "Dir public doesn't exist, create one and exit..."

  mkdir public
  exit 0
fi

echo "Clean all the html, js relevent files in ./public..."

find . -name "*.scss.map" -type f -delete
find . -name "*.scss" -type f -delete
find . -name "*.html" -type f -delete
find . -name "*.json" -type f -delete
find . -name "*.js.map" -type f -delete
find . -name "*.js" -type f -delete
cd ..

echo "Clean cache..."
rm -rf ./.cache/

printf "\n"
