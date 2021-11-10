const path = require("path");
const fs = require('fs');

const user = {
    all: ()=>{
        const directory = path.resolve(__dirname, '../data/users.json');
        const file = fs.readFileSync(directory,'utf-8');
        const list = JSON.parse(file);
        return list;
    },
    //Econtrar por "primary key"
    findByPk: (id)=>{
        let allUsers = user.all();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
    //Econtrar por campo
    findByField: (field, text)=>{
        let allUsers = user.all();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },
    //Sobreescribe el array de usuarios
    write:(userList)=>{
        const directory = path.resolve(__dirname, '../data/users.json');
        let newUserList = JSON.stringify(userList,null,2);
        fs.writeFileSync(directory, newUserList);
        return true
    },
    create: (newData, imgFile)=>{
        let users = user.all();
        let newId = users.length > 0? users[users.length-1].id +1 : 1
        let newUser = {
            id: newId,
            name: newData.name,
            pic: imgFile == undefined ? 'default-user.jpg' : imgFile.filename
        }
        users.push(newUser);
        if(user.write(users) == true){
            return true
        }
    }
}
module.exports = user