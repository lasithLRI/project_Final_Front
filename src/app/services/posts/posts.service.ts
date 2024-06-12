import {Injectable, OnInit} from '@angular/core';
import {PostModal, PostsList} from "../../modals/Post.modal";
import {CategoriesService} from "../categories/categories.service";

@Injectable({
  providedIn: 'root'
})
export class PostsService implements OnInit{

  constructor(private categoriesService:CategoriesService) { }

  placeholderUrl = "https://via.placeholder.com/150";

  postsList: PostsList = {
    postList: [
      {
        id: 1,
        title: 'House Cleaning Service',
        description: 'Professional house cleaning service for your home.',
        shortDescription: 'Professional house cleaning',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'New York, NY',
        price: 100,
        category: { id: 1, section: 'Home Services', subSections: [{ catId: 101, category: 'Cleaning' }] }
      },
      {
        id: 2,
        title: 'Plumbing Service',
        description: 'Expert plumbing service for all your needs.',
        shortDescription: 'Expert plumbing',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'Los Angeles, CA',
        price: 150,
        category: { id: 1, section: 'Home Services', subSections: [{ catId: 102, category: 'Plumbing' }] }
      },
      {
        id: 3,
        title: 'Office Cleaning Service',
        description: 'Reliable office cleaning service for your workplace.',
        shortDescription: 'Reliable office cleaning',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'Chicago, IL',
        price: 120,
        category: { id: 2, section: 'Office Services', subSections: [{ catId: 201, category: 'Office Cleaning' }] }
      },
      {
        id: 4,
        title: 'Office Maintenance Service',
        description: 'Comprehensive maintenance service for your office.',
        shortDescription: 'Office maintenance',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'Houston, TX',
        price: 200,
        category: { id: 2, section: 'Office Services', subSections: [{ catId: 202, category: 'Maintenance' }] }
      },
      {
        id: 5,
        title: 'Event Catering Service',
        description: 'Delicious catering service for all your events.',
        shortDescription: 'Event catering',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'Phoenix, AZ',
        price: 500,
        category: { id: 3, section: 'Event Services', subSections: [{ catId: 301, category: 'Catering' }] }
      },
      {
        id: 6,
        title: 'Event Decoration Service',
        description: 'Beautiful decoration service for any event.',
        shortDescription: 'Event decoration',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'Philadelphia, PA',
        price: 300,
        category: { id: 3, section: 'Event Services', subSections: [{ catId: 302, category: 'Decoration' }] }
      },
      {
        id: 7,
        title: 'Delivery Service',
        description: 'Fast and reliable delivery service for your needs.',
        shortDescription: 'Fast delivery',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'San Antonio, TX',
        price: 50,
        category: { id: 4, section: 'Transportation Services', subSections: [{ catId: 401, category: 'Delivery' }] }
      },
      {
        id: 8,
        title: 'Moving Service',
        description: 'Professional moving service for your home or office.',
        shortDescription: 'Professional moving',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'San Diego, CA',
        price: 600,
        category: { id: 4, section: 'Transportation Services', subSections: [{ catId: 402, category: 'Moving' }] }
      },
      {
        id: 9,
        title: 'Nursing Service',
        description: 'Qualified nursing service for in-home care.',
        shortDescription: 'Qualified nursing',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'Dallas, TX',
        price: 400,
        category: { id: 5, section: 'Healthcare Services', subSections: [{ catId: 501, category: 'Nursing' }] }
      },
      {
        id: 10,
        title: 'Caregiving Service',
        description: 'Compassionate caregiving service for your loved ones.',
        shortDescription: 'Compassionate caregiving',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'San Jose, CA',
        price: 350,
        category: { id: 5, section: 'Healthcare Services', subSections: [{ catId: 502, category: 'Caregiving' }] }
      },
      {
        id: 11,
        title: 'Technical Support Service',
        description: 'Expert technical support for your IT needs.',
        shortDescription: 'Expert technical support',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'Austin, TX',
        price: 100,
        category: { id: 6, section: 'IT Services', subSections: [{ catId: 601, category: 'Technical Support' }] }
      },
      {
        id: 12,
        title: 'Networking Service',
        description: 'Professional networking service for your business.',
        shortDescription: 'Professional networking',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'Jacksonville, FL',
        price: 250,
        category: { id: 6, section: 'IT Services', subSections: [{ catId: 602, category: 'Networking' }] }
      },
      {
        id: 13,
        title: 'Tutoring Service',
        description: 'Experienced tutoring service for students of all ages.',
        shortDescription: 'Experienced tutoring',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'Fort Worth, TX',
        price: 50,
        category: { id: 7, section: 'Educational Services', subSections: [{ catId: 701, category: 'Tutoring' }] }
      },
      {
        id: 14,
        title: 'Training Service',
        description: 'Comprehensive training service for professional development.',
        shortDescription: 'Comprehensive training',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'Columbus, OH',
        price: 150,
        category: { id: 7, section: 'Educational Services', subSections: [{ catId: 702, category: 'Training' }] }
      },
      {
        id: 15,
        title: 'Masonry Service',
        description: 'High-quality masonry service for construction projects.',
        shortDescription: 'High-quality masonry',
        images: [
          { id: 1, urls: this.placeholderUrl },
          { id: 2, urls: this.placeholderUrl },
          { id: 3, urls: this.placeholderUrl },
          { id: 4, urls: this.placeholderUrl }
        ],
        location: 'Charlotte, NC',
        price: 700,
        category: { id: 8, section: 'Construction Services', subSections: [{ catId: 801, category: 'Masonry' }] }
      }
    ]
  };




  postsToDisplay(){

    let displayPostsList:Array<PostModal> = [];

    if (this.categoriesService.selectedCategoriesList.length === 0) {
      console.log("============")
      return  this.postsList.postList; // Return all posts if no categories are selected
    }

    displayPostsList = this.postsList.postList.filter(post => {
      return this.categoriesService.selectedCategoriesList.some(selectedCategory => {
        return (post.category.id === selectedCategory.mainId &&
          post.category.subSections.some(sub => sub.catId === selectedCategory.subId));
      });
    });

    console.log(displayPostsList)

    return displayPostsList;
  }

  ngOnInit() {
    this.postsToDisplay()
  }
}
