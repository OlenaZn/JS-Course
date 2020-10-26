import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from './side-nav/side-nav.component';
import {AvatarComponent} from './avatar/avatar.component';
import {EducationComponent} from './education/education.component';
import {ExperienceComponent} from './experience/experience.component';
import {ContactsComponent} from './contacts/contacts.component';
import {FeedbacksComponent} from './feedbacks/feedbacks.component';
import {SkillsComponent} from './skills/skills.component';
import {ModalComponent} from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [SideNavComponent, AvatarComponent, EducationComponent, ExperienceComponent, ContactsComponent, FeedbacksComponent, SkillsComponent, ModalComponent],
  imports: [
    CommonModule, MatDialogModule,BrowserAnimationsModule
  ],
  exports: [SideNavComponent, AvatarComponent, EducationComponent, ExperienceComponent, ContactsComponent, FeedbacksComponent, SkillsComponent]
})
export class SharedModule {
}
