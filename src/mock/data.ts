import type {
  User,
  Company,
  School,
  AverageIndicatorData,
  SimpleIndicatorData,
} from 'src/interfaces/app_interfaces';

export const Users: User[] = [
  {
    id: 1,
    full_name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    user_role: 'admin',
    user_type: 'company',
    company_id: 1,
    imageUrl: 'src/assets/images/avatars/male-01.jpg',
  },
  {
    id: 2,
    full_name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password456',
    user_role: 'teacher',
    user_type: 'school',
    school_id: 2,
    imageUrl: 'src/assets/images/avatars/female-01.jpg'
    // imageUrl: '',
  },
  {
    id: 3,
    full_name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    password: 'password789',
    user_role: 'teacher',
    user_type: 'tutor',
    imageUrl: 'src/assets/images/avatars/male-02.jpg'
  },
  {
    id: 4,
    full_name: 'Emily Davis',
    email: 'emily.davis@example.com',
    password: 'password101',
    user_role: 'admin',
    user_type: 'school',
    school_id: 3,
    imageUrl: 'src/assets/images/avatars/female-02.jpg'
  },
  {
    id: 5,
    full_name: 'Daniel Brown',
    email: 'daniel.brown@example.com',
    password: 'password202',
    user_role: 'teacher',
    user_type: 'company',
    company_id: 4,
    imageUrl: 'src/assets/images/avatars/male-03.jpg'
  },
  {
    id: 6,
    full_name: 'Sophia Wilson',
    email: 'sophia.wilson@example.com',
    password: 'password303',
    user_role: 'admin',
    user_type: 'tutor',
    imageUrl: 'src/assets/images/avatars/female-03.jpg'
  },
  {
    id: 7,
    full_name: 'Ethan Taylor',
    email: 'ethan.taylor@example.com',
    password: 'password404',
    user_role: 'teacher',
    user_type: 'school',
    school_id: 5,
    imageUrl: 'src/assets/images/avatars/male-04.jpg'
  },
  {
    id: 8,
    full_name: 'Olivia Martinez',
    email: 'olivia.martinez@example.com',
    password: 'password505',
    user_role: 'admin',
    user_type: 'company',
    company_id: 6,
    imageUrl: 'src/assets/images/avatars/female-04.jpg'
  },
  {
    id: 9,
    full_name: 'Aiden White',
    email: 'aiden.white@example.com',
    password: 'password606',
    user_role: 'teacher',
    user_type: 'tutor',
    imageUrl: 'src/assets/images/avatars/male-05.jpg'
  },
  {
    id: 10,
    full_name: 'Charlotte Garcia',
    email: 'charlotte.garcia@example.com',
    password: 'password707',
    user_role: 'admin',
    user_type: 'school',
    school_id: 7,
    imageUrl: 'src/assets/images/avatars/female-05.jpg'
  },
  {
    id: 11,
    full_name: 'Lucas Thompson',
    email: 'lucas.thompson@example.com',
    password: 'password808',
    user_role: 'teacher',
    user_type: 'company',
    company_id: 8,
    imageUrl: 'src/assets/images/avatars/male-06.jpg'
  },
  {
    id: 12,
    full_name: 'Amelia Anderson',
    email: 'amelia.anderson@example.com',
    password: 'password909',
    user_role: 'admin',
    user_type: 'tutor',
    imageUrl: 'src/assets/images/avatars/female-06.jpg'
  },
  {
    id: 13,
    full_name: 'Mason Martinez',
    email: 'mason.martinez@example.com',
    password: 'password010',
    user_role: 'teacher',
    user_type: 'school',
    school_id: 9,
    imageUrl: 'src/assets/images/avatars/male-07.jpg'
  },
  {
    id: 14,
    full_name: 'Isabella Clark',
    email: 'isabella.clark@example.com',
    password: 'password111',
    user_role: 'admin',
    user_type: 'company',
    company_id: 10,
    imageUrl: 'src/assets/images/avatars/female-07.jpg'
  },
  {
    id: 15,
    full_name: 'James Rodriguez',
    email: 'james.rodriguez@example.com',
    password: 'password222',
    user_role: 'teacher',
    user_type: 'tutor',
    imageUrl: 'src/assets/images/avatars/male-08.jpg'
  }
];

export const Schools: School[] = [
  {
    id: 1,
    name: 'Global Language Academy',
    code: 'GLA001'
  },
  {
    id: 2,
    name: 'International Language Center',
    code: 'ILC002'
  },
  {
    id: 3,
    name: 'Language Masters Institute',
    code: 'LMI003'
  },
  {
    id: 4,
    name: 'World Speak Academy',
    code: 'WSA004'
  },
  {
    id: 5,
    name: 'Lingua Franca School',
    code: 'LFS005'
  },
  {
    id: 6,
    name: 'Polyglot Academy',
    code: 'PA006'
  },
  {
    id: 7,
    name: 'Babel Language School',
    code: 'BLS007'
  },
  {
    id: 8,
    name: 'Fluent Future Institute',
    code: 'FFI008'
  },
  {
    id: 9,
    name: 'Linguistic Horizons',
    code: 'LH009'
  },
  {
    id: 10,
    name: 'Verbum Language Center',
    code: 'VLC010'
  }
];

export const Companies: Company[] = [
  {
    id: 1,
    name: 'Tech Innovators',
    code: 'TI001'
  },
  {
    id: 2,
    name: 'Green Solutions',
    code: 'GS002'
  },
  {
    id: 3,
    name: 'Healthcare Heroes',
    code: 'HH003'
  },
  {
    id: 4,
    name: 'Finance Gurus',
    code: 'FG004'
  },
  {
    id: 5,
    name: 'EduExperts',
    code: 'EE005'
  },
  {
    id: 6,
    name: 'AutoMotive Masters',
    code: 'AM006'
  },
  {
    id: 7,
    name: 'RealEstate Pros',
    code: 'RP007'
  },
  {
    id: 8,
    name: 'Fashion Forward',
    code: 'FF008'
  },
  {
    id: 9,
    name: 'Foodie Haven',
    code: 'FH009'
  },
  {
    id: 10,
    name: 'Travel Advisors',
    code: 'TA010'
  }
];


export const schoolOverviewAverageIndicatorData: Record<string, AverageIndicatorData> = {
  'ave-cefr': {
    title: 'Ave CEFR',
    value: 'B2',
    additionalText: 'B2 Students',
    additionalValue: 322,
  },
  'ave-fluency': {
    title: 'Ave Fluency',
    value: 87,
    unit: '%',
    additionalText: '87% Fluency Students',
    additionalValue: 276,
  },
  'ave-time-spent':{
    title: 'Ave Time Spent',
    value: 1.2,
    unit: 'hours',
    additionalText: 'This week',
    additionalValue: 0.5,
    additionalUnit: 'hours',
  },
  'ave-streak': {
    title: 'Ave Streak',
    value: 3,
    unit: 'days',
    additionalText: 'This week',
    additionalValue: 1,
    additionalUnit: 'days',
  },
};

export const schoolFollowUpData = {
  today: [
    {
      name: 'Pablo Batista',
      description: '~P3T3 8:00AM ~Andres Gonzales 11:00AM ~Pablo Batista 11:15AM',
    },
    {
      name: 'Andres Castro',
      description: '~P3T3 9:00AM',
    },
    {
      name: 'Carolina Betancur',
      description: '~P3T3 9:15AM',
    },
  ],
  week: [
    {
      name: 'Miguel Hernandez',
      description: '~P3T3 Monday 10:00AM ~Carlos Perez Tuesday 11:00AM',
    },
    {
      name: 'Ana Lucia',
      description: '~P3T3 Wednesday 9:30AM',
    },
    {
      name: 'Jorge Martinez',
      description: '~P3T3 Thursday 2:00PM ~Sofia Lopez Thursday 3:00PM',
    },
    {
      name: 'Sandra Ruiz',
      description: '~P3T3 Friday 11:45AM',
    },
  ],
};

export const schoolGradeAverageIndicatorData: Record<string, AverageIndicatorData> = {
  'ave-cefr': {
    title: 'Ave CEFR',
    value: 'B2',
    additionalText: 'B2 Students',
    additionalValue: 322,
  },
  'ave-fluency': {
    title: 'Ave Fluency',
    value: 87,
    unit: '%',
    additionalText: '87% Fluency Students',
    additionalValue: 276,
  },
  'ave-time-spent':{
    title: 'Ave Time Spent',
    value: 1.2,
    unit: 'hours',
    additionalText: 'This week',
    additionalValue: 0.5,
    additionalUnit: 'hours',
  },
  'ave-streak': {
    title: 'Ave Streak',
    value: 3,
    unit: 'days',
    additionalText: 'This week',
    additionalValue: 1,
    additionalUnit: 'days',
  },
};

export const schoolOverviewSimpleIndicatorsData: Record<string, SimpleIndicatorData> = {
  'top-10':             { title: 'Top 10%',       value: 214 },
  'bottom-30':          { title: 'Bottom 30%',    value: 75 },
  'fluency-87%-over':   { title: 'Fluency 87%+',  value: 4 },
  'fluency-92%-over':   { title: 'Fluency 92%+',  value: 3 },
  'fluency-77%-below':  { title: 'Fluency 77%-',  value: 8 },
  'fluency-57%-below':  { title: 'Fluency 57%-',  value: 6 },
};

export const schoolGradeSimpleIndicatorsData: Record<string, SimpleIndicatorData> = {
  'top-10':             { title: 'Top 10%',       value: 220 },
  'bottom-30':          { title: 'Bottom 30%',    value: 80 },
  'fluency-87%-over':   { title: 'Fluency 87%+',  value: 5 },
  'fluency-92%-over':   { title: 'Fluency 92%+',  value: 4 },
  'fluency-77%-below':  { title: 'Fluency 77%-',  value: 9 },
  'fluency-57%-below':  { title: 'Fluency 57%-',  value: 7 },
};

export const schoolGradeProgressTrendLineData = {

  'weekly': {
    labels: [ 'May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2', ],
    data:   [ 20, 25, 30, 22, 18, 24, 27, 29, 31, ],
  },
  'monthly': {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ],
    data:   [ 65, 59, 80, 81, 56, 55, 40, 22, 67, 85, 17, 71, ],
  },
  'quarterly': {
    labels: [ 'Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec', ],
    data:   [ 204, 213, 198, 219, ],
  },

}

export const schoolStudentsLeaderboardData = [
  {
    id        : 1,
    student   : 'Andrés Cataño',
    cefr      : 'C1',
    fluency   : 94,
    timeSpent : 72,
    streak    : 14,
    teacher   : 'Anthony Bush',
    teacherId : 1,
  },
  {
    id        : 2,
    student   : 'Maria Garcia',
    cefr      : 'B2',
    fluency   : 88,
    timeSpent : 65,
    streak    : 10,
    teacher   : 'Sarah Johnson',
    teacherId : 2,
  },
  {
    id        : 3,
    student   : 'John Doe',
    cefr      : 'B1',
    fluency   : 76,
    timeSpent : 50,
    streak    : 7,
    teacher   : 'Michael Lee',
    teacherId : 3,
  },
  {
    id        : 4,
    student   : 'Jane Smith',
    cefr      : 'A2',
    fluency   : 65,
    timeSpent : 40,
    streak    : 5,
    teacher   : 'Emma Brown',
    teacherId : 4,
  },
  {
    id        : 5,
    student   : 'Pedro Alvarez',
    cefr      : 'C2',
    fluency   : 98,
    timeSpent : 80,
    streak    : 20,
    teacher   : 'David Wilson',
    teacherId : 5,
  },
  {
    id        : 6,
    student   : 'Sophia Martinez',
    cefr      : 'A1',
    fluency   : 55,
    timeSpent : 35,
    streak    : 4,
    teacher   : 'Elizabeth Taylor',
    teacherId : 6,
  },
  {
    id        : 7,
    student   : 'Liam Johnson',
    cefr      : 'B1',
    fluency   : 74,
    timeSpent : 52,
    streak    : 8,
    teacher   : 'Michael Lee',
    teacherId : 3,
  },
  {
    id        : 8,
    student   : 'Olivia Brown',
    cefr      : 'C2',
    fluency   : 97,
    timeSpent : 78,
    streak    : 18,
    teacher   : 'Emily Davis',
    teacherId : 7,
  },
  {
    id        : 9,
    student   : 'Noah Williams',
    cefr      : 'B2',
    fluency   : 85,
    timeSpent : 60,
    streak    : 12,
    teacher   : 'Christopher Moore',
    teacherId : 8,
  },
  {
    id        : 10,
    student   : 'Ava Jones',
    cefr      : 'C1',
    fluency   : 91,
    timeSpent : 70,
    streak    : 16,
    teacher   : 'Daniel Taylor',
    teacherId : 9,
  },
  {
    id        : 11,
    student   : 'Isabella Garcia',
    cefr      : 'A2',
    fluency   : 62,
    timeSpent : 42,
    streak    : 6,
    teacher   : 'Anthony Bush',
    teacherId : 1,
  },
  {
    id        : 12,
    student   : 'Ethan Thomas',
    cefr      : 'B2',
    fluency   : 83,
    timeSpent : 58,
    streak    : 9,
    teacher   : 'Sarah Johnson',
    teacherId : 2,
  },
  {
    id        : 13,
    student   : 'Mia White',
    cefr      : 'C1',
    fluency   : 90,
    timeSpent : 68,
    streak    : 13,
    teacher   : 'David Wilson',
    teacherId : 5,
  },
  {
    id        : 14,
    student   : 'Lucas Harris',
    cefr      : 'B1',
    fluency   : 78,
    timeSpent : 55,
    streak    : 11,
    teacher   : 'Elizabeth Taylor',
    teacherId : 6,
  },
  {
    id        : 15,
    student   : 'Amelia Martin',
    cefr      : 'A2',
    fluency   : 60,
    timeSpent : 38,
    streak    : 6,
    teacher   : 'Emily Davis',
    teacherId : 7,
  },
];

export const teacherSummaryData = [
  {
    id: '1',
    name: 'Anthony Bush',
    imageSrc: 'src/assets/images/avatars/male-20.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [23, 28, 33, 26, 21, 27, 30, 32, 35],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [68, 63, 85, 89, 73, 71, 59, 42, 77, 92, 29, 79],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [216, 233, 207, 239],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [23, 28, 33, 26, 21, 27, 30, 32, 35],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [68, 63, 85, 89, 73, 71, 59, 42, 77, 92, 29, 79],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [216, 233, 207, 239],
      },
    },
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    imageSrc: 'src/assets/images/avatars/female-20.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [20, 25, 30, 24, 19, 25, 28, 30, 33],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [70, 65, 87, 91, 75, 73, 61, 44, 79, 94, 31, 81],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [220, 237, 211, 243],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [22, 27, 32, 25, 20, 26, 29, 31, 34],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [72, 67, 89, 93, 77, 75, 63, 46, 81, 96, 33, 83],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [224, 241, 215, 247],
      },
    },
  },
  {
    id: '3',
    name: 'Michael Lee',
    imageSrc: 'src/assets/images/avatars/male-19.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [21, 26, 31, 24, 18, 24, 27, 29, 32],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [69, 64, 86, 90, 74, 72, 60, 43, 78, 93, 30, 80],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [217, 234, 208, 240],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [24, 29, 34, 27, 22, 28, 31, 33, 36],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [73, 68, 90, 94, 78, 76, 64, 47, 82, 97, 34, 84],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [225, 242, 216, 248],
      },
    },
  },
  {
    id: '4',
    name: 'Emma Brown',
    imageSrc: 'src/assets/images/avatars/female-19.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
  },
  {
    id: '5',
    name: 'David Wilson',
    imageSrc: 'src/assets/images/avatars/male-18.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [19, 24, 29, 22, 17, 23, 26, 28, 31],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [67, 62, 84, 88, 72, 70, 58, 41, 76, 91, 28, 78],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [215, 232, 206, 238],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [25, 30, 35, 28, 23, 29, 32, 34, 37],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [74, 69, 91, 95, 79, 77, 65, 48, 83, 98, 35, 85],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [226, 243, 217, 249],
      },
    },
  },
  {
    id: '6',
    name: 'Elizabeth Taylor',
    imageSrc: 'src/assets/images/avatars/female-18.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [22, 27, 32, 25, 20, 26, 29, 31, 34],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [71, 66, 88, 92, 76, 74, 62, 45, 80, 95, 32, 82],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [221, 238, 212, 244],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [21, 26, 31, 24, 19, 25, 28, 30, 33],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [70, 65, 87, 91, 75, 73, 61, 44, 79, 94, 31, 81],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [220, 237, 211, 243],
      },
    },
  },
  {
    id: '7',
    name: 'Emily Davis',
    imageSrc: 'src/assets/images/avatars/female-17.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [23, 28, 33, 26, 21, 27, 30, 32, 35],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [68, 63, 85, 89, 73, 71, 59, 42, 77, 92, 29, 79],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [216, 233, 207, 239],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [22, 27, 32, 25, 20, 26, 29, 31, 34],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [67, 62, 84, 88, 72, 70, 58, 41, 76, 91, 28, 78],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [215, 232, 206, 238],
      },
    },
  },
  {
    id: '8',
    name: 'Christopher Moore',
    imageSrc: 'src/assets/images/avatars/male-17.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [24, 29, 34, 27, 22, 28, 31, 33, 36],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [69, 64, 86, 90, 74, 72, 60, 43, 78, 93, 30, 80],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [217, 234, 208, 240],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [25, 30, 35, 28, 23, 29, 32, 34, 37],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [74, 69, 91, 95, 79, 77, 65, 48, 83, 98, 35, 85],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [226, 243, 217, 249],
      },
    },
  },

  {
    id: '9',
    name: 'Daniel Taylor',
    imageSrc: 'src/assets/images/avatars/male-16.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [17, 22, 27, 20, 15, 21, 24, 26, 29],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [64, 59, 81, 85, 69, 67, 55, 38, 73, 88, 25, 75],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [212, 229, 203, 235],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [27, 32, 37, 30, 25, 31, 34, 36, 39],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [76, 71, 93, 97, 81, 79, 67, 50, 85, 100, 37, 87],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [228, 245, 219, 251],
      },
    },
  },

];


export const studentSummaryData = [
  {
    id: '1',
    imageSrc: 'src/assets/images/avatars/male-01.jpg',
    name: 'Andrés Cataño',
    teacher: 'Anthony Bush',
    grade: '11 C',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [23, 28, 33, 26, 21, 27, 30, 32, 35],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [68, 63, 85, 89, 73, 71, 59, 42, 77, 92, 29, 79],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [216, 233, 207, 239],
      },
    },
  },
  {
    id: '2',
    imageSrc: 'src/assets/images/avatars/female-01.jpg',
    name: 'Maria Garcia',
    teacher: 'Sarah Johnson',
    grade: '10 A',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 88,
        unit: '%',
        additionalText: '88% Fluency Students',
        additionalValue: 280,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.5,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.8,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 4,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 2,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [25, 30, 35, 28, 24, 29, 32, 34, 37],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [72, 67, 89, 93, 77, 75, 63, 46, 81, 96, 33, 83],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [230, 247, 221, 253],
      },
    },
  },
  {
    id: '3',
    imageSrc: 'src/assets/images/avatars/male-02.jpg',
    name: 'John Doe',
    teacher: 'Michael Lee',
    grade: '9 B',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B1',
        additionalText: 'B1 Students',
        additionalValue: 312,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 80,
        unit: '%',
        additionalText: '80% Fluency Students',
        additionalValue: 260,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.3,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.6,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3.5,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1.5,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [20, 25, 30, 23, 19, 24, 27, 29, 32],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [65, 59, 80, 81, 56, 55, 40, 22, 67, 85, 17, 71],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [204, 213, 198, 219],
      },
    },
  },
  {
    id: '4',
    imageSrc: 'src/assets/images/avatars/female-02.jpg',
    name: 'Jane Smith',
    teacher: 'Emma Brown',
    grade: '10 A',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'A2',
        additionalText: 'A2 Students',
        additionalValue: 290,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 75,
        unit: '%',
        additionalText: '75% Fluency Students',
        additionalValue: 240,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.4,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.7,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3.2,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1.2,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [18, 23, 28, 21, 17, 22, 25, 27, 30],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [56, 50, 71, 75, 49, 47, 32, 14, 59, 77, 9, 53],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [173, 182, 167, 189],
      },
    },
  },
  {
    id: '5',
    imageSrc: 'src/assets/images/avatars/male-03.jpg',
    name: 'Pedro Alvarez',
    teacher: 'David Wilson',
    grade: '12 B',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'C2',
        additionalText: 'C2 Students',
        additionalValue: 350,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 90,
        unit: '%',
        additionalText: '90% Fluency Students',
        additionalValue: 310,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.8,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 1.0,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 4,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 2,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [30, 35, 40, 33, 29, 34, 37, 39, 42],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [87, 81, 102, 103, 78, 76, 61, 43, 88, 106, 39, 93],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [270, 287, 261, 293],
      },
    },
  },
  {
    id: '6',
    imageSrc: 'src/assets/images/avatars/female-03.jpg',
    name: 'Sophia Martinez',
    teacher: 'Elizabeth Taylor',
    grade: '9 A',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'A1',
        additionalText: 'A1 Students',
        additionalValue: 280,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 65,
        unit: '%',
        additionalText: '65% Fluency Students',
        additionalValue: 230,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.1,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.4,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 2.5,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [15, 20, 25, 18, 14, 19, 22, 24, 27],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [42, 36, 57, 58, 33, 31, 16, 8, 53, 71, 3, 47],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [126, 135, 120, 142],
      },
    },
  },
  {
    id: '7',
    imageSrc: 'src/assets/images/avatars/male-04.jpg',
    name: 'Liam Johnson',
    teacher: 'Michael Lee',
    grade: '10 B',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B1',
        additionalText: 'B1 Students',
        additionalValue: 312,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 79,
        unit: '%',
        additionalText: '79% Fluency Students',
        additionalValue: 260,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.4,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.7,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [19, 24, 29, 22, 18, 23, 26, 28, 31],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [58, 52, 73, 74, 49, 47, 32, 14, 59, 77, 9, 53],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [173, 182, 167, 189],
      },
    },
  },
  {
    id: '8',
    imageSrc: 'src/assets/images/avatars/female-04.jpg',
    name: 'Olivia Brown',
    teacher: 'Emily Davis',
    grade: '12 C',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'C2',
        additionalText: 'C2 Students',
        additionalValue: 350,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 92,
        unit: '%',
        additionalText: '92% Fluency Students',
        additionalValue: 320,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.9,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 1.1,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 4.2,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 2.2,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [32, 37, 42, 35, 31, 36, 39, 41, 44],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [97, 91, 112, 113, 88, 86, 71, 53, 98, 116, 49, 103],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [300, 317, 291, 323],
      },
    },
  },
  {
    id: '9',
    imageSrc: 'src/assets/images/avatars/male-05.jpg',
    name: 'Noah Williams',
    teacher: 'Christopher Moore',
    grade: '11 A',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 86,
        unit: '%',
        additionalText: '86% Fluency Students',
        additionalValue: 272,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.7,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.9,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3.8,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1.8,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [28, 33, 38, 31, 27, 32, 35, 37, 40],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [83, 77, 98, 99, 74, 72, 57, 39, 84, 102, 45, 89],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [254, 271, 245, 277],
      },
    },
  },
  {
    id: '10',
    imageSrc: 'src/assets/images/avatars/female-05.jpg',
    name: 'Ava Jones',
    teacher: 'Daniel Taylor',
    grade: '11 B',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'C1',
        additionalText: 'C1 Students',
        additionalValue: 340,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 89,
        unit: '%',
        additionalText: '89% Fluency Students',
        additionalValue: 300,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.6,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.8,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3.5,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1.5,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [26, 31, 36, 29, 25, 30, 33, 35, 38],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [77, 71, 92, 93, 68, 66, 51, 33, 78, 96, 29, 83],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [236, 253, 227, 259],
      },
    },
  },
  {
    id: '11',
    imageSrc: 'src/assets/images/avatars/female-06.jpg',
    name: 'Isabella Garcia',
    teacher: 'Anthony Bush',
    grade: '9 C',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'A2',
        additionalText: 'A2 Students',
        additionalValue: 290,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 71,
        unit: '%',
        additionalText: '71% Fluency Students',
        additionalValue: 240,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 2.8,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 0.8,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [13, 18, 23, 16, 12, 17, 20, 22, 25],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [36, 30, 51, 52, 27, 25, 10, 2, 47, 65, 0, 33],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [108, 117, 102, 124],
      },
    },
  },
  {
    id: '12',
    imageSrc: 'src/assets/images/avatars/male-06.jpg',
    name: 'Ethan Thomas',
    teacher: 'Sarah Johnson',
    grade: '10 C',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 83,
        unit: '%',
        additionalText: '83% Fluency Students',
        additionalValue: 268,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.5,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.8,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3.2,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1.2,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [25, 30, 35, 28, 24, 29, 32, 34, 37],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [72, 67, 89, 93, 77, 75, 63, 46, 81, 96, 33, 83],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [218, 235, 209, 241],
      },
    },
  },
  {
    id: '13',
    imageSrc: 'src/assets/images/avatars/female-07.jpg',
    name: 'Mia White',
    teacher: 'David Wilson',
    grade: '12 A',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'C1',
        additionalText: 'C1 Students',
        additionalValue: 340,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 88,
        unit: '%',
        additionalText: '88% Fluency Students',
        additionalValue: 290,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.7,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.9,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3.7,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1.7,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [27, 32, 37, 30, 26, 31, 34, 36, 39],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [82, 76, 97, 98, 73, 71, 56, 38, 83, 101, 44, 88],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [249, 266, 240, 272],
      },
    },
  },
  {
    id: '14',
    imageSrc: 'src/assets/images/avatars/male-07.jpg',
    name: 'Lucas Harris',
    teacher: 'Elizabeth Taylor',
    grade: '11 A',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 85,
        unit: '%',
        additionalText: '85% Fluency Students',
        additionalValue: 278,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.6,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.8,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3.4,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1.4,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [27, 32, 37, 30, 26, 31, 34, 36, 39],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [82, 76, 97, 98, 73, 71, 56, 38, 83, 101, 44, 88],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [249, 266, 240, 272],
      },
    },
  },
  {
    id: '15',
    imageSrc: 'src/assets/images/avatars/female-08.jpg',
    name: 'Amelia Martin',
    teacher: 'Emily Davis',
    grade: '11 A',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 85,
        unit: '%',
        additionalText: '85% Fluency Students',
        additionalValue: 278,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.6,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.8,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3.4,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1.4,
        additionalUnit: 'days',
      },
    },
    progressTrendLineData: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [27, 32, 37, 30, 26, 31, 34, 36, 39],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [82, 76, 97, 98, 73, 71, 56, 38, 83, 101, 44, 88],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [249, 266, 240, 272],
      },
    },
  }

];


export const schoolTeamMembersList = [
  {
    id    : '2bfa2be5-7688-48d5-b5ac-dc0d9ac97f14',
    avatar: 'src/assets/images/avatars/female-10.jpg',
    name  : 'Nadia Mcknight',
    email : 'nadiamcknight@mail.com',
    phone : '+1-943-511-2203',
    title : 'Client Relations Manager'
  },
  {
    id    : '77a4383b-b5a5-4943-bc46-04c3431d1566',
    avatar: 'src/assets/images/avatars/male-19.jpg',
    name  : 'Best Blackburn',
    email : 'blackburn.best@beadzza.me',
    phone : '+1-814-498-3701',
    title : 'Educational Quality Control Manager'
  },
  {
    id    : '8bb0f597-673a-47ca-8c77-2f83219cb9af',
    avatar: 'src/assets/images/avatars/male-14.jpg',
    name  : 'Duncan Carver',
    email : 'duncancarver@mail.info',
    phone : '+1-968-547-2111',
    title : 'Linguist'
  },
  {
    id    : 'c318e31f-1d74-49c5-8dae-2bc5805e2fdb',
    avatar: 'src/assets/images/avatars/male-01.jpg',
    name  : 'Martin Richards',
    email : 'martinrichards@mail.biz',
    phone : '+1-902-500-2668',
    title : 'English Teacher'
  },
  {
    id    : '0a8bc517-631a-4a93-aacc-000fa2e8294c',
    avatar: 'src/assets/images/avatars/female-20.jpg',
    name  : 'Candice Munoz',
    email : 'candicemunoz@mail.co.uk',
    phone : '+1-838-562-2769',
    title : 'Lead Designer'
  },
  {
    id    : 'a4c9945a-757b-40b0-8942-d20e0543cabd',
    avatar: 'src/assets/images/avatars/female-01.jpg',
    name  : 'Vickie Mosley',
    email : 'vickiemosley@mail.net',
    phone : '+1-939-555-3054',
    title : 'Designer'
  },
  {
    id    : 'b8258ccf-48b5-46a2-9c95-e0bd7580c645',
    avatar: 'src/assets/images/avatars/female-02.jpg',
    name  : 'Tina Harris',
    email : 'tinaharris@mail.ca',
    phone : '+1-933-464-2431',
    title : 'Designer'
  },
  {
    id    : 'f004ea79-98fc-436c-9ba5-6cfe32fe583d',
    avatar: 'src/assets/images/avatars/male-02.jpg',
    name  : 'Holt Manning',
    email : 'holtmanning@mail.org',
    phone : '+1-822-531-2600',
    title : 'Marketing Manager'
  },
  {
    id    : '8b69fe2d-d7cc-4a3d-983d-559173e37d37',
    avatar: 'src/assets/images/avatars/female-03.jpg',
    name  : 'Misty Ramsey',
    email : 'mistyramsey@mail.us',
    phone : '+1-990-457-2106',
    title : 'Consultant'
  }
];


export const companyOverviewAverageIndicatorData: Record<string, AverageIndicatorData> = {
  'ave-cefr': {
    title: 'Ave CEFR',
    value: 'B1',
    additionalText: 'B1 Students',
    additionalValue: 146,
  },
  'ave-fluency': {
    title: 'Ave Fluency',
    value: 74,
    unit: '%',
    additionalText: '74% Fluency Students',
    additionalValue: 302,
  },
  'ave-time-spent':{
    title: 'Ave Time Spent',
    value: 3.5,
    unit: 'hours',
    additionalText: 'This week',
    additionalValue: 5.0,
    additionalUnit: 'hours',
  },
  'ave-streak': {
    title: 'Ave Streak',
    value: 10,
    unit: 'days',
    additionalText: 'This week',
    additionalValue: 4,
    additionalUnit: 'days',
  },
};

export const companyFollowUpData = {
  today: [
    {
      name: 'Alex Johnson',
      description: '~P3T3 8:00AM ~Maria Rodriguez 11:00AM ~Alex Johnson 11:15AM',
    },
    {
      name: 'Lucas Brown',
      description: '~P3T3 9:00AM',
    },
    {
      name: 'Emma Wilson',
      description: '~P3T3 9:15AM',
    },
  ],
  week: [
    {
      name: 'Michael Scott',
      description: '~P3T3 Monday 10:00AM ~Angela Martin Tuesday 11:00AM',
    },
    {
      name: 'Natalie Green',
      description: '~P3T3 Wednesday 9:30AM',
    },
    {
      name: 'David King',
      description: '~P3T3 Thursday 2:00PM ~Samantha Lee Thursday 3:00PM',
    },
    {
      name: 'Olivia Harris',
      description: '~P3T3 Friday 11:45AM',
    },
  ],
};

export const companyLevelAverageIndicatorData: Record<string, AverageIndicatorData> = {
  'ave-cefr': {
    title: 'Average CEFR',
    value: 'C1',
    additionalText: 'C1 Students',
    additionalValue: 350,
  },
  'ave-fluency': {
    title: 'Average Fluency',
    value: 90,
    unit: '%',
    additionalText: '90% Fluency Students',
    additionalValue: 290,
  },
  'ave-time-spent': {
    title: 'Average Time Spent',
    value: 1.5,
    unit: 'hours',
    additionalText: 'This week',
    additionalValue: 0.8,
    additionalUnit: 'hours',
  },
  'ave-streak': {
    title: 'Average Streak',
    value: 4,
    unit: 'days',
    additionalText: 'This week',
    additionalValue: 2,
    additionalUnit: 'days',
  },
};

export const companyOverviewSimpleIndicatorsData: Record<string, SimpleIndicatorData> = {
  'top-10':             { title: 'Top 10%',       value: 230 },
  'bottom-30':          { title: 'Bottom 30%',    value: 85 },
  'fluency-87%-over':   { title: 'Fluency 87%+',  value: 6 },
  'fluency-92%-over':   { title: 'Fluency 92%+',  value: 5 },
  'fluency-77%-below':  { title: 'Fluency 77%-',  value: 10 },
  'fluency-57%-below':  { title: 'Fluency 57%-',  value: 8 },
};

export const companyLevelSimpleIndicatorsData: Record<string, SimpleIndicatorData> = {
  'top-10':             { title: 'Top 10%',       value: 240 },
  'bottom-30':          { title: 'Bottom 30%',    value: 90 },
  'fluency-87%-over':   { title: 'Fluency 87%+',  value: 7 },
  'fluency-92%-over':   { title: 'Fluency 92%+',  value: 6 },
  'fluency-77%-below':  { title: 'Fluency 77%-',  value: 11 },
  'fluency-57%-below':  { title: 'Fluency 57%-',  value: 9 },
};

export const companyLevelProgressTrendLineData = {
  'weekly': {
    labels: [ 'May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2', ],
    data:   [ 22, 28, 34, 26, 20, 29, 32, 33, 35, ],
  },
  'monthly': {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ],
    data:   [ 70, 64, 85, 86, 61, 60, 45, 27, 72, 90, 22, 76, ],
  },
  'quarterly': {
    labels: [ 'Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec', ],
    data:   [ 210, 220, 205, 225, ],
  },
};


export const companyTeamMembersList = [
  {
    id    : '3d74a3e5-8128-4c9e-b4ac-ec2d9ec88d14',
    avatar: 'src/assets/images/avatars/female-12.jpg',
    name  : 'Emily Collins',
    email : 'emily.collins@mail.com',
    phone : '+1-943-521-2304',
    title : 'Client Relations Manager'
  },
  {
    id    : '57b4875d-c4a5-4983-bc96-04c4431e1637',
    avatar: 'src/assets/images/avatars/male-18.jpg',
    name  : 'James Anderson',
    email : 'james.anderson@eduquality.me',
    phone : '+1-814-478-3752',
    title : 'Educational Quality Control Manager'
  },
  {
    id    : '9cc2f627-673a-47ca-9c78-3f94219ec9bf',
    avatar: 'src/assets/images/avatars/male-17.jpg',
    name  : 'Robert Martinez',
    email : 'robert.martinez@linguist.info',
    phone : '+1-968-547-2155',
    title : 'Linguist'
  },
  {
    id    : 'd439f21e-1d74-49d5-8dab-3fc5805e3bfb',
    avatar: 'src/assets/images/avatars/male-03.jpg',
    name  : 'Michael Scott',
    email : 'michael.scott@mail.biz',
    phone : '+1-902-500-2668',
    title : 'English Teacher'
  },
  {
    id    : '1b9df427-631a-4b93-aadc-111fa3e8395d',
    avatar: 'src/assets/images/avatars/female-18.jpg',
    name  : 'Sophia Green',
    email : 'sophia.green@mail.co.uk',
    phone : '+1-838-562-2769',
    title : 'Lead Designer'
  },
  {
    id    : 'c5d1345b-757b-40c0-8943-d30e0644eacd',
    avatar: 'src/assets/images/avatars/female-02.jpg',
    name  : 'Olivia Brown',
    email : 'olivia.brown@mail.net',
    phone : '+1-939-555-3054',
    title : 'Designer'
  },
  {
    id    : 'd9329cdf-48b5-46a2-9d95-f1be7581d346',
    avatar: 'src/assets/images/avatars/female-04.jpg',
    name  : 'Isabella Davis',
    email : 'isabella.davis@mail.ca',
    phone : '+1-933-464-2431',
    title : 'Designer'
  },
  {
    id    : 'e105fa89-98fc-436c-9ba6-7dfe43fe684e',
    avatar: 'src/assets/images/avatars/male-05.jpg',
    name  : 'Liam Wilson',
    email : 'liam.wilson@mail.org',
    phone : '+1-822-531-2600',
    title : 'Marketing Manager'
  },
  {
    id    : '9b80fe3d-d7cc-4b3d-983e-669173e48e38',
    avatar: 'src/assets/images/avatars/female-06.jpg',
    name  : 'Ava Lee',
    email : 'ava.lee@mail.us',
    phone : '+1-990-457-2106',
    title : 'Consultant'
  }
];

export const companyStudentsLeaderboardData = [
  {
    id        : 1,
    student   : 'Andrés Cataño',
    cefr      : 'C1',
    fluency   : 94,
    timeSpent : 72,
    streak    : 14,
    teacher   : 'Anthony Bush',
    teacherId : 1,
  },
  {
    id        : 2,
    student   : 'Maria Garcia',
    cefr      : 'B2',
    fluency   : 88,
    timeSpent : 65,
    streak    : 10,
    teacher   : 'Sarah Johnson',
    teacherId : 2,
  },
  {
    id        : 3,
    student   : 'John Doe',
    cefr      : 'B1',
    fluency   : 76,
    timeSpent : 50,
    streak    : 7,
    teacher   : 'Michael Lee',
    teacherId : 3,
  },
  {
    id        : 4,
    student   : 'Jane Smith',
    cefr      : 'A2',
    fluency   : 65,
    timeSpent : 40,
    streak    : 5,
    teacher   : 'Emma Brown',
    teacherId : 4,
  },
  {
    id        : 5,
    student   : 'Pedro Alvarez',
    cefr      : 'C2',
    fluency   : 98,
    timeSpent : 80,
    streak    : 20,
    teacher   : 'David Wilson',
    teacherId : 5,
  },
  {
    id        : 6,
    student   : 'Sophia Martinez',
    cefr      : 'A1',
    fluency   : 55,
    timeSpent : 35,
    streak    : 4,
    teacher   : 'Elizabeth Taylor',
    teacherId : 6,
  },
  {
    id        : 7,
    student   : 'Liam Johnson',
    cefr      : 'B1',
    fluency   : 74,
    timeSpent : 52,
    streak    : 8,
    teacher   : 'Michael Lee',
    teacherId : 3,
  },
  {
    id        : 8,
    student   : 'Olivia Brown',
    cefr      : 'C2',
    fluency   : 97,
    timeSpent : 78,
    streak    : 18,
    teacher   : 'Emily Davis',
    teacherId : 7,
  },
  {
    id        : 9,
    student   : 'Noah Williams',
    cefr      : 'B2',
    fluency   : 85,
    timeSpent : 60,
    streak    : 12,
    teacher   : 'Christopher Moore',
    teacherId : 8,
  },
  {
    id        : 10,
    student   : 'Ava Jones',
    cefr      : 'C1',
    fluency   : 91,
    timeSpent : 70,
    streak    : 16,
    teacher   : 'Daniel Taylor',
    teacherId : 9,
  },
  {
    id        : 11,
    student   : 'Isabella Garcia',
    cefr      : 'A2',
    fluency   : 62,
    timeSpent : 42,
    streak    : 6,
    teacher   : 'Anthony Bush',
    teacherId : 1,
  },
  {
    id        : 12,
    student   : 'Ethan Thomas',
    cefr      : 'B2',
    fluency   : 83,
    timeSpent : 58,
    streak    : 9,
    teacher   : 'Sarah Johnson',
    teacherId : 2,
  },
  {
    id        : 13,
    student   : 'Mia White',
    cefr      : 'C1',
    fluency   : 90,
    timeSpent : 68,
    streak    : 13,
    teacher   : 'David Wilson',
    teacherId : 5,
  },
  {
    id        : 14,
    student   : 'Lucas Harris',
    cefr      : 'B1',
    fluency   : 78,
    timeSpent : 55,
    streak    : 11,
    teacher   : 'Elizabeth Taylor',
    teacherId : 6,
  },
  {
    id        : 15,
    student   : 'Amelia Martin',
    cefr      : 'A2',
    fluency   : 60,
    timeSpent : 38,
    streak    : 6,
    teacher   : 'Emily Davis',
    teacherId : 7,
  },
];









