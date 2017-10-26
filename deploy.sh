git checkout master

git branch -D gh-pages
git push origin --delete gh-pages

npm run dist
git add dist -f
git commit -m "to gh-page"
git subtree push --prefix dist origin gh-pages

git checkout master

echo "Finish..."

read