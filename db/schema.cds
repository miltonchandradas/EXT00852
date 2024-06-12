namespace db;

using {
    managed,
    cuid,
} from '@sap/cds/common';


entity Employees : cuid, managed {
    name : String;
    age  : Integer;
}
