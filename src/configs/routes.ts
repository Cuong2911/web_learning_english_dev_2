export const ROUTES = {
    home: '',
    // login
    login: 'auth/login',
    signup: 'auth/sign-up',
    // learning
    listCourses: 'learning',
    infoCourse: 'learning/:reg',
    learningCourse: 'learning/:reg/study',
    // exam
    examList: 'exam-list',
    doExam: 'do-exam/:reg',
    // quiz
    quizList: 'quiz-list',
    doQuiz: 'do-quiz/:reg',
    // sub page
    about: 'about',
    setting: 'setting',
    // auth
    authDetail: 'auth/detail/:id',
    authCourse: 'auth/course/:id',
    // admin
    admin: 'admin',
    adminUser: 'admin/user',
    adminCourse: 'admin/course',
    adminExam: 'admin/exam',
    adminQuiz: 'admin/quiz',

    notfound: '*',
};

export const PATH = {
    // login
    home: '/' + ROUTES.home,
    // learning

    login: '/' + ROUTES.login,
    signup: '/' + ROUTES.signup,
    // learning

    listCourses: '/' + ROUTES.listCourses,
    infoCourse: '/' + ROUTES.infoCourse,
    learningCourse: '/' + ROUTES.learningCourse,
    // exam

    examList: '/' + ROUTES.examList,
    doExam: '/' + ROUTES.doExam,
    // quiz

    quizList: '/' + ROUTES.quizList,
    doQuiz: '/' + ROUTES.doQuiz,
    // sub page

    about: '/' + ROUTES.about,
    setting: '/' + ROUTES.setting,
    // auth
    authDetail: '/' + ROUTES.authDetail,
    authCourse: '/' + ROUTES.authCourse,
    // admin
    admin: '/' + ROUTES.admin,
    adminUser: '/' + ROUTES.adminUser,
    adminCourse: '/' + ROUTES.adminCourse,
    adminExam: '/' + ROUTES.adminExam,
    adminQuiz: '/' + ROUTES.adminQuiz,

    notfound: '/' + ROUTES.notfound,
};
