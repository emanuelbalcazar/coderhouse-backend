const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Swagger Configuration
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Employee API',
            version: '1.0.0'
        }
    },
    apis: ['server.js'],
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const employees = [
    {
        id: 1, Name: 'Jk'
    },
    {
        id: 2, Name: 'Jay'
    },
    {
        id: 3, Name: 'Curl'
    }
]

/**
 * @swagger
 * /Employees:
 *   get:
 *     description: Get all Employee
 *     responses: 
 *       200:
 *         description: Success 
 *  
 */
app.get('/Employees', (req, res) => {
    res.send(employees);
});

/**
 * @swagger
 * /Employees:
 *   post:
 *     description: Create an Employee
 *     parameters:
 *     - name: EmployeeName
 *       description: Create an new employee
 *       in: body
 *       required: true
 *       type: Object
 *     responses: 
 *       201:
 *         description: Created 
 *  
 */
app.post('/Employees', (req, res) => {
    employees.push({ id: employees.length + 1, Name: req.body.name });
    res.status(201).send();
});
/**
 * @swagger
 * /Employees:
 *   put:
 *     description: Create an Employee
 *     parameters:
 *     - name: EmployeeName
 *       description: Create an new employee
 *       in: formData
 *       required: true
 *       type: String
 *     responses: 
 *       201:
 *         description: Created 
 *  
 */
app.put('/Employees', (req, res) => {
    res.status(201).send();
});
/**
* @swagger
* /Employees:
*   delete:
*     description: Create an Employee
*     parameters:
*     - name: EmployeeName
*       description: Create an new employee
*       in: body
*       required: true
*       type: Object
*     responses: 
*       201:
*         description: Created 
*  
*/
app.delete('/Employees', (req, res) => {
    res.status(201).send();
})

const PORT = parseInt(process.argv[2]) || 8080

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el http://localhost:${PORT}`)
});