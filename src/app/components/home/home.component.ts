import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/otherServices/authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = ["https://ae.knownjobs.com/images/job-search.jpg?q=carousel-investments-job", "http://static.businessworld.in/article/article_extra_large_image/1624004515_QcoDky_Unemployment_1Generic.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAZycswoh2FLaBMM9zuRAB0JuIiE0MppK1PKxrrejEY5MUyPZnjFhujiuUv30vyinnDQ&usqp=CAU"];
  constructor(private authService: AuthserviceService) { }

  ngOnInit(): void {
    console.log("THE TOKEN FROM BROWSER IS ");
    console.log(this.authService.getLocalStorageToken());
  }

}
