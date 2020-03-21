const setupConfig = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return {
        base: 'http://localhost:3000/',
        endpoints: {
          login: 'users/login',
          createAccount: 'users/create'
        }
      }
    case 'production':
      return {
        base: '',
        endpoints: {
          login: '',
          createAccount: ''
        }
      }
    default:
      return {
        base: 'http://localhost:3000/',
        endpoints: {
          login: 'users/login',
          createAccount: 'users/create'
        }
      }
  }
};
export const config = setupConfig();