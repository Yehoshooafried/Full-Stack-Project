const mysql =  require('mysql2');

const con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "1234Myjbh!",
        database: 'todos'
    }
);
const studentsData = [
    ['John', 1, ],
    ['Peter', 2],
    ['Amy', 1],
    ['Hannah',3 ],
    ['Michael',1],
    ['Sandy', 1],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
// con example
// con.connect((err)=>{
//     if(err) throw err;
//     console.log("connected succes");
//     const sql = "" ;
//     const  values = [
//     ]  
//     con.query(sql, (err, result)=>{
//         if (err) throw err;
//         console.log('insert succes'+ result.insertId + result.affectedRows);
//     })
// })

//creat DB
// con.connect((err)=>{
//     if(err) throw err;
//     console.log("connected succes");
//     const sql = "CREATE DATABASE school" ;
    
//     con.query(sql, (err, result)=>{
//         if (err) throw err;
//         console.log('insert succes'+ result.insertId + result.affectedRows);
//     })
// })


//creat tables


const tables = ['photos','comments','posts','albums','todos','users']
tables.map(table => {
    fetch(`https://jsonplaceholder.typicode.com/${table}`)
        .then((response) => response.json())
        .then((data) => {
            const columns = Object.keys(data[0]).map(d => `${d} VARCHAR(1000)`)
            const cell = data.map(item => Object.values(item))
            con.query(`CREATE TABLE ${table} (${[columns]})`, function (err, result) {
                if (err) throw err;
                console.log(`create ${table}`);
            })
            con.query(`INSERT INTO ${table} VALUES ?`, [cell], function (err, result) {
                if (err) throw err;
            });
        });
})
// con.connect((err)=>{
//     if(err) throw err;
//     console.log("connected succes");
// const tableName = 'students';
// const columnName= '';

//     const sql = `CREATE TABLE ${tableName} (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), teacher_id INT)`;
//     con.query(sql, (err, result)=>{
//         if (err) throw err;
//         console.log('table  crtd');
//     })
// })


// alter table

// con.connect((err)=>{
//     if(err) throw err;
//     console.log("connected succes");
//     // const sql = "ALTER TABLE students ADD COLUMN course_id INT " ;
    // const sql = "ALTER TABLE course DROP COLUMN course_id";
   
   
//     con.query(sql, (err, result)=>{
//         if (err) throw err;
//         console.log('table  crtd');
//     })
// })


//INSERT INTO 
// con.connect((err)=>{
//     if(err) throw err;
//     console.log("connected succes");
//     const sql = "INSERT INTO course (name) VALUES ?" ;
//     const  values = [
//         ['jsd'],
//         ['JAVAf'],
//         ['C#f']
//     ]  
//     con.query(sql, [values], (err, result)=>{
//         if (err) throw err;
//         console.log('insert succes'+ result.insertId + result.affectedRows);
//     })
// })


// SELECT 
// con.connect((err)=>{
//     if(err) throw err;
//     console.log("connected succes");
//     const sql = "SELECT * FROM course" ;
//     const  values = [
//     ]  
//     con.query(sql, (err, result, fields)=>{
//         if (err) throw err;
//         console.log(fields[1].db);
//     })
// })

