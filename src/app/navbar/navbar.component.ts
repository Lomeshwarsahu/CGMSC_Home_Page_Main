import { Component } from '@angular/core';
import { AuthServiceService } from '../guards/auth-service.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor, CommonModule, NgStyle } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../service/api-service.service';
import { Base } from '../helper/base';
declare const bootstrap: any;
@Component({
    selector: 'app-navbar',
    standalone: true, // ✅ Make it a standalone component
    imports: [NgFor,CommonModule, NgStyle,NgbCollapseModule,FormsModule, RouterModule],
    // 
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isDarkMode = false;
 isEquipmentOpen = false;
  isDrugOpen = false;
  isCGMSCLOpen  = false;
  isInfrastructureOpen = false;
  isRecruitmentOpen = false;
  isTendersOpen = false;
  isGalleryOpen = false;
  isDownloadsOpen = false;
  isLOGINOpen = false;
  isDruggOpen = false;
  isEquipmenttOpen = false;
  isInfrastructureeOpen = false;
  isAdminOpen = false;
  isCareersOpen = false;
  activeNav = 'home';

  isCollapsed = false;
  // selectedColor = '#563d7c'; 
  // selectedColor = 'linear-gradient(to right, #FF6F00, #ffbf88, #2a7a2e )'; 
  // selectedColor = 'linear-gradient(1deg, rgb(18, 166, 210) 15%, rgb(49, 65, 252) 100%)'; 
  selectedColor :any; 
  // Default color [style.background]="selectedColor" style="transition: background 0.5s;"
  userName:any;
  constructor(public authService: AuthServiceService, private router: Router,private API:ApiServiceService,) {
     // Load initial color
     const storedColor = sessionStorage.getItem('selectedColor');
     if (storedColor) {
       this.selectedColor = storedColor;
     }
     var base = Base.baseUrl
  }

  ngOnInit() {
    this.selectedColor = sessionStorage.getItem('selectedColor');
    if(this.selectedColor != 'linear-gradient(1deg, rgb(18, 166, 210) 15%, rgb(49, 65, 252) 100%)'){
      document.documentElement.style.setProperty('--theme-gradient', this.selectedColor );
    }
    //  sessionStorage.setItem('selectedColor',this.selectedColor);
    // var User = JSON.parse(localStorage.getItem('currentUser') || '{}')
    this.userName = localStorage.getItem('userName');
    // var User=res.user;
    // {"user":{"userName
    // console.log(userName);
   
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  themeClass: string = 'btn-primary';  // Default theme

  // Method to change theme
  changeTheme(theme: string) {
    this.themeClass = `btn-${theme}`;
  }



  // toggleCollapse(selectedColor :any) {
  //   // debugger
  //   // console.log(selectedColor)
  //   if(selectedColor!='#563d7c'){

  //     sessionStorage.setItem('selectedColor',selectedColor);
  //   }
  //   this.isCollapsed = !this.isCollapsed;

  // }

  // selectedColor: string = '#FF6F00';
// gradientStyle: string = '';

// updateGradient() {

//   this.gradientStyle = `linear-gradient(to right, ${this.selectedColor},#ffbf88, #2E7D32)`;
// }
  toggleCollapse(color: string) {
    // debugger;
//  this.selectedColor  = `linear-gradient(to right,#FF6F00 ,#ffbf88,${color})`;

// if (color !== 'linear-gradient(1deg, rgb(18, 166, 210) 15%, rgb(49, 65, 252) 100%)') {
//       this.API.setColor(color);
//     }
    // this.isCollapsed = !this.isCollapsed;
  }

  gradients: string[] = [
    'linear-gradient(1deg, rgb(18, 166, 210) 15%, rgb(49, 65, 252) 100%)',
    'linear-gradient(180deg, #FF6000 11%, #FFA559 100%)',
    'linear-gradient(rgb(93, 18, 210) 11%, rgb(184, 49, 252) 100%)'
  ];

  setTheme(gradient: string) {
    sessionStorage.setItem('selectedColor',gradient);
    document.documentElement.style.setProperty('--theme-gradient', gradient);
    
  }

  onButtonClick(URL: any) {
    if (URL) {
      // Remove '~' from the start of the URL
      // const cleanedUrl = 'https://cgmsc.gov.in/' + URL.replace(/^~\//, '');
      // console.log('Opening:', URL);
      window.open(URL, '_blank');
    } else {
      alert(
        '⚠️ Alert: Attachment File Not Found!\n\nThe requested document is missing.\nPlease try again later or contact support.'
      );
    }
  }

  // handleLinkClick(event: MouseEvent) {
  //   event.preventDefault(); // prevent default anchor behavior
  //   const offcanvasElement = document.querySelector('.offcanvas.show');
  //   if (offcanvasElement) {
  //     const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
  //     bsOffcanvas?.hide();
  
  //     // open link after small delay
  //     setTimeout(() => {
  //       window.open("https://govthealth.cg.gov.in/hrmis/", '_blank');
  //     }, 300); // delay matches offcanvas animation time
  //   } else {
  //     window.open("https://govthealth.cg.gov.in/hrmis/", '_blank');
  //   }
  // }
  // handleLinkClick(event: MouseEvent) {
  //   event.preventDefault();
  //   const offcanvasDismissBtn = document.querySelector('[data-bs-dismiss="offcanvas"]') as HTMLElement;
  //   if (offcanvasDismissBtn) {
  //     // Click the offcanvas dismiss button programmatically
  //     offcanvasDismissBtn.click();
  //   }
  //   // Wait for the animation to complete before opening link
  //   setTimeout(() => {
  //     window.open("https://govthealth.cg.gov.in/hrmis/", '_blank');
  //   }, 300); // Bootstrap's default transition duration
  // }
  handleLinkClick(event: MouseEvent, url: string) {
    event.preventDefault();
  
    const offcanvasDismissBtn = document.querySelector('[data-bs-dismiss="offcanvas"]') as HTMLElement;
    if (offcanvasDismissBtn) {
      // Trigger Bootstrap's native dismissal
      offcanvasDismissBtn.click();
    }
  
    // Wait until offcanvas animation completes
    setTimeout(() => {
      window.open(url, '_blank');
    }, 300); // Bootstrap default transition duration
  }
  
}