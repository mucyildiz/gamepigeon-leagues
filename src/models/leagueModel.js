class LeagueModel {
    constructor(obj) {
        this.numTeams = obj.numTeams;
        this.numPlayoffTeams = this.getNumPlayoffTeams();
    }

    getNumPlayoffTeams = () => {
        // this.numTeams can't be less than 2. 
        // I hope I remember to validate this in the frontend.
        if (this.numTeams < 4) {
            return 2;
        }
        else if (4 <= this.numTeams <= 9) {
            return 4;
        }
        else if (10 <= this.numTeams <= 19) {
            return 8;
        }
        return 16;
    }
}

const leagueModel = new LeagueModel({"numTeams": 3})
console.log(leagueModel);