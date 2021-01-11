const Employee = require('../models/employeers.models');
let employees = {};

employees.getEmployeers = async(req,res)=>{
    const employees = await Employee.find({});
    res.json(employees);
};

employees.getEmployeer = async(req,res)=>{
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

employees.postEmployeer = async(req,res)=>{
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.json({message:"employee added"})
};

employees.putEmployeer = async(req,res)=>{
    await Employee.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        position:req.body.position,
        salary:req.body.salary,
        office:req.body.office
    });
    res.json({message:"employee updated"});
};

employees.deleteEmployeer = async(req,res)=>{
    await Employee.findByIdAndDelete(req.params.id)
    res.json({message:"employee deleted"});
};

module.exports = employees;