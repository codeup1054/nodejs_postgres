const db = require('../db')
class PostController{

    async createPost(req,res)
    {
        const {title,content,userId} = req.body
        const newPost = await db.query(
            'INSERT INTO post (title,content,user_id) values  ($1,$2,$3) RETURNING * ',
            [title,content,userId] )
        res.json(newPost.rows[0])

    }

    async createNPost(req,res)
    {
        const {title,content,userId,num} = req.body

        let qry = '($1,$2,$3),'.repeat(num)+'($1,$2,$3)'

        // console.log(qry)

        const newPost = await db.query(
            `INSERT INTO post (title,content,user_id) values ${qry}  RETURNING * `,
            [title,content,userId] )
        res.json(newPost.rows[0])

    }

    async getPostsByUser(req,res)
    {
        let lapseTime = Date.now()

        // const id = req.query.id
        const Posts  = await db.query('select * from post where user_id = 1')

        let deltaT = Date.now()-lapseTime

        console.log(Posts.rows.length,`|`, deltaT)

        lapseTime = Date.now()

        const Posts2  = await db.query('select * from post where user_id = 2' )

        const Posts_KV = []

        for (let i = 0; i < Posts2.rows.length ; i++)
        {
            Posts_KV[i] =  Posts2.rows[i]
        }

        res.json([ Posts_KV.length, Posts.rows.length])

        console.log(Posts_KV.length,'|',Date.now()-lapseTime)
        console.log(Posts_KV.length/Posts.rows.length,'|',(Date.now()-lapseTime)/deltaT)
    }
}

module.exports = new PostController()