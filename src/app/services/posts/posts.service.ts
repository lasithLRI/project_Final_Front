import {Injectable, OnInit} from '@angular/core';
import {CategoriesService} from "../categories/categories.service";
import {PostModal} from "../../modals/Post.modal";



@Injectable({
  providedIn: 'root'
})
export class PostsService{

  constructor(private categoriesService:CategoriesService) {
  }

  posts: PostModal[] = [
    {
      id: 1,
      title: "Administrative Assistant Needed",
      location: "New York, NY",
      description: "We are seeking an Administrative Assistant to manage office tasks, schedule meetings, and support executives.",
      shortDescription: "Administrative Assistant role in NY office.",
      price: 50000,
      category: { subId: 105, subCatName: "Administrative Assistant" },
      section: {
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
      contactNumbers: [1234567890, 9876543210]
    },
    {
      id: 2,
      title: "Certified Nurse",
      location: "Los Angeles, CA",
      description: "Looking for a Certified Nurse to join our healthcare team. Responsibilities include patient care and assisting doctors.",
      shortDescription: "Certified Nurse position available in LA.",
      price: 75000,
      category: { subId: 201, subCatName: "Nurse" },
      section: {
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
      contactNumbers: [2345678901, 8765432109]
    },
    {
      id: 3,
      title: "Software Developer",
      location: "San Francisco, CA",
      description: "Seeking a skilled Software Developer to create and maintain software applications for our tech firm.",
      shortDescription: "Software Developer needed in SF.",
      price: 90000,
      category: { subId: 301, subCatName: "Software Developer" },
      section: {
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
      contactNumbers: [3456789012, 7654321098]
    },
    {
      id: 4,
      title: "Call Center Representative",
      location: "Chicago, IL",
      description: "We are hiring Call Center Representatives to handle customer inquiries and provide support.",
      shortDescription: "Call Center Representative job in Chicago.",
      price: 40000,
      category: { subId: 401, subCatName: "Call Center Representative" },
      section: {
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
      contactNumbers: [4567890123, 6543210987]
    },
    {
      id: 5,
      title: "Financial Analyst",
      location: "Boston, MA",
      description: "Financial Analyst needed to analyze financial data, prepare reports, and assist in decision-making.",
      shortDescription: "Financial Analyst opportunity in Boston.",
      price: 80000,
      category: { subId: 502, subCatName: "Financial Analyst" },
      section: {
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
      contactNumbers: [5678901234, 5432109876]
    },
    {
      id: 6,
      title: "HR Coordinator",
      location: "Austin, TX",
      description: "HR Coordinator needed to manage HR tasks, employee relations, and recruitment processes.",
      shortDescription: "HR Coordinator role in Austin.",
      price: 60000,
      category: { subId: 601, subCatName: "HR Coordinator" },
      section: {
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
      contactNumbers: [6789012345, 4321098765]
    },
    {
      id: 7,
      title: "Substitute Teacher",
      location: "Seattle, WA",
      description: "Hiring Substitute Teachers for various subjects in our school district. Must be flexible and reliable.",
      shortDescription: "Substitute Teacher positions in Seattle.",
      price: 45000,
      category: { subId: 701, subCatName: "Substitute Teacher" },
      section: {
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
      contactNumbers: [7890123456, 3210987654]
    },
    {
      id: 8,
      title: "Quality Control Inspector",
      location: "Detroit, MI",
      description: "Seeking a Quality Control Inspector to ensure manufacturing standards are met in our production facility.",
      shortDescription: "Quality Control Inspector needed in Detroit.",
      price: 55000,
      category: { subId: 803, subCatName: "Quality Control Inspector" },
      section: {
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
      contactNumbers: [8901234567, 2109876543]
    },
    {
      id: 9,
      title: "Event Staff",
      location: "Las Vegas, NV",
      description: "Hiring Event Staff to assist with organizing and managing events. Responsibilities include setup, coordination, and customer service.",
      shortDescription: "Event Staff required for events in Las Vegas.",
      price: 35000,
      category: { subId: 902, subCatName: "Event Staff" },
      section: {
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
      contactNumbers: [9012345678, 1098765432]
    },
    {
      id: 10,
      title: "Warehouse Worker",
      location: "Phoenix, AZ",
      description: "Warehouse Workers needed to manage inventory, load/unload trucks, and maintain warehouse organization.",
      shortDescription: "Warehouse Worker positions in Phoenix.",
      price: 40000,
      category: { subId: 1101, subCatName: "Warehouse Worker" },
      section: {
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
      contactNumbers: [1234567890, 9876543210]
    }
  ];

  postsToDisplay:Array<PostModal>=[];

  addPostToShow(){
    const selectedCategories = this.categoriesService.selectedCategoryArray;

    if (selectedCategories.length !==0){
      this.postsToDisplay = this.posts.filter(post => {
        return selectedCategories.some(selected =>
          selected.categoryId === post.section.id && selected.subCategoryId=== post.category.subId
        );
      });
    }else{
      this.postsToDisplay = [...this.posts];
    }
  }

  checkSelectedCategories(): Array<PostModal> {
    if (this.categoriesService.selectedCategoryArray.length !== 0) {
      this.addPostToShow();  // Update posts to display based on selected categories
      // Add any additional logic here if needed
    } else {
      this.addPostToShow();  // Ensure all posts are displayed if no category is selected
    }

    return this.postsToDisplay
  }


}
