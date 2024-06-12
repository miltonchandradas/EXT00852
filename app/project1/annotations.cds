using EmployeeService as service from '../../srv/employee-service';

annotate service.Employees with @(
    UI.HeaderInfo: {
        TypeName: 'Employees',
        TypeNamePlural: 'Employees',
        
    },
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Age',
            Value : age,
        },
    ]
);