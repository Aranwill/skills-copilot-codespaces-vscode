function skillsMember(){
    return {
        restric: 'E',
        templateUrl: 'modules/skilss/views/member.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}