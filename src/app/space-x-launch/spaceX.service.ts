import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { SpaceXDeatailsModel } from './output.model';

@Injectable()
export class spacexService{
    constructor(private http : HttpClient){}

    getAllLaunchDetails(limit : string):Observable<SpaceXDeatailsModel[]>{
        return this.http.get<SpaceXDeatailsModel[]>("https://api.spacexdata.com/v3/launches",{params:{'limit' : limit}}).pipe(map(
            (res) => {
                return res;
            }
        ))
    }

    getAllLaunch_SuccessDetails(limit : string,launch_success : string):Observable<SpaceXDeatailsModel[]>{
        return this.http.get<SpaceXDeatailsModel[]>("https://api.spacexdata.com/v3/launches",{params:{"limit":limit,"launch_success":launch_success}}).pipe(map(
            (res) => {
                return res;
            }
        ))
    }

    getAllFilters(limit : string,launch_success:string,land_success : string,launch_year : string):Observable<SpaceXDeatailsModel[]>{
        return this.http.get<SpaceXDeatailsModel[]>("https://api.spacexdata.com/v3/launches",{params:{"limit":limit,"launch_success":launch_success,"land_success":land_success,"launch_year":launch_year}}).pipe(map(
            (res) => {
                return res;
            }
        ))
    }


    getLaunchAndLandFilter(limit : string,launch_success:string,land_success : string):Observable<SpaceXDeatailsModel[]>{
        return this.http.get<SpaceXDeatailsModel[]>("https://api.spacexdata.com/v3/launches",{params:{"limit":limit,"launch_success":launch_success,"land_success":land_success}}).pipe(map(
            (res) => {
                return res;
            }
        ))
    }

}