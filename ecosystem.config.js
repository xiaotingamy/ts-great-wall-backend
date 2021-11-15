module.exports = {
  apps : [{
    name: 'GREAT_WALL_BACKEND',
    script: './bin/www',
    instances: '2',
    autorestart: true,
    watch: true,
    ignore_watch: [
      'node_modules',
      'dist/logs'
    ],
    node_args: ['--inspect=9229'],
    error_file: './dist/logs/err.log',
    out_file: './dist/logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    env_production: {
      NODE_ENV: 'production'
    },
    env_development: {
      NODE_ENV: 'development'
    },
    env_test: {
      NODE_ENV: 'test'
    }
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}
