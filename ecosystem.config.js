module.exports = {
  apps: [{
    name: 'traintracks',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-219-167-96.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/williams44t.pem',
      ref: 'origin/main',
      repo: 'https://github.com/Williams44T/traintrack.git',
      path: '/home/ubuntu/traintracks',
      'post-deploy': 'npm install && npx webpack && pm2 startOrRestart ecosystem.config.js'
    }
  }
}