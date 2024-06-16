import {Injectable,} from '@angular/core';
import {CategoriesModal} from "../../modals/categories.modal";



@Injectable({
  providedIn: 'root'
})
export class CategoriesService{

  selectedCategoryArray:Array<{ categoryId: number; subCategoryId: number  }> =[];

  tempCategories: Array<CategoriesModal> = [
    {
      id: 1,
      section: "Administrative",
      subCats: [
        { subId: 101, subCatName: "Receptionist" },
        { subId: 102, subCatName: "Office Clerk" },
        { subId: 103, subCatName: "Data Entry Clerk" },
        { subId: 104, subCatName: "Executive Assistant" },
        { subId: 105, subCatName: "Administrative Assistant" }
      ]
    },
    {
      id: 2,
      section: "Healthcare",
      subCats: [
        { subId: 201, subCatName: "Nurse" },
        { subId: 202, subCatName: "Medical Assistant" },
        { subId: 203, subCatName: "Pharmacy Technician" },
        { subId: 204, subCatName: "Lab Technician" },
        { subId: 205, subCatName: "Dental Assistant" }
      ]
    },
    {
      id: 3,
      section: "IT & Technology",
      subCats: [
        { subId: 301, subCatName: "Software Developer" },
        { subId: 302, subCatName: "System Analyst" },
        { subId: 303, subCatName: "IT Support Specialist" },
        { subId: 304, subCatName: "Network Administrator" },
        { subId: 305, subCatName: "Database Administrator" }
      ]
    },
    {
      id: 4,
      section: "Customer Service",
      subCats: [
        { subId: 401, subCatName: "Call Center Representative" },
        { subId: 402, subCatName: "Customer Support Specialist" },
        { subId: 403, subCatName: "Technical Support Representative" },
        { subId: 404, subCatName: "Client Service Coordinator" },
        { subId: 405, subCatName: "Help Desk Technician" }
      ]
    },
    {
      id: 5,
      section: "Finance",
      subCats: [
        { subId: 501, subCatName: "Accountant" },
        { subId: 502, subCatName: "Financial Analyst" },
        { subId: 503, subCatName: "Bookkeeper" },
        { subId: 504, subCatName: "Payroll Specialist" },
        { subId: 505, subCatName: "Auditor" }
      ]
    },
    {
      id: 6,
      section: "Human Resources",
      subCats: [
        { subId: 601, subCatName: "HR Coordinator" },
        { subId: 602, subCatName: "Recruiter" },
        { subId: 603, subCatName: "HR Assistant" },
        { subId: 604, subCatName: "Benefits Administrator" },
        { subId: 605, subCatName: "Training Coordinator" }
      ]
    },
    {
      id: 7,
      section: "Education",
      subCats: [
        { subId: 701, subCatName: "Substitute Teacher" },
        { subId: 702, subCatName: "Teacher Assistant" },
        { subId: 703, subCatName: "Tutor" },
        { subId: 704, subCatName: "School Counselor" },
        { subId: 705, subCatName: "Librarian" }
      ]
    },
    {
      id: 8,
      section: "Manufacturing",
      subCats: [
        { subId: 801, subCatName: "Assembler" },
        { subId: 802, subCatName: "Machinist" },
        { subId: 803, subCatName: "Quality Control Inspector" },
        { subId: 804, subCatName: "Production Worker" },
        { subId: 805, subCatName: "Packaging Operator" }
      ]
    },
    {
      id: 9,
      section: "Hospitality",
      subCats: [
        { subId: 901, subCatName: "Housekeeper" },
        { subId: 902, subCatName: "Event Staff" },
        { subId: 903, subCatName: "Catering Assistant" },
        { subId: 904, subCatName: "Front Desk Agent" },
        { subId: 905, subCatName: "Concierge" }
      ]
    },
    {
      id: 10,
      section: "Retail",
      subCats: [
        { subId: 1001, subCatName: "Sales Associate" },
        { subId: 1002, subCatName: "Cashier" },
        { subId: 1003, subCatName: "Stock Clerk" },
        { subId: 1004, subCatName: "Store Manager" },
        { subId: 1005, subCatName: "Merchandiser" }
      ]
    },
    {
      id: 11,
      section: "Logistics",
      subCats: [
        { subId: 1101, subCatName: "Warehouse Worker" },
        { subId: 1102, subCatName: "Delivery Driver" },
        { subId: 1103, subCatName: "Forklift Operator" },
        { subId: 1104, subCatName: "Shipping Clerk" },
        { subId: 1105, subCatName: "Inventory Specialist" }
      ]
    },
    {
      id: 12,
      section: "Construction",
      subCats: [
        { subId: 1201, subCatName: "Laborer" },
        { subId: 1202, subCatName: "Carpenter" },
        { subId: 1203, subCatName: "Electrician" },
        { subId: 1204, subCatName: "Plumber" },
        { subId: 1205, subCatName: "Painter" }
      ]
    }
  ];

  constructor() {
  }

}
