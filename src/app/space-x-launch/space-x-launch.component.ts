import { Component, OnInit } from '@angular/core';
import { spacexService } from './spaceX.service';
import { SpaceXDeatailsModel } from './output.model';
import { core } from '@angular/compiler';
import { Cores } from './cores.model';

@Component({
  selector: 'app-space-x-launch',
  templateUrl: './space-x-launch.component.html',
  styleUrls: ['./space-x-launch.component.css']
})
export class SpaceXLaunchComponent implements OnInit {

yearList : string[] = ["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"]
successfulLaunchList : string[] = ["True","False"];
launchDetailsList : SpaceXDeatailsModel[] =[];
land_success : boolean;
launchyear : string ="";
launchsuccess : string ="";
landsuccess : string ="";
nullCheck : boolean = false;

  constructor(private service : spacexService) { }

  ngOnInit(): void {

    this.getAllLaunchDetails()
  }

  getAllLaunchDetails(){
    this.service.getAllLaunchDetails("100").subscribe(
      res =>{
        this.nullCheck=false;

        if(res.length === 0){
          this.listNullCheck();
        }
        if(res !== null){

        for(let val of res){
          const launchDetails = new SpaceXDeatailsModel;
          launchDetails.mission_name = val.mission_name;
          launchDetails.flight_number = val.flight_number;
          launchDetails.launch_success = val.launch_success;
          launchDetails.links.mission_patch = val.links.mission_patch;
          launchDetails.launch_year = val.launch_year;
          for(let a of val.mission_id){
            launchDetails.mission_id.push(a);
          }
          launchDetails.land_success=val.rocket.first_stage.cores[0].land_success
          this.launchDetailsList.push(launchDetails);
        }
      }

      },error =>{
      }
    )
  }

  getLaunchSuccessDetails(launch_sucess_filter : string){
    this.service.getAllLaunch_SuccessDetails("100",launch_sucess_filter).subscribe(
      res =>{
        this.nullCheck=false;
        if(res.length === 0){
          this.listNullCheck();
        }
        this.launchDetailsList=[];
        if(res !== null){
        for(let val of res){
          const launchDetails = new SpaceXDeatailsModel;
          launchDetails.mission_name = val.mission_name;
          launchDetails.flight_number = val.flight_number;
          launchDetails.launch_success = val.launch_success;
          launchDetails.links.mission_patch = val.links.mission_patch;
          launchDetails.launch_year = val.launch_year;
          launchDetails.mission_id = val.mission_id;
          launchDetails.land_success=val.rocket.first_stage.cores[0].land_success
          this.launchDetailsList.push(launchDetails);

        }
        }

      },error =>{
      }
    )
  }

  getLandSuccessDetails(land_sucess_filter : string){
    this.service.getAllLand_SuccessDetails("100",land_sucess_filter).subscribe(
      res =>{
        this.nullCheck=false;
        if(res.length === 0){
          this.listNullCheck();
        }
        this.launchDetailsList=[];
        if(res !== null){
        for(let val of res){
          const launchDetails = new SpaceXDeatailsModel;
          launchDetails.mission_name = val.mission_name;
          launchDetails.flight_number = val.flight_number;
          launchDetails.launch_success = val.launch_success;
          launchDetails.links.mission_patch = val.links.mission_patch;
          launchDetails.launch_year = val.launch_year;
          launchDetails.mission_id = val.mission_id;
          launchDetails.land_success=val.rocket.first_stage.cores[0].land_success
          this.launchDetailsList.push(launchDetails);

        }
      }

      },error =>{
      }
    )
  }

  getLaunchyearDetails(launchyer_filter : string){
    this.service.getAllLaunch_yearDetails("100",launchyer_filter).subscribe(
      res =>{
        this.nullCheck=false;
        this.launchDetailsList=[];
        if(res.length === 0){
          this.listNullCheck();
        }
        if(res !== null){
        for(let val of res){
          const launchDetails = new SpaceXDeatailsModel;
          launchDetails.mission_name = val.mission_name;
          launchDetails.flight_number = val.flight_number;
          launchDetails.launch_success = val.launch_success;
          launchDetails.links.mission_patch = val.links.mission_patch;
          launchDetails.launch_year = val.launch_year;
          launchDetails.mission_id = val.mission_id;
          launchDetails.land_success=val.rocket.first_stage.cores[0].land_success
          this.launchDetailsList.push(launchDetails);

        }
      }

      },error =>{
      }
    )
  }

  

  getAllFilters(launch_sucess_filter : string,land_success_filter : string,launch_year_filter : string){
    this.service.getAllFilters("100",launch_sucess_filter,land_success_filter,launch_year_filter).subscribe(
      res =>{
        this.nullCheck=false;
        this.launchDetailsList=[];

        if(res.length === 0){
          this.listNullCheck();
        }
        if(res !== null){
          for(let val of res){
            const launchDetails = new SpaceXDeatailsModel;
            launchDetails.mission_name = val.mission_name;
            launchDetails.flight_number = val.flight_number;
            launchDetails.launch_success = val.launch_success;
            launchDetails.links.mission_patch = val.links.mission_patch;
            launchDetails.launch_year = val.launch_year;
            launchDetails.mission_id = val.mission_id;
            launchDetails.land_success=val.rocket.first_stage.cores[0].land_success
            this.launchDetailsList.push(launchDetails);

          }
        }
        

      },error =>{
      }
    )
  }


  getLaunchAndLandFilter(launch_sucess_filter : string,land_success_filter : string){
    this.service.getLaunchAndLandFilter("100",launch_sucess_filter,land_success_filter).subscribe(
      res =>{
        this.nullCheck=false;
        this.launchDetailsList=[];
        if(res.length === 0){
          this.listNullCheck();
        }
        if(res !== null){
        for(let val of res){
          const launchDetails = new SpaceXDeatailsModel;
          launchDetails.mission_name = val.mission_name;
          launchDetails.flight_number = val.flight_number;
          launchDetails.launch_success = val.launch_success;
          launchDetails.links.mission_patch = val.links.mission_patch;
          launchDetails.launch_year = val.launch_year;
          launchDetails.mission_id = val.mission_id;
          launchDetails.land_success=val.rocket.first_stage.cores[0].land_success
          this.launchDetailsList.push(launchDetails);

        }
      }
      },error =>{
      }
    )
  }

  getLaunchAndyearFilter(launch_sucess_filter : string,launch_year_filter : string){
    this.service.getLaunchAndyearFilter("100",launch_sucess_filter,launch_year_filter).subscribe(
      res =>{
        this.nullCheck=false;
        this.launchDetailsList=[];
        if(res.length === 0){
          this.listNullCheck();
        }
        if(res !== null){
        for(let val of res){
          const launchDetails = new SpaceXDeatailsModel;
          launchDetails.mission_name = val.mission_name;
          launchDetails.flight_number = val.flight_number;
          launchDetails.launch_success = val.launch_success;
          launchDetails.links.mission_patch = val.links.mission_patch;
          launchDetails.launch_year = val.launch_year;
          launchDetails.mission_id = val.mission_id;
          launchDetails.land_success=val.rocket.first_stage.cores[0].land_success
          this.launchDetailsList.push(launchDetails);

        }
      }

      },error =>{
      }
    )
  }

  getyearAndLandFilter(launch_year_filter : string,land_success_filter : string){
    this.service.getyearAndLandFilter("100",launch_year_filter,land_success_filter).subscribe(
      res =>{
        this.nullCheck=false;
        if(res.length === 0){
          this.listNullCheck();
        }
        this.launchDetailsList=[];
        if(res !== null){
        for(let val of res){
          const launchDetails = new SpaceXDeatailsModel;
          launchDetails.mission_name = val.mission_name;
          launchDetails.flight_number = val.flight_number;
          launchDetails.launch_success = val.launch_success;
          launchDetails.links.mission_patch = val.links.mission_patch;
          launchDetails.launch_year = val.launch_year;
          launchDetails.mission_id = val.mission_id;
          launchDetails.land_success=val.rocket.first_stage.cores[0].land_success
          this.launchDetailsList.push(launchDetails);

        }
      }
      },error =>{
      }
    )
  }

  LaunchYearFilter(val : string){
    this.launchyear=val
    for(let a of this.yearList){
          document.getElementById(a).classList.remove('active')

    }
    document.getElementById(val).classList.add('active')

    if(this.launchyear!=="" && this.landsuccess !== "" && this.launchsuccess !== ""){
      this.getAllFilters(this.launchsuccess,this.landsuccess,this.launchyear);

    }
    else if(this.launchsuccess=== "" && this.landsuccess !== "" && this.launchyear !== ""){
      this.getyearAndLandFilter(this.launchyear,this.landsuccess);

    }

    else if(this.landsuccess === "" && this.launchsuccess !== "" && this.launchyear !== ""){
      this.getLaunchAndyearFilter(this.launchsuccess,this.launchyear);
    }
      else if(this.landsuccess === "" && this.launchsuccess === "" && this.launchyear !== ""){
        this.getLaunchyearDetails(this.launchyear);
      }
  }

  SucessfullLaunch(val: string){
    if(val === "True"){
      this.launchsuccess = "true"
    }
    else if(val === "False"){
      this.launchsuccess = "false"
    }
    
    for(let a of this.successfulLaunchList){
          document.getElementById(a).classList.remove('active')
    }

    document.getElementById(val).classList.add('active');

    if(this.launchyear!=="" && this.landsuccess !=="" && this.launchsuccess !==""){
      this.getAllFilters(this.launchsuccess,this.landsuccess,this.launchyear);
    }


    else if(this.landsuccess!=="" && this.landsuccess !=="" && this.launchyear ===""){
      this.getLaunchAndLandFilter(this.launchsuccess,this.landsuccess);
  }


    else if(this.landsuccess === "" && this.launchsuccess !== "" && this.launchyear === ""){
      this.getLaunchSuccessDetails(this.launchsuccess);

    }
      else if(this.landsuccess === "" && this.launchsuccess !== "" && this.launchyear !== ""){
        this.getLaunchAndyearFilter(this.launchsuccess,this.launchyear);
      }
  }

  SucessfullLanding(val : string){
    if(val === "True"){
      this.landsuccess = "true"
    }
    else if(val === "False"){
      this.landsuccess = "false"
    }
    
    for(let a of this.successfulLaunchList){
          document.getElementById("landing" + a).classList.remove('active')

    }
    document.getElementById("landing" + val).classList.add('active');

    if(this.launchyear!=="" && this.landsuccess !== "" && this.launchsuccess !== ""){
      this.getAllFilters(this.launchsuccess,this.landsuccess,this.launchyear);

    }
    else if(this.landsuccess!== "" && this.launchsuccess !== "" && this.launchyear === ""){
      this.getLaunchAndLandFilter(this.launchsuccess,this.landsuccess);

    }

    else if(this.landsuccess !== "" && this.launchsuccess === "" && this.launchyear === ""){
      this.getLandSuccessDetails(this.landsuccess);
    }
      else if(this.landsuccess !== "" && this.launchsuccess === "" && this.launchyear !== ""){
        this.getyearAndLandFilter(this.launchyear,this.landsuccess);
      }
  }

  listNullCheck(){
    this.nullCheck=false;
    if(this.launchDetailsList === null || this.launchDetailsList.length===0){
      this.nullCheck=true;

    }
  }
} 
