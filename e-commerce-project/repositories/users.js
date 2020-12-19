const fs = require("fs");
const crypto = require("crypto");

class UsersRepository{
    constructor(filename){
        if(!filename){
            throw new Error("Creating a repository requires a filename");
        }

        this.filename = filename;
        try{
            fs.accessSync(this.filename)
        }catch(err){
            fs.writeFileSync(this.filename,"[]");
        }
    }

    async getAll(){
        //open the file called this.filename
        return  JSON.parse(await fs.promises.readFile(this.filename,{ 
            encoding:'utf-8'
        }));
    }

    async create(attrs){
        //{email:'alskdf@alskdjf.com'},password:'password'}
        // console.log({attrs});
        attrs.id = this.randomID();

        const records = await this.getAll();
        records.push(attrs);
        //write the updated 'records' array back to this.filename
        // await fs.promises.writeFile(this.filename, JSON.stringify(records));
        await this.writeAll(records);
    }

    async writeAll(records){
        await fs.promises.writeFile(this.filename,JSON.stringify(records,null,2));
    }
    
    randomID(){
        return crypto.randomBytes(4).toString("hex");
    } 

    async getOne(id){
        const records =  await this.getAll();
        return records.find(record => record.id === id);
    }

    async delete(id){
        const records = await this.getAll();

        const filteredRecords = records.filter(record => record.id !== id);
        /**
         * filter function is only going to retain elements, that return ture
         */
        await this.writeAll(filteredRecords);
        
    }

    async update(id,attrs){
        const records = await this.getAll();
        const record = records.find(record => record.id === id);

        if(!record){
            throw new Error(`Record with id ${id} not found`);
        }
        //record === {email:"test@test.com"}
        // attrs === {password:"mypassword"}
        Object.assign(record,attrs);
        //record === {email: "test@test.com",password:"mypassword"}
        await this.writeAll(records);
    }

    async getOneBy(filters){
        const records = await this.getAll();

        for(let record of records){
            let found = true;

            for(let key in filters){
                if(record[key]!==  )
            }
        }
    }
}

const test = async () => {
    const repo = new UsersRepository("users.json");  

    // repo.create({email : "test@test.com",password: "password"});
    // await repo.create({email:"test@test.com"});
    // const users = await repo.getAll();
    // console.log(users);

    // const user = await repo.getOne("64c24385");
    // console.log({user});
    
    // await repo.delete("64c24385");
    // await repo.update("4d44f2a7",{password: "mypassword"})
   
    // await repo.getOneBy({ email : "test@test.com" });
}
 
test();
