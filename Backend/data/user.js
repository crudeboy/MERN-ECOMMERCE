import bcrypt from "bcryptjs"

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 12),
        isAdmin: true
    },
    {
        name: 'J-bobo',
        email: 'bobo@example.com',
        password: bcrypt.hashSync('123456', 12),
        isAdmin: true
    },
    {
        name: 'J-lington',
        email: 'lington@example.com',
        password: bcrypt.hashSync('123456', 12),
        isAdmin: true
    },
]


export default users;