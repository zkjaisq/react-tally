#!/user/bin/env/ bash
cd dist
git init
git add .
git commit -m deploy
git remote add origin github@github.com:zkjaisq/react-tally
git push origin main:main
cd -

# sh bin/deploy_to_github.sh