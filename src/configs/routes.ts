export const ROUTES = {
    home: '',
    // login
    login: 'auth/login',
    signup: 'auth/sign-up',
    // learning
    listen: 'learning/listen',
    voca: 'learning/vocabulary',
    grammar: 'learning/grammar',
    pronounce: 'learning/pronounce',
    game: 'learning/game',
    // auth
    authDetail: 'auth/detail/:id',
    authCourse: 'auth/course/:id',
    // admin
    adminUser: 'admin/user',

    notfound: '*',
};

export const PATH = {
    //
    home: '/' + ROUTES.home,
    // login
    login: '/' + ROUTES.login,
    signup: '/' + ROUTES.signup,
    // learning
    listen: '/' + ROUTES.listen,
    voca: '/' + ROUTES.voca,
    grammar: '/' + ROUTES.grammar,
    pronounce: '/' + ROUTES.pronounce,
    game: '/' + ROUTES.game,
    // auth
    authDetail: '/' + ROUTES.authDetail,
    authCourse: '/' + ROUTES.authCourse,
    // admin
    adminUser: '/' + ROUTES.adminUser,

    notfound: '/' + ROUTES.notfound,
};
