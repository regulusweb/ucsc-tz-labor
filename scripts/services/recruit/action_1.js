var data = require('../../utils/data');

var recruit = data.store_with_code(
        'recruit',
        contact,
        {
            'workers': state.vars.num_workers,
            'days': state.vars.num_days,
            'crop': state.vars.crop,
            'type': state.vars.work_type,
            'payment': state.vars.payment,
            'acres': state.vars.acres,
            'start': state.vars.startday,
            'employer_village': contact.vars.village,
            'employer_number': from_number,
            'employer_name': contact.name,
        }
    ),
    survey = data.store_with_code(
        'survey',
        contact,
        {
            'recruit_id': recruit.id,
            'employer_number': from_number,
            'posted': moment().unix(),
        }
    );

global.$recruit_code = recruit.vars.code;
global.$survey_code = survey.vars.code;
