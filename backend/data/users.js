import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Baba Booey',
        email: 'bababooey@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Holmes Dude',
        email: 'holmesdude@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users