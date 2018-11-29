/*
 * @Author: yuze.xia 
 * @Date: 2018-11-28 17:23:28 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-28 17:32:52
 */
#!/bin/sh

GIT_HOME=/developer/git-repository/
DEST_PATH=/product/front/

if [ ! -n "$1" ];
then
    echo -e "plase input a project name! You can input as follows:"
    echo -e "./fe-deploy.sh admin-v2-fe"
    exit
fi

if [ $1 = "admin-v2-fe" ];
then
    echo -e "----------Enter Project----------"
    cd $GIT_HOME$1;
else 
    echo -e "Invalid Project Name!"
    exit
fi

# clean dist
echo -e "----------Clean dist----------"
rm -rf ./dist

echo -e "----------Git pull----------"
git pull

echo -e "----------Yarn Install----------"
yarn

echo -e "----------Yarn Run Dist----------"
yarn run dist

if [ -d "./dist"];
then
    echo -e "----------Clean Dist----------"
    rm -rf $DEST_PATH/dist

    echo -e "----------Copy Dist----------"
    cp -R ./dist $DEST_PATH/$1/

    echo -e "----------Deploy Success----------"
else 
    echo -e "----------Deploy Fail----------"
fi