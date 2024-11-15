import pg from "../server/src/configs/psql.config.js";
import userValidator from "../server/validator.js";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

async function generateUsers () {
    const users = []

    for(let i = 1; i <= 1000000; i++) {
        let name = "";
        let surname = "";
        let age
        let problems                

        for (let j = 0; j <= 5; j++) {
            const randomChar = Math.round( Math.random() * 25 )
            name += alphabet[randomChar]
        }

        for (let k = 0; k <= 9; k++) {
            const randomChar = Math.round( Math.random() * 25 )
            surname += alphabet[randomChar]
        }

        age = Math.round( Math.random() * 119 )
        problems = Math.round( Math.random() ) == 0

        const { error } = userValidator.validate({ name, surname, age, problems })
        
        if( error !== undefined ) {
            return "403 Validation Error!"
        }

        users.push({ name, surname, age, problems })
    }
    

    await insertUsers(0, 10000, users)
};

generateUsers()


async function insertUsers (from, to, arr) {
    if (to > 1000000) {
        return
    }

    await pg.transaction(async (trx) => {
        try {
            const slicedUsers = arr.slice(from, to) 
            
            await trx("users").insert(slicedUsers)
        
            console.log(await `${to} Users Are Successfully Inserted ...`);

            await trx.commit()
        } catch (err) {
            console.log(err.message);
            await trx("users").truncate()
            return await trx.rollback()
        }
    })

    return insertUsers(from + 10000, to + 10000, arr)
}

