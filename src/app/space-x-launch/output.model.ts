import { Cores } from './cores.model';

export class SpaceXDeatailsModel{
    flight_number : number;
    mission_name : string;
    mission_id : string[];
    launch_year : string;
    launch_success : string;
    links = new Links;
    rocket = new Rocket;
    

}

export class Links{
    mission_patch : string;
}

export class Rocket{
    first_stage = new First_Stage;
}

export class First_Stage{
    cores : Cores[];
}
