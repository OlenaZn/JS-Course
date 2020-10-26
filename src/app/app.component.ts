import { Component } from '@angular/core';
import {Education} from "./Education";
import {Experience} from "./Experience";
import {Contact} from "./Contact";
import {Feedback} from "./Feedback";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app';
  name = 'John Doe';
  profilePhotoSrc = 'assets/source/profile.png';
  aboutMeId = 'about-me';
  aboutMeTitle = 'About me';
  aboutMeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit\n amet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.';
  educationId = 'education';
  educationTitle = 'Education';
  experienceId = 'experience';
  experienceTitle = 'Experience';
  contactsId = 'contacts';
  contactsTitle = 'Contacts';
  feedbacksId = 'feedbacks';
  feedbacksTitle = 'Feedbacks';
  skillsId = 'skills';

  educations = [
    new Education('1990', 'Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'),
    new Education('1991', 'Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'),
    new Education('1992', 'Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'),
    new Education('1993', 'Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'),
  ];

  experiences = [
    new Experience('Google', 'Front-end developer / php programmer', '2013-2014', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'),
    new Experience('Twiter', 'Web Developer', '2012', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.')
  ];

  contacts = [
    new Contact('fa fa-phone', '500 345 242'),
    new Contact('fa fa-envelope', 'office@kamsolutions.pl'),
    new Contact('fa fa-twitter', 'Twitter'),
    new Contact('fa fa-facebook', 'Facebook'),
    new Contact('fa fa-skype', 'Skype'),
  ];

  feedbacks = [
    new Feedback('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit.', 'Martin Friman. Programmer.', 'https://www.google.com.ua/', 'somesite.com', 'assets/source/profile.png'),
    new Feedback('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit.', 'Martin Friman. Programmer.', 'https://www.google.com.ua/', 'somesite.com', 'assets/source/profile.png'),
    new Feedback('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit.', 'Martin Friman. Programmer.', 'https://www.google.com.ua/', 'somesite.com', 'assets/source/profile.png')
  ];

}
