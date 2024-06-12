using {db} from '../db/schema';

@path: 'service/employees'
service EmployeeService {
    entity Employees as projection on db.Employees;

}
