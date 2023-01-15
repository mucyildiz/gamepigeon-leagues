class LeagueModel {
    constructor(obj) {
        this.teams = obj.teams;
        this.numPlayoffTeams = this.getNumPlayoffTeams(len(this.teams));
    }

    getNumPlayoffTeams = numTeams => {
        // this.numTeams can't be less than 2. 
        // I hope I remember to validate this in the frontend.
        if (numTeams < 4) {
            return 2;
        }
        else if (4 <= numTeams <= 9) {
            return 4;
        }
        else if (10 <= numTeams <= 19) {
            return 8;
        }
        return 16;
    }
}

const leagueModel = new LeagueModel({"numTeams": 3})
console.log(leagueModel);